# Enzyme Notes

Enzyme is a JavaScript Testing utility for React that makes it easier to
assert, manipulate, and traverse your React Components' output.

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API
for DOM manipulation and traversal.


## Installation

You will need to install Enzyme along with an adapter corresponding to a
version of React.

For example:

```sh
npm i --save-dev enzyme enzyme-adapter-react-16
```

See http://airbnb.io/enzyme/ for a list of other adapters.

Each adapter may have additional peer dependencies which you will need to
install as well.  For instance, `enzyme-adapter-react-16` has peer
dependencies on `react`, `react-dom`, and `react-test-renderer`.

```sh
npm i --save react react-dom
npm i --save-dev react-test-renderer
```

Finally, you need to configure Enzyme to use the adapter you want it to use.
To do this, you can use the top level `configure(...)` API.

```js
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})
```
