import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist/public/assets');

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function fixCircularDeps() {
  const files = fs.readdirSync(DIST_DIR).filter(f => f.endsWith('.js'));

  const vendorFile = files.find(f => f.startsWith('vendor-') && !f.startsWith('vendor-react') && !f.startsWith('vendor-icons'));
  const vendorReactFile = files.find(f => f.startsWith('vendor-react'));

  if (!vendorFile || !vendorReactFile) {
    console.log('[fix-circular-deps] No vendor chunks found, skipping.');
    return;
  }

  const vendorPath = path.join(DIST_DIR, vendorFile);
  const vendorReactPath = path.join(DIST_DIR, vendorReactFile);

  const vendorContent = fs.readFileSync(vendorPath, 'utf-8');
  const vendorReactContent = fs.readFileSync(vendorReactPath, 'utf-8');

  const vendorImportsReact = vendorContent.includes(`from"./${vendorReactFile}"`);
  const reactImportsVendor = vendorReactContent.includes(`from"./${vendorFile}"`);

  if (!vendorImportsReact || !reactImportsVendor) {
    console.log('[fix-circular-deps] No circular dependency detected. Skipping.');
    return;
  }

  console.log('[fix-circular-deps] Circular dependency detected:');
  console.log(`  ${vendorFile} <-> ${vendorReactFile}`);
  console.log('[fix-circular-deps] Merging vendor into vendor-react...');

  const vendorReactImportPattern = new RegExp(
    `import\\{([^}]+)\\}from"\\.\\/${escapeRegex(vendorReactFile)}"`,
    'g'
  );
  const vendorFromReactImports = [...vendorContent.matchAll(vendorReactImportPattern)];

  const aliasMap = new Map();
  for (const match of vendorFromReactImports) {
    match[1].split(',').forEach(s => {
      const parts = s.trim().split(/\s+as\s+/);
      if (parts.length === 2) {
        aliasMap.set(parts[1].trim(), parts[0].trim());
      }
    });
  }

  let cleanVendorCode = vendorContent;
  cleanVendorCode = cleanVendorCode.replace(vendorReactImportPattern, '');

  const vendorExportRegex = /export\{([^}]+)\}/g;
  let vendorExportsList = [];
  cleanVendorCode = cleanVendorCode.replace(vendorExportRegex, (match, exports) => {
    vendorExportsList.push(exports);
    return '';
  });

  const reactImportPattern = new RegExp(
    `import\\{([^}]+)\\}from"\\.\\/${escapeRegex(vendorFile)}"`,
    'g'
  );
  let cleanReactContent = vendorReactContent;
  const reactFromVendorImports = [...vendorReactContent.matchAll(reactImportPattern)];

  const reactNeedsFromVendor = new Map();
  for (const match of reactFromVendorImports) {
    match[1].split(',').forEach(s => {
      const parts = s.trim().split(/\s+as\s+/);
      if (parts.length === 2) {
        reactNeedsFromVendor.set(parts[1].trim(), parts[0].trim());
      } else if (parts.length === 1) {
        reactNeedsFromVendor.set(parts[0].trim(), parts[0].trim());
      }
    });
  }

  cleanReactContent = cleanReactContent.replace(reactImportPattern, '');

  let reactExportsList = [];
  cleanReactContent = cleanReactContent.replace(vendorExportRegex, (match, exports) => {
    reactExportsList.push(exports);
    return '';
  });

  const allExports = [...reactExportsList, ...vendorExportsList].join(',');
  const mergedContent = cleanVendorCode + '\n' + cleanReactContent + '\n' + `export{${allExports}}`;

  fs.writeFileSync(vendorReactPath, mergedContent);
  console.log(`  Merged code into ${vendorReactFile}`);

  fs.writeFileSync(vendorPath, 'export{};');
  console.log(`  Emptied ${vendorFile}`);

  const otherFiles = files.filter(f => f !== vendorFile && f !== vendorReactFile);
  const vendorImportPattern = new RegExp(
    `from"\\.\\/${escapeRegex(vendorFile)}"`,
    'g'
  );

  for (const file of otherFiles) {
    const filePath = path.join(DIST_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    const original = content;
    content = content.replace(vendorImportPattern, `from"./${vendorReactFile}"`);
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`  Updated imports in ${file}`);
    }
  }

  const htmlPath = path.resolve('dist/public/index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf-8');
    const original = html;
    html = html.replace(
      new RegExp(`<link[^>]*href="/assets/${escapeRegex(vendorFile)}"[^>]*>`, 'g'),
      ''
    );
    if (html !== original) {
      fs.writeFileSync(htmlPath, html);
      console.log('  Removed vendor preload from index.html');
    }
  }

  console.log('[fix-circular-deps] Done! Circular dependency resolved.');
}

fixCircularDeps();
