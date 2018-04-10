# JavaScript Network Information API

The Network Information API provides information about the system's connection
in terms of general connection type (e.g., 'wifi', 'cellular', etc.).

Note: This feature is available in Web Workers.

See https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API for
details.

## API

he entire API consists of the addition of the `NetworkInformation` interface and
a single property to the `Navigator` interface: `Navigator#connection`.

**Connection**

The network information is available from the `connection` property on
`navigator`.  `navigator.connection` is a reference to an instance implementing
the `NetworkInformation` interface.

```js
let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
```

See https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection for
details.

**`NetworkInformation` Interface**

```js
// The effective bandwidth estimate in Mbps, rounded to the
// nearest multiple of 25 kilobits per seconds.
connection.downlink

// Returns the maximum downlink speed, in Mbps, for the
// underlying connection technology.
connection.downlinkMax

// Returns the effective type of the connection meaning one of
// 'slow-2g', '2g', '3g', or '4g'.  This value is determined
// using a combination of recently observed round-trip time and
// downlink values.
connection.effectiveType

// Returns the estimated effective round-trip time of the
// current connection, rounded to the nearest multiple of 25
// ms.
connection.rtt

// Returns the type of connection a device is using to
// communicate with the network.  It will be one of the
// following values:
//
// * 'bluetooth'
// * 'cellular'
// * 'ethernet'
// * 'none'
// * 'other'
// * 'unknown'
// * 'wifi'
// * 'wimax'
connection.type
```
