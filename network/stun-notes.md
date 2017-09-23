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


## Limitations

STUN is not a self-contained NAT traversal solution applicable in all NAT
deployment scenarios and does not work correctly with all of them.

STUN does __not__ work with symmetric NAT (also known as bi-directional NAT)
which is often found in the networks of large companies.

However, STUN __does__ work with three types of NAT: full cone NAT, restricted
cone NAT, and port restricted cone NAT.
