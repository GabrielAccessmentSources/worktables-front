module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        semi: [2, "always"],
        // "quotes": [2, "double", { "avoidEscape": true }],
        "object-curly-spacing": ["error", "always"],
        "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    }
};
