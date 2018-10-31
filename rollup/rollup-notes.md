# Rollup Notes

Note: JavaScript only -- does not handle CSS, HTML, images, etc. Great for JS
libraries.

```js
npm install --global rollup
```

**rollup.config.js**

```js
const config = {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'es',
  },
};

export default config;
```
