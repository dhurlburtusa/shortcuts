# React Redux Notes


## Snippets

```js
import { connect } from 'react-redux'

// ...

const ReduxAwareComponent = connect(
  (state, ownProps) => {
    return {
    };
  },
  (dispatch, ownProps) => {
    return {
    };
  }
)(Component);

export default ReduxAwareComponent
```
