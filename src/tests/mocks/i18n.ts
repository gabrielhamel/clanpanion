import { vi } from "vitest";

const mockI18n = () => {
  vi.mock("react-i18next", async () => {
    const mockOriginalModule: Record<string, unknown> =
      await vi.importActual("react-i18next");

    return {
      ...mockOriginalModule,
      useTranslation: () => ({
        t: (i18nKey: string) => i18nKey,
      }),
    };
  });
};

export default mockI18n;
