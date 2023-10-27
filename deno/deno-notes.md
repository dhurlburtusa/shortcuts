# Deno Notes

Deno is a JavaScript, TypeScript, and WebAssembly runtime with secure defaults and a great developer experience. It's built on V8, Rust, and Tokio.

Deno is free and open source software under the MIT license.

Deno aims to provide a browser-like programming environment, implementing web standard APIs that exist in front-end JavaScript.

A major feature of Deno is runtime security by default, meaning that you as the developer must explicitly allow your code to access potentially sensitive APIs like file system access, network connectivity, and access to environment variables.

Note that file extensions are required when importing modules - import logic in Deno works as it does in the browser, where you would include the full file name of your imports.
