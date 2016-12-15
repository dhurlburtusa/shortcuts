# React Cheat Sheet


## HTML

The following demonstrates what is needed to use React in the browser without needing a build process in place.  This
can be useful for experimenting with React.

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

See https://facebook.github.io/react/docs/introducing-jsx.html for more details.

JSX is a syntax extension to JavaScript.  It is like a template language, but it comes with the full power of
JavaScript.

It is safe to embed user input in JSX.  By default, React DOM escapes any values embedded in JSX before rendering
them.

You can embed any JavaScript expression in JSX by wrapping it in curly braces.

```jsx
const foo = 1;
const bar = 2;

const element = (
  <span>{foo + bar}</span>
);
```

**Specifying Attributes with JSX**

React DOM uses camelCase property naming convention instead of HTML attribute names.

```jsx
var nextIndex = 0;
const element = <div className="..." tabIndex={nextIndex}>...</div>;
```
