# HTTP Strict-Transport-Security Notes

The HTTP Strict-Transport-Security response header (often abbreviated as HSTS)
lets a web site tell browsers that it should only be accessed using HTTPS,
instead of using HTTP.

See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
for details.

**Syntax**

```http
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; preload
```
