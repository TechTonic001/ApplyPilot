import globals from "globals";

export default [
  {
    ignores: ["**/dist/**", "**/node_modules/**", "coverage/**"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-undef": "error",
    },
  },
  {
    files: ["client/src/**/*.{js,jsx}"],
    rules: {
      "no-unused-vars": "off",
    },
  },
  {
    files: ["server/**/*.js"],
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    },
  },
];
