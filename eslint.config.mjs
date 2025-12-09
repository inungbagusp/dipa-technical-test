import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Ignore Tailwind CSS v4 at-rules ===
  {
    files: ["**/*.css"],
    rules: {
      "css/unknownAtRules": [
        "warn",
        {
          ignoreAtRules: ["theme", "utility", "layer"],
        },
      ],
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
