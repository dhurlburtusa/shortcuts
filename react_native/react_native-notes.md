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

**Layout Props**

A very large subset of CSS properties are recognized for layout.  The following is
a grouped list of these properties.

* `bottom`, `direction`, `end`, `left`, `position`, `right`, `start`, `top`, `zIndex`.
* `display`, `overflow`.
* `alignContent`, `alignItems`, `alignSelf`, `flex`, `flexBasis`, `flexDirection`,
  `flexGrow`, `flexShrink`, `flexWrap`, `justifyContent`.
* `margin`, `marginBottom`, `marginEnd`, `marginHorizontal`, `marginLeft`,
  `marginRight`, `marginStart`, `marginTop`, `marginVertical`.
* `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `width`, `height`.
* `borderBottomWidth`, `borderEndWidth`, `borderLeftWidth`, `borderRightWidth`,
  `borderStartWidth`, `borderTopWidth`, `borderWidth`
* `padding`, `paddingBottom`, `paddingEnd`, `paddingHorizontal`, `paddingLeft`,
  `paddingRight`, `paddingStart`, `paddingTop`, `paddingVertical`.

See http://facebook.github.io/react-native/docs/layout-props.html for the
complete list.


## Networking

RN supports `Fetch`, `WebSocket`, and `XMLHttpRequest`.


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

**Platform-Specific Extensions**

Platform-specific code may be split into separate files with `.ios.` or
`.android.` extensions.  RN will load the relevant platform file when required
from other components.  For example, say you have the following files in your
project: `BigButton.ios.js` and `BigButton.android.js`.  You can then require
the component as follows:

```jsx
import BigButton from './BigButton'
```


[rn-stylesheet]: http://facebook.github.io/react-native/docs/stylesheet.html
