// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useTranslation as i18nUseTranslation } from "react-i18next";
import { TFunction as i18nTFunction } from "i18next";
import type { Translations } from "@/public/locales/fr_FR";

type RestArgs =
  Parameters<i18nTFunction> extends [unknown, ...infer RestArgs]
    ? RestArgs
    : never;

export type TFunction = (key: Translations, ...args: RestArgs) => string;

export const useTranslation = () => {
  const { t, ...rest } = i18nUseTranslation();

  return {
    t: (key: Translations, ...args: RestArgs) => t(key, ...args),
    ...rest,
  };
};
