# JavaScript Service Worker Notes

Service workers essentially act as proxy servers that sit between web
applications, the browser, and the network (when available).  They are intended,
amongst other things, to enable the creation of effective offline experiences,
to intercept network requests, and to take appropriate action based on whether
the network is available and updated assets reside on the server.  They will
also allow access to push notifications and background sync APIs.

See https://developers.google.com/web/fundamentals/primers/service-workers/, 
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API, and
https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker for details.
