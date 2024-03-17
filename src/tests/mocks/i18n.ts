import { vi } from "vitest";

const mockI18n = () => {
  vi.mock("next-i18next", async (importOriginal) => {
    return {
      ...(await importOriginal<typeof import("next-i18next")>()),
      useTranslation: () => ({
        t: (i18nKey: string) => i18nKey,
      }),
    };
  });
};

export default mockI18n;
