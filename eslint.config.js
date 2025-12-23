import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,

  // Vue rules
  ...vue.configs["flat/recommended"],

  // TypeScript (TYPE-AWARE)
  ...tseslint.configs.recommendedTypeChecked,

  // Turn off formatting rules (Prettier owns formatting)
  prettier,

  {
    files: ["**/*.{ts,tsx,js,jsx,vue}"],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
