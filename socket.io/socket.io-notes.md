# Socket.IO Notes

From https://socket.io:

> Socket.IO enables real-time bidirectional event-based communication.  It works
> on every platform, browser or device, focusing equally on reliability and speed.


## Overview

A SocketIO server consists of one or more namespaces, each of which represents a
pool of connected sockets.  Within each namespace, you can define arbitrary
channels, known as rooms, that sockets can `join` and `leave`.

**Default Namespace**

The default namespace is called '/' and is accessible via the `sockets` property
on your SocketIO server instance.

```
import SocketIoServer from 'socket.io';

const socketIoServer = SocketIoServer(webServer);
const defaultNamespace = socketIoServer.sockets; // Or socketIoServer.of('/')
```

**Custom Namespaces**

A custom namespace can be created from your SocketIO server instance.

```
import SocketIoServer from 'socket.io';

const socketIoServer = SocketIoServer(webServer);
const customNamespace = socketIoServer.of('/custom');
```

Note: Calling `socketIoServer.of` with the same path will immediately return a
reference to the previously instantiated namespace.

**Rooms**

Sockets may join a room within a namespace.  By default sockets automatically
join a room identified by the socket's ID.

TODO: Confirm whether a room with the same name in different namespaces act as a
single room or separate rooms.


## Parsers

Parsers are used to parse the payload sent along a socket.  Various parsers are
available.  See
https://github.com/socketio/socket.io/tree/master/examples/custom-parsers for
details.

Note: The client and server must use the same parser type for communication to
work.


## Misc

Socket.IO is composed of two parts:

* A server that integrates with (or mounts on) the Node.JS HTTP Server:
  `socket.io`
* A client library that loads on the browser side: `socket.io-client`
* If you don't care about reconnection logic and such, take a look at [Engine.IO],
  which is the WebSocket semantics transport layer Socket.IO uses.


[Engine.IO]: https://github.com/socketio/engine.io
