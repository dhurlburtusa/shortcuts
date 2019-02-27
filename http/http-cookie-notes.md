# HTTP Cookie Notes

An HTTP cookie is a small piece of data that a server sends to the user's web
browser.  The browser may store it and send it back with the next request to the
same server.


## Creating Cookies

Cookies can be created on the server during in a response to a request.  Cookies
can be created on the client which may result in the cookie being sent in
subsequent requests.

### Server

A server can send a `Set-Cookie` response header with a response.

**Syntax**

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

### Client

A client can set `document.cookie`.  Cookies will be sent in applicable requests
using the `Cookie` request header.

**Syntax**

```js
document.cookie = '<cookie-name>=<cookie-value>'
```
