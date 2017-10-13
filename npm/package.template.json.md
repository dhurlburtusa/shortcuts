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
    "prepublish": "",
    "publish": "",
    "postpublish": "",
    "preinstall": "",
    "install": "",
    "postinstall": "",
    "preuninstall": "",
    "uninstall": "",
    "postuninstall": "",
    "preversion": "",
    "version": "",
    "postversion": "",
    "pretest": "",
    "test": "",
    "posttest": "",
    "prestop": "",
    "stop": "",
    "poststop": "",
    "prestart": "",
    "start": "",
    "poststart": "",
    "prerestart": "",
    "restart": "",
    "postrestart": "",
    "pre<command-name>": "<command>",
    "<command-name>": "<command>",
    "post<command-name>": "<command>",
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
