import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    env: {
      IS_REACT_ACT_ENVIRONMENT: "true",
    },
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/tests/setup.ts"],
    include: ["./src/**/__tests__/*.test.{ts,tsx}"]
  },
});
