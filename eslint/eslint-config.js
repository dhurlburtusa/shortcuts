// Note: This is a WIP
module.exports = {
  parser: "espree", // "babel-eslint" | ("espree") | "esprima" | "typescript-eslint-parser"
  parserOptions: {
    // Specifies the version of ECMAScript syntax you want to use.
    ecmaVersion: 5, // 3 | (5) | 6 | 7 | 8 | 2015 | 2016 | 2017 | etc
    // An object indicating which additional language features you'd like to use:
    ecmaFeatures: {
      // Enable support for the experimental object rest/spread properties (IMPORTANT:
      // This is an experimental feature that may change significantly in the future.
      // It's recommended that you do not write rules relying on this functionality
      // unless you are willing to incur maintenance cost when it changes.)
      experimentalObjectRestSpread: false, // true | false
      // Allow return statements in the global scope
      globalReturn: false, // true | false
      // Enable global strict mode (if ecmaVersion is 5 or greater)
      impliedStrict: false, // true | false
      // Enable JSX
      jsx: false, // true | false
    },
    // Set the source type.
    "sourceType": "script", // "module" | ("script")
  },
  env: {
    // Defines require() and define() as global variables as per the amd spec.
    amd: false, // true | false

    // AppleScript global variables.
    applescript: false, // true | false

    // Atom test helper globals.
    atomtest: false, // true | false

    // Browser global variables.
    browser: false, // true | false

    // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
    commonjs: false, // true | false

    // Ember test helper globals.
    embertest: false, // true | false

    // Enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
    es6: false, // true | false

    // GreaseMonkey globals.
    greasemonkey: false, // true | false

    // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    jasmine: false, // true | false

    // Jest global variables.
    jest: false, // true | false

    // jQuery global variables.
    jquery: false, // true | false

    // Meteor global variables.
    meteor: false, // true | false

    // adds all of the Mocha testing global variables.
    mocha: false, // true | false

    // MongoDB global variables.
    mongo: false, // true | false

    // Java 8 Nashorn global variables.
    nashorn: false, // true | false

    // Node.js global variables and Node.js scoping.
    node: false, // true | false

    // PhantomJS global variables.
    phantomjs: false, // true | false

    // Prototype.js global variables.
    prototypejs: false, // true | false

    // Protractor global variables.
    protractor: false, // true | false

    // Service Worker global variables.
    serviceworker: false, // true | false

    // Globals common to both Node.js and Browser.
    "shared-node-browser": false, // true | false

    // ShellJS global variables.
    shelljs: false, // true | false

    // QUnit global variables.
    qunit: false, // true | false

    // WebExtensions globals.
    webextensions: false, // true | false

    // Web workers global variables.
    worker: false, // true | false
  },
  globals: {
    var1: true,
    var2: false,
  },
  plugins: [
    'eslint-plugin-foo', // Or 'foo'
    ...
  ],
  rules: {
    // To be cont'd
  }
}
