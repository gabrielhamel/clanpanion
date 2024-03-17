import { vi } from "vitest";

const mockNextRouter = () => {
  vi.mock("next/router", () => vi.importActual("next-router-mock"));

  vi.mock("@mui/material", async (importOriginal) => {
    const mod = await importOriginal<typeof import("@mui/material")>();
    return {
      ...mod,
      debounce: vi
        .fn()
        .mockImplementation(
          (originalFunction: () => unknown) => originalFunction,
        ),
    };
  });
};

export default mockNextRouter;
