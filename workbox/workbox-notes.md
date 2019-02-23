# Workbox Notes

Workbox is a set of libraries and Node modules that make it easy to cache assets
and take full advantage of features used to build Progressive Web Apps.

- Improves your web app's performance by caching and serving your files.
- Makes it easy to create an offline first experience.

Workbox is a library that bakes in a set of best practices and removes the
boilerplate every developer writes when working with service workers.

- Precaching
- Runtime caching
- Strategies
- Request routing
- Background sync
- Helpful debugging
- Greater flexibility and feature set than sw-precache and sw-toolbox


## Precaching

Precaching enables a web app to work offline or cache assets for a long time.

Precaching a file will ensure that a file is downloaded and cached before a
service worker is installed, meaning that if your service worker is installed,
your files will be cached.

Workbox provides an easy way to precache files, ensuring that as your service
worker changes, the precached files are maintained efficiently, only downloading
updated files and cleaning up after the service worker is made redundant.

```js
workbox.precaching.precacheAndRoute([
    '/assets/styles/index.0c9a31.css',
    '/assets/scripts/main.0d5770.js',
    { url: '/index.html', revision: '383676' },
]);
```

The above snippet will download the files during the service worker install
event and create a route that serves these files directly from the cache.

The list of files to precache is normally generated using a tool that manages
the versioning of files.

**Generating a Precache Manifest**

Many tools can be used to generate the list of files along with a version to
be precached.  Workbox provides three such tools.

- Workbox Command Line Interface
- Workbox Build
- Workbox Webpack Plugin
