# Socket.IO Notes

From https://socket.io:

> Socket.IO enables real-time bidirectional event-based communication.  It works
> on every platform, browser or device, focusing equally on reliability and speed.


## Misc

Socket.IO is composed of two parts:

* A server that integrates with (or mounts on) the Node.JS HTTP Server:
  `socket.io`
* A client library that loads on the browser side: `socket.io-client`
* If you don't care about reconnection logic and such, take a look at [Engine.IO],
  which is the WebSocket semantics transport layer Socket.IO uses.


[Engine.IO]: https://github.com/socketio/engine.io
