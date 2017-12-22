# Google Tag Manager Notes

Google Tag Manager (GTM) is a tag management system that allows you to quickly
and easily update tags and code snippets on your website or mobile app, such
as those intended for traffic analysis and marketing optimization.


## Setup

Install the following snippets of code on all the web pages you want to manage
tags for.

Copy the following JavaScript and paste it as close to the opening `<head>`
tag as possible
  
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</script>
<!-- End Google Tag Manager -->
```

Copy the following snippet and paste it immediately after the opening `<body>`
tag.

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```


## Misc

GTM fires tags asynchronously.
