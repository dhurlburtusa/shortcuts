# WebAssembly Notes

WebAssembly is a type of code that can be run in modern web browsers. It is a low-level assembly-like language with a compact binary format that runs with near-native performance and provides languages such as C, C++, C#, and Rust with a compilation target so that they can run on the web.

WebAssembly is designed to complement and run alongside JavaScript — [using the WebAssembly JavaScript APIs](https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API), you can [load WebAssembly modules into a JavaScript app](https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Loading_and_running) and share functionality between the two.

WebAssembly provides a way for code written in multiple languages to run on the web at near-native speed, and it enables client apps to run on the web that previously could not.

See https://webassembly.org/ and https://developer.mozilla.org/en-US/docs/WebAssembly.

## WebAssembly Goals

* Be fast, efficient, and portable.
* Be readable and debuggable.
* Keep secure (see https://webassembly.org/docs/security/).
* Don't break the web.

See https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Concepts#webassembly_goals and https://webassembly.org/docs/high-level-goals/ for details.

## WebAssembly Specifications

* Core: https://webassembly.github.io/spec/core/
* Embedder:
  * JavaScript Embedding: https://webassembly.github.io/spec/js-api/
  * Web Embedding: https://webassembly.github.io/spec/web-api/
* Metadata: https://webassembly.github.io/spec/metadata/code/

See https://webassembly.github.io/spec/.
