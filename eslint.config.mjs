import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactNativePlugin from "eslint-plugin-react-native";

export default [
  {
    ...js.configs.recommended,
  },
  {
    languageOptions: {
      globals: {
        ...reactNativePlugin.environments["react-native"].globals
      },
      parser: babelParser,
      parserOptions: {
        requireConfigFile: true
      }
    },
    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off"
    }
  }
];
