# Google Analytics Notes


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
the command queue.  See the [command queue reference][ga-cmd-q] for details.


[ga-cmd-q]: https://developers.google.com/analytics/devguides/collection/analyticsjs/command-queue-reference
