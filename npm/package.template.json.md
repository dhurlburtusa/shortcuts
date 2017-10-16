// See https://docs.npmjs.com/files/package.json.

```js
{
  /**
   * The name of your npm package.  Required.  < 214 chars.  Can't start with a dot
   * or an underscore.  No uppercase letters.  Can't contain any non-URL-safe
   * chars.
   * - Don't use the same name as a core Node module.
   * - Don't put "js" or "node" in the name.
   */
  "name": "",
  /**
   * See http://semver.org/ for details.
   *
   * A string of the form: `major.minor.patch` where major, minor, and patch is an
   * integer >= 0.
   *
   * Prerelease:
   * major.minor.patch-[alpha|beta].preid
   */
  "version": "",
  /**
   * If you set `"private": true` in your package.json, then npm will refuse to
   * publish it.
   *
   * This is a way to prevent accidental publication of private repositories.  If
   * you would like to ensure that a given package is only ever published to a
   * specific registry (for example, an internal registry), then use the
   * `publishConfig` dictionary described below to override the `registry` config
   * param at publish-time.
   */
  "private": true,
  /**
   * The set of constraints defining the list of browsers this project is designed
   * to support.  See https://github.com/ai/browserslist for details about how to
   * declare different constraints.
   *
   * Many tools use this to configure how they run.  For example, it is used by
   * Autoprefixer, some PostCSS plugins, some Babel presets, and many others.
   */
  "browserslist": [
    "> 0.5%",
    "Last 2 major versions",
    "Firefox ESR"
  ],
  /**
   * You can specify the version of node that your stuff works on:
   *
   *   "engines" : { "node" : ">=0.10.3 <0.12" }
   */
  "engines": {
    "node": ">=4.0.0",
    "npm": ">=3.0.0"
  },
  /**
   * You can specify which operating systems your module will run on:
   *
   *   "os" : [ "darwin", "linux" ]
   *
   * You can also blacklist instead of whitelist operating systems, just prepend
   * the blacklisted os with a '!':
   *
   *   "os" : [ "!win32" ]
   *
   * The host operating system is determined by `process.platform`.
   *
   * It is allowed to both blacklist, and whitelist, although there isn't any good
   * reason to do this.
   */
  "os": [
    ""
  ],
  /**
   * If your code only runs on certain cpu architectures, you can specify which
   * ones.
   *
   *   "cpu" : [ "x64", "ia32" ]
   *
   * Like the `os` option, you can also blacklist architectures:
   *
   *   "cpu" : [ "!arm", "!mips" ]
   *
   * The host architecture is determined by `process.arch`.
   */
  "cpu": [ "", "" ],
  /**
   * Examples:
   *
   *   "author": {
   *     "name": "Barney Rubble",
   *     "email": "barney@rubble.com",
   *     "url": "http://barnyrubble.tumblr.com/"
   *   }
   *
   *   "author": "Barney Rubble <barney@rubble.com> (http://barnyrubble.tumblr.com)"
   */
  "author": {
    "name": "",
    "email": "",
    "url": ""
  },
  "contributors": [
    {
      "name": "",
      "email": "",
      "url": ""
    }
  ],
  /**
   * A description of your npm package.  This helps people discover your package as
   * it's listed in `npm search`.
   */
  "description": "",
  /**
   * An array of keywords related to your npm package.  This helps people discover
   * your package as it's listed in `npm search`.
   */
  "keywords": ["", ""],
  /**
   * The url to the project homepage.
   *
   * NOTE: This is not the same as "url".  If you put a "url" field, then the
   * registry will think it's a redirection to your package that has been published
   * somewhere else.
   */
  "homepage": "",
  /**
   * The URL to your project's issue tracker and / or the email address to which
   * issues should be reported.  These are helpful for people who encounter issues
   * with your package.
   *
   * You can specify either one or both values.  If you want to provide only a URL,
   * you can specify the value for "bugs" as a simple string instead of an object.
   *
   * If a URL is provided, it will be used by the `npm bugs` command.
   *
   * Examples:
   *
   *   "bugs": {
   *     "email": "dhurlburtusa@github.com",
   *     "url": "https://github.com/dhurlburtusa/qc-core/issues"
   *   }
   *
   *   "bugs": {
   *     "email": "dhurlburtusa@github.com"
   *   }
   *
   *   "bugs": {
   *     "url": "https://github.com/dhurlburtusa/qc-core/issues"
   *   }
   *
   *   "bugs": "https://github.com/dhurlburtusa/qc-core/issues"
   */
  "bugs": {
    "email": "",
    "url": ""
  },
  /**
   * Examples:
   *
   *   "license": "MIT"
   *   "license": "(MIT OR Apache-2.0)"
   *   "license": "UNLICENSED"
   */
  "license": "UNLICENSED",
  /**
   * The "files" field is an array of files to include in your project.  If you
   * name a folder in the array, then it will also include the files inside that
   * folder.  (Unless they would be ignored by another rule.)
   *
   * You can also provide a ".npmignore" file in the root of your package or in
   * subdirectories, which will keep files from being included, even if they would
   * be picked up by the files array.  The .npmignore file works just like a
   * .gitignore file.
   */
  "files": [
    ""
  ],
  /**
   * The `main` field is a module ID that is the primary entry point to your
   * program.  That is, if your package is named `foo`, and a user installs it, and
   * then does `require("foo")`, then your main module's exports object will be 
   * returned.
   *
   * This should be a module ID relative to the root of your package folder.
   */
  "main": "",
  /**
   * A lot of packages have one or more executable files that they'd like to
   * install into the PATH.  npm makes this pretty easy (in fact, it uses this
   * feature to install the "npm" executable.)
   *
   * To use this, supply a `bin` field in your package.json which is a map of
   * command name to local file name.  On install, npm will symlink that file into
   * `prefix/bin` for global installs, or `./node_modules/.bin/` for local installs.
   */
  "bin": {
    "mycmd": "path/to/local/file"
  },
  "man": [
    ""
  ],
  "directories": {
    "bin": "",
    "doc": "",
    "example": "",
    "lib": "",
    "man": "",
    "test": ""
  },
  /**
   * Examples:
   *
   *   "repository": {
   *     "type": "git",
   *     "url": "https://github.com/dhurlburtusa/qc-core.git"
   *   }
   *
   *   "repository": "npm/npm"
   *
   *   "repository": "gist:11081aaa281"
   *
   *   "repository": "bitbucket:example/repo"
   *
   *   "repository": "gitlab:another/repo"
   */
  "repository": {
    "type": "",
    "url": ""
  },
  /**
   * See https://docs.npmjs.com/misc/scripts for details.
   */
  "scripts": {
    /**
     * Run BEFORE the package is packed and published, as well as on local `npm
     * install` without any arguments.
     *
     * Note: `prepublish` or `prepublishOnly` are deprecated.  It is not clearly
     * documented.  The documentation implies using `prepare` in place of
     * `prepublish`.  Use `prepublishOnly` when it does not need to be run during
     * an `npm install` run.  Beware that `prepare` and `prepublishOnly` are only
     * recognized when npm 4.0.0 or later is used.
     */
    "prepublish": "",
    /**
     * Run BEFORE the package is packed and published, as well as on local `npm
     * install` without any arguments.  This is run AFTER `prepublish`, but BEFORE
     * `prepublishOnly`.
     *
     * Added in `npm@4.0.0`.
     */
    "prepare": "",
    /**
     * Only runs during `npm publish`, unlike `prepublish` which runs during both
     * `npm install` and `npm publish`.
     *
     * Added in `npm@4.0.0`.
     */
    "prepublishOnly": "",
    /**
     * Run AFTER the package is published.
     *
     * For clarify, I'd recommend using `postpublish` instead.
     */
    "publish": "",
    /**
     * Run AFTER the package is published.
     */
    "postpublish": "",

    /**
     * Run BEFORE a tarball is packed (on `npm pack`, `npm publish`, and when
     * installing git dependencies).
     */
    "prepack": "",
    /**
     * Run AFTER the tarball has been generated and moved to its final destination.
     */
    "postpack": "",
    
    /**
     * Run BEFORE the package is installed.
     *
     * Note: The only valid use of `install` or `preinstall` scripts is for
     * compilation which must be done on the target architecture.
     */
    "preinstall": "",
    /**
     * Run AFTER the package is installed.
     *
     * For clarify, I'd recommend using `postinstall` instead.  Use this to alter the
     * the default behavior of `"node-gyp rebuild"`.
     */
    "install": "",
    /**
     * Run AFTER the package is installed.
     */
    "postinstall": "",

    /**
     * Run BEFORE the package is uninstalled.
     */
    "preuninstall": "",
    /**
     * Run BEFORE the package is uninstalled.
     *
     * For clarify, I'd recommend using `preuninstall` instead.
     */
    "uninstall": "",
    /**
     * Run AFTER the package is uninstalled.
     */
    "postuninstall": "",

    /**
     * Run BEFORE bumping the package version.
     */
    "preversion": "",
    /**
     * Run AFTER bumping the package version, but BEFORE commit.
     */
    "version": "",
    /**
     * Run AFTER bumping the package version, and AFTER commit.
     */
    "postversion": "",

    /**
     * The following are run when the `npm test` command is run.
     */
    "pretest": "",
    "test": "",
    "posttest": "",

    /**
     * The following are run when the `npm stop` command is run.
     */
    "prestop": "",
    "stop": "",
    "poststop": "",

    /**
     * The following are run when the `npm start` command is run.
     */
    "prestart": "",
    "start": "", /* Defaults to "node server.js" */
    "poststart": "",

    /**
     * The following are run when the `npm start` command is run.
     *
     * Note: `npm restart` will run the `stop` and `start` scripts if no `restart`
     * script is provided.
     */
    "prerestart": "",
    "restart": "",
    "postrestart": "",

    /**
     * The following are run when the `npm shrinkwrap` command is run.
     */
    "preshrinkwrap": "",
    "shrinkwrap": "",
    "postshrinkwrap": "",

    /**
     * The following are run when the `npm run <command>` command is run.
     */
    "pre<command-name>": "<command>",
    "<command-name>": "<command>",
    "post<command-name>": "<command>",

    /**
     * The following is a list of common script names and their intended purpose.
     * You can include the "pre" and "post" versions of the scripts as required.
     */

    /**
     * Builds the project.  The build process will vary from project to project but
     * the following steps are not uncommon to see: 1) generate code and assets 2)
     * compile code 3) minify code and assets 4) bundle code and assets
     */
    "build": "",

    /**
     * Cleans the project.  The clean process usually involves deleting directories
     * and removing any generated/bundled code/assets.
     */
    "clean": "",

    /**
     * Runs the code coverage tests and generates the coverage reports.
     */
    "coverage": "",

    "...": "...",
  },
  /**
   * See https://docs.npmjs.com/misc/config for details.
   */
  "config": {
    "name": "value"
  },
  /**
   * This is a set of config values that will be used at publish-time.  It's
   * especially handy if you want to set the tag, registry, or access, so that you
   * can ensure that a given package is not tagged with "latest", published to the
   * global public registry or that a scoped module is private by default.
   *
   * Any config values can be overridden, but of course only "tag", "registry", and
   * "access" probably matter for the purposes of publishing.
   */
  "publishConfig": {},
  "bundledDependencies": [""],
  "dependencies": {
    "package-name": "version-expression or url"
  },
  "devDependencies": {
    "package-name": "version-expression or url"
  },
  "optionalDependencies": {
    "package-name": "version-expression or url"
  },
  "peerDependencies": {
    "package-name": "version-expression or url"
  }
}
```
