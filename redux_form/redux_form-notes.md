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
    const { handleSubmit, pristine, reset, submitting } = this.props;
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
      <button type="submit" disabled={ pristine || submitting }>
        Submit
      </button>
      <button type="button" disabled={ pristine || submitting } onClick={ reset }>
        Reset
      </button>
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


## Field Validation

There are two ways to provide synchronous client-side validation to your form.

The first is to provide redux-form with a validation function that takes an
object of form values and returns an object of errors.  This is done by
providing the validation function to the decorator as a config parameter, or
to the decorated form component as a prop.

```js
MyForm = reduxForm({
  form: 'my',
  // The following act as defaults for the validate and warn properties
  // if they are not explicitly passed to the decorated component.
  validate: (values) => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less'
    }
    return errors
  },
  warn = values => {
    const warnings = {}
    if (values.age < 19) {
      warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
  },
})(MyForm)

export default MyForm
```

```js
const validate = (values) => { ... }
const warn = (values) => { ... }
<MyForm validate={ validate } warn={ warn }/>
```

The second is to use individual validators for each field.

```js
const required = (value) => value ? undefined : 'Required'
const maxLength15 = (value) => ...
const ofExtremeCriminal = (value) => ...
<Field
  name="name"
  component="input"
  type="text"
  validate={[required, maxLength15]}
  warn={ofExtremeCriminal}
/>
```
