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
