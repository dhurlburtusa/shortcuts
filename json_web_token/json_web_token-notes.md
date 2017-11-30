# JSON Web Token Notes

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and
self-contained way for securely transmitting information between parties as a
JSON object.  This information can be verified and trusted because it is
digitally signed.  JWTs can be signed using a secret (with the HMAC algorithm)
or a public/private key pair using RSA.

Let's explain some concepts of this definition further.

* **Compact**: Because of their smaller size, JWTs can be sent through a URL,
  POST parameter, or inside an HTTP header.  Additionally, the smaller size
  means transmission is fast.

* **Self-contained**: The payload contains all the required information about
  the user, avoiding the need to query the database more than once.


## When should you use JSON Web Tokens?

Here are some scenarios where JSON Web Tokens are useful:

* **Authentication**: This is the most common scenario for using JWT.  Once the
  user is logged in, each subsequent request will include the JWT, allowing the
  user to access routes, services, and resources that are permitted with that
  token.  Single Sign On is a feature that widely uses JWT nowadays, because of
  its small overhead and its ability to be easily used across different domains.

* **Information Exchange**: JSON Web Tokens are a good way of securely
  transmitting information between parties.  Because JWTs can be signed—for
  example, using public/private key pairs—you can be sure the senders are who
  they say they are.  Additionally, as the signature is calculated using the
  header and the payload, you can also verify that the content hasn't been
  tampered with.


## What is the JSON Web Token Structure?

JSON Web Tokens consist of three parts separated by dots (.), which are:

* Header
* Payload
* Signature

Therefore, a JWT typically looks like the following.

`xxxxx.yyyyy.zzzzz`

Let's break down the different parts.

**Header**

The header typically consists of two parts: the type of the token, which is
JWT, and the hashing algorithm being used, such as HMAC SHA256 or RSA.

For example:

```json5
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Then, this JSON is Base64Url encoded to form the first part of the JWT.

**Payload**

The second part of the token is the payload, which contains the claims.
Claims are statements about an entity (typically, the user) and additional
metadata.  There are three types of claims: reserved, public, and private
claims.

* **Reserved claims**: These are a set of predefined claims which are not
  mandatory but recommended, to provide a set of useful, interoperable claims.
  Some of them are: `iss` (issuer), `exp` (expiration time), `sub` (subject),
  `aud` (audience), and others.

* **Public claims**: These can be defined at will by those using JWTs.  But to
  avoid collisions they should be defined in the IANA JSON Web Token Registry
  or be defined as a URI that contains a collision resistant namespace.

* **Private claims**: These are the custom claims created to share information
  between parties that agree on using them.

```json5
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

The payload is then Base64Url encoded to form the second part of the JSON Web
Token.

**Signature**

To create the signature part you have to take the encoded header, the encoded
payload, a secret, the algorithm specified in the header, and sign that.

For example if you want to use the HMAC SHA256 algorithm, the signature will
be created in the following way:

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

The signature is used to verify that the sender of the JWT is who it says it
is and to ensure that the message wasn't changed along the way.
