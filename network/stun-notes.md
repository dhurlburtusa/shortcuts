# STUN Notes

See https://en.wikipedia.org/wiki/STUN for details.

Session Traversal Utilities for NAT (STUN) is a standardized set of methods,
including a network protocol, for traversal of network address translator
(NAT) gateways in applications of real-time voice, video, messaging, and other
interactive communications.

STUN is a tool used by other protocols, such as Interactive Connectivity
Establishment (ICE), the Session Initiation Protocol (SIP), or WebRTC.  It
provides a tool for hosts to discover the presence of a network address
translator, and to discover the mapped, usually public, IP address and port
number that the NAT has allocated for the application's UDP flows to remote
hosts.  The protocol requires assistance from a third-party network server
(STUN server) located on the opposing (public) side of the NAT, usually the
public Internet.
