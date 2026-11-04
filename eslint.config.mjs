import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const config = [
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    rules: {
      eqeqeq: ["error", "always"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    },
  },
  {
    files: ["src/app/**/*.tsx"],
    rules: { "@typescript-eslint/explicit-function-return-type": "off" },
  },
  { ignores: [".next/**", "node_modules/**", "coverage/**", "next-env.d.ts"] },
];

export default config;
