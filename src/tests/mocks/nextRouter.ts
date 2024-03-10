import { vi } from "vitest";

const mockNextRouter = () => {
  vi.mock("next/router", () => vi.importActual("next-router-mock"));
};

export default mockNextRouter;
