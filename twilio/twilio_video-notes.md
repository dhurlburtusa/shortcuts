# Twilio - Video Notes

"Everything you need to build with WebRTC." - Twilio

**Features**

* One-to-one or Multi-party
  + One-to-One
    - End-to-end encryption
    - Up to 10 Participants
  + Multi-party
    - Recording
    - Up to 50 Participants
* Recording
* REST orchestration
* Webhook notifications
* Room-based access control
* Management console
* Screen sharing
* Client-side UI control
* DataTrack
* Low latency media routing

See https://www.twilio.com/video and
https://www.twilio.com/docs/programmable-video for details.


## JavaScript Platform

See https://www.twilio.com/docs/api/video/javascript and
https://media.twiliocdn.com/sdk/js/video/v1/docs for details.

**Initial Onetime Setup**

* Install the SDK: `npm install --save twilio-video`
* Create an API Key: See https://www.twilio.com/console/video/runtime/api-keys

**General Steps**

The general steps to create a video/audio app is as follows:

1. Generate an Access Token
2. Connect to a room and start listening for room events
3. When new participants connect, start listening for participant events
