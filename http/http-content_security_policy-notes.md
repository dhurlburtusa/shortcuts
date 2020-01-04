# HTTP Content-Security-Policy Notes

The Content Security Policy (CSP) adds a layer of security to help detect and
mitigate certain types of attacks, including Cross Site Scripting (XSS) and
data injection attacks.

To enable CSP, you need to configure your web server to return the
`Content-Security-Policy` HTTP header.  Alternatively, the `<meta>` tag can be
used to configure a policy.  The header tells CSP compliant browsers which
domains to accept executable content from.

See https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP and
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
for details.


## Writing a Policy

You can use the `Content-Security-Policy` HTTP header to specify your policy,
like this:

**Syntax**

```http
Content-Security-Policy: <policy-directive>[; <policy-directive>]*
```

The `policy-directive` is a string containing the policy directives describing
your Content Security Policy.

A policy is described using a series of policy directives, each of which
describes the policy for a certain resource type or policy area.  Your policy
should include a `default-src` policy directive, which is a fallback for other
resource types when they don't have policies of their own.  A policy needs to
include a `default-src` or `script-src` directive to prevent inline scripts from
running, as well as blocking the use of `eval`.  A policy needs to include a
`default-src` or `style-src` directive to restrict inline styles from being
applied from a <style> element or a style attribute.

## Directives

**Fetch Directives**

- **connect-src**
	+ Restricts the URLs which can be loaded using script interfaces.
	+ See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src for details.

- **font-src**
	+ Specifies valid sources for fonts loaded using `@font-face`.

- **frame-src**
	+ Specifies valid sources for nested browsing contexts loading using elements such as `<frame>` and `<iframe>`.

- **img-src**
	+ Specifies valid sources of images and favicons.

- **manifest-src**
	+ Specifies valid sources of application manifest files.

- **media-src**
	+ Specifies valid sources for loading media using the `<audio>`, `<video>`, and `<track>` elements.

- **object-src**
	+ Specifies valid sources for the `<object>`, `<embed>`, and `<applet>` elements. Elements controlled by `object-src` are perhaps coincidentally considered legacy HTML elements and are not recieving new standardized features (such as the security attributes sandbox or allow for `<iframe>`). Therefore it is recommended to restrict this fetch-directive (e.g. explicitly set `object-src 'none'` if possible). See `plugin-types` directive below for added security.

- **prefetch-src**
	+ Specifies valid sources to be prefetched or prerendered.

- **script-src**
	+ Specifies valid sources for JavaScript.

- **script-src-elem**
	+ Specifies valid sources for JavaScript `<script>` elements.

- **script-src-attr**
	+ Specifies valid sources for JavaScript inline event handlers.

- **style-src**
	+ Specifies valid sources for stylesheets.

- **style-src-elem**
	+ Specifies valid sources for stylesheets `<style>` elements and `<link>` elements with `rel="stylesheet"`.

- **style-src-attr**
	+ Specifies valid sources for inline styles applied to individual DOM elements.

- **worker-src**
	+ Specifies valid sources for `Worker`, `SharedWorker`, or `ServiceWorker` scripts.

**Document directives**

Document directives govern the properties of a document or worker environment to which a policy applies.

- **base-uri**
	+ Restricts the URLs which can be used in a document's `<base>` element.

- **plugin-types**
	+ Restricts the set of plugins that can be embedded into a document by limiting the types of resources which can be loaded. The `plugin-types` directive is only used if you are allowing plugins with `object-src` at all.

- **sandbox**
	+ Enables a sandbox for the requested resource similar to the `<iframe>` `sandbox` attribute.

**Navigation directives**

Navigation directives govern to which location a user can navigate to or submit a form to, for example.

- **form-action**
	+ Restricts the URLs which can be used as the target of a form submissions from a given context.

- **frame-ancestors**
	+ Specifies valid parents that may embed a page using `<frame>`, `<iframe>`, `<object>`, `<embed>`, or `<applet>`.

- **navigate-to**
	+ Restricts the URLs to which a document can initiate navigation by any means, including `<form>` (if `form-action` is not specified), `<a>`, `window.location`, `window.open`, etc.

**Reporting directives**

Reporting directives control the reporting process of CSP violations. See also the Content-Security-Policy-Report-Only header.

- **report-uri** (deprecated, use `report-to`)
	+ Instructs the user agent to report attempts to violate the CSP. These violation reports consist of JSON documents sent via an HTTP POST request to the specified URI.
	+ Though the `report-to` directive is intended to replace the deprecated `report-uri` directive, `report-to` is not supported in most browsers yet. So for compatibility with current browsers while also adding forward compatibility when browsers get `report-to` support, you can specify both `report-uri` and `report-to`.

- **report-to**
	+ Fires a `SecurityPolicyViolationEvent`.

**Other directives**

- **block-all-mixed-content**
	+ Prevents loading any assets using HTTP when the page is loaded using HTTPS.

- **referrer**
	+ Used to specify information in the referer (sic) header for links away from a page. Use the Referrer-Policy header instead.

- **require-trusted-types-for**
	+ Enforces Trusted Types at the DOM XSS injection sinks.

- **trusted-types**
	+ Used to specify a whitelist of Trusted Types policies (Trusted Types allows applications to lock down DOM XSS injection sinks to only accept non-spoofable, typed values in place of strings).

- **upgrade-insecure-requests**
	+ Instructs user agents to treat all of a site's insecure URLs (those served over HTTP) as though they have been replaced with secure URLs (those served over HTTPS). This directive is intended for web sites with large numbers of insecure legacy URLs that need to be rewritten.

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

Note: You can use the Content-Security-Policy header more than once.
