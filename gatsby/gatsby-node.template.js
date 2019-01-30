// https://www.gatsbyjs.org/docs/node-apis/

const path = require(`path`)

const { GraphQLString } = require('gatsby/graphql')
const { createFilePath } = require('gatsby-source-filesystem')

/*
Note: The `actions` property of the first parameter contains references to
several functions. See https://www.gatsbyjs.org/docs/actions/ for the complete
set.
*/

/*
**`gatsby develop`**

The following is the set of hooks that get called when `gatsby develop` is run.
The order is in the order the hooks generally get called. Some hooks are called
multiple times.

- onPreInit
- onCreateBabelConfig
- onPreBootstrap
- onCreateNode
- sourceNodes
- setFieldsOnGraphQLNodeType
- resolvableExtensions
- createPages
- onCreatePage
- createPagesStatefully
- onPreExtractQueries
- preprocessSource
- onPostBootstrap
- onCreateWebpackConfig
- onCreateDevServer

**`gatsby build`**

The following is the set of hooks that get called when `gatsby build` is run.
The order is in the order the hooks generally get called. Some hooks are called
multiple times.

- onPreInit
- onCreateBabelConfig
- onPreBootstrap
- onCreateNode
- sourceNodes
- setFieldsOnGraphQLNodeType
- resolvableExtensions
- createPages
- onCreatePage
- createPagesStatefully
- onPreExtractQueries
- preprocessSource
- onPostBootstrap
- onPreBuild
- onCreateWebpackConfig
- onPostBuild

*/

/*
Tell plugins to add pages.  This extension point is called only after the
initial sourcing and transformation of nodes plus creation of the GraphQL schema
are complete so you can query your data in order to create pages.
*/
exports.createPages = (cntx, cfg) => {
  // console.log('gatsby-node.js#createPages');
  // console.dir(cntx, cfg);
  const {
    // Documented
    actions,
    graphql,
    // Common (i.e., always present in all API hooks)
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
    // Others
    traceId,
    waitForCascadingActions,
  } = cntx;
  const { createPage } = actions
  const {
    plugins,
  } = cfg;

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

/*
Like `createPages` but for plugins who want to manage creating and removing
pages themselves in response to changes in data not managed by Gatsby.  Plugins
implementing `createPages` will get called regularly to recompute page
information as Gatsby's data changes but those implementing
`createPagesStatefully` will not.
*/
exports.createPagesStatefully = (cntx, cfg) => {
  // console.log('gatsby-node.js#createPagesStatefully');
  // console.dir(cntx, cfg);
  const {
    // Documented
    actions,
    graphql,
    // Common (i.e., always present in all API hooks)
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
    // Others
    traceId,
    waitForCascadingActions,
  } = cntx;
  const { createPage } = actions
  const {
    plugins,
  } = cfg;
}

// Note: generateSideEffects is a soon-to-be-replaced hook.
exports.generateSideEffects = (...args) => {
  console.log('\ngatsby-node.js#generateSideEffects');
}

/*
Let plugins extend/mutate the site's Babel configuration. This hook gets called
four times with different values for the `cntx.stage` parameter: `'develop'` |
`'develop-html'` | `'build-javascript'` | `'build-html'`.
*/
exports.onCreateBabelConfig = (cntx, cfg) => {
  // console.log('gatsby-node.js#onCreateBabelConfig');
  // console.dir(cntx, cfg);
  const {
    // Documented
    // Common (i.e., always present in all API hooks)
    actions,
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
    // Others
    stage,
  } = cntx;
  const { createPage } = actions
  const {
    plugins,
  } = cfg;
}

/*
Called when gatsby develop server is started.  It's useful to add proxy and
middleware to the dev server app.
*/
exports.onCreateDevServer = (cntx, cfg) => {
  // console.log('gatsby-node.js#onCreateDevServer');
  // console.dir(cntx, cfg);
  const {
    // Documented
    app, // The Express app used to run the dev server.
    // Common (i.e., always present in all API hooks)
    actions,
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
  } = cntx;
  const {
    plugins,
  } = cfg;
}

/*
Called when a new node is created.  Plugins wishing to extend or transform nodes
created by other plugins should implement this API.

See https://www.gatsbyjs.org/docs/node-interface/ for details about `cntx.node`.
*/
exports.onCreateNode = (cntx, cfg) => {
  // console.log(`gatsby-node.js#onCreateNode(node: type: ${cntx.node.internal.type})`);
  // console.dir(cntx, cfg);
  const {
    // Documented
    actions,
    node,
    // Common (i.e., always present in all API hooks)
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
    // Others
    traceId,
    traceTags,
  } = cntx;
  const {
    plugins,
  } = cfg;
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/*
Called when a new page is created.  This extension API is useful for
programmatically manipulating pages created by other plugins.
*/
exports.onCreatePage = (cntx, cfg) => {
  // console.log('gatsby-node.js#onCreatePage');
  // console.dir(cntx, cfg);
  const {
    // Documented
    actions,
    page,
    // Common (i.e., always present in all API hooks)
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
    // Others
    traceId,
  } = cntx;
  const { createPage } = actions
  const {
    plugins,
  } = cfg;
}

/*
Let plugins extend/mutate the site's webpack configuration. This hook may get
called up to four times with different values for the `cntx.stage` parameter:
`'develop'` | `'develop-html'` | `'build-javascript'` | `'build-html'`.
*/
exports.onCreateWebpackConfig = (cntx, cfg) => {
  // console.log('gatsby-node.js#onCreateWebpackConfig');
  // console.dir(cntx, cfg);
  const {
    // Documented
    actions,
    getConfig,
    loaders,
    plugins,
    rules,
    stage,
    // Common (i.e., always present in all API hooks)
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
  } = cntx;
  const { createPage } = actions
  // const {
  //   plugins,
  // } = cfg;
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /my-css/,
          use: [
            loaders.style(),
            loaders.css(),
          ],
        },
      ],
    },
  });
}

/*
Called at the end of the bootstrap process after all other extension APIs have
been called.
*/
exports.onPostBootstrap = (cntx, cfg) => {
  // console.log('gatsby-node.js#onPostBootstrap');
  // console.dir(cntx, cfg);
  const {
    // Common (i.e., always present in all API hooks)
    actions,
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
  } = cntx;
  const {
    plugins,
  } = cfg;
}

/*
The last extension point called after all other parts of the build process are
complete.
*/
exports.onPostBuild = (cntx, cfg) => {
  // console.log('gatsby-node.js#onPostBuild');
  // console.dir(cntx, cfg);
  const {
    // Common (i.e., always present in all API hooks)
    actions,
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    graphql,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
  } = cntx;
  const {
    plugins,
  } = cfg;
}

/*
Called once Gatsby has initialized itself and is ready to bootstrap your site.
*/
exports.onPreBootstrap = (cntx, cfg) => {
  // console.log('gatsby-node.js#onPreBootstrap');
  // console.dir(cntx, cfg);
  const {
    // Common (i.e., always present in all API hooks)
    actions,
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
  } = cntx;
  const {
    plugins,
  } = cfg;
}

/*
The first extension point called during the build process.  Called after the
bootstrap has completed but before the build steps start.
*/
exports.onPreBuild = (cntx, cfg) => {
  // console.log('gatsby-node.js#onPreBuild');
  // console.dir(cntx, cfg);
  const {
    // Common (i.e., always present in all API hooks)
    actions,
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
    // Other
    graphql,
  } = cntx;
  const {
    plugins,
  } = cfg;
}

/*
Run before GraphQL queries/fragments are extracted from JavaScript files.
Useful for plugins to add more JavaScript files with queries/fragments.
*/
exports.onPreExtractQueries = (cntx, cfg) => {
  // console.log('gatsby-node.js#onPreExtractQueries');
  // console.dir(cntx, cfg);
  const {
    actions,
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
  } = cntx;
  const { createPage } = actions
  const {
    plugins,
  } = cfg;
}

/*
The first API called during Gatsby execution, runs as soon as plugins are
loaded, before cache initialization, and bootstrap preparation.
*/
exports.onPreInit = (cntx, cfg) => {
  // console.log('gatsby-node.js#onPreInit');
  // console.dir(cntx, cfg);
  const {
    // Common (i.e., always present in all API hooks)
    actions,
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
  } = cntx;
  const {
    plugins,
  } = cfg;
}

/*
Ask compile-to-js plugins to process source to JavaScript so the query runner
can extract out GraphQL queries for running.
*/
exports.preprocessSource = (cntx, cfg) => {
  // console.log('gatsby-node.js#preprocessSource');
  // console.dir(cntx, cfg);
  const {
    // Common (i.e., always present in all API hooks)
    actions,
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
    // Other
    contents,
    filename,
  } = cntx;
  const { createPage } = actions
  const {
    plugins,
  } = cfg;
}

/*
Lets plugins implementing support for other compile-to-js add to the list of
'resolvable' file extensions.  Gatsby supports `.js` and `.jsx` by default.
*/
exports.resolvableExtensions = (cntx, cfg) => {
  // console.log('gatsby-node.js#resolvableExtensions');
  // console.dir(cntx, cfg);
  const {
    // Common (i.e., always present in all API hooks)
    actions,
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
    // Other
    traceId,
  } = cntx;
  const {
    plugins,
  } = cfg;
}

/*
Called during the creation of the GraphQL schema.  Allows plugins to add new
fields to the types created from data nodes.  It will be called separately for
each type.
*/
exports.setFieldsOnGraphQLNodeType = (cntx, cfg) => {
  // console.log('gatsby-node.js#setFieldsOnGraphQLNodeType');
  // console.dir(cntx, cfg);
  const {
    // Documented
    type,
    // Common (i.e., always present in all API hooks)
    actions,
    cache,
    createContentDigest,
    createNodeId,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
    // Other
    traceId,
  } = cntx;
  const {
    plugins,
  } = cfg;
  if (type.name === 'File') {
    return {
      newField: {
        type: GraphQLString,
        args: {
          myArgument: {
            type: GraphQLString,
          }
        },
        resolve: (source, fieldArgs) => {
          return `Id of this node is ${source.id}.
                  Field was called with argument: ${fieldArgs.myArgument}`
        }
      }
    }
  }

  // by default return empty object
  return {}
}

/*
Extension point to tell plugins to source nodes.  This API is called during the
Gatsby bootstrap sequence.  Source plugins use this hook to create nodes.  This
API is called exactly once per plugin (and once for your site's
`gatsby-config.js` file).  If you define this hook in `gatsby-node.js` it will
be called exactly once after all of your source plugins have finished creating
nodes.
*/
exports.sourceNodes = (cntx, cfg) => {
  // console.log('gatsby-node.js#sourceNodes');
  // console.dir(cntx, cfg);
  const {
    // Documented
    actions,
    createContentDigest,
    createNodeId,
    // Common (i.e., always present in all API hooks)
    cache,
    emitter,
    getNode,
    getNodeAndSavePathDependency,
    getNodes,
    getNodesByType,
    hasNodeChanged,
    loadNodeContent,
    parentSpan,
    pathPrefix,
    reporter,
    store,
    tracing,
    // Others
    traceId,
    waitForCascadingActions,
  } = cntx;
  const { createNode } = actions
  const {
    plugins,
  } = cfg;
}
