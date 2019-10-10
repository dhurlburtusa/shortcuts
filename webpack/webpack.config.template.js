const path = require('path')

const webpack = require('webpack')

/*
 * webpack accepts configuration files written in multiple programming and data
 * languages.  Besides JavaScript, TypeScript is supported, among others.  See
 * https://webpack.js.org/configuration/configuration-languages/ for details.
 * This template, however, will demonstrate a webpack configuration using Node
 * compatible JavaScript.
 */

/*
 * The name of the configuration. May be used when multiple configurations are
 * defined. For example, if you pass a name to the `--config-name` CLI option,
 * Webpack will only build that specific configuration.
 */
const name = undefined

/*
 * The base directory, an absolute path, for resolving entry points and loaders
 * from configuration.  By default the current directory is used, but it's
 * recommended to pass a value in your configuration.  This makes your
 * configuration independent from CWD (current working directory).
 *
 * @param {string=} - context
 */
const context = path.resolve(__dirname, 'src')

/*
 * The point or points to enter the application.  If an array is passed, all
 * items will be executed.
 *
 * A dynamically loaded module is not an entry point.
 *
 * Simple rule: one entry point per HTML page.  SPA: one entry point.  MPA:
 * multiple entry points.
 *
 * @param {string} entry - The single entry point.  It will have a chunk name of
 *   `'main'`.
 * @param {string[]} entry - TODO: Determine what happens in this case.
 * @param {!Object<string|string[]>} entry - An object defining multiple
 *   entrypoints.  Each key is the name of each chunk.
 * @param {function (): string|string[]|!Object<string|string[]>} entry - A
 *   function to be called to return the entrypoint(s).  Necessary when the value
 *   is dynamic.
 */
const entry = './index.js'
const entry = {
  main: './index.js',
  chunk1: './chunk1-entry.js',
  chunk2: ['./polyfill.js', './chunk2-entry.js'],
}

/*
 * This option provides a way of excluding dependencies from the output bundles.
 * Instead, the created bundle relies on that dependency to be present in the
 * consumer's environment.
 *
 * That is, this prevents bundling of certain imported packages.
 *
 * See https://webpack.js.org/configuration/externals/ for details.
 *
 * @param {!Object<string|!Array|!Object>|!RegExp|function (context, request, callback)}
 *   - The key should match the name of the imported module.
 */
const externals = undefined
// const externals = {
//   bootstrap: '$',
//   jquery: 'jQuery',
//   react: 'React',
//   'react-dom': 'ReactDOM',
// }

/*
 * These options determine how the different types of modules within a project will
 * be treated.
 *
 * @param {?Object=}
 */
const loaders = {
  /*
   * Prevent webpack from parsing any files matching the given regular
   * expression(s).
   *
   * @param {!RegExp=|!RegExp[]=|function (string): boolean=}
   */
  noParse: /jquery|lodash/,

  /*
   * An array of rules which are matched to requests when modules are created.
   * These rules can modify how the module is created.  They can apply loaders to
   * the module, or modify the parser.
   *
   * A Rule can be separated into three parts — Conditions, Results, and nested
   * Rules.
   *
   * **Rule Conditions**
   *
   * There are two input values for the conditions:
   *
   * 1. The resource: An absolute path to the file requested.  It's already resolved
   *    according to the resolve rules.
   *
   * 2. The issuer: An absolute path to the file of the module which requested the
   *    resource.  It's the location of the import.
   *
   * In a rule, the properties `test`, `include`, `exclude`, and `resource` are
   * matched with the resource and the property `issuer` is matched with the
   * issuer.
   *
   * When using multiple conditions, all conditions must match.
   *
   * **Rule Results**
   *
   * Rule results are used only when the rule condition matches.
   *
   * There are two output values of a Rule:
   *
   * 1. Applied loaders: An array of loaders applied to the resource.
   *
   * 2. Parser options: An options object which should be used to create the parser
   *    for this module.
   *
   * These properties affect the loaders: `loader`, `options`, `use`.
   *
   * The `enforce` property affects the loader category.  Whether it's a normal,
   * pre- or post- loader.
   *
   * The `parser` property affects the parser options.
   *
   * @param {Rule[]}
   */
  rules: [
    {
      // Conditions:

      /*
       * A Condition in the following documentation is shorthand for the following
       * parameter declarations.
       *
       * @param {string}
       * @param {!RegExp}
       * @param {function (input: string): boolean}
       * @param {Condition[]}
       * @param {{ test: Condition, included: Condition, excluded: Condition, and: Condition, or: Condition, not: Condition}}
       */

      /*
       * Shorthand for `resource.test`.
       *
       * @param {Condition}
       */
      test: undefined,
      /*
       * Shorthand for `resource.include`.
       *
       * @param {Condition}
       */
      include: undefined,
      /*
       * Shorthand for `resource.exclude`.
       *
       * @param {Condition}
       */
      exclude: undefined,

      /*
       * @param {Condition}
       */
      resource: {
        test: undefined,
        include: undefined,
        exclude: undefined,
        and: [],
        or: [],
        not: [],
      },
      /*
       * @param {Condition}
       */
      resourceQuery: undefined,

      /*
       * @param {Condition}
       */
      issuer: undefined,

      // Results:

      /*
       * @param {'pre'|'post'}
       */
      enforce: undefined,

      /*
       * @param {string}
       */
      loader: undefined,
      options: {},

      use: [
        {
          /*
           * @param {string}
           */
          loader: 'foo-loader',
          /*
           * @param {Object=}
           */
          options: {},
        }
      ],

      /*
       * @param {Object=}
       */
      parser: undefined,

      // Nested Rules:

      /*
       * @param {Rule[]=}
       */
      oneOf: undefined,

      /*
       * @param {Rule[]=}
       */
      rules: undefined,
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ]
    },
    {
      test: /\.(gif|jpg|jpeg|png|svg|webp)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 4096
          },
        }
      ],
    },
    {
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      use: [
        'file-loader',
      ],
    },
    // ...
  ],
}

/*
 * The set of options instructing webpack on how and where it should output your
 * bundles, assets, and anything else you bundle or load with webpack.
 *
 * The following only shows the most commonly used options.  See
 * https://webpack.js.org/configuration/output/ for more details.
 *
 * @param {!Object}
 */
const output = {
  /*
   * The name of each output bundle.  The bundle is written to the directory
   * specified by the `output.path` option.
   *
   * For a single entry point, this may be a static name, that is, does not contain
   * substitutions.
   *
   * However, when creating multiple bundles via more than one entry point, code
   * splitting, or various plugins, you should use one of the following
   * substitutions to give each bundle a unique name.
   *
   * | Substitution | Description |
   * | :----------: | ----------- |
   * | [chunkhash]  | The hash of the chunk content. |
   * | [file]       | The module filename. |
   * | [filebase]   | The module basename. |
   * | [hash]       | The hash of the module identifier. |
   * | [id]         | The module identifier. |
   * | [name]       | The module name. |
   * | [query]      | The module query, i.e., the string following `?` in the filename. |
   *
   * Note this option is called `filename` but you are still allowed to use
   * something like `"js/[name]/bundle.js"` to create a folder structure.
   *
   * Note this option does not affect output files for on-demand-loaded chunks.
   * For these files the `output.chunkFilename` option is used.  It also doesn't
   * affect files created by loaders.  For these files see loader options.
   *
   * Make sure to read the [Caching guide][Caching] for details.  There are more
   * steps involved than just setting this option.
   *
   * The lengths of `[hash]` and `[chunkhash]` can be specified using `[hash:#]`
   * (defaults to 20).  Alternatively, specify `output.hashDigestLength` to
   * configure the length globally.
   *
   * When using the `ExtractTextWebpackPlugin`, use `[contenthash]` to obtain a
   * hash of the extracted file (neither `[hash]` nor `[chunkhash]` work).
   *
   * [Caching]: https://webpack.js.org/guides/caching/
   *
   * @param {string}
   */
  filename: 'app.js',

  /*
   * The output directory as an absolute path.
   *
   * Note that `[hash]` in this parameter will be replaced with an hash of the
   * compilation.
   *
   * @param {string=}
   */
  path: path.resolve(__dirname, 'dist'),

  /*
   * Tells webpack to include comments in bundles with information about the
   * contained modules.  This option defaults to `false`.  In production, it
   * should be `false`.
   *
   * @param {boolean=false}
   */
  pathinfo: false,

  /*
   * This option specifies the public URL of the output directory when referenced
   * in a browser.  A relative URL is resolved relative to the HTML page (or <base>
   * tag).  Server-relative URLs, protocol-relative URLs, or absolute URLs are also
   * possible and sometimes required, i.e., when hosting assets on a CDN.
   *
   * The value of this option is prefixed to every URL created by the runtime or
   * loaders.  Because of this, the value of this option ends with `/` in most
   * cases.
   *
   * The default value is an empty string ''.
   *
   * Simple rule: The URL of your `output.path` from the view of the HTML page.
   *
   * @param {string}
   */
  publicPath: 'https://cdn.example.com/assets/',
}

/*
 * These options allows you to control how webpack notifies you of assets and
 * entrypoints that exceed a specific file limit.
 *
 * @param {?Object=}
 */
const performance = {
  /*
   * This option allows webpack to control what files are used to calculate
   * performance hints.
   *
   * @param {function (assetFilename: string): boolean=}
   */
  assetFilter: function (assetFilename) {
    return !(/\.map$/.test(assetFilename))
  },

  /*
   * Turns hints on/off.  In addition, tells webpack to throw either an error or
   * a warning when hints are found.
   *
   * @param {false|'error'|'warning'} - [hints='warning']
   */
  hints: 'error',

  /*
   * The maximum allowable size, in bytes, of an entrypoint before a hint is
   * issued.
   *
   * @param {number=} - [maxEntrypointSize=250000]
   */
  maxEntrypointSize: 250000,

  /*
   * The maximum allowable size, in bytes, of an emitted asset before a hint is
   * issued.
   *
   * @param {number=} - [maxAssetSize=250000]
   */
  maxAssetSize: 250000,
}

/*
 * The plugins option is used to customize the webpack build process in a variety
 * of ways.
 *
 * See https://webpack.js.org/plugins/ for a list of some available plugins.
 * @param {Array}
 */
const plugins = [
  new webpack.optimize.UglifyJsPlugin({
    // ...
  }),
]

/*
 * These options change how modules are resolved.  webpack provides reasonable
 * defaults, but it is possible to change the resolving in detail.  Needing to
 * change the defaults is not common.  See
 * https://webpack.js.org/configuration/resolve/ for details.
 *
 * @param {!Object=}
 */
const resolve = undefined

/*
 * Because JavaScript can be written for both server and browser, webpack offers
 * multiple deployment targets that you can set in your webpack configuration.
 *
 * See https://webpack.js.org/configuration/target/ for details.
 *
 * @param {string=} [target='web'] - May be one of `'async-node'`,
 *   `'electron-main'`, `'electron-renderer'`, `'node'`, `'node-webkit'`,
 *   `'web'`, or `'webworker'`.
 * @param {function (compiler): string=} target - Set it to a function if none of
 *   the predefined targets from the list above meet your needs.
 */
const target = undefined

const config = {
  context: context,
  entry: entry,
  module: loaders,
  externals: externals,
  name: name,
  output: output,
  performance: performance,
  plugins: plugins,
  resolve: resolve,
  target: target,
}

module.exports = config

// You can also setup more than one configuration.  All configurations will be
// built.  See https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations
// for details.

const config2 = { /* ... */ }

// ...

const configN = { /* ... */ }

module.exports = [
  config,
  config2,
  // ...
  configN,
]
