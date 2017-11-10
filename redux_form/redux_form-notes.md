# Redux Form Notes

Redux Form allows you to manage your form state in Redux.


## Overview

See https://redux-form.com/7.1.2/docs/gettingstarted.md/#overview for details.


## Basic Usage

**Step 1: Form Reducer**

Add the form reducer to Redux.  The form reducer knows how to handle actions
coming from the form components.

```js
// ./reducers/index.js

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootStateReducer = combineReducers({
  // ...your other reducers here

  // By default, Redux Form expects to find the `formReducer`
  // under the `form` key.
  // See https://redux-form.com/7.1.2/docs/api/reduxform.md/#-code-getformstate-function-code-optional-
  // for how to use a different key.
  form: formReducer
})
```

**Step 2: Form HOC**

```js
import React from 'react'
import { reduxForm } from 'redux-form'

const MyForm = (props) => {
  // The handleSubmit function is injected by Redux Form.
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      { /* form body*/ }
    </form>
  )
}

MyForm = reduxForm({
  // Set a unique name for the form.
  form: 'my',
  // Add other configuration as necessary.
})(MyForm)

export default MyForm
```

The `reduxForm` function makes your form component able to communicate, i.e.
dispatch actions, with the Redux store.

**Step 3: &lt;Field> Components**

The &lt;Field/> component connects each input to the store.  The basic usage
goes as follows:

```js
<Field name="inputName" component="input" type="text" />
```

```js
...
import { Field, reduxForm } from 'redux-form'
...
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      ...
      <button type="submit">Submit</button>
    </form>
...
```

See https://redux-form.com/7.1.2/docs/api/field.md/ for more details on using
the &lt;Field> component.

**Step 4: Handling Form Submission**

```js
import React from 'react'
import MyForm from './MyForm'

class MyPage extends React.Component {
  submit = (values) => {
    // Handle the submitted form values.
  }
  render() {
    return (
      <MyForm onSubmit={this.submit} />
    )
  }
}
```

The Redux Form HOC expects an `onSubmit` callback prop that will be called
with the submitted form values when the form is submitted.
