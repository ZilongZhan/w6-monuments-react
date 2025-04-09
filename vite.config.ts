import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "ESNext",
  },
  test: {
    globals: true,
    environment: "jsdom",
    reporters: ["verbose"],
    setupFiles: "src/setupTests.ts",
  },
});
