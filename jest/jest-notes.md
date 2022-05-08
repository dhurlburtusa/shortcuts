# Jest Notes

Jest is a "zero configuation testing platform".

> One of Jest's philosophies is to provide an integrated "zero-configuration"
> experience.

See https://jestjs.io/ or https://facebook.github.io/jest/ for details.


## Installation

Installation should be done for each project.  That is, Jest should not be
installed globally.

```sh
npm install --save-dev jest
# or
yarn add --dev jest
```

### Using TypeScript via `ts-jest`

```sh
npm install --save-dev ts-jest
# or
yarn add --dev ts-jest
```

### Provide typing when writing your tests

```sh
npm install --save-dev @types/jest
# or
yarn add --dev @types/jest
```

In general, try to match the major (26) and minor (4) version as closely as possible.


## Configuration

**Update package.json**

```json
  "scripts": {
    "test": "jest --coverage",
    "test:watch": "jest --coverage --watch"
  }
```

### Generate a basic configuration file

```sh
npx jest --init
```
