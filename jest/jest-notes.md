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


## Configuration

**Update package.json**

```json
  "scripts": {
    "test": "jest --coverage",
    "test:watch": "jest --coverage --watch"
  }
```
