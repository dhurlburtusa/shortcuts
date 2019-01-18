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
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
|-- gatsby-browser.js
```

See https://www.gatsbyjs.org/docs/gatsby-project-structure/ for details.


[gatsby]: https://www.gatsbyjs.org/
