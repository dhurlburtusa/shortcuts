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
