module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort", "sort-keys-fix"],
  ignorePatterns: [".eslintrc.js", "public/mockServiceWorker.js"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "no-restricted-imports": "off",
    "@typescript-eslint/no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react-i18next",
            importNames: ["useTranslation"],
            message: "Please use useTranslation from @/i18n instead.",
          },
          {
            name: "i18next",
            importNames: ["t"],
            message: "Please import { t } from @/i18n instead.",
          },
          {
            name: "next/router",
            importNames: ["useRouter"],
            message: "Please use useRouter from @/router instead.",
          },
          {
            name: "next/navigation",
            importNames: ["useRouter"],
            message: "Please use useRouter from @/router instead.",
          },
          {
            name: "next-router-mock",
            importNames: ["useRouter"],
            message: "Please use useRouter from @/router instead.",
          },
        ],
        patterns: [
          {
            group: ["*.tsx", "*.ts", "*.js"],
            message:
              'Usage of the file extension ["*.tsx", "*.ts", "*.js"] in import or export is not allowed.',
          },
          {
            group: ["@mui/base", "@mui/base/*"],
            message:
              "Usage of @mui/base is not allowed, use @mui/material instead",
          },
        ],
      },
    ],
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@next/next/no-html-link-for-pages": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],
    "react/react-in-jsx-scope": "off",
    "sort-keys-fix/sort-keys-fix": "error",
  },
  parserOptions: {
    project: ["./tsconfig.json"],
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              [
                "^react",
                "^@?\\w",
                "^(@|components)(/.*|$)",
                "^\\u0000",
                "^\\.\\.(?!/?$)",
                "^\\.\\./?$",
                "^\\./(?=.*/)(?!/?$)",
                "^\\.(?!/?$)",
                "^\\./?$",
                "^.+\\.?(css)$",
              ],
            ],
          },
        ],
      },
    },
  ],
};
