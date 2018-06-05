# Socket.IO Server Template


```js
import Express from 'express';
import Http from 'http';
import SocketIoServer from 'socket.io';

const PORT = process.env.PORT || 3000;

const app = Express();
const webServer = Http.Server(app);
const socketIoServerOptions = {
  // The following are the default option values.  Update if you need something
  // different.
  origins: '*',
  path: '/socket.io',
  serveClient: true,
  adapter: ..., // Instance of adapter
  parser: ..., // Instance of parser
  // Also accepts options for engine.io.  See
  // https://github.com/socketio/engine.io#methods-1.
};
const socketIoServer = SocketIoServer(webServer, socketIoServerOptions);
const defaultNamespace = socketIoServer.sockets; // Or socketIoServer.of('/')

app.get('/', function (req, res) {
  ...
});

// Log namespace name.
console.log(defaultNamespace.name);

// Optionally register some middleware.  Here we demonstrate requiring authentication.
defaultNamespace.use((socket, next) => {
  if (socket.request.headers.token) {
    return next();
  }
  next(Error('Authetication Error'));
});

// Listen for clients connecting to this namespace.
//
// Note: `'connection'` is a synonym of `'connect'`.
defaultNamespace.on('connect', function (socket) {
  // The socket instance has the following properties (and more):
  //
  // * `id`: string - A unique identifier for the session.
  // * `request`: Request - A reference to the request that originated the underlying
  //   engine.io client.  Useful for accessing request headers.
  // * `room`: Object - A mapping of room names to 

  // Optionally register some middleware.
  socket.use((packet, next) => {
    if (...) {
      return next();
    }
    next(Error('...'));
  });

  console.log('a user connected to the default namespace.');

  // Optionally join a room.
  socket.join('some room', (err) => {
    if (err) {
      ...
      return;
    }
    const roomNames = Object.keys(socket.rooms);
    ...
  });

  // Optionally leave a room.
  socket.leave('some room', (err) => {
    if (err) {
      ...
      return;
    }
    ...
  });

  // Note: The following events are reserved and should not be used as event names by
  // your application:
  //
  // * connect
  // * disconnect
  // * disconnecting
  // * error
  // * newListener
  // * removeListener
  // * ping
  // * pong

  // Listen for some events from the client.
  socket.on('some event', (arg1, arg2, [ackCb]) => {
    ...
    // You may want to do the following during this event:
    //
    // * Join or leave a room. 
    // * Access the database.
    // * Emit some events to entire namespace, entire room, back to client, to
    //   specific client.
    // * Disconnect client from socket.
    ...
    ackCb(...); // Acknowledge.
  });

  socket.on('connect', function (?) {
    // Not sure when and why this is fired.  It is not documented.
  });

  socket.on('disconnect', function (reason) {
    console.log('a user disconnected from this namespace.');
  });

  // The `disconnecting` event is fired when the client is going to be
  // disconnected (but hasn't left its rooms yet).
  socket.on('disconnecting', function (reason) {
    const rooms = Object.keys(socket.rooms);
    ...
  });

  socket.on('error', function (error) {
    ...
  });

  // Fire some events to the client.
  socket.emit('some event', args, [ackCb]);
  socket.emit('some event', args, (data) => {
    console.log(`client acknowledged with: ${data}.`);
  });

  // Disconnects from the client for this namespace.
  let closeConnection = true; // Or false.
  socket.disconnect(closeConnection);
});

// Get a list of client IDs connected to this namespace (across all nodes if
// applicable).
defaultNamespace.clients((err, clientIds) => {
  if (err) throw err;
  ...
});

// Optionally emit an event to all clients in the namespace
defaultNamespace.emit('some event', ...);

defaultNamespace.to('some room').emit(...);

const customNamespace = socketIoServer.of('/custom');
// Do something with namespace.

webServer.listen(3000, function () {
  console.log(`listening on *:${PORT}`);
});
```
