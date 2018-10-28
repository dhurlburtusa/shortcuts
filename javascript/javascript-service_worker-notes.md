# JavaScript Service Worker Notes

Service workers essentially act as proxy servers that sit between web
applications, the browser, and the network (when available).  They are intended,
amongst other things, to enable the creation of effective offline experiences,
to intercept network requests, and to take appropriate action based on whether
the network is available and updated assets reside on the server.  They will
also allow access to push notifications and background sync APIs.

A service worker is run in a worker context: it therefore has no DOM access, and
runs on a different thread to the main JavaScript that powers your app, so it is
not blocking.

Service workers only run over HTTPS, for security reasons.

In Firefox, Service Worker APIs are also hidden and cannot be used when the user
is in private browsing mode.

Service workers are also intended to be used for such things as:

- Background data synchronization.
- Responding to resource requests from other origins.
- Receiving centralized updates to expensive-to-calculate data such as geolocation
  or gyroscope, so multiple pages can make use of one set of data.
- Client-side compiling and dependency management of CoffeeScript, less, CJS/AMD
  modules, etc. for dev purposes.
- Hooks for background services.
- Custom templating based on certain URL patterns.
- Performance enhancements, for example pre-fetching resources that the user is
  likely to need in the near future, such as the next few pictures in a photo
  album.

## Registration

- Scoped: The scope that the service worker applies depends on the URL with which
  it is registered. For example, `/sw.js` will apply to the entire origin but
  `/example/sw.js` will only apply to `/example/`.
- Generally, deferring service worker registration until after the initial page
  has loaded will provide the best experience for users, especially those on
  mobile devices with slower network connections.

See https://developers.google.com/web/fundamentals/primers/service-workers/registration
for registration details.

See https://developers.google.com/web/fundamentals/primers/service-workers/, 
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API, and
https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker for details.
