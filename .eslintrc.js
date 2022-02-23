module.exports = {
  root: true,
  env: {
    // ブラウザ、node.jsを利用
    browser: true,
    node: true,
    // es2021を利用
    es2021: true,
  },
  // prettierを入れないと、eslintで競合してwarningになる。
  extends: ["plugin:vue/vue3-recommended", "@vue/typescript/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    // console.logを許可
    "no-console": "off",
    // ネーミングルールを追加
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: ["property"],
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: ["class", "enum", "interface", "typeAlias", "typeParameter"],
        format: ["PascalCase"],
      },
      {
        selector: "variable",
        modifiers: ["const"],
        format: ["camelCase", "UPPER_CASE"],
      },
    ],
  },
};
