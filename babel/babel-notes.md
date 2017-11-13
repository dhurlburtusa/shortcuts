# Babel Notes

See http://babeljs.io/ and https://github.com/thejameskyle/babel-handbook/ for details.

Babel is a JavaScript compiler (aka transpiler).   At a high level, it has 3
stages that it runs code in: parsing, transforming, and generation.

Out of the box Babel doesn't do anything.  That is, the transformation step
effectively accepts the code and then returns the code unaltered.  You will
need to add some plugins for Babel to do anything (they affect the 2nd stage,
transformation).


## Installation

The installation varies slightly depending on the needs of your project.

**Typical JavaScript Library/Tool**

First, install the CLI as a dev dependency.

```sh
npm install --save-dev babel-cli
```

Then install one or more presets or plugins.

```sh
npm install --save-dev babel-preset-env
npm install --save-dev babel-plugin-transform-remove-debugger
```

Then update `package.json` to run Babel.

```json5
{
  ...
  "scripts": {
    "build": "babel src -d dist"
  },
  ...
}
```

Then update `.babelrc` to:

```json5
{
  "plugins": [
    "transform-remove-debugger"
  ],
  "presets": [
    "env"
  ]
}
```

**Typical Application**

Same parts as above plus the following.

```sh
npm install --save-dev cross-env
```

```sh
npm install --save-dev babel-plugin-minify-dead-code-elimination
npm install --save-dev babel-plugin-transform-inline-environment-variables
```

```json5
{
  ...
  "scripts": {
    "build": "cross-env NODE_ENV=development babel src -d build",
    "build-prod": "cross-env NODE_ENV=producton babel src -d build"
  },
  ...
}
```

```json5
{
  "plugins": [
    "minify-dead-code-elimination",
    "transform-inline-environment-variables",
    "transform-remove-debugger"
  ],
  "presets": [
    "env"
  ]
}
```
