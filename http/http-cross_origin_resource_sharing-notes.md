# Cross-Origin-Resource-Sharing (CORS) Notes

Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP
headers to tell a browser to let a web application running at one origin
(domain) have permission to access selected resources from a server at a
different origin.  A web application executes a cross-origin HTTP request when
it requests a resource that has a different origin (domain, protocol, and port)
than its own origin.

For security reasons, browsers restrict cross-origin HTTP requests initiated
from within scripts. 

The CORS standard works by adding new HTTP headers that allow servers to
describe the set of origins that are permitted to read that information using a
web browser.  Additionally, for HTTP request methods that can cause side-effects
on server's data (in particular, for HTTP methods other than GET or for POST
usage with certain MIME types), the specification mandates that browsers
"preflight" the request, soliciting supported methods from the server with an
HTTP `OPTIONS` request method, and then, upon "approval" from the server,
sending the actual request with the actual HTTP request method.  Servers can
also notify clients whether "credentials" (including Cookies and HTTP
Authentication data) should be sent with requests.

See https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS for details.


## Simple Requests

Some requests don’t trigger a CORS preflight. Those are called “simple requests” in this article, though the `Fetch` spec (which defines CORS) doesn’t use that term. A “simple request” is one that **meets all the following conditions**:

- One of the allowed methods:
	+ GET
	+ HEAD
	+ POST
- Apart from the headers automatically set by the user agent (for example, `Connection`, `User-Agent`, or the other headers defined in the Fetch spec as a “forbidden header name”), the only headers which are allowed to be manually set are those which the Fetch spec defines as a “CORS-safelisted request-header”, which are:
	+ `Accept`
	+ `Accept-Language`
	+ `Content-Language`
	+ `Content-Type` (but note the additional requirements below)
	+ `DPR`
	+ `Downlink`
	+ `Save-Data`
	+ `Viewport-Width`
	+ `Width`
- The only allowed values for the Content-Type header are:
	+ `application/x-www-form-urlencoded`
	+ `multipart/form-data`
	+ `text/plain`
- No event listeners are registered on any `XMLHttpRequestUpload` object used in the request; these are accessed using the `XMLHttpRequest.upload` property.
No `ReadableStream` object is used in the request.


## Preflighted Requests

Unlike “simple requests” (discussed above), "preflighted" requests first send an HTTP request by the `OPTIONS` method to the resource on the other domain, to determine if the actual request is safe to send. Cross-site requests are preflighted like this since they may have implications to user data.

**Headers**

Here are some of the request headers sent with an "preflighted" request.

- `Origin`
- `Access-Control-Request-Method`
- `Access-Control-Request-Headers`

Here are some of the response headers returned with a "preflighted" request.

- `Access-Control-Allow-Headers`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Origin`
- `Access-Control-Max-Age`
