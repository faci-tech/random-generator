import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import"; // Import the plugin

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Add the import plugin configuration
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js built-in modules (e.g., 'fs', 'path')
            "external", // External packages (from node_modules)
            "internal", // Internal modules (aliased paths, etc.)
            "parent", // ../
            "sibling", // ./
            "index", // ./index.js
            "object", // import x = require('x')
            "type", // import type {}
          ],
          "newlines-between": "always", // Add a newline between import groups
          alphabetize: {
            order: "asc", // Sort imports alphabetically within each group
            caseInsensitive: true,
          },
          // You might need to configure pathGroups for your internal aliases
          // if you use them (e.g., "~/", "@/", etc.)
          pathGroups: [
            {
              pattern: "src/**", // Example: Group internal imports from 'src'
              group: "internal",
            },
            {
              pattern: "@/**", // Example: Group internal imports starting with '@'
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["type"], // Don't apply pathGroups to type imports
        },
      ],
      "import/no-unresolved": "error", // Ensures imported modules resolve to a file/module
      "import/named": "error", // Verify named imports exist on the exported module
      "import/default": "error", // Verify default import exists on the exported module
      "import/namespace": "error", // Verify all exported members are available for import
      "import/no-duplicates": "error", // Disallow duplicate imports
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: true, // This is crucial for TypeScript projects to resolve paths
      },
    },
  },
];

export default eslintConfig;
