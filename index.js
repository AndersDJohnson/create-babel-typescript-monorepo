#!/usr/bin/env node

const createMonorepo = require("base-create-monorepo");

createMonorepo("babel-typescript-monorepo", {
  devDependencies: ["lerna"],
  package: {
    keywords: ["create-babel-typescript-monorepo"],
    scripts: {
      start: "lerna run start",
      build: "lerna run build",
      "build:watch": "lerna run --parallel build:watch",
    },
  },
  eachPackage: {
    dependencies: ["@babel/runtime"],
    devDependencies: [
      "@babel/core",
      "@babel/cli",
      "@babel/node",
      "@babel/preset-env",
      "@babel/preset-typescript",
      "@babel/plugin-transform-runtime",
      "typescript",
    ],
    package: {
      keywords: ["create-babel-typescript-monorepo"],
      scripts: {
        start: "node .",
        build: "babel -x .ts,.tsx src --out-dir dist",
        "build:watch": "npm run build -- --watch",
      },
    },
    files: ["src/index.ts"],
  },
  files: [
    {
      path: "babel.config.json",
      contents: {
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
        plugins: ["@babel/plugin-transform-runtime"],
      },
    },
  ],
});
