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
        |-- 404.js
    |-- /templates
    |-- html.js
|-- /static
|-- gatsby-browser.js
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
```

See https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/ for details.

**`.cache`**

_Automatically generated._ This folder is an internal cache created automatically by Gatsby. The files inside this folder are not meant for modification. Should be added to the `.gitignore` file if not added already.

**`plugins`**

This folder hosts any project-specific plugins that aren't published as an npm package. Check out the [plugin docs](https://www.gatsbyjs.com/docs/plugins/) for more detail.

**`public`**

_Automatically generated._ The output of the build process will be exposed inside this folder. Should be added to the `.gitignore` file if not added already.

**`src`**

This directory will contain all of the code related to what you will see on the frontend of your site, like your site header, or a page template.

**`src/pages`**

Components under `src/pages` become pages automatically with paths based on their file name. Check out the [pages recipes](https://www.gatsbyjs.com/docs/recipes/pages-layouts) for more detail.

**`src/templates`**

Contains templates for programmatically creating pages. Check out the [templates docs](https://www.gatsbyjs.com/docs/conceptual/building-with-components/#page-template-components) for more detail.

**`static`**

If you put a file into the `static` folder, it will not be processed by webpack. Instead it will be copied into the `public` folder untouched. Check out the [assets docs](https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/#adding-assets-outside-of-the-module-system) for more detail.

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

See [gatsby-config.template.js](gatsby-config.template.js) for a template.

**`gatsby-node.js`**

This file is where Gatsby expects to find any usage of the [Gatsby node
APIs][gatsby-node-api] (if any).  These allow customization/extension of default
Gatsby settings affecting pieces of the site build process.

See [gatsby-node.template.js](gatsby-node.template.js) for a template.

**`gatsby-ssr.js`**

This file is where Gatsby expects to find any usage of the [Gatsby server-side
rendering APIs][gatsby-ssr-api] (if any).  These allow customization of default
Gatsby settings affecting server-side rendering.

**`src/html.js`**

For custom configuration of default `.cache/default_html.js`.

Allows modification of the `<head>` metadata and general structure of the document. Allows adding external links.

See https://www.gatsbyjs.com/docs/custom-html/.

**`src/pages/404.js`**

A custom 404 page.

Note: Gatsby creates this page by default -- there is no need to configure it in `gatsby-node.js`.

Note: `src/pages/404.js` is just a common location to declare this page. But you may save it elsewhere if it matches ^\/?404\/?$.

See https://www.gatsbyjs.com/docs/how-to/adding-common-features/add-404-page/.


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


## Uncategorized

### Environment Variables

- GATSBY_GRAPHQL_IDE
  
  ```sh
  GATSBY_GRAPHQL_IDE=playground gatsby develop
  ```

### Using a Page Query

See https://www.gatsbyjs.com/docs/how-to/querying-data/page-query for details.

### Recipes

See https://www.gatsbyjs.com/blog/2020-04-15-announcing-gatsby-recipes/.
