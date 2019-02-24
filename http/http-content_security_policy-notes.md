# HTTP Content-Security-Policy Notes

The Content Security Policy (CSP) adds a layer of security to help detect and
mitigate certain types of attacks, including Cross Site Scripting (XSS) and
data injection attacks.

To enable CSP, you need to configure your web server to return the
`Content-Security-Policy` HTTP header.  Alternatively, the `<meta>` tag can be
used to configure a policy.

See https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP for details.
