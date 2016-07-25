# npm Cheatsheet

See http://browsenpm.org/help for another npm cheat sheet.

## package.json

### Dependencies

See https://docs.npmjs.com/files/package.json#dependencies for details.

* `version` Must match version exactly
* `>version` Must be greater than version
* `>=version` etc
* `<version`
* `<=version`
* `~version` "Approximately equivalent to version" See semver
* `^version` "Compatible with version" See semver
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

## Versioning

See https://docs.npmjs.com/cli/version.

```sh
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

If run in a git repo, it will also create a version commit and tag.  Use the `--no-git-tag-version` option to disable
this behavior.

## Publishing

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

