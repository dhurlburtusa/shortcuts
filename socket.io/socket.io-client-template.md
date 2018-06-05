# Socket.IO Client Template

```html
<script crossorigin="anonymous" integrity="sha256-ji09tECORKvr8xB9iCl8DJ8iNMLriDchC1+p+yt1hSs=" src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"></script>
<script>
  (function (global) {
    const SocketIoClient = io;
    // URL of a particular namespace.  
    const socketUrl = 'http://localhost';
    const socketOptions = {
      // The following are the default option values.  Update if you need something
      // different.
      forceNew: false,
      // Manager options:
      autoConnect: true,
      path: '/socket.io',
      parser: ..., // Instance of `socket.io-parser`
      query: null,
      randomizationFactor: 0.5,
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 2000,
      // Also accepts options for engine.io-client.  See
      // https://github.com/socketio/engine.io-client#methods.
    };
    const socket = SocketIoClient(socketUrl, socketOptions);

    // Fired upon a connection including a successful reconnection.
    socket.on('connect', function () {
      socket.send('Thanks for letting me connect!');
      ...

      // Note: You should register event handlers outside of connect, so they
      // are not registered again on reconnection.

      // `socket.id`: An unique identifier for the socket session.  Set after the
      // `connect` event is triggered and updated after the `reconnect` event.
      console.log(socket.id);
    });

    socket.on('connect_error', function (error) {
      // TODO: Handle connection error.
    });

    socket.on('connect_timeout', function (timeout) {
      // TODO: Handle timeout.
    });

    // `reason` will be either `'io server disconnect'` or
    // `'io client disconnect'`.
    socket.on('disconnect', function (reason) {
      ...
    });

    socket.on('error', function (error) {
      // TODO: Handle error.
    });

    socket.on('reconnect', function (attemptNumber) {
      ...
    });

    socket.on('reconnect_attempt', function (attemptNumber) {
      ...
    });

    socket.on('reconnecting', function (attemptNumber) {
      ...
    });

    socket.on('reconnect_error', function (error) {
      // TODO: Handle connection error.
    });

    // Fired when couldn't reconnect within `reconnectionAttempts`.
    socket.on('reconnect_failed', function () {
      // TODO: Handle situation.
    });

    socket.on('ping', function () {
      // ...
    });

    socket.on('pong', function (latencyMs) {
      // ...
    });

    socket.on('some event', function (arg1, arg2) {
      ...
    });

    socket.on('some event', function (arg1, arg2, ack) {
      ...
      ack(response);
    });

    // See https://socket.io/docs/emit-cheatsheet/ for extensive list of
    // ways to emit.
    socket.emit('some event', args);
    socket.emit('some event', args, function ack(response) {
      // Do something with server response.
    });

    socket.send(args);
    socket.send(args, function (response) {
      // Do something with server response.
    });

    socket.disconnect();
  })(this || self);
</script>
```


## Links

* [Emit Cheat Sheet](https://socket.io/docs/emit-cheatsheet/)
* [socket.io-parser](https://github.com/socketio/socket.io-parser)
