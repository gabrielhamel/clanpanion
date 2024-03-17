// import { cleanup } from "@testing-library/react";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";
import mockI18n from "@/tests/mocks/i18n";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "./render";

export const msw = setupServer();

beforeAll(() => {
  msw.listen({
    onUnhandledRequest: "error",
  });

  mockI18n();
});

afterEach(() => {
  msw.resetHandlers();
  cleanup();
});

afterAll(() => {
  msw.close();
});
