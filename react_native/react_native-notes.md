# React Native Notes

## Components

Components in React Native are very much like React components.

```jsx
import React from 'react'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { ... } = this.props;
    const { ... } = this.state;

    return (
      ...
    )
  }

}

export default App
```

The elements/components returned/used in the `render` method is the primary
difference.


## Misc (To be Categorized)

* All dimensions in React Native are unitless, and represent density-independent
  pixels.
* Flexbox works the same way in React Native as it does in CSS on the web, with a
  few exceptions.  The defaults are different, with `flexDirection` defaulting to
  `column` instead of `row`, and the `flex` parameter only supporting a single
  number.
* Components learned about so far
  + Alert
  + Button
  + FlatList
  + Image
  + ScrollView
  + SectionList
  + Text
  + TextInput
  + View
