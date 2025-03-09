import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), nodePolyfills()],
  base: process.env.NODE_ENV === "production" ? "/wallet-demo-dapp/" : "/",
  build: {
    outDir: "dist",
    sourcemap: "hidden",
    chunkSizeWarningLimit: 10000,
  },
});
