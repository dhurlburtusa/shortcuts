# Socket.IO Server Template


```js
import Express from 'express';
import Http from 'http';
import SocketIoServer from 'socket.io';

const PORT = process.env.PORT || 3000;

const app = Express();
const webServer = Http.Server(app);
const socketIoServer = SocketIoServer(webServer);
const defaultNamespace = socketIoServer.sockets

app.get('/', function (req, res) {
  ...
});

defaultNamespace.on('connect', function (socket) {
  console.log('a user connected to the default namespace.');
});

webServer.listen(3000, function () {
  console.log(`listening on *:${PORT}`);
});
```
