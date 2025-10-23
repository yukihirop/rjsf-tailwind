import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { resolve } from "path"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/components/**/*"],
      exclude: ["src/main.tsx", "src/App.tsx", "src/samples/**/*", "src/store.ts", "src/userWorker.ts"],
      outDir: "dist-lib"
    })
  ],
  optimizeDeps: {
    include: []
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "RjsfTailwind",
      fileName: (format) => `rjsf-tailwind.${format}.js`,
      formats: ["es", "cjs", "umd"]
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@rjsf/validator-ajv8",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-slot",
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
        "tailwindcss-animate",
        "lucide-react",
        "monaco-editor"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@rjsf/validator-ajv8": "RjsfValidatorAjv8",
          "@radix-ui/react-dropdown-menu": "RadixDropdownMenu",
          "@radix-ui/react-slot": "RadixSlot",
          "class-variance-authority": "ClassVarianceAuthority",
          "clsx": "clsx",
          "tailwind-merge": "tailwindMerge",
          "tailwindcss-animate": "tailwindcssAnimate",
          "lucide-react": "LucideReact",
          "monaco-editor": "MonacoEditor"
        },
        interop: "auto"
      }
    },
    outDir: "dist-lib",
    sourcemap: true,
    minify: false
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
