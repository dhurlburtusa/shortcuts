# i18next Notes

[i18next] is an internationalization framework written in JavaScript.

Its features include the standard i18n features (context, format, interpolation, plurals) plus much more.\

Learn once - use everywhere. The community made integrations for frameworks like react.js, angular.js, vue.js and many more.


## Installation

```sh
npm install --save i18next
```


## Basic Usage

```js
import i18next from 'i18next'


i18next.init({
  // ...
}, (err, t) => {
  if (err) {
    // Handle error:
    console.error(err)
    return
  }
  
  // Perform whatever task requiring successful initialization of i18next.
})
```

Notice that we have not performed any instantiation.  The `i18next` module that
we imported is actually an instance of an internal class in the `i18next` module.
What's nice about this is that the object imported is effectively a globally
available object.  When other modules import from i18next, they will be importing
the same object instance that was initialized in the above module.


[i18next]: https://www.i18next.com/
