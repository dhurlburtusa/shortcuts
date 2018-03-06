# JavaScript Web Workers Notes

Web Workers makes it possible to run a script operation in a background thread
separate from the main execution thread of a web application. 

Workers run in another global context that is different from the current window.
This context is represented by either a `DedicatedWorkerGlobalScope` object or a
`SharedWorkerGlobalScope`.

You can run whatever code you like inside the worker thread, with some
exceptions.  For example, you can't directly manipulate the DOM from inside a
worker.  But you can use a large number of items available under `window`,
including `WebSockets`, and data storage mechanisms like `IndexedDB`.  Workers
may in turn spawn new workers.  In addition, workers may use `XMLHttpRequest`.

Data is sent between workers and the main thread via a system of messages — both
sides send their messages using the `postMessage()` method, and respond to
messages via an `onmessage` event handler.

See https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API and
https://developer.mozilla.org/en-US/docs/Web/API/Worker for details.
