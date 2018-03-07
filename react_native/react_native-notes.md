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

### Styling

With RN, you style your component using the `style` prop.  This prop expects a
plain object or an array of plain objects where the styles in the last object
take precedence.

Style objects can be organized with help from [`StyleSheet`][rn-stylesheet].

```jsx
const styles = StyleSheet.create({
  root: { ... },
  title: { ... },
  ...,
})

  ...
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>...</Text>
      </View>
    )
  }
  ...
```


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


[rn-stylesheet]: http://facebook.github.io/react-native/docs/stylesheet.html
