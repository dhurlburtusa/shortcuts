# Bearer Token Usage Notes

A bearer tokens is a security token with the property that any party in possession of the token (a "bearer") can use the token in any way that any other party in possession of it can. Using a bearer token does not require a bearer to prove possession of cryptographic key material (proof-of-possession).

[RFC 6750](https://tools.ietf.org/html/rfc6750) describes how to use bearer tokens in HTTP requests to access OAuth 2.0 protected resources.

OAuth provides a method for clients to access a protected resource on behalf of a resource owner. OAuth enables clients to access protected resources by obtaining an access token, which is defined in [RFC 6749](https://tools.ietf.org/html/rfc6749) as "a string representing an access authorization issued to the client", rather than using the resource owner's credentials directly. In the general case, before a client can access a protected resource, it must first obtain an authorization grant from the resource owner and then exchange the authorization grant for an access token. The access token represents the grant's scope, duration, and other attributes granted by the authorization grant. The client accesses the protected resource by presenting the access token to the resource server.

The access token provides an abstraction, replacing different authorization constructs (e.g., username and password, assertion) for a single token understood by the resource server. This abstraction enables issuing access tokens valid for a short time period, as well as removing the resource server's need to understand a wide range of authentication schemes.


## Authenticated Requests

There are three common methods of sending bearer access tokens in resource requests to resource servers. Clients MUST NOT use more than one method to transmit the token in each request.

- `Authorization` request header field.
- Form-encoded body parameter.
- URI query parameter. (Not recommended.)

### `Authorization` Request Header Field

When sending the access token in the `Authorization` request header field, the client uses the "Bearer" authentication scheme to transmit the access token.

```
GET /resource HTTP/1.1
Host: server.example.com
Authorization: Bearer mF_9.B5f-4.1JqM
```

Clients SHOULD make authenticated requests with a bearer token using the `Authorization` request header field with the "Bearer" HTTP authorization scheme. Resource servers MUST support this method.

### Form-Encoded Body Parameter

When sending the access token in the HTTP request entity-body, the client adds the access token to the request-body using the `access_token` parameter. The client MUST NOT use this method unless all of the following conditions are met:

- The HTTP request entity-header includes the "Content-Type" header field set to "application/x-www-form-urlencoded".
- The entity-body follows the encoding requirements of the "application/x-www-form-urlencoded" content-type as defined by HTML 4.01.
- The HTTP request entity-body is single-part.
- The content to be encoded in the entity-body MUST consist entirely of ASCII characters.
- The HTTP request method is one for which the request-body has defined semantics. In particular, this means that the "GET" method MUST NOT be used.

The "application/x-www-form-urlencoded" method SHOULD NOT be used except in application contexts where participating browsers do not have access to the `Authorization` request header field. Resource servers MAY support this method.

### URI Query Parameter

When sending the access token in the HTTP request URI, the client adds the access token to the request URI query component using the `access_token` parameter.

Clients using the URI Query Parameter method SHOULD also send a `Cache-Control` header containing the `no-store` option. Server success (2XX status) responses to these requests SHOULD contain a `Cache-Control` header with the `private` option.
   
Because of the security weaknesses associated with the URI method, including the high likelihood that the URL containing the access token will be logged, it SHOULD NOT be used unless it is impossible to transport the access token in the `Authorization` request header field or the HTTP request entity-body. Resource servers MAY support this method.


## The "Bearer" OAuth Access Token Type

RFC 6750 registers the "Bearer" OAuth access token type.

- Type name: Bearer
- Additional Token Endpoint Response Parameters: (none)
- HTTP Authentication Scheme(s): Bearer
