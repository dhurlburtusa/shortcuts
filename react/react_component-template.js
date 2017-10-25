// @flow
import React from 'react'


type DefaultProps = {
  // ...
}

type Props = {
  // ...
}

type State = {
  // ...
}

/**
 * See https://facebook.github.io/react/docs/react-component.html for up-to-date
 * information about components.
 */
class DerivedComponent<DefaultProps, Props, State> extends React.Component<DefaultProps, Props, State> {

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
     this.forceUpdate()
     ```

     ### setState

     ```js
     this.setState(partialOrFullNewState) // e.g. this.setState({ foo: 'bar' })
     ```

     ```js
     this.setState((prevState, props) => {
       ...
       return partialOrFullNewState
     })
     ```
  */

  static defaultProps: DefaultProps

  __name__: string
  props: Props
  state: State

  /*
   * The construstor is the right place to initialize state.
   *
   * It's okay to initialize state based on `props`.  This effectively "forks" the
   * `props` and sets the state with the initial props.
   *
   * ```js
   *   constructor(props) {
   *     super(props)
   *     this.state = {
   *       color: props.initialColor
   *     }
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
  constructor(props: Props) {
    super(props)
    console.log(`${this.__name__}#constructor(props)`)
  }

  /**
   * This method is invoked after a JavaScript error is thrown during rendering, in
   * lifecycle methods, and in constructors of the whole tree below them.
   *
   * NOTE: This method is not invoked in the following scenarios:
   *
   * * Event handlers.
   * * Asynchronous code (e.g. `setTimeout` or `requestAnimationFrame` callbacks).
   * * Server-side rendering.
   *
   * Only use this method in components that should act as "error boundaries".
   *
   * This method is new in React v16.
   */
  componentDidCatch(error, info) {
    console.log(`${this.__name__}#componentDidCatch(error, info)`)
    // It may be useful to log the error and display a fallback UI.
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
    console.log(`${this.__name__}#componentWillMount()`)
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
    console.log(`${this.__name__}#render()`)
    return null
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
    console.log(`${this.__name__}#componentDidMount()`)
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
  componentWillReceiveProps(nextProps: Props) {
    console.log(`${this.__name__}#componentWillReceiveProps(nextProps)`)
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
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log(`${this.__name__}#shouldComponentUpdate(nextProps, nextState)`)
    // return super.shouldComponentUpdate(nextProps, nextState)
    return true
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
  componentWillUpdate(nextProps: Props, nextState: State) {
    console.log(`${this.__name__}#componentWillUpdate(nextProps, nextState)`)
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
  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log(`${this.__name__}#componentDidUpdate(prevProps, prevState)`)
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
    console.log(`${this.__name__}#componentWillUnmount()`)
  }

  _bind(methodNameList) {
    let i, iLen

    for (i = 0, iLen = methodNameList.length; i < iLen; ++i) {
      let methodName = methodNameList[i]
      if (typeof this[methodName] === 'function') {
        this[methodName] = this[methodName].bind(this)
      }
    }
  }

}

DerivedComponent.prototype.__name__ = 'DerivedComponent'

export default DerivedComponent
