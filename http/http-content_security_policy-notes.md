# HTTP Content-Security-Policy Notes

The Content Security Policy (CSP) adds a layer of security to help detect and
mitigate certain types of attacks, including Cross Site Scripting (XSS) and
data injection attacks.

To enable CSP, you need to configure your web server to return the
`Content-Security-Policy` HTTP header.  Alternatively, the `<meta>` tag can be
used to configure a policy.  The header tells CSP compliant browsers which
domains to accept executable content from.

See https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP for details.


## Writing a Policy

You can use the `Content-Security-Policy` HTTP header to specify your policy,
like this:

```http
Content-Security-Policy: policy
```

The `policy` is a string containing the policy directives describing your
Content Security Policy.

A policy is described using a series of policy directives, each of which
describes the policy for a certain resource type or policy area.  Your policy
should include a `default-src` policy directive, which is a fallback for other
resource types when they don't have policies of their own.  A policy needs to
include a `default-src` or `script-src` directive to prevent inline scripts from
running, as well as blocking the use of `eval`.  A policy needs to include a
`default-src` or `style-src` directive to restrict inline styles from being
applied from a <style> element or a style attribute.

**Examples**

A web site administrator wants all content to come from the site's own origin
(this excludes subdomains.)

```http
Content-Security-Policy: default-src 'self'
```

A web site administrator wants to allow content from a trusted domain and all
its subdomains (it doesn't have to be the same domain that the CSP is set on.)

```http
Content-Security-Policy: default-src 'self' *.trusted.com
```

A web site administrator wants to allow users of a web application to include
images from any origin in their own content, but to restrict audio or video
media to trusted providers, and all scripts only to a specific server that hosts
trusted code.

```http
Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com
```
