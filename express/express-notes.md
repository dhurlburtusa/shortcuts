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
