# Express Notes

Express is a minimal and flexible Node.js web application framework that
provides a robust set of features for web and mobile applications.


## Server Creation

There are many ways to setup an Express app server.  Here we will demonstrate
several variations using various integrations.

```js
import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

// TODO: Configure app server.

app.listen(PORT, () => {
  console.log('App server listening on port ${PORT}!');
});
```


## Basic Routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

```js
app.METHOD(PATH, HANDLER)
```

Example

```js
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```


## Serving Static Files

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:

```js
express.static(root, [options])
```

The `root` argument specifies the root directory from which to serve static assets.

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

```js
app.use(express.static('public'))
app.use(express.static('files'))
...
```

Express looks up the files in the order in which you set the static directories with the express.static middleware function.

```js
app.use('/static', express.static('public'))
```


## Special Request Properties

The request object is an instance of [`http.IncomingMessage`](https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_class_http_incomingmessage).
So, it contains all the properties from `http.IncomingMessage` and `stream.Readable`.

| Property      | Description |
| ------------- | ----------- |
| app           | A reference to the Express application. |
| body          | A reference to the parsed (usually) request body. Added by various middleware such as `express.json`. Untrusted. |
| cookies       | A reference to the parsed cookies when using the `cookie-parser` middleware. Untrusted. |
| files         | Reference to uploaded files. Added by middleware such as `multer`. Untrusted. |
| path          | The path part of the request URL. When called from a middleware, the mount point is not included. |
| query         | The parsed query string. It's shape depends on the query parser settings. Untrusted. |
| signedCookies | A reference to the parsed signed-cookies when using the `cookie-parser` middleware. |
| url           | Inherited from `http.IncomingMessage` but may be changed for example when mounting a router. See `req.originalUrl` for the original URL. |
| user          | Usually added by various middleware. |
