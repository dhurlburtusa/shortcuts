# JSON Web Token Notes

JSON Web Token (JWT) is an open standard ([RFC 7519](rfc-7519)) that defines a
compact and self-contained way for securely transmitting information between
parties as a JSON object.  This information can be verified and trusted because
it is digitally signed.  JWTs can be signed using a secret (with the HMAC
algorithm) or a public/private key pair using RSA.

Let's explain some concepts of this definition further.

* **Compact**: Because of their smaller size, JWTs can be sent through a URL,
  POST parameter, or inside an HTTP header.  Additionally, the smaller size
  means transmission is fast.

* **Self-contained**: The payload contains all the required information about
  the user, avoiding the need to query the database more than once.

See https://jwt.io/ and https://en.wikipedia.org/wiki/JSON_Web_Token for 
details.

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

* Header (xxxxx)
* Payload (yyyyy)
* Signature (zzzzz)

Therefore, a JWT typically looks like the following.

`xxxxx.yyyyy.zzzzz`

Let's break down the different parts.

**Header**

The header typically consists of two parts: the type of the token, which is
`JWT`, and the hashing algorithm being used, such as HMAC SHA256 or RSA.

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
metadata.  There are three types of claims: registered, public, and private
claims.

* **Registered claims**: These are a set of predefined claims which are not
  mandatory but recommended, to provide a set of useful, interoperable claims.
  Some of them are: `iss` (issuer), `exp` (expiration time), `sub` (subject),
  `aud` (audience), and [others](other-reg-claims).

* **Public claims**: These can be defined at will by those using JWTs.  But to
  avoid collisions they should be defined in the [IANA JSON Web Token
  Registry][iana-jwt-registry] or be defined as a URI that contains a collision
  resistant namespace.

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
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

The signature is used to verify that the sender of the JWT is who it says it
is and to ensure that the message wasn't changed along the way.


## Header

The header of a JWT is a JOSE (JSON Object Signing and Encryption) Header.  It
is a JSON object whose members describe the cryptographic operations applied to
the JWT.  The header may optionally contain other members to further describe
additional properties of the JWT.  The header is comprised of header parameters.
There are three classes of header parameters: registered, public, and private.

**Registered Header Parameters**

The following header parameter names for use in JWSs are registered in the IANA
"JSON Web Signature and Encryption Header Parameters" registry.
   
| Name   |  Typical Values          | Required | Description |
| ------ | ------------------------ | -------- | ----------- |
| `alg`  | `HS256`; `RS256`; `none` | Yes      | The algorithm header identifies the crypto algorithm used. |
| `cty`  |                          | No       | Used to convey structural info about the JWT.  Usually left out. |
| `typ`  | `JWT`                    | No       | The media type of a JWS, which for JWT is JWT. |

**Public Header Parameters**

Not typically used with JWT.  May be used in other JWSs.

**Private Header Parameters**

Not typically used with JWT.  May be used in other JWSs.


## Payload

The payload of a JWT is comprised of a claims set formatted as JSON.

### Claims

There are three classes of claims: registered, public, and private.

**Registered**

| Code  | Name            | Brief Description |
| ----- | --------------- | ----------------- |
| `aud` | Audience        | Identifies the recipients that the JWT is intended for.  Is an array of case-sensitive strings, each containing a string or URI.  May also be just the single value. |
| `exp` | Expiration Time | Identifies the expiration time on or after which the JWT MUST NOT be accepted for processing.  Is a number representing the seconds since the epoch. |
| `iat` | Issued At       | Identifies the time at which the JWT was issued.  Is a number representing the seconds since the epoch. |
| `iss` | Issuer          | Identifies the principal that issued the JWT. |
| `jti` | JWT ID          | Provides a unique identifier for the JWT.  Is a case-sensitive string. |
| `nbf` | Not Before      | Identifies the time before which the JWT MUST NOT be accepted for processing.  Is a number representing the seconds since the epoch. |
| `sub` | Subject         | Identifies the principal that is the subject of the JWT.  Is a case-sensitive string containing a string or URI. |

**Public**

Claim Names can be defined at will by those using JWTs.  However, in order to
prevent collisions, any new Claim Name should either be registered in the IANA
"JSON Web Token Claims" registry or be a Public Name: a value that contains a
collision-resistant name which is a name in a namespace that enables names to be
allocated in a manner such that they are highly unlikely to collide with other
names.  Examples of collision-resistant namespaces include: Domain Names and
Universally Unique IDentifiers (UUIDs) [RFC4122][rfc-4122].
   
| Code                    | Brief Description |
| ----------------------- | ----------------- |
| `name`                  | Full name.        |
| `given_name`            | Given name(s) or first name(s). |
| `family_name`           | Surname(s) or last name(s). |
| `middle_name`           | Middle name(s). |
| `nickname`              | Casual name. |
| `preferred_username`    | Shorthand name by which the End-User wishes to be referred to. |
| `profile`               | Profile page URL. |
| `picture`               | Profile picture URL. |
| `website`               | Web page or blog URL. |
| `email`                 | Preferred e-mail address. |
| `email_verified`        | True if the e-mail address has been verified; otherwise false. |
| `gender`                | Gender. |
| `birthdate`             | Birthday. |
| `zoneinfo`              | Time zone. |
| `locale`                | Locale. |
| `phone_number`          | Preferred telephone number. |
| `phone_number_verified` | True if the phone number has been verified; otherwise false. |
| `address`               | Preferred postal address. |

See the [IANA JSON Web Token registry][iana-jwt-registry] for a complete list.

**Private**

A producer and consumer of a JWT MAY agree to use Claim Names that are Private
Names: names that are not Registered Claim Names or Public Claim Names.  Unlike
Public Claim Names, Private Claim Names are subject to collision and should be
used with caution.


[iana-jwt-registry]: https://www.iana.org/assignments/jwt/jwt.xhtml
[jose-header]: https://tools.ietf.org/html/rfc7515#section-4
[other-reg-claims]: https://tools.ietf.org/html/rfc7519#section-4.1
[rfc-4122]: https://tools.ietf.org/html/rfc4122
[rfc-7519]: https://tools.ietf.org/html/rfc7519
