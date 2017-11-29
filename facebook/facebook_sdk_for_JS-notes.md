# Facebook SDK for JS Notes

The Facebook SDK for JavaScript provides a rich set of client-side
functionality that:

* Enables you to use the Like Button and other Social Plugins on your site.
* Enables you to use Facebook Login to lower the barrier for people to sign up
  on your site.
* Makes it easy to call into Facebook's Graph API.
* Launch Dialogs that let people perform various actions like sharing stories.
* Facilitates communication when you're building a game or an app tab on
  Facebook.

The SDK, social plugins and dialogs work on both desktop and mobile web browsers.

**Loading the SDK**

Insert the following directly after the opening `<body>` tag on each page you
want to load it:

```html
  <body>
    <script>
      window.fbAsyncInit = function () {
        FB.init({
          appId            : 'your-app-id',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v2.11'
        });
      };

      (function (d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    </script>
    ...
```

The snippet above can be configured to use a different language, disable XFBML
parsing, check login status, etc.  See https://developers.facebook.com/docs/javascript/advanced-setup
for details.
