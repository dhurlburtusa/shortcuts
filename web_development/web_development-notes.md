# Web Development Notes


## Progressive Web Apps (PWA)

From https://en.wikipedia.org/wiki/Progressive_Web_Apps:

> Progressive Web Apps (PWAs) are web applications that are regular web pages or
> websites, but can appear to the user like traditional applications or native
> mobile applications.  The application type attempts to combine features offered
> by most modern browsers with the benefits of a mobile experience.

In 2015, designer Frances Berriman and Google Chrome engineer Alex Russell
coined the term "progressive web apps" to describe apps taking advantage of new
features supported by modern browsers, including service workers, and web app
manifests, that let users upgrade web apps to progressive web applications in
their native operating system (OS).  According to Google Developers, these
characteristics are:

* **Progressive** - Work for every user, regardless of browser choice because
  they’re built with progressive enhancement as a core tenet.
* **Responsive** - Fit any form factor: desktop, mobile, tablet, or forms yet to
  emerge.
* **Connectivity Independent** - Service workers allow work offline, or on low
  quality networks.
* **App-Like** - Feel like an app to the user with app-style interactions and
  navigation.
* **Fresh** - Always up-to-date thanks to the service worker update process.
* **Safe** - Served via HTTPS to prevent snooping and ensure content hasn’t been
  tampered with.
* **Discoverable** - Are identifiable as “applications” thanks to W3C manifests
  and service worker registration scope allowing search engines to find them.
* **Re-engageable** - Make re-engagement easy through features like push
  notifications.
* **Installable** - Allow users to “keep” apps they find most useful on their home
  screen without the hassle of an app store.
* **Linkable** - Easily shared via a URL and do not require complex installation.

The technical baseline criteria for a site to be considered a progressive web
app by browsers were described by Russell in a follow-up post:

* **Originate from a secure origin**.  Served over TLS and green padlock displays
  (no active mixed content).
* **Load while offline (even if only a custom offline page)**.  By implication,
  this means that progressive web apps require service workers.
* **Reference a web app manifest** with at least the four key properties: `name`,
  `short_name`, `start_url`, and `display` (with a value of `standalone` or
  `fullscreen`)
* **An icon at least 144×144 large in png format**. E.g.: `"icons": [ { "src":
  "/images/icon-144.png", "sizes": "144x144", "type": "image/png" } ]`


## Performance

### Caching Assets

Note: Filename revving is probably no longer necessary over the simpler query
string revving.  See
https://www.impressivewebs.com/cache-busting-front-end-resources-file-name-revving-still-necessary/
for details.  That is, filename revving is still a valid technique, however, it
is typically more difficult to implement without a proper build process in
place.
