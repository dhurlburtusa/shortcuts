# Stencil Notes

Stencil is a compiler that generates Web Components (more specifically, Custom Elements) and builds high performance web apps.

Stencil takes features such as

- Virtual DOM
- Async rendering (inspired by React Fiber)
- Reactive data-binding
- TypeScript
- JSX
- Static Site Generation (SSG)

and then generates standards-based Web Components and web apps with these features baked in.

Since Stencil generates standards-compliant web components, they can work with many popular frameworks right out of the box, and can be used without a framework because they are just web components. Stencil also enables a number of key capabilities on top of Web Components, in particular, prerendering, and objects-as-properties (instead of just strings).

However, Web Components by themselves weren't enough. Building fast web apps required innovations that were previously locked up inside of traditional web frameworks. Stencil was built to pull these features out of traditional frameworks and bring them to the fast emerging Web Component standard.


## CLI

See https://stenciljs.com/docs/cli for details.

### Component Generator

The Stencil CLI can generate new components for you. If you used one of the starters, you can simply run the `generate` npm script in your project, which will start the interactive generator.

```sh
npm run generate
```

Or you can invoke the Stencil CLI directly with the `generate` command (`g` for short). If you don't have `stencil` installed globally, prefix the command with `npx`.

```sh
npx stencil generate
```

All components will be generated within the src/components folder. Within that, a folder will be created with the same name as the component tag name you provided, and within that folder the files will be generated.
