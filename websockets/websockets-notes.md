# WebSockets Notes

## From Wikipedia

See https://en.wikipedia.org/wiki/WebSocket for details.

WebSocket is a computer communications protocol, providing full-duplex
communication channels over a single TCP connection.  The WebSocket protocol
was standardized by the IETF as RFC 6455 in 2011, and the WebSocket API in Web
IDL is being standardized by the W3C.

The WebSocket Protocol is an independent TCP-based protocol.  Its only
relationship to HTTP is that its handshake is interpreted by HTTP servers as
an Upgrade request.  The WebSocket protocol enables interaction between a
browser and a web server with lower overheads, facilitating real-time data
transfer from and to the server.  This is made possible by providing a
standardized way for the server to send content to the browser without being
solicited by the client, and allowing for messages to be passed back and forth
while keeping the connection open.  In this way, a two-way (bi-directional)
ongoing conversation can take place between a browser and the server.  The
communications are done over TCP port number 80 (or 443 in the case of
TLS-encrypted connections), which is of benefit for those environments which
block non-web Internet connections using a firewall.  Similar two-way browser-
server communications have been achieved in non-standardized ways using
stopgap technologies such as Comet.
