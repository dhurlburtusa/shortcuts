# WebRTC Notes

From [Wikipedia]

> WebRTC ("Web Real-Time Communication") is a collection of communications
> protocols and APIs that enable real-time communication over peer-to-peer
> connections.  This allows web browsers to not only request resources from
> backend servers, but also real-time information from browsers of other users.
>
> This enables applications such as video conferencing, file transfer, chat, or
> desktop sharing without the need of either internal or external plugins.

From [MDN]

> WebRTC (Web Real-Time Communications) is a technology which enables Web
> applications and sites to capture and optionally stream audio and/or video
> media, as well as to exchange arbitrary data between browsers without
> requiring an intermediary.  The set of standards that comprises WebRTC makes
> it possible to share data and perform teleconferencing peer-to-peer, without
> requiring that the user to install plug-ins or any other third-party software.
> 
> WebRTC consists of several interrelated APIs and protocols which work together
> to achieve this.

WebRTC uses Real-time Transport Protocol to transfer audio and video.


## Main JavaScript APIs

* [RTCPeerConnection]
* [MediaStream]
* [RTCDataChannel]


## JavaScript Libraries/Frameworks

**Video**

* https://simplewebrtc.com/
* https://easyrtc.com/
* https://github.com/webRTC-io

**Data**

* http://peerjs.com/
* https://www.sharefest.me/


## Useful Resources

* https://en.wikipedia.org/wiki/WebRTC
* https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
* https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Protocols
* https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Connectivity
* https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling
* https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Session_lifetime
* https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Using_data_channels
* https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/adapter.js
* https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos
* https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample
* https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices
* https://codelabs.developers.google.com/codelabs/webrtc-web/
* https://webrtc.org/
* https://webrtcstandards.info/
* https://www.html5rocks.com/en/tutorials/webrtc/basics/
* https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/
* https://www.html5rocks.com/en/tutorials/webrtc/datachannels/
* https://www.html5rocks.com/en/tutorials/getusermedia/intro/
* https://github.com/webrtc/adapter
* https://webrtc.github.io/samples/
* https://github.com/mdn/samples-server/tree/master/s
* https://simpl.info/webrtc/
* https://www.webrtc-experiment.com/
* https://bloggeek.me/webrtc-posts/
* https://bloggeek.me/sctp-data-channel/
* chrome://webrtc-internals
* https://test.webrtc.org/


[mediastream]: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream
[mdn]: https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
[rtcdatachannel]: https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel
[rtcpeerconnection]: https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection
[wikipedia]: https://en.wikipedia.org/wiki/WebRTC