import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "ESNext",
  },
  test: {
    root: "src",
    globals: true,
    environment: "jsdom",
    reporters: ["verbose"],
    setupFiles: "setupTests.ts",
    coverage: {
      enabled: false,
      provider: "v8",
      reporter: ["text", "html"],
      reportsDirectory: "../coverage",
      include: ["**/*.{ts,tsx}"],
      exclude: ["main.tsx"],
    },
  },
});
