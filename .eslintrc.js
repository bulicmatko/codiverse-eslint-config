module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    // "plugin:prettier/recommended",
    // "prettier/react",
    // "prettier/@typescript-eslint",
  ], // array's order is very important
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "typescript-sort-keys",
  ],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#disallow-the-use-of-variables-before-they-are-defined-no-use-before-define
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-shadow": "error",

    "import/extensions": "off",
    "import/prefer-default-export": "off",

    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",

    "prettier/prettier": ["error"],

    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-curly-newline": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": [
      "error",
      {
        ignoreCase: false,
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",

    "typescript-sort-keys/interface": "off",
    "typescript-sort-keys/string-enum": "off",

    "class-methods-use-this": "off",
    "consistent-return": "off",
    "lines-between-class-members": "off",
    "max-classes-per-file": "off",
    "no-console": "error",
    // Refer to: https://github.com/typescript-eslint/typescript-eslint/issues/2483
    // no-shadow is disabled because we're using @typescript-eslint/no-shadow
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "sort-imports": ["off"],
    // "sort-imports": [
    //   "error",
    //   {
    //     ignoreCase: false,
    //     ignoreDeclarationSort: true,
    //     allowSeparatedGroups: true,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    //   },
    // ],
  },
  overrides: [
    {
      files: ["*.{e2e-spec,spec}.{ts,tsx,js,jsx}"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["*.resolver.{ts,tsx,js,jsx}"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
      },
    },
    {
      files: ["*.repository.{ts,tsx,js,jsx}"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
