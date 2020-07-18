# Passport Notes

Passport is authentication middleware for Node.js.  It is designed to serve a
singular purpose: authenticate requests.

Since there are dozens of ways to authenticate, Passport doesn't have all of
these built in.  Passport calls these ways strategies.  Before Passport can do
authentication, it must be configured with the strageties you want to use.

See http://www.passportjs.org/ for more details.


## Configuration

Three pieces need to be configured to use Passport for authentication:

1) Authentication strategies
2) Application middleware
3) Sessions (optional)

### Strategies

Strategies, and their configuration, are supplied via the use() function.  For
example, the following uses the `LocalStrategy` for username/password
authentication.

```js
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(new LocalStrategy(
  function verify(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, null, { message: 'Incorrect username or username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, null, { message: 'Incorrect username or password.' });
      }
      return done(null, user);
    });
  }
));
```

If the verification is successful, Passport will make whatever is passed as the
second parameter to `done` available on the request via `req.user`.

### Middleware

In a `Connect` or `Express`-based application, `passport.initialize()`
middleware is required to initialize Passport.  If your application uses
persistent login sessions, `passport.session()` middleware must also be used.

**Express 4 Example**

```js
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
...
app.use(express.static("public"));
app.use(session({ secret: "asdfasdf" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
```

### Sessions

See http://www.passportjs.org/docs/configure/#session for details.


## Variables

Passport makes data available during a request. This is usually done by adding a property to the request object.

| Property | Description |
| -------- | ----------- |
| `user`   | Whatever is passed to the second parameter of the "done" callback in a strategy. |
