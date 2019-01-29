// https://www.gatsbyjs.org/docs/gatsby-config/

// https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types
const mapping;
//const mapping = {
//  '<something>.<something>': '<something>.<something>',
//};

// The site's path prefix.
// Note: it must *not* have a trailing slash.
const pathPrefix = '';
//const pathPrefix = '/foo';

const plugins = [
  'gatsby-plugin-foo',
  {
    resolve: 'gatsby-plugin-bar',
    options: {
      // Options for plugin.
    },
  },
  'gatsby-transformer-quux',
];

// Flag indicating whether to include a polyfill for older browsers.
const polyfill = true;
//const polyfill = false;

// Setting the proxy config option will tell the develop server to proxy any
// unknown requests to your specified server.
const proxy;
//const proxy = {
//  prefix: '/foo',
//  url: 'https://example.com/foo/',
//};

/*
The site metadata provides metadata about the site. Surprising?

It can be queried like the following in a page component:

```js
import { graphql } from 'gatsby';

export default ({ data }) => (
  <div>{data.site.siteMetadata.whatever}</div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        whatever
      }
    }
  }
`;
```
*/
const siteMetadata = {
  whatever: 'Whatever',
};

export const config = {
  mapping,
  pathPrefix,
  plugins,
  polyfill,
  proxy,
  siteMetadata,
};
