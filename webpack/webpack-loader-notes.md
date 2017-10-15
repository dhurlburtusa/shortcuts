# Webpack Loader Notes

A very large selection of webpack loaders are available.  Here, we'll explain
some of the most popular and also explain the difference between loaders that
provide similar or closely related features.


## CSS Loader

Interprets and resolves `@import` and `url()` in CSS.


## File Loader

Emits the module as a file to the output and returns its public URL.


## Style Loader

Embeds CSS into JavaScript which when run injects the CSS into the DOM via a
dynamically generated `<style>` tag.


## URL Loader

Returns a base64 encoded DataURL if the file is smaller than a specified byte
limit.  Otherwise, handling it delegated to another loader.  By default, the
fallback loader is a file-loader.
