# JavaScript Service Worker Notes

Service workers essentially act as proxy servers that sit between web
applications, the browser, and the network (when available).  They are intended,
amongst other things, to enable the creation of effective offline experiences,
to intercept network requests, and to take appropriate action based on whether
the network is available and updated assets reside on the server.  They will
also allow access to push notifications and background sync APIs.

A service worker is an event-driven worker registered against an origin and a
path.  It takes the form of a JavaScript file that can control the web-page/site
that it is associated with, intercepting and modifying navigation and resource
requests, and caching resources in a very granular fashion to give you complete
control over how your app behaves in certain situations (the most obvious one
being when the network is not available).

A service worker is run in a worker context: it therefore has no DOM access, and
runs on a different thread to the main JavaScript that powers your app, so it is
not blocking.  It is designed to be fully async; as a consequence, APIs such as
synchronous XHR and localStorage can't be used inside a service worker.

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

See https://developers.google.com/web/fundamentals/primers/service-workers/, 
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API, and
https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker for details.


## Registration

- Scoped: The scope that the service worker applies depends on the URL with which
  it is registered. For example, `/sw.js` will apply to the entire origin but
  `/example/sw.js` will only apply to `/example/`.
- Generally, deferring service worker registration until after the initial page
  has loaded will provide the best experience for users, especially those on
  mobile devices with slower network connections.

See https://developers.google.com/web/fundamentals/primers/service-workers/registration
for registration details.


## Caching/Offline Experience

The `Cache` interface provides a storage mechanism for `Request`/`Response`
object pairs that are cached, for example as part of the ServiceWorker life
cycle. Note that the `Cache` interface is exposed to windowed scopes as well as
workers.  You don't have to use it in conjunction with service workers.  The
caching of request/response pairs can be used to provide a pleasant offline
experience.

An origin can have multiple, named `Cache` objects.  You are responsible for
implementing how your script (e.g. in a `ServiceWorker`) handles `Cache`
updates. Items in a `Cache` do not get updated unless explicitly requested; they
don't expire unless deleted.

You are also responsible for periodically purging cache entries.  Each browser
has a hard limit on the amount of cache storage that a given origin can use.
Cache quota usage estimates are available via the `StorageEstimate` API.  The
browser does its best to manage disk space, but it may delete the `Cache`
storage for an origin.  The browser will generally delete all of the data for an
origin or none of the data for an origin.  Make sure to version caches by name
and use the caches only from the version of the script that they can safely
operate on.

Note: The caching API doesn't honor HTTP caching headers.

See https://developer.mozilla.org/en-US/docs/Web/API/Cache for details.


## Offline First

Offline first thinking promotes designing web apps to still be functional even
when internet connectivity has been lost.

See https://alistapart.com/article/offline-first, http://hood.ie/, and
http://offlinefirst.org/ for information about Offline First.
