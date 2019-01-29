# Gatsby Notes

[Gatsby] is a blazing fast modern site generator for React.


## Getting Started

**Create a new Site**

```sh
# Syntax
npx gatsby new <site-proj-dir-name> [<url-to-gatsby-starter>]

# Example
npx gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

**Common Starter URLs**

- https://github.com/gatsbyjs/gatsby-starter-hello-world
- https://github.com/gatsbyjs/gatsby-starter-default
- https://github.com/gatsbyjs/gatsby-starter-blog

See https://www.gatsbyjs.org/starters/ for more starters.


## Common Commands

**Developing with a Live Reloading HMR**

```sh
gatsby develop
```

I recommend making this an npm strict so you can use `npm start` to run the above command.

**Create a Production Build**

```sh
gatsby build
```

**Serve the Production Build Locally**

```sh
gatsby serve
```


## Gatsby Project Structure

```
/
|-- /.cache
|-- /plugins
|-- /public
|-- /src
    |-- /pages
    |-- /templates
    |-- html.js
|-- /static
|-- gatsby-browser.js
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
```

**`gatsby-browser.js`**

This file is where Gatsby expects to find any usage of the [Gatsby browser
APIs][gatsby-browser-api] (if any).  These allow customization/extension of default
Gatsby settings affecting the browser. This is also a good place to import
site-wide styles.

**`gatsby-config.js`**

This file is where you specify the site's main configuration and metadata like
title and description, which Gatsby plugins you'd like to include, etc.  See
the [config docs][gatsby-configuration] for details.

**`gatsby-node.js`**

This file is where Gatsby expects to find any usage of the [Gatsby node
APIs][gatsby-node-api] (if any).  These allow customization/extension of default
Gatsby settings affecting pieces of the site build process.

**`gatsby-ssr.js`**

This file is where Gatsby expects to find any usage of the [Gatsby server-side
rendering APIs][gatsby-ssr-api] (if any).  These allow customization of default
Gatsby settings affecting server-side rendering.

See https://www.gatsbyjs.org/docs/gatsby-project-structure/ for details.


[gatsby]: https://www.gatsbyjs.org/
[gatsby-browser-api]: https://www.gatsbyjs.org/docs/browser-apis/
[gatsby-configuration]: https://www.gatsbyjs.org/docs/gatsby-config/
[gatsby-node-api]: https://www.gatsbyjs.org/docs/node-apis/
[gatsby-ssr-api]: https://www.gatsbyjs.org/docs/ssr-apis/
