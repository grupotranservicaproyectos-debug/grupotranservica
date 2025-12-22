import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),

    visualizer({
      filename: "./dist/stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
      template: "treemap",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    target: "es2015",
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // ReactCore
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "vendor-react";
          }

          // TanStack Query
          if (id.includes("@tanstack/react-query")) {
            return "vendor-query";
          }

          // Lucide Icons (separado)
          if (id.includes("lucide-react")) {
            return "vendor-icons";
          }

          // 🔥 NUEVO: Recharts (librería de gráficos - PESADA)
          if (id.includes("recharts")) {
            return "vendor-charts";
          }

          // 🔥 NUEVO: Framer Motion (animaciones - PESADA)
          if (id.includes("framer-motion")) {
            return "vendor-animations";
          }

          // 🔥 NUEVO: Date-fns (fechas - PESADA)
          if (id.includes("date-fns")) {
            return "vendor-dates";
          }

          // 🔥 NUEVO: React Icons (si se usa)
          if (id.includes("react-icons")) {
            return "vendor-react-icons";
          }

          // Resto de node_modules
          if (id.includes("node_modules")) {
            return "vendor-misc";
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    chunkSizeWarningLimit: 800, // Aumentado temporalmente
    reportCompressedSize: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
