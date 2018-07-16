# React Notes

See https://reactjs.org/ for details.

React is a declarative, efficient, and flexible JavaScript library for
building user interfaces.


## Ecosystem

Here is a list of some other projects that work well with React.

* [Classnames](https://www.npmjs.com/package/classnames)
* [Flow](https://flowtype.org/)
* [Flux](https://facebook.github.io/flux/)
* [Immutable](https://facebook.github.io/immutable-js/)
* [Isomorphic Fetch](https://www.npmjs.com/package/isomorphic-fetch)
* [prop-types](https://www.npmjs.com/package/prop-types)
* [React Bootstrap](https://www.npmjs.com/package/react-bootstrap)
* [React Intl](https://www.npmjs.com/package/react-intl)
* [React Loadable](https://www.npmjs.com/package/react-loadable)
* [React Native](https://facebook.github.io/react-native/)
* [react-redux](https://github.com/reactjs/react-redux)
* [React Router](https://github.com/reactjs/react-router)
* [Redux](http://redux.js.org/)
* [redux-actions](https://redux-actions.js.org/)
* [redux-devtools](https://github.com/gaearon/redux-devtools)
* [Redux Logger](https://github.com/evgenyrodionov/redux-logger)
* [redux-promise](https://github.com/acdlite/redux-promise)
* [Redux Thunk](https://github.com/gaearon/redux-thunk)
* [reselect](https://github.com/reactjs/reselect)
* [Universal Router](https://www.npmjs.com/package/universal-router)


## Substitutes

There are a few substitutes or drop-in replacements for React.  Most are
designed to contain only the most common functionality.  Some offer a little
bit more functionality or niceties.  Some are designed for performance.

* [Interno](https://infernojs.org/)
* [Preact](https://preactjs.com/)
* [react-lite](https://github.com/Lucifier129/react-lite)


## Project Setup

There are many ways to setup a React project.  See the following for details.

* https://github.com/facebookincubator/create-react-app
* https://github.com/dhurlburtusa/react-starter-kit
* https://github.com/kriasoft/react-starter-kit
* https://github.com/Microsoft/TypeScript-React-Starter (Not many changes since May 2017)
* https://github.com/FountainJS/generator-fountain-react (No updates since April 2017)
* https://github.com/ctrlplusb/react-universally (No updates since Oct 2017)


## HTML

The following demonstrates what is needed to use React in the browser without
needing a build process in place.  This can be useful for experimenting with
React.

### Dependencies

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <!--script crossorigin="anonymous" integrity="sha256-QN/9vLGG9UsP22wdhBSels8EG6uLL4keGBr6LSkzVkM=" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react.min.js"></script-->
    <script crossorigin="anonymous" integrity="sha256-Ts/ugRJsJSTNoEo7mI4RNnNloSCw+ctm4ft8V0x/SUg=" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react.js"></script>
    <!--script crossorigin="anonymous" integrity="sha256-xILqnGjl9PnNr5R9qqxrk894h/RY5H+4kpk6dNEkz6Q=" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react-dom.min.js"></script-->
    <script crossorigin="anonymous" integrity="sha256-wOXsmc3/F0mnd8nrFf9RjyeImU8O9uhah1vLdYhUPe4=" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react-dom.js"></script>
    <!--script crossorigin="anonymous" integrity="sha256-zSpX/F9KKuk1nLBq2vygsdDm6QrSbVdn5lteMkdzWdk=" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js"></script-->
    <script crossorigin="anonymous" integrity="sha256-rHXAjVk56UKw0oJTIGJx/r0VWSBkkDdVtXy7NsdAC0c=" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.js"></script>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

### Embedded JSX

```html
    ...
    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```

### External JSX

```html
    ...
    <script type="text/babel" src="src/es6-code.js"></script>
  </body>
</html>
```


## JSX

See https://reactjs.org/docs/introducing-jsx.html for more
details.

JSX is a syntax extension to JavaScript.  It is like a template language, but
it comes with the full power of JavaScript.

It is safe to embed user input in JSX.  By default, React DOM escapes any
values embedded in JSX before rendering them.

You can embed any JavaScript expression in JSX by wrapping it in curly braces.

```jsx
const foo = 1;
const bar = 2;

const element = (
  <span>{foo + bar}</span>
);
```

**Specifying Attributes with JSX**

React DOM uses camelCase property naming convention instead of HTML attribute
names.

```jsx
var nextIndex = 0;
const element = <div className="..." tabIndex={nextIndex}>...</div>;
```


## Components


**Template**

See https://github.com/dhurlburtusa/shortcuts/blob/master/react/react_component-template.js


## Portals

Portals provide a first-class way to render children into a DOM node that
exists outside the DOM hierarchy of the parent component.

Portals are created using [`ReactDOM.createPortal`][createPortal].

```js
let portal = ReactDOM.createPortal(child, container)
```


## Testing

**Useful Links**

* https://reactjs.org/docs/test-utils.html
* https://reactjs.org/docs/shallow-renderer.html
* https://reactjs.org/docs/test-renderer.html
* https://facebook.github.io/jest/docs/en/tutorial-react.html
* http://airbnb.io/enzyme/



[createPortal]: https://reactjs.org/docs/react-dom.html#createportal
