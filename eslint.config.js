import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import tsParser from "@typescript-eslint/parser";

export default [
  // 1. Ignore build output
  {
    ignores: ["dist/**"],
  },

  // 2. Base JS rules
  js.configs.recommended,

  // 3. Vue rules
  ...vue.configs["flat/recommended"],

  // 4. Vue + TypeScript parser config
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vue.parser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".vue"],
      },
    },
  },

  // 5. TypeScript files
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ["src/**/*.{ts,tsx}"],
  })),
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // 6. Disable type-aware rules for JS config files
  {
    files: ["*.js", "*.mjs", "*.cjs"],
    ...tseslint.configs.disableTypeChecked,
  },

  // 7. Prettier last
  prettier,
];
