import { ReactElement } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { render, RenderOptions } from "@testing-library/react";
import { AllTheProviders } from "./AllTheProviders";

const customRender = (
  element: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(element, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line @typescript-eslint/no-restricted-imports
export * from "@testing-library/react";
export { customRender as render };
