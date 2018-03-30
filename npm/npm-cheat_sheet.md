# npm Cheat Sheet

See http://browsenpm.org/help for another npm cheat sheet.


## Initializing a Package

```sh
npm init
```

**Scoped**

```sh
npm init --scope=my-scope
```

```sh
npm init --scope=username
```

### Version Controlled Package Initialization Examples

For these examples, Github is used as the SCM.

**Local-First**

```sh
cd ${REPO_DIR}
cd ${NPM_SCOPE_DIR} # Optional
mkdir ${PACKAGE_NAME}
cd ${PACKAGE_NAME}
git flow init
npm init --scope=${NPM_SCOPE} # Exclude the '@' prefix.
```

* Create a new repo in your Github account.
  + Choose a name.
  + Add a description. (Likely the same as the description used in `package.json`.
  + Choose public or private.
  + Initialize with a README if you haven't added one yet.
  + Add a `.gitignore` and or a `LICENSE` if needed.

```sh
git remote add origin https://github.com/${username}/${repo-name}.git
git push -u origin develop
```


## Listing Installed Packages

**List All Global Packages**

```sh
npm ls --global
```

**List All Local Packages**

```sh
cd project
npm ls
```


## package.json

### Dependencies

See https://docs.npmjs.com/files/package.json#dependencies for details.

* `version` Must match version exactly
* `>version` Must be greater than version
* `>=version` etc
* `<version`
* `<=version`
* `~version` "Approximately equivalent to version" See [semver].
* `^version` "Compatible with version" See [semver].
* `1.2.x` 1.2.0, 1.2.1, etc., but not 1.3.0
* `http://...` See 'URLs as Dependencies' below
* `*` Matches any version
* `""` (just an empty string) Same as *
* `version1 - version2` Same as >=version1 <=version2.
* `range1 || range2` Passes if either range1 or range2 are satisfied.
* `git...` See 'Git URLs as Dependencies' below
* `user/repo` See 'GitHub URLs' below
* `tag` A specific version tagged and published as tag See npm-tag
* `path/path/path` See Local Paths below

#### Local

Referencing a local package.

Example from package.json:

    "qc-util": "file://C:\\repos\\npm\\qc-util"

### Scripts

See https://docs.npmjs.com/misc/scripts for details.

NPM recognizes several script names: `prepublish`, `prepare`,
`prepublishOnly`, `prepack`, `postpack`, `publish`, `preinstall`, `install`,
`postinstall`, `preuninstall`, `uninstall`, `postuninstall`, `preversion`,
`version`, `postversion`, `pretest`, `test`, `posttest`, `prestop`, `stop`,
`poststop`, `prestart`, `start`, `poststart`, `prerestart`, `restart`,
`postrestart`, `preshrinkwrap`, `shrinkwrap`, `postshrinkwrap`.

**Environment Variables**

Several environment variables are made available to the NPM scripts.  They all
begin with `npm_`.  A set of them begin with `npm_config_` and they contain
the current NPM configuration.  Another set of them begin with `npm_package_`
and they contain the values in the `package.json`.  Then there are some
miscellaneous variables.  Below is a list with example values.

* `npm_config_globalconfig`: `'C:\\Program Files\\nodejs\\etc\\npmrc'`
* `npm_config_globalignorefile`: `'C:\\Program Files\\nodejs\\etc\\npmignore'`
* `npm_config_user_agent`: `'npm/5.4.2 node/v8.7.0 win32 x64'`
* `npm_execpath`: `'C:\\ProgramData\\nvm\\v8.7.0\\node_modules\\npm\\bin\\npm-cli.js'`
* `npm_lifecycle_event`: `'custom'` | `'install'` | `'start'` | `'stop'` | `'test'` | etc
* `npm_lifecycle_script`: `'...'`,
* `npm_node_execpath`: `'C:\\Program Files\\nodejs\\node.exe'`
* `npm_package_name`: `'...'`
* `npm_package_version`: `'0.0.0'`

**Setting Environment Variables**

To set an environment variable for a single script that works across all common
OSs, install [`cross-env`][cross-env] and use it like follows.

```json5
// package.json
  ...
  "scripts": {
    "build:prod": "cross-env NODE_ENV=production node scripts/build.js",
  },
  ...
```

**Running Scripts in Parallel**

To run npm scripts in parallel that works across all common OSs, install
[`npm-run-all`][npm-run-all] and use it like follows.

```json5
// package.json
  ...
  "scripts": {
    "build": "...",
    "serve": "...",
    "start": "npm-run-all -p build serve",
  },
  ...
```


## Versioning

See https://docs.npmjs.com/cli/version.

```sh
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

If run in a git repo, it will also create a version commit and tag.  Use the `--no-git-tag-version` option to disable
this behavior.


## README

The README file of your NPM project will be displayed on the NPM project page (e.g., https://www.npmjs.com/package/qc-to_int).
However, the widest the code segments can be without needing to scroll horizontally only allows up to 70 characters, fewer on
smaller devices.  Therefore, it is recommended to keep the lines in the code segments to 70 characters or fewer.

In non-code segments, you will be able to have more characters in constructs like paragraphs that will wrap in HTML.


## Publishing

In order to publish, you must be logged in.  This requires that you have setup
an npm account.

When you run the following command, you will be prompted for your username,
password, and email.

```sh
npm login
```

If you are planning to publish the package to a particular scope you have
permission for, then declare the scope as an option when you login.

```sh
npm login --scope=the_scope
```

It is important that you are publishing your package using the correct user.
Use the following command to find out who you are logged in as.

```sh
npm whoami
```

```sh
npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>]
```

### Before Publishing

* Make sure the tests pass.

* Make sure the package installs and works.

  To test a global install, do the following in the root of your package:
  ```sh
  npm install . -g
  ```

  Use `npm ls -g` to see if it's there.

  To make sure only the files you expect make it into your package, run the
  following from the root of your project.
  
  ```sh
  npm pack
  ```

  Open the tarball and examine it.  If it is not what you expect, then adjust the
  `files` array in `package.json`, update `.gitignore`, or `.npmignore`.  Rerun
  the above command and check until everything looks as expected.

  To test a local install, go into some other folder, and then do:

  ```sh
  cd ../some-other-folder
  npm install ../my-package
  ```

  to install it locally into the node_modules folder in that other folder.

  Then go into the node-repl, and try using require('my-package') to bring in
  your module's main module.  You could also create a test script and then run it
  with node.

  ```js
  // test.js
  var MyModule = require('my-package');
  // Do something to check that the module works as expected.
  ...
  ```

  then

  ```sh
  node test.js
  ```

* Check the version has been bumped correctly.


[cross-env]: https://www.npmjs.com/package/cross-env
[npm-run-all]: https://www.npmjs.com/package/npm-run-all
[semver]: https://docs.npmjs.com/misc/semver
