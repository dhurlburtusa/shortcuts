# Bearer Token Usage Notes

A bearer tokens is a security token with the property that any party in possession of the token (a "bearer") can use the token in any way that any other party in possession of it can. Using a bearer token does not require a bearer to prove possession of cryptographic key material (proof-of-possession).

[RFC 6750](https://tools.ietf.org/html/rfc6750) describes how to use bearer tokens in HTTP requests to access OAuth 2.0 protected resources.

OAuth provides a method for clients to access a protected resource on behalf of a resource owner. OAuth enables clients to access protected resources by obtaining an access token, which is defined in [RFC 6749](https://tools.ietf.org/html/rfc6749) as "a string representing an access authorization issued to the client", rather than using the resource owner's credentials directly. In the general case, before a client can access a protected resource, it must first obtain an authorization grant from the resource owner and then exchange the authorization grant for an access token. The access token represents the grant's scope, duration, and other attributes granted by the authorization grant. The client accesses the protected resource by presenting the access token to the resource server.

The access token provides an abstraction, replacing different authorization constructs (e.g., username and password, assertion) for a single token understood by the resource server. This abstraction enables issuing access tokens valid for a short time period, as well as removing the resource server's need to understand a wide range of authentication schemes.
