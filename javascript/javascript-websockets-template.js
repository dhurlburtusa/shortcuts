if (typeof WebSocket == 'function') {
  let socket, url;

  url = "ws://echo.websocket.org/";
  socket = new WebSocket(url);

  socket.addEventListener('error', function (evt) {
    // TODO: Handle error.
  });

  socket.addEventListener('open', function (evt) {
    let socket = evt.target;

    // Now, do what you need with the open socket like sending a message.
    socket.send('Hello, World!');
  });

  socket.addEventListener('message', function (msgEvt) {
    let socket = msgEvt.target,
        // The data sent by the message emitter.
        data = msgEvt.data,
        // A DOMString representing a unique ID for the event.
        lastEventId = msgEvt.lastEventId,
        // A USVString representing the origin of the message emitter.
        origin = msgEvt.origin,
        // An array of `MessagePort` objects representing the ports associated with the
        // channel the message is being sent through (where appropriate, e.g. in channel
        // messaging or when sending a message to a shared worker).
        ports = msgEvt.ports,
        // A `MessageEventSource` (which can be a `WindowProxy`, `MessagePort`, or
        // `ServiceWorker` object) representing the message emitter.
        source = msgEvt.source;

    // Typically, you will process the data returned from the server at this point.

    // The following just demonstrates the need for checking if the connection is still
    // open.
    setTimeout(() => {
      // The socket may have been closed by the time this callback is called.  So check
      // to see if it is still open before sending.  Otherwise an error is thrown.
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(`It's nice to meet you.`);
      }
    }, 4000);
  });

  socket.addEventListener('close', function (clsEvt) {
    // See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
    //
    // Code | Name               | Description
    // ---- | ------------------ | --------------------------------------------------
    // 1000  CLOSE_NORMAL          Normal closure; the connection successfully
    //                             completed whatever purpose for which it was
    //                             created.
    // 1001  CLOSE_GOING_AWAY      The endpoint is going away, either because of a
    //                             server failure or because the browser is
    //                             navigating away from the page that opened the
    //                             connection.
    // 1002  CLOSE_PROTOCOL_ERROR  The endpoint is terminating the connection due to
    //                             a protocol error.
    // 1003  CLOSE_UNSUPPORTED     The connection is being terminated because the
    //                             endpoint received data of a type it cannot accept
    //                             (for example, a text-only endpoint received binary
    //                             data).
    // 1004                        Reserved.  A meaning might be defined in the
    //                             future.
    // 1005  CLOSE_NO_STATUS       Reserved.  Indicates that no status code was
    //                             provided even though one was expected.
    // 1006  CLOSE_ABNORMAL        Reserved.  Used to indicate that a connection was
    //                             closed abnormally (that is, with no close frame
    //                             being sent) when a status code is expected.
    // 1007  Unsupported Data      The endpoint is terminating the connection because
    //                             a message was received that contained inconsistent
    //                             data (e.g., non-UTF-8 data within a text message).
    // 1008  Policy Violation      The endpoint is terminating the connection because
    //                             it received a message that violates its policy.
    //                             This is a generic status code, used when codes
    //                             1003 and 1009 are not suitable.
    // 1009  CLOSE_TOO_LARGE       The endpoint is terminating the connection because
    //                             a data frame was received that is too large.
    // 1010  Missing Extension     The client is terminating the connection because
    //                             it expected the server to negotiate one or more
    //                             extension, but the server didn't.
    // 1011  Internal Error        The server is terminating the connection because
    //                             it encountered an unexpected condition that
    //                             prevented it from fulfilling the request.
    // 1012  Service Restart       The server is terminating the connection because
    //                             it is restarting.
    // 1013  Try Again Later       The server is terminating the connection due to a
    //                             temporary condition, e.g. it is overloaded and is
    //                             casting off some of its clients.
    // 1014                        Reserved for future use by the WebSocket standard.
    // 1015  TLS Handshake
    // 1016–1999                   Reserved for future use by the WebSocket standard.
    // 2000–2999                   Reserved for use by WebSocket extensions.
    // 3000–3999                   Available for use by libraries and frameworks.
    //                             May not be used by applications.  Available for
    //                             registration at the IANA via first-come,
    //                             first-serve.
    // 4000–4999                   Available for use by applications.
    let socket = clsEvt.target,
        code = clsEvt.code,
        reason = clsEvt.reason,
        wasClean = clsEvt.wasClean;

    // TODO: Handle the close event.  How you do this probably will depend on the
    // code and whether the close was clean.
    if (code !== 1000) {
      // Not a normal close.  Do something special.
    }
  });

  // You'll close the socket when you are done with it.  The following is just a
  // demonstration.
  setTimeout(() => {
    // Although the MDN documentation says that `code` defaults to 1000, when `close`
    // is called with no arguments, the resulting code in the close event is 1005.
    // (This was seen in Chrome 59.)  So, I recommend being explicit with setting the
    // closing code.
    //
    // It may be helpful to examine the socket's `bufferedAmount` attribute before
    // attempting to close the connection to determine if any data has yet to be
    // transmitted on the network.
    socket.close(1000, "Done!");
  }, 10000);
}
