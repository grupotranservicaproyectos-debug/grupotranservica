import fs from "fs";
import path from "path";

const ASSETS_DIR = path.resolve("dist/public/assets");

function findChunk(prefix) {
  const files = fs.readdirSync(ASSETS_DIR);
  const match = files.find((f) => f.startsWith(prefix) && f.endsWith(".js"));
  if (!match) throw new Error(`Chunk not found: ${prefix}*`);
  return path.join(ASSETS_DIR, match);
}

function findMatchingBrace(code, startIdx) {
  let depth = 0;
  for (let i = startIdx; i < code.length; i++) {
    if (code[i] === "{") depth++;
    else if (code[i] === "}") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return code.length - 1;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function patchCircularDependency() {
  const reactPath = findChunk("vendor-react-");
  const miscPath = findChunk("vendor-misc-");
  const miscFilename = path.basename(miscPath);
  const reactFilename = path.basename(reactPath);

  let reactCode = fs.readFileSync(reactPath, "utf8");
  const miscCode = fs.readFileSync(miscPath, "utf8");

  const circularImport = reactCode.match(
    /import\{([^}]+)\}from"\.\/vendor-misc-[^"]+\.js"/
  );
  if (!circularImport) {
    console.log("No circular import found in vendor-react. Already patched or not needed.");
    return;
  }

  console.log(`Found circular import in vendor-react: ${circularImport[0]}`);

  const miscImportFromReact = miscCode.match(
    /import\{([^}]+)\}from"\.\/vendor-react-[^"]+\.js"/
  );

  const reactExportStatement = reactCode.match(/export\{([^}]+)\}/);
  if (!reactExportStatement) throw new Error("Cannot find export statement in vendor-react");

  const reactExports = reactExportStatement[1].split(",").map((e) => {
    const parts = e.trim().split(" as ");
    return { internal: parts[0].trim(), exported: (parts[1] || parts[0]).trim() };
  });
  console.log("vendor-react exports:", reactExports.map((e) => `${e.internal} as ${e.exported}`).join(", "));

  let bindingMap = {};
  if (miscImportFromReact) {
    const miscBindings = miscImportFromReact[1].split(",").map((b) => {
      const parts = b.trim().split(" as ");
      return { exported: parts[0].trim(), local: (parts[1] || parts[0]).trim() };
    });

    for (const mb of miscBindings) {
      const reactExp = reactExports.find((e) => e.exported === mb.exported);
      if (reactExp) {
        bindingMap[mb.local] = reactExp.internal;
      }
    }
    console.log("Binding map (vendor-misc local → vendor-react internal):", bindingMap);
  }

  const miscExportMatch = miscCode.match(/export\{([^}]+)\}/);
  if (!miscExportMatch) throw new Error("Cannot find export statement in vendor-misc");
  const miscExports = miscExportMatch[1].split(",").map((e) => {
    const parts = e.trim().split(" as ");
    return { internal: parts[0].trim(), exported: (parts[1] || parts[0]).trim() };
  });

  const neededBindings = circularImport[1].split(",").map((b) => {
    const parts = b.trim().split(" as ");
    return { exported: parts[0].trim(), local: (parts[1] || parts[0]).trim() };
  });

  console.log("Need to inline:", neededBindings);

  let extractedParts = [];

  for (const binding of neededBindings) {
    const miscExp = miscExports.find((e) => e.exported === binding.exported);
    if (!miscExp) throw new Error(`Export '${binding.exported}' not found in vendor-misc`);

    const internalName = miscExp.internal;
    console.log(`\nExtracting ${internalName} (exported as ${binding.exported}, used as ${binding.local} in vendor-react)...`);

    let extractedCode = null;

    const fnRegex = new RegExp(
      `function\\s+${escapeRegex(internalName)}\\s*\\([^)]*\\)\\s*\\{`
    );
    const fnMatch = miscCode.match(fnRegex);
    if (fnMatch) {
      const startIdx = fnMatch.index;
      const braceStart = miscCode.indexOf("{", startIdx + fnMatch[0].length - 1);
      const endIdx = findMatchingBrace(miscCode, braceStart);
      extractedCode = miscCode.substring(startIdx, endIdx + 1);
      console.log(`  Extracted function (${extractedCode.length} chars)`);
    }

    if (!extractedCode) {
      const varMatch = miscCode.match(
        new RegExp(`var\\s+${escapeRegex(internalName)}\\s*=`)
      );
      if (varMatch) {
        const startIdx = varMatch.index;
        const afterEquals = startIdx + varMatch[0].length;
        const nextChar = miscCode[afterEquals];

        if (nextChar === "{" || miscCode.substring(afterEquals).match(/^\s*\{/)) {
          const braceStart = miscCode.indexOf("{", afterEquals);
          const endIdx = findMatchingBrace(miscCode, braceStart);
          const semiIdx = miscCode.indexOf(";", endIdx);
          extractedCode = miscCode.substring(startIdx, semiIdx + 1);
        } else {
          const semiIdx = miscCode.indexOf(";", startIdx);
          extractedCode = miscCode.substring(startIdx, semiIdx + 1);

          if (extractedCode.includes(".exports")) {
            const containerMatch = extractedCode.match(
              new RegExp(`${escapeRegex(internalName)}\\s*=\\s*(\\w+)\\.exports`)
            );
            if (containerMatch) {
              const containerVar = containerMatch[1];
              const containerStart = miscCode.lastIndexOf(
                `var ${containerVar}=`,
                startIdx
              );
              if (containerStart === -1) {
                const altStart = miscCode.lastIndexOf(
                  `var ${containerVar}={exports`,
                  startIdx
                );
                if (altStart !== -1) {
                  extractedCode = miscCode.substring(altStart, semiIdx + 1);
                }
              } else {
                extractedCode = miscCode.substring(containerStart, semiIdx + 1);
              }
            }
          }
        }
        console.log(`  Extracted var (${extractedCode.length} chars)`);
      }
    }

    if (!extractedCode) {
      throw new Error(`Could not extract code for ${internalName}`);
    }

    if (binding.local !== internalName) {
      extractedCode = extractedCode.replace(
        new RegExp(`\\b${escapeRegex(internalName)}\\b`, "g"),
        binding.local
      );
    }

    for (const [miscLocal, reactInternal] of Object.entries(bindingMap)) {
      if (extractedCode.includes(miscLocal)) {
        extractedCode = extractedCode.replace(
          new RegExp(`\\b${escapeRegex(miscLocal)}\\b`, "g"),
          reactInternal
        );
        console.log(`  Remapped: ${miscLocal} → ${reactInternal}`);
      }
    }

    extractedParts.push(extractedCode);
  }

  reactCode = reactCode.replace(circularImport[0], "");

  reactCode = extractedParts.join("\n") + "\n" + reactCode;

  fs.writeFileSync(reactPath, reactCode, "utf8");
  console.log(`\nPatched ${reactFilename} (${reactCode.length} bytes)`);

  verify(reactPath, miscPath);
}

function verify(reactPath, miscPath) {
  const reactCode = fs.readFileSync(reactPath, "utf8");
  const miscCode = fs.readFileSync(miscPath, "utf8");
  const miscFilename = path.basename(miscPath);
  const reactFilename = path.basename(reactPath);

  const reactImportsMisc = reactCode.includes(`from"./${miscFilename}"`);
  const miscImportsReact = miscCode.includes(`from"./${reactFilename}"`);

  console.log("\n=== Verification ===");
  console.log(`vendor-react → vendor-misc: ${reactImportsMisc ? "YES (BAD)" : "NO (GOOD)"}`);
  console.log(`vendor-misc → vendor-react: ${miscImportsReact ? "YES (one-way, OK)" : "NO"}`);

  if (reactImportsMisc && miscImportsReact) {
    console.error("FAIL: Circular dependency still exists!");
    process.exit(1);
  }

  const exportMatch = reactCode.match(/export\{([^}]+)\}/);
  console.log(`vendor-react exports: ${exportMatch ? exportMatch[1] : "NONE"}`);

  const beforeExport = reactCode.substring(0, reactCode.indexOf("export{"));
  const miscBindingRefs = ["Ve", "qe", "Ze", "ze", "We", "He"];
  const danglingRefs = miscBindingRefs.filter((ref) => {
    const regex = new RegExp(`\\b${ref}\\b`);
    return regex.test(beforeExport);
  });
  if (danglingRefs.length > 0) {
    console.error(`WARNING: Dangling references to vendor-misc bindings: ${danglingRefs.join(", ")}`);
    console.error("These should have been remapped to vendor-react internal names!");
  } else {
    console.log("No dangling references to vendor-misc bindings. All remapped correctly.");
  }

  console.log("\nSUCCESS: Circular dependency broken!");
}

patchCircularDependency();
