import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    // A name for the configuration object.
    name: "typescript/custom",
    // An array of glob patterns indicating the files that the configuration object should apply to.
    files: ["src/**/*.{ts}"],
    // An array of glob patterns indicating the files that the configuration object should not apply to.
    ignores: ["**/*.config.js"],
    // An object containing settings related to how JavaScript is configured for linting.
    languageOptions: {
      // The version of ECMAScript to support.
      ecmaVersion: "latest",
      // The type of JavaScript source code.
      sourceType: "module",
      // An object specifying additional objects that should be added to the global scope during linting.
      globals: {
        ...globals.serviceworker,
      },
    },
    // An object containing settings related to the linting process
    linterOptions: {
      // A Boolean value indicating if inline configuration is allowed.
      noInlineConfig: true,
      // A severity string indicating if and how unused disable and enable directives should be tracked and reported.
      reportUnusedDisableDirectives: "warn",
    },
    // An object containing a name-value mapping of plugin names to plugin objects.
    plugins: {},
    // An object containing the configured rules.
    rules: {},
    // An object containing name-value pairs of information that should be available to all rules.
    settings: {},
  },
];
