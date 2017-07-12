# Google Analytics Notes

See https://developers.google.com/analytics/devguides/collection/analyticsjs/
for details.


## JavaScript Tracking Snippet

There are two different tracking snippets available.  These need to be added
to each page you want to track.  It is recommended that it be added to the
&lt;head> tag before any other &lt;script> or &lt;style> tags.

```html
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
</script>
```

Use the following snippet if your visitors primarily use modern browsers to
access your site.

```html
<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
</script>
<script async src="https://www.google-analytics.com/analytics.js"></script>
```

These snippets end up creating a global function named `ga` which is known as
the command queue.  See the [command queue reference][ga-cmdq-ref] for details.

**Ready Callback**

The ready callback is called when the `analytics.js` library is fully loaded,
and all previous commands added to the queue have been executed.

```js
// @param {Tracker} [tracker] - The default tracker if one was created.
ga(function (tracker) {
  // Do something with the tracker or call methods on the ga object.
});
```

Note: `ga` object methods are only available when `analytics.js` has fully
loaded, so you should only reference them inside a ready callback.


## Trackers

Trackers collect and store data and then send that data to Google Analytics.
The data comes in field (i.e., name/value pairs) form.  See the
[field reference][ga-fld-ref] for applicable fields.

**Creating**

```js
// Syntax:
ga('create', [trackingId], [cookieDomain], [name], [fieldsObject]);

// Example:
ga('create', 'UA-XXXXX-Y', 'example.com', 'MyTracker', {
  allowAnchor: true, // The default
  allowLinker: false, // The default
  alwaysSendReferrer: false, // The default
  cookieDomain: 'example.com', // Synonymous with 3rd param
  cookieExpires: 63072000, // The default of 2 years
  cookieName: '_ga', // The default
  legacyHistoryImport: true, // The default
  sampleRate: 95, // 95% of users. 100% is the default
  siteSpeedSampleRate: 10, // 10% of users.  1% is the default
});
```

**Referencing**

Because the creation of trackers is asynchronous, we need a way to get a
reference to the tracker(s).  The trackers will be available when the ready
callback has been called.

```js
// @param {Tracker} [tracker] - The default tracker if one was created.
ga(function (tracker) {

  // If multiple trackers were created, the `ga` object provides two methods
  // to get access to the trackers.
  
  // Get tracker by name:
  let myTracker = ga.getByName('MyTracker');
  
  // Get all trackers:
  let trackers = ga.getAll();
});
```

**Getting Fields**

Once you have a reference to a tracker, you can use the `get` method to get field values.

```js
ga(function (tracker) {
  let value = tracker.get('fieldname');
});
```

**Setting/Updating Fields**

Tracker objects can be updated using the `set` method.  A tracker's `set`
method can be called on a tracker object itself or by adding a `set` command
to the `ga()` command queue.

The following examples use the command queue:

```js
ga('set', 'page', '/about');
ga('set', 'title', 'About Us');
// or
ga('set', {
  page: '/about',
  title: 'About Us'
});

// with a named tracker:
ga('myTracker.set', 'page', '/about');
```

The following examples use a tracker object:

```js
ga(function (tracker) {
  tracker.set('page', '/about');
  tracker.set('title', 'About Us');
  // or
  tracker.set({
    page: '/about',
    title: 'About Us'
  });
});
```


## Campaign

**Fields**

There are many campaign related fields that may be set, which include the ID,
name, source, medium, keyword, and content.  See [field reference][ga-fld-cn]
for details.


## Sessions

**Session Control**

Sessions can be controlled with the `sessionControl` field.  See
[reference][ga-fld-sc] for details.

```js
// Starts a new session.
ga('send', 'pageview', { sessionControl: 'start' });
```


## Misc

GA tracks the document title, so be sure to pick the title you want to see in
the GA web interface.  Also, it appears it may be limited to 1500 bytes.


[ga-cmdq-ref]: https://developers.google.com/analytics/devguides/collection/analyticsjs/command-queue-reference
[ga-fld-ref]: https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference
[ga-fld-cn]: https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#campaignName
[ga-fld-sc]: https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#sessionControl
