# Webpack Loader Notes

A very large selection of webpack loaders are available.  Here, we'll explain
some of the most popular and also explain the difference between loaders that
provide similar or closely related features.


## Babel Loader

Transpiles JavaScript files using Babel.


## CSS Loader

Interprets and resolves `@import` and `url()` in CSS.


## Expose Loader

Adds modules to the global object.  Useful when you need `window.jQuery`
available in your HTML document.


## File Loader

Emits the module as a file to the output and returns its public URL.


## Raw Loader

Allows importing of file contents as a string into a JavaScript file.


## Sass Loader

Compiles .sass/.scss files to CSS.


## Style Loader

Embeds CSS into JavaScript which when run injects the CSS into the DOM via a
dynamically generated `<style>` tag.


## URL Loader

Returns a base64 encoded DataURL if the file is smaller than a specified byte
limit.  Otherwise, handling it delegated to another loader.  By default, the
fallback loader is a file-loader.
