# Facebook Pixel Notes

With the Facebook Pixel, you can:

* Create custom audiences for your ad.
* Measure conversion rates for that audience as activity on your website.
* Use this data to target people on Facebook with relevant ads.

Use the Pixel with these product areas:

* Dynamic Product Ads
* Website Custom Audiences
* Conversion Tracking


## Pixel Events - Facebook Tag API

You can use the JavaScript Tag API to track custom audience and conversion
events, providing the capability to send multiple and customized events on one
page, and include data beyond just the referral URL.  You can then use these
events and associated custom data in Custom Audiences from Your Website Rules.

**Setup**

```html
  <body>
    <!-- Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');

      function() {
        var fbPixelId = '<FB_PIXEL_ID>';
        // The Facebook pixel will send button click and page metadata (such as data
        // structured according to Opengraph or Schema.org formats) from your website to
        // improve your ads delivery and measurement and automate your pixel setup.  To
        // configure the Facebook Pixel to not send this additional information,
        // uncomment the following line.
        // fbq('set', 'autoConfig', 'false', fbPixelId)
        fbq('init', fbPixelId);
        fbq('track', "PageView");
      }();
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=<FB_PIXEL_ID>&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Facebook Pixel Code -->
    ...
```
