# Lerna Notes

Lerna is a tool that optimizes the workflow around managing multi-package
repositories with `git` and `npm`.

Lerna can also reduce the time and space requirements for numerous copies of
packages in development and build environments.


## Installation

It is not recommended to install globally. Use `npx lerna ...` to run `lerna init`.


## Getting Started

```sh
mkdir your-repo && cd your-repo
```

**Initialize Lerna**

```sh
npx lerna init
```


## Commands

**`lerna init`**

```sh
npx lerna init
# or for independent versioning mode instead of fixed:
npx lerna init --independent
```

Use `--exact` to specify dependency versions without a caret.

**`lerna create`**

Create a new lerna-managed package.

```sh
npx lerna create <name> [loc]
```

See https://github.com/lerna/lerna/tree/master/commands/create for details.

**`lerna add`**

Add a dependency to matched packages.

```sh
npx lerna add <package>[@version] [--dev] [--exact]
```

**`lerna run`**

Run an npm script in each package that contains that script.

```sh
npx lerna run <script> -- [..args]
```

See https://github.com/lerna/lerna/tree/master/commands/run for details.

**`lerna bootstrap`**

Link local packages together and install remaining package dependencies.

```sh
npx lerna bootstrap
```

See https://github.com/lerna/lerna/tree/master/commands/bootstrap for details.
