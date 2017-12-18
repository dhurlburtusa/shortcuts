# HTML Templates

## General

```html
<!---
NOTE: Some of the reasons for the structure of this template can be found at
https://developer.yahoo.com/performance/rules.html.
-->
<!DOCTYPE html>
<!---
The `no-js` is for use when Modernizr is on the page.  If JavaScript is disabled, then the `no-js` class will remain.
If JavaScript is enabled and Modernizr successfully finishes its feature detection, then it will be replaced with the
`js` class among several other CSS classes indicating the capabilities/features of the currently running browser.
These classes can then be used in CSS to provide custom styling based on the capabilities of the browser.

All web sites / applications are composed of one or more HTML documents.  Each `html` element represents the root of
an HTML document.  When there are more than one HTML document for a web site / application, then each document
represents a different section of the web site / application.  In general, web sites / applications tend to follow the
same style theme throughout.  However, there may be times when particular sections may have a different style theme.
Using the `Doc` and `Doc--*` CSS classes allows the ability to apply different style themes to different sections of
a site / application.

For example:

    .Doc { background: gray; }
    .Doc--specialSection { background: white; }

says that all documents in the site / application should have a background color of gray except for in the special
section where it should be white.
-->
<html class="no-js  Doc  Doc--section  Doc--section--subSection" lang="en">
  <head>
    <meta charset="utf-8">
    <!---
    According to WHATWG:

    > The `title` element represents the HTML document's title or name.  Authors should use titles that identify their
    > documents even when they are used out of context, for example in a user's history or bookmarks, or in search
    > results.  The document's title is often different from its first heading, since the first heading does not have to
    > stand alone when taken out of context.

    The HTML document title should be unique throughout the web site / application.  This is because of the various
    purposes that the document title serves.  For one, the document title appears in the browser tab.  Having unique
    document titles helps a user to determine if they have the same document open in more than one tab.  When a user
    decides to save the current document, the default, suggested file name is the document title less invalid file
    system characters.  Having unique document titles helps a user to save documents of a web site / application
    without needing to come up with unique names on their own.

    Document titles may only contain text.  That is, document titles may not contain nested elements.  This means there
    is no inherent structure.  That is, authors will need to come up with their own structure using just text.  The
    following `title` element demonstrates a structured document title that should be unique throughout a web
    site / application.  It is a delimited list going from most specific to most generic.  The order from most
    specific to most generic was chosen because many times a browser's tab is too small to display the entire title.
    This way, the more specific text will be displayed.  If is was in the opposite order, then a user might only see
    the site name part of the title for several tabs.  Keep in mind that the following is only a suggestion.  Authors
    are encouraged to come up with a document title scheme that suits their needs.
    -->
    <title>Page Title - Doc Title - Site Name</title>
    <!---
    The document title and the page title may be the same in many cases.  It would be okay to combine them together
    as demonstrated in the following snippet.
    <title>Doc/Page Title - Site Name</title>
    -->
    <!---
    Sometimes Internet Explorer (IE) isn't setup to use the latest rendering engine available by the browser.  This
    setup can be bypassed by using the `X-UA-Compatible` parameter set to `IE=edge`.  This parameter can be set as an
    HTTP response header, or it can be set via a `meta` tag as demonstrated below.  Which method is used is up to the
    author.  The `meta` tag method has a drawback in that it doesn't HTML validate.  If HTML validation is of
    importance, then it is recommended that a response header be set.  When using Apache HTTP, the response header can
    be set in a `.htaccess` file.  How other web servers allow response headers to be set will be specific to that web
    server.  See its documentation for details.
    -->
    <!--meta http-equiv="X-UA-Compatible" content="IE=edge"-->
    <!---
    Use meta viewport tag to control the width and scaling of the browser's viewport.  Use `width=device-width` to
    match the screen's width in device independent pixels.  Use `initial-scale=1` to establish a 1:1 relationship
    between CSS pixels and device independent pixels.  Ensure your page is accessible by not disabling user scaling.
    See https://developers.google.com/web/fundamentals/documentation/multi-device-layouts/rwd-fundamentals/.
    See http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho for when not to include the meta
    viewport tag.
    -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="">
    <meta name="description" content="">
    <!--meta name="keywords" content=""> Typically ignored by search engines so it doesn't help with SEO. -->

    <!---
    Not sure what is recommended for the Content-Security-Policy.
    -->
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">

    <!---
    Add optional Open Graph meta tags.  See http://ogp.me/ for details.

    The following four properties are required if you choose to set Open Graph metadata.
    <meta property="og:title" content="">
    <meta property="og:type" content="">
    <meta property="og:url" content="">
    <meta property="og:image" content="">

    The following are optional.
    <meta property="og:audio" content="">
    <meta property="og:description" content="">
    <meta property="og:determiner" content="">
    <meta property="og:locale" content="">
    <meta property="og:locale:alternate" content="">
    <meta property="og:site_name " content="">
    <meta property="og:video" content="">
    -->

    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">

    <!---
    The order of the stylesheets is very important.  The recommended order is:

    * Third-party
      - Any with a CSS reset should come first.
      - Any with a CSS normalize should come next.
      - Any remaining should come next.
    * Third-party overrides
      Sometimes it is necessary to override some of the third-party CSS rules.  For example, some have decided to remove
      all the padding from certain types like the `p` type.  Many web sites need some type of padding or margins on their
      paragraphs.  A CSS normalize will likely add back padding and margins.  However, this will break the styling of
      some third-party rules because they were expecting all `p` tags to have no padding or margins.  This is where
      third-party overrides come in.  In the above example, the overrides will add padding and margins back in but only
      for the specific paragraphs that need it.
    * Site
      - Base
      - Components
        - Simple
        - Complex
      - Modules
        - Leaf
        - Container
      - Layouts
      - Themes
    * Page/Document
      - Base
      - Base Overrides (should be rare)
      - Page Specific Components
      - Component Overrides
      - Page Specific Modules
      - Module Overrides
      - Page Specific Layouts
      - Layout Overrides (should be rare)
      - Theme Overrides (should be rare)
    -->
    <!-- Normalize: (not needed if Bootstrap is included) -->
    <!--link crossorigin="anonymous" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" integrity="sha256-t2/7smZfgrST4FS1DT0bs/KotCM74XlcqZN5Vu7xlrw=" rel="stylesheet"-->
    <!--link crossorigin="anonymous" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css" integrity="sha256-uHu2MAd1LvCOVEAhvMld4LpJi7dUGS7GVzvG/5B3hlo=" rel="stylesheet"-->

    <!-- Bootstrap 3.3.7: -->
    <!--link crossorigin="anonymous" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha256-916EbMg70RQy9LHiGkXzG8hSg9EdNy97GazNG/aiY1w=" rel="stylesheet"-->
    <link crossorigin="anonymous" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css" integrity="sha256-fmMNkMcjSw3xcp9iuPnku/ryk9kaWgrEbfJfKmdZ45o=" rel="stylesheet">

    <!-- Properties Latest -->
    <link href="https://rawgit.com/dhurlburtusa/css-properties/master/properties.css" rel="stylesheet">

    <!-- Other Third-Party Styles: -->
    <!--link href="other-third-party-stylesheets.css" rel="stylesheet"-->

    <!-- Third-Party Overrides: -->
    <!--link href="third-party-overrides.css" rel="stylesheet"-->

    <!-- Site Related Styles: -->
    <!--
    base.css
    @dependency Normalize or Bootstrap
    -->
    <link href="http://codepen.io/dhurlburtusa/pen/OpgBVR.css?name=base_css_v0_0_0" rel="stylesheet">

    <!--link href="components.css" rel="stylesheet"-->
    <!--link href="modules.css" rel="stylesheet"-->
    <!--link href="layouts.css" rel="stylesheet"-->
    <!--link href="themes.css" rel="stylesheet"-->

    <!-- Page/Document Related Styles -->
    Page/document specific styles go in the following style tags.  Declarations that override any declarations 'imported'
    from the external stylesheets would also go here.  The order of the declarations is the same as the order recommended
    for the stylesheets but would typically be overrides or page/document specific declarations.
    -->
    <style>
      /* # Base: */

      /* # Base Overrides (rare): */

      /* # Page Specific Components: */

      /* # Component Overrides (ordered from simplest to most complex) */

      /* # Page Specific Modules: */

      /* Module Overrides (ordered from inner most to outer most) */

      /* # Page Specific Layouts: */

      /* # Layout Overrides: */

      /* # Theme Overrides: */

      @media print {}
    </style>
    <!---
    Include HTML5 Shim and Respond.js for IE8 support of HTML5 elements and media queries.  Update the script `src` as
    desired.

    WARNING: Respond.js doesn't work if you view the page via file://.
    -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!--- If you don't support IE8 and don't need to worry about FOUC, feel free to include modernizr.js wherever. -->
    <!-- Modernizr 2.8.3: -->
    <script crossorigin="anonymous" integrity="sha256-0rguYS0qgS6L4qVzANq4kjxPLtvnp5nn2nB5G1lWRv4=" src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <!--- Put remaining JavaScript includes near </body> and not here. Allows the page to start rendering sooner. -->
  </head>
  <body>
    <div>
      Page layout and content goes here.
    </div>
    <!-- Logging API Latest: -->
    <script src="http://codepen.io/dhurlburtusa/pen/peNdbP.js?name=Logging+API_v0_0_0"></script>

    <!-- Class Latest: -->
    <script src="http://codepen.io/dhurlburtusa/pen/mOopRq.js?name=Class+-+ES6_v0_0_0"></script>

    <!-- EventEmitter Polyfill: -->
    <script src="http://codepen.io/dhurlburtusa/pen/pNQYXv.js?name=EventEmitter+Polyfill_v0_0_0"></script>

    <!-- Third-Party Libraries: -->

    <!-- Page Specific JavaScript: -->
    <script>
      (function (global) {

        'use strict';

        // Insert your code here.
      })(self || window);
    </script>
  </body>
</html>
```
