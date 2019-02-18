# Web Development Notes


## HTTP Cookies

An HTTP cookie is a small piece of data that a server sends to the user's web
browser.  The browser may store it and send it back with the next request to the
same server.

### Creating

A server can send a `Set-Cookie` header with the response.  The cookie is
usually stored by the browser, and then the cookie is sent with requests made to
the same server inside a `Cookie` HTTP header.

The `Set-Cookie` HTTP response header sends cookies from the server to the user
agent.  A simple cookie is set like this:

```
Set-Cookie: <cookie-name>=<cookie-value>
```


## Cross-Origin Resource Sharing (CORS)

Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP
headers to let a user agent gain permission to access selected resources from a
server on a different origin (domain) than the site currently in use.

A cross-origin HTTP request happens when a request is made to a resource from a
different domain, protocol, or port than the one from which the current document
originated.  See https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
for details.

For security reasons, browsers restrict cross-origin HTTP requests initiated
from within scripts.

Modern browsers handle the client-side components of cross-origin sharing,
including headers and policy enforcement.  But this new standard means servers
have to handle new request and response headers.

### Requests Using CORS

* Invocations of the `XMLHttpRequest` or `Fetch` APIs in a cross-origin manner.
* Web Fonts (for cross-domain font usage in `@font-face` within CSS).
* WebGL textures.
* Images/video frames drawn to a canvas using `drawImage`.
* Stylesheets (for CSSOM access).
* Scripts (for unmuted exceptions).

### Preflight Requests

Some requests trigger a CORS preflight.  Preflighted requests first send an HTTP
request by the `OPTIONS` method to the resource on the other domain, in order to
determine whether the actual request is safe to send.  Cross-site requests are
preflighted like this since they may have implications to user data.

Some of the conditions that cause a request to be preflighted include:

* Request uses any of the following methods: `CONNECT`, `DELETE`, `OPTIONS`
  `PATCH`, `PUT`, or `TRACE`.
* The `Content-Type` header has a value other than the following:
  + `application/x-www-form-urlencoded`
  + `multipart/form-data`
  + `text/plain`

See https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Preflighted_requests
for details.

### Server-Side

The CORS protocol consists of a set of headers that indicates whether a response
can be shared cross-origin.

**Requests**

A CORS request is an HTTP request that includes an `Origin` header.

A CORS-preflight request is a CORS request that checks to see if the CORS
protocol is understood.  It uses `OPTIONS` as method and includes these headers:

* **`Access-Control-Request-Method`**
  Indicates which method a future CORS request to the same resource might use.

* **`Access-Control-Request-Headers`**
  Indicates which headers a future CORS request to the same resource might use.

**Responses**

An HTTP response to a CORS request can include the following headers:

* **`Access-Control-Allow-Origin`**
  Indicates whether the response can be shared, via returning the literal value of
  the `Origin` request header (which can be `null`) or `*` in a response.

* **`Access-Control-Allow-Credentials`**
  Indicates whether the response can be shared when request’s credentials mode is
  "include".

For a CORS-preflight request, request’s credentials mode is always "omit", but for
any subsequent CORS requests it might not be.  Support therefore needs to be
indicated as part of the HTTP response to the CORS-preflight request as well.

An HTTP response to a CORS-preflight request can include the following headers:

* **`Access-Control-Allow-Methods`**
  Indicates which methods are supported by the response’s url for the purposes of
  the CORS protocol.
  
  ```
  Access-Control-Allow-Methods: GET, POST, PUT, etc
  ```

  Note: The `Allow` header is not relevant for the purposes of the CORS protocol.

* **`Access-Control-Allow-Headers`**
  Indicates which headers are supported by the response’s url for the purposes of
  the CORS protocol.
  
  ```
  Access-Control-Allow-Headers: X-FOO, Content-Type, etc
  ```

* **`Access-Control-Max-Age`**
  Indicates how long the information provided by the
  `Access-Control-Allow-Methods` and `Access-Control-Allow-Headers` headers can be
  cached in seconds.

An HTTP response to a CORS request that is not a CORS-preflight request can also
include the following header:

* **`Access-Control-Expose-Headers`**
  Indicates which headers can be exposed as part of the response by listing their
  names.


## Progressive Web Apps (PWA)

From https://en.wikipedia.org/wiki/Progressive_Web_Apps:

> Progressive Web Apps (PWAs) are web applications that are regular web pages or
> websites, but can appear to the user like traditional applications or native
> mobile applications.  The application type attempts to combine features offered
> by most modern browsers with the benefits of a mobile experience.

In 2015, designer Frances Berriman and Google Chrome engineer Alex Russell
coined the term "progressive web apps" to describe apps taking advantage of new
features supported by modern browsers, including service workers, and web app
manifests, that let users upgrade web apps to progressive web applications in
their native operating system (OS).  According to Google Developers, these
characteristics are:

* **Progressive** - Work for every user, regardless of browser choice because
  they’re built with progressive enhancement as a core tenet.
* **Responsive** - Fit any form factor: desktop, mobile, tablet, or forms yet to
  emerge.
* **Connectivity Independent** - Service workers allow work offline, or on low
  quality networks.
* **App-Like** - Feel like an app to the user with app-style interactions and
  navigation.
* **Fresh** - Always up-to-date thanks to the service worker update process.
* **Safe** - Served via HTTPS to prevent snooping and ensure content hasn’t been
  tampered with.
* **Discoverable** - Are identifiable as “applications” thanks to W3C manifests
  and service worker registration scope allowing search engines to find them.
* **Re-engageable** - Make re-engagement easy through features like push
  notifications.
* **Installable** - Allow users to “keep” apps they find most useful on their home
  screen without the hassle of an app store.
* **Linkable** - Easily shared via a URL and do not require complex installation.

The technical baseline criteria for a site to be considered a progressive web
app by browsers were described by Russell in a follow-up post:

* **Originate from a secure origin**.  Served over TLS and green padlock displays
  (no active mixed content).
* **Load while offline (even if only a custom offline page)**.  By implication,
  this means that progressive web apps require service workers.
* **Reference a web app manifest** with at least the four key properties: `name`,
  `short_name`, `start_url`, and `display` (with a value of `standalone` or
  `fullscreen`)
* **An icon at least 144×144 large in png format**. E.g.: `"icons": [ { "src":
  "/images/icon-144.png", "sizes": "144x144", "type": "image/png" } ]`

### Web App Manifest

The web app manifest is a simple JSON file that tells the browser about your web
application and how it should behave when "installed" on the user's mobile
device or desktop.

Web app manifests are deployed in your HTML pages using a `<link>` element in
the `<head>` of a document:
  
```html
<link rel="manifest" href="/manifest.webmanifest">
```

The file may be a name of your choice. However, `manifest.json` and
`manifest.webmanifest` are common.

```json
{
  "short_name": "Maps",
  "name": "Google Maps",
  "description": "A geographical map provided by Google.",
  "icons": [
    {
      "src": "/images/icons-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/images/icons-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/maps/?source=pwa",
  "background_color": "#3367D6",
  "display": "standalone",
  "scope": "/maps/",
  "theme_color": "#3367D6"
}
```

See https://developers.google.com/web/fundamentals/web-app-manifest/ and
https://developer.mozilla.org/en-US/docs/Web/Manifest for details.


## Performance

### Caching Assets

Note: Filename revving is probably no longer necessary over the simpler query
string revving.  See
https://www.impressivewebs.com/cache-busting-front-end-resources-file-name-revving-still-necessary/
for details.  That is, filename revving is still a valid technique, however, it
is typically more difficult to implement without a proper build process in
place.


## Misc

**Useful Links**

* http://mybrowserinfo.com/
