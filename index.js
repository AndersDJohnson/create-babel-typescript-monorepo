#!/usr/bin/env node

const createMonorepo = require("base-create-monorepo");

createMonorepo({
  package: {
    keywords: ["create-babel-typescript-monorepo"],
    scripts: {
      start: "lerna run start",
      build: "lerna run build",
      "build:watch": "lerna run --parallel build:watch",
      "build:types": "lerna run build:types",
      "build:types:watch": "lerna run --parallel build:types:watch",
    },
  },
  devDependencies: [
    "@babel/core",
    "@babel/cli",
    "@babel/node",
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/plugin-transform-runtime",
    "typescript",
    "@andersdjohnson/tsconfig",
  ],
  eachPackage: {
    dependencies: ["@babel/runtime"],
    package: {
      main: "dist/index.js",
      keywords: ["create-babel-typescript-monorepo"],
      scripts: {
        start: "node .",
        build: "babel -x .ts,.tsx src --out-dir dist",
        "build:watch": "npm run build -- --watch",
        "build:types": "tsc --emitDeclarationOnly",
        "build:types:watch": "npm run build:types -- --watch",
      },
    },
    files: [
      "src/index.ts",
      {
        path: "tsconfig.json",
        contents: {
          extends: "../../tsconfig.json",
          include: ["src"],
          compilerOptions: {
            outDir: "dist",
          },
        },
      },
    ],
  },
  files: [
    {
      path: "babel.config.json",
      contents: {
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
        plugins: ["@babel/plugin-transform-runtime"],
      },
    },
    {
      path: "tsconfig.json",
      contents: {
        extends: "@andersdjohnson/tsconfig",
        compilerOptions: {
          target: "esnext",
        },
      },
    },
  ],
});
