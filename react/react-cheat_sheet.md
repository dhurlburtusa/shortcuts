# React Cheat Sheet

See https://facebook.github.io/react/ for details.

React is a declarative, efficient, and flexible JavaScript library for
building user interfaces.


## Ecosystem

Here is a list of some other projects that work well with React.

* [Flow](https://flowtype.org/)
* [Flux](https://facebook.github.io/flux/)
* [Immutable](https://facebook.github.io/immutable-js/)
* [React Native](https://facebook.github.io/react-native/)
* [React Router](https://github.com/reactjs/react-router)
* [React Router Redux](https://github.com/reactjs/react-router-redux)
* [Redux](http://redux.js.org/)
* [Redux Logger](https://github.com/evgenyrodionov/redux-logger)
* [Redux Thunk](https://github.com/gaearon/redux-thunk)


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
* https://github.com/Microsoft/TypeScript-React-Starter
* https://github.com/FountainJS/generator-fountain-react


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

See https://facebook.github.io/react/docs/introducing-jsx.html for more
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

```jsx
import PropTypes from 'prop-types';
import React from 'react';

/**
 * See https://facebook.github.io/react/docs/react-component.html for up-to-date
 * information about components.
 */
class DerivedComponent extends React.Component {

  /*
     ## Lifecycle Stages

     ### Initialization:

     * constructor(props)
     * componentWillMount()
     * render()
     * componentDidMount()

     ### Prop Changes:

     The following methods are called when the component's properties have changed:

     * componentWillReceiveProps(nextProps)
     * shouldComponentUpdate(nextProps, nextState)

     and the following methods are called if `shouldComponentUpdate` returns
     `true`.

     * componentWillUpdate(nextProps, nextState)
     * render()
     * componentDidUpdate(prevProps, prevState)

     ### State Changes:

     The following method is called when the component's state has changed:

     * shouldComponentUpdate(nextProps, nextState)

     and the following methods are called if `shouldComponentUpdate` returns
     `true`.

     * componentWillUpdate(nextProps, nextState)
     * render()
     * componentDidUpdate(prevProps, prevState)

     ### Unmounting:

     * componentWillUnmount()
   */

  /*
     ## Inherited methods

     ### forceUpdate

     ```js
     this.forceUpdate();
     ```

     ### setState

     ```js
     this.setState(partialOrFullNewState); // e.g. this.setState({ foo: 'bar' });
     ```

     ```js
     this.setState((prevState, props) => {
       ...
       return partialOrFullNewState;
     });
     ```
  */

  /*
   * The construstor is the right place to initialize state.
   *
   * It's okay to initialize state based on `props`.  This effectively "forks" the
   * `props` and sets the state with the initial props.
   *
   * ```js
   *   constructor(props) {
   *     super(props);
   *     this.state = {
   *       color: props.initialColor
   *     };
   *   }
   * ```
   *
   * However, beware of this pattern, as state won't be up-to-date when any `props`
   * update.  Instead of syncing props to state, you often want to lift the state
   * up.  See https://facebook.github.io/react/docs/lifting-state-up.html for how
   * to lift the state.
   *
   * If you "fork" `props` by using them for state, you might also want to
   * implement `componentWillReceiveProps(nextProps)` to keep the state up-to-date
   * with them.  But lifting state up is often easier and less bug-prone.
   *
   * Called during the Initialization stage.
   */
  constructor(props) {
    super(props);
    console.log(`${this.__name__}#constructor(props)`);
  }

  /*
   * This method is invoked immediately before mounting occurs.  It is called
   * before `render`, therefore setting state synchronously in this method will not
   * trigger a re-rendering.  Avoid introducing any side-effects or subscriptions
   * in this method.
   *
   * This is the only lifecycle hook called on server rendering.  Generally, we
   * recommend using the constructor instead.
   *
   * Called during the Initialization stage.
   */
  componentWillMount() {
    console.log(`${this.__name__}#componentWillMount()`);
    // Note: this.props, this.state, and this.setState may be used here.
  }

  /*
   * The `render` method should be pure, meaning that it does not modify component
   * state, it returns the same result each time it's invoked, and it does not
   * directly interact with the browser.  If you need to interact with the browser,
   * perform your work in `componentDidMount()` or the other lifecycle methods
   * instead.  Keeping `render` pure makes components easier to think about.
   *
   * Called during the Initialization, Prop Changes, and State Changes stages.
   */
  render() {
    console.log(`${this.__name__}#render()`);
    return null;
  }

  /*
   * This method is invoked immediately after a component is mounted.
   * Initialization that requires DOM nodes should go here.  If you need to load
   * data from a remote endpoint, this is a good place to instantiate the network
   * request.  Setting state in this method will trigger a re-rendering.
   *
   * Called during the Initialization stage.
   */
  componentDidMount() {
    console.log(`${this.__name__}#componentDidMount()`);
  }

  /*
   * This method is invoked before a _mounted_ component receives new props.  If
   * you need to update the state in response to `prop` changes (for example, to
   * reset it), you may compare `this.props` and `nextProps` and perform state
   * transitions using `this.setState` in this method.
   *
   * Note that React may call this method even if the props have not changed, so
   * make sure to compare the current and next values if you only want to handle
   * changes.  This may occur when the parent component causes your component to
   * re-render.
   *
   * React doesn't call `componentWillReceiveProps` with initial props during
   * mounting.  It only calls this method if some of component's props may update.
   * Calling `this.setState` generally doesn't trigger `componentWillReceiveProps`.
   *
   * Called during the Prop Changes stage.
   */
  componentWillReceiveProps(nextProps) {
    console.log(`${this.__name__}#componentWillReceiveProps(nextProps)`);
  }

  /*
   * Use this method to let React know if a component's output is not affected by
   * the current change in state or props.  The default behavior is to re-render on
   * every state change, and in the vast majority of cases you should rely on the
   * default behavior.
   *
   * This method is invoked before rendering when new props or state are being
   * received.  Defaults to `true`.  This method is not called for the initial
   * render or when `forceUpdate` is used.
   *
   * Returning `false` does not prevent child components from re-rendering when
   * their state changes.
   *
   * Currently, if this method returns `false`, then `componentWillUpdate`,
   * `render`, and `componentDidUpdate` will not be invoked.  Note that in the
   * future React may treat `shouldComponentUpdate` as a hint rather than a strict
   * directive, and returning `false` may still result in a re-rendering of the
   * component.
   *
   * If you determine a specific component is slow after profiling, you may change
   * it to inherit from `React.PureComponent` which implements
   * `shouldComponentUpdate` with a shallow prop and state comparison.  If you are
   * confident you want to write it by hand, you may compare `this.props` with
   * `nextProps` and `this.state` with `nextState` and return `false` to tell React
   * the update can be skipped.
   *
   * Called during the Prop Changes and State Changes stages.
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`${this.__name__}#shouldComponentUpdate(nextProps, nextState)`);
    // return super.shouldComponentUpdate(nextProps, nextState);
    return true;
  }

  /*
   * This method is invoked immediately before rendering when new props or state
   * are being received.  Use this as an opportunity to perform preparation before
   * an update occurs.  This method is not called for the initial render.
   *
   * Note that you cannot call `this.setState` here.  If you need to update state
   * in response to a prop change, use `componentWillReceiveProps` instead.
   *
   * Called during the Prop Changes and State Changes stages.
   */
  componentWillUpdate(nextProps, nextState) {
    console.log(`${this.__name__}#componentWillUpdate(nextProps, nextState)`);
  }

  /*
   * This method is is invoked immediately after updating occurs.  This method is
   * not called for the initial render.
   *
   * Use this as an opportunity to operate on the DOM when the component has been
   * updated.  This is also a good place to do network requests as long as you
   * compare the current props to previous props (e.g. a network request may not be
   * necessary if the props have not changed).
   *
   * Called during the Prop Changes and State Changes stages.
   */
  componentDidUpdate(prevProps, prevState) {
    console.log(`${this.__name__}#componentDidUpdate(prevProps, prevState)`);
  }

  /*
   * This method is invoked immediately before a component is unmounted and
   * destroyed.  Perform any necessary cleanup in this method, such as invalidating
   * timers, cancelling network requests, or cleaning up any DOM elements that were
   * created in `componentDidMount` or in `componentDidUpdate`.
   *
   * Called during the Unmounting stage.
   */
  componentWillUnmount() {
    console.log(`${this.__name__}#componentWillUnmount()`);
  }

  _bind(methodNameList) {
    let i, iLen;

    for (i = 0, iLen = methodNameList.length; i < iLen; ++i) {
      let methodName = methodNameList[i];
      if (typeof this[methodName] === 'function') {
        this[methodName] = this[methodName].bind(this);
      }
    }
  }

}

DerivedComponent.defaultProps = Object.freeze({
  foo: 'bar',
  // ...
});

DerivedComponent.propTypes = Object.freeze({
  foo: PropTypes.string.isRequired,
  // ...
});

DerivedComponent.prototype.__name__ = 'DerivedComponent';

```
