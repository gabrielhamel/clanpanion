const translations = {
  hello: "Bonjour",
} as const;

type WithOrWithoutPlural<K> = K extends unknown
  ? K extends `${infer B}_${"zero" | "one" | "two" | "few" | "many" | "other"}`
    ? B | K
    : K
  : K;

export type Translations = WithOrWithoutPlural<keyof typeof translations>;

export default translations;
