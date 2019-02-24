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
