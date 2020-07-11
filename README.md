# create-babel-typescript-monorepo

Like `create-react-app` and [create-babel-typescript](https://github.com/AndersDJohnson/create-babel-typescript), but for a basic Babel TypeScript _monorepo_ setup.

Create an app in a new `./my-app` directory:

```shell
$ npm init babel-typescript-monorepo my-app my-first-package,my-second-package
```

See [base-create-monorepo](https://github.com/AndersDJohnson/base-create-monorepo) for all CLI options.

[<kbd>copy</kbd>](https://copyhaste.com/c/?t=npm%20init%20babel-typescript-monorepo%20my-app)

- :sparkles: Auto-installs dependencies.
- :sparkles: Auto-initializes `lerna`.
- :fast_forward: Out-of-the-box [preset-env](https://babeljs.io/docs/en/babel-preset-env) for modern syntax & [transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) for `async`/`await`.
- 🛠️ Baked-in `build` and `build:watch` scripts, `src/index.ts` files for each package, `.gitignore` & more!
