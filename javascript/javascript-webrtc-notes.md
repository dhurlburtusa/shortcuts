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


## Parts Needed to Create a Peer-to-Peer Video/Audio Conversation

**RTC Peer Connection**

Each peer will need an RTC peer connection which can be acquired by creating a
new instance of `RTCPeerConnection`.

**Local Media Stream**

Each peer will need to get access to a media stream with audio and/or video
tracks to be able to communicate with audio and/or video.  This media stream is
then added to the current RTC peer connection.

**RTC Data Channels**

Each peer will need to get access to an RTC data channel to be able to send
data between peers.  The RTC data channel is then added to the current RTC peer
connection.

To be continued...

**Note**: As of Chrome 47, the `getUserMedia` API cannot be called from insecure
origins.

See https://caniuse.com/#feat=stream for browser support (basically, only
evergreen browsers).

## List of getUserMedia Errors

Different browsers have different reasons for rejecting the promise returned
from `MediaDevices#getUserMedia`.  Although webrtc-adapter tries to normalized
the WebRTC API between browsers, I believe there may still be some
inconsistancies.

The following is a list of the reasons I've come across so far.

* When a user Denies permission by clicking Deny in dialog prompt.
  + Chrome:
      * object: {
          constraint: '',
          message: '',
          name: 'NotAllowedError',
      }
          // Edge: {
          //   MediaStreamError = {
          //     constraintName: null,
          //     message: null,
          //     name: 'PermissionDeniedError',
          //   },
          // }
          // FireFox: {
          //   MediaStreamError = {
          //     constraint: '',
          //     message: 'The request is not allowed by the user agent or the platform in the current context.',
          //     name: 'NotAllowedError',
          //     stack: '',
          //   },
          // }

* When user ignore permission request by clicking the close button (x) in dialog prompt.
  + When not using [webrtc-adapter]:
    - Chrome
      * NavigatorUserMediaError = {
          constraintName: '',
          message: '',
          name: 'PermissionDismissedError',
        }


* When a user Denies permission by clicking Block in dialog prompt:
  + When not using [webrtc-adapter]:
    - Chrome
      * NavigatorUserMediaError = {
          constraintName: '',
          message: '',
          name: 'PermissionDeniedError',
        }
* When user returns to a domain that they previously blocked:
  + When not using [webrtc-adapter]:
    - Chrome
      * NavigatorUserMediaError = {
          constraintName: '',
          message: '',
          name: 'PermissionDeniedError',
        }
* When Run Via a Non-Secure Origin
  + When not using [webrtc-apapter]:
    - Chrome
      * DOMException = {
          code: 9,
          message: 'Only secure origins are allowed (see: https://goo.gl/Y0ZkNV).',
          name: 'NotSupportedError',
        }



## JavaScript Libraries/Frameworks

**Video**

* https://simplewebrtc.com/
* https://easyrtc.com/
* https://github.com/webRTC-io

**Data**

* http://peerjs.com/
* https://www.sharefest.me/


## Vendors

See this blog article: https://bloggeek.me/webrtc-paas-report/.


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
* https://w3c.github.io/webrtc-pc/
* https://w3c.github.io/webrtc-pc/images/ladder-2party-simple.svg
* https://simpl.info/webrtc/
* https://webrtcglossary.com/
* https://www.webrtc-experiment.com/
* https://bloggeek.me/webrtc-posts/
* https://bloggeek.me/sctp-data-channel/
* chrome://webrtc-internals
* https://test.webrtc.org/
* https://testrtc.com/


[mediastream]: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream
[mdn]: https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
[rtcdatachannel]: https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel
[rtcpeerconnection]: https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection
[webrtc-adapter]: https://github.com/webrtc/adapter
[wikipedia]: https://en.wikipedia.org/wiki/WebRTC
