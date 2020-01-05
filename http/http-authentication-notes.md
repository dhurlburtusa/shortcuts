# HTTP Authentication Notes

[RFC 7235] defines the HTTP authentication framework which can be used by a server to challenge a client request and by a client to provide authentication information. The challenge and response flow works like this:
- The server responds to a client with a 401 (Unauthorized) response status and provides information on how to authorize with a `WWW-Authenticate` response header containing at least one challenge.
- A client that wants to authenticate itself with a server can then do so by including an `Authorization` request header field with the credentials. Usually a client will present a password prompt to the user and will then issue the request including the correct `Authorization` header.


[rfc 7235]: https://tools.ietf.org/html/rfc7235
