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

See https://www.gatsbyjs.com/starters/?v=2 for more starters.


## Common Commands

**Developing with a Live Reloading HMR**

```sh
gatsby develop
```

I recommend making this an npm script so you can use `npm start` to run the above command.

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

See [gatsby-browser.template.js](gatsby-browser.template.js) for a template.

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

See https://www.gatsbyjs.com/docs/gatsby-project-structure/ for details.


## GraphQL

Gatsby uses GraphQL to fetch data for the site.

**Graph*i*QL**

The Graph*i*QL IDE is available at `/___graphql`.


## Layout Components

Layout components are for sections of your site that you want to share across
multiple pages. Gatsby doesn't provide anything specific for layouts. Layout
components are just ordinary components that usually will have a common site
header, a common site footer, and will render the layout component's children
within the body of the layout.


## Plugins

Gatsby plugins are JavaScript packages that help add functionality to a Gatsby
site. Gatsby is designed to be extensible, which means plugins are able to
extend and modify just about everything Gatsby does.

There are two main steps to using a plugin: Installing and configuring. Here's
an example for using the Typography.js plugin.

```sh
npm install --save gatsby-plugin-typography react-typography typography typography-theme-fairy-gates
```

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```


## Data

Data in Gatsby sites can come from anywhere: APIs, databases, CMSs, local files, etc.

Source plugins fetch data from their source. E.g. the filesystem source plugin knows how to fetch data from the file system. The WordPress plugin knows how to fetch data from the WordPress API.

Often, the format of the data you get from source plugins isn’t what you want to use to build your website. Gatsby supports transformer plugins which take raw content from source plugins and transform it into something more usable.


[gatsby]: https://www.gatsbyjs.com/
[gatsby-browser-api]: https://www.gatsbyjs.com/docs/browser-apis/
[gatsby-configuration]: https://www.gatsbyjs.com/docs/gatsby-config/
[gatsby-node-api]: https://www.gatsbyjs.com/docs/node-apis/
[gatsby-ssr-api]: https://www.gatsbyjs.com/docs/ssr-apis/
