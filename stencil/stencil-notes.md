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


## Component API

The whole API provided by stencil can be condensed in a set of decorators, lifecycles hooks, and others.

### Decorators

Decorators are a pure compiler-time construction used by stencil to collect all the metadata about a component, the properties, attributes and methods it might expose, the events it might emit or even the associated stylesheets. Once all the metadata has been collected, all the decorators are removed from the output, so they don't incur in any runtime overhead.

- `@Component()` declares a new web component
- `@Prop()` declares an exposed property/attribute
- `@State()` declares an internal state of the component
- `@Watch()` declares a hook that runs when a property or state changes
- `@Element()` declares a reference to the host element
- `@Method()` declares an exposed public method
- `@Event()` declares a DOM event the component might emit
- `@Listen()` listens for DOM events

### Lifecycle Hooks

- `connectedCallback()`:
- `disconnectedCallback()`:
- `componentWillLoad()`:
- `componentDidLoad()`:
- `componentShouldUpdate(newValue, oldValue, propName): boolean`:
- `componentWillRender()`:
- `componentDidRender()`:
- `componentWillUpdate()`:
- `componentDidUpdate()`:
- `render()`:

### Other

- `Host`: Host is a functional component that can be used at the root of the render function to set attributes and event listeners to the host element itself.
- `h()`: Used within `render()` to turn the JSX into Virtual DOM elements.
- `readTask()`: Schedules a DOM-read task. The provided callback will be executed in the best moment to perform DOM reads without causing layout thrashing.
- `writeTask()`: Schedules a DOM-write task. The provided callback will be executed in the best moment to perform DOM mutations without causing layout thrashing.
- `forceUpdate()`: Schedules a new render of the given instance or element even if no state changed. Notice `forceUpdate()` is not synchronous and might perform the DOM render in the next frame.
- `getAssetPath()`: Gets the path to local assets.
- `setMode()`:
- `getMode()`:
- `getElement():`


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

All components will be generated within the `src/components` folder. Within that, a folder will be created with the same name as the component tag name you provided, and within that folder the files will be generated.
