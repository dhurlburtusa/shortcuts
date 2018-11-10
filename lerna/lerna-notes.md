# Lerna Notes

Lerna is a tool that optimizes the workflow around managing multi-package
repositories with `git` and `npm`.

Lerna can also reduce the time and space requirements for numerous copies of
packages in development and build environments.


## Installation

```sh
npm install --global lerna
# Or
yarn global add lerna
```


## Getting Started

**Create a new git repositiory**

```sh
git init your-repo && cd your-repo
# or
git flow init your-repo && cd your-repo
```

**Initialize Lerna**

```sh
lerna init
```


## Commands

**`lerna init`**

```sh
lerna init
# or for independent versioning mode instead of fixed:
lerna init --independent
```

Use `--exact` to specify dependency versions without a caret.

**`lerna create`**

Create a new lerna-managed package.

```sh
lerna create <name> [loc]
```

See https://github.com/lerna/lerna/tree/master/commands/create for details.

**`lerna add`**

Add a dependency to matched packages.

```sh
lerna add <package>[@version] [--dev] [--exact]
```

**`lerna run`**

Run an npm script in each package that contains that script.

```sh
lerna run <script> -- [..args]
```

See https://github.com/lerna/lerna/tree/master/commands/run for details.

**`lerna bootstrap`**

Link local packages together and install remaining package dependencies.

```sh
lerna bootstrap
```

See https://github.com/lerna/lerna/tree/master/commands/bootstrap for details.
