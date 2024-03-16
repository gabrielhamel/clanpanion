// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { cleanup } from "@testing-library/react";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";
import mockI18n from "@/tests/mocks/i18n";
import mockNextRouter from "@/tests/mocks/nextRouter";
import "@testing-library/jest-dom/vitest";

export const msw = setupServer();

beforeAll(() => {
  msw.listen({
    onUnhandledRequest: "error",
  });

  mockI18n();
  mockNextRouter();
});

afterEach(() => {
  msw.resetHandlers();
  cleanup();
});

afterAll(() => {
  msw.close();
});
