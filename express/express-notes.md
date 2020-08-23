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
