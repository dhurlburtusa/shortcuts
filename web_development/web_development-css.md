# Web Development - CSS

CSS organization, and therefore maintenance, has always been a problem in
**ALL** the projects I've worked on with multiple developers.


## Major CSS Rule Categories

CSS rules can be categorized several ways.  The following list of categories is
one way.

They can be categorized by the applicability of the rules:

* Site-wide rules
* Page-specific rules
* Above-the-fold rules
* Component rules
* Media-specific rules
* Browser-specific rules

They can be categorized by the volatility of the rules:

* Volatile
* Non-volatile

They can be categorized by the purpose of the rules:

* Normalizer rules (Optional)
* Utility rules

They can be categorized by the source of the rules:

* Third-party style sheet(s)
* Home-grown


**Normalizer Rules**

Normalizer rules are those that make the base HTML elements render the same or
nearly the same on all supported browsers.  See
https://necolas.github.io/normalize.css/ for an example of a style sheet with
this goal.

Note: Sometimes third-party stylesheets embed some version of `normalize.css`.
So, there may be no need to explicitly include a normalizer.

**Third-Party Style Sheets**

A third-party stylesheet is one that comes from a third-party library or
framework.  [Bootstrap] is an example of a very popular framework.

**Site-Wide Rules**

Site-wide rules are those that apply to the entire or vast majority of a website
or a web app.

**Page-Specific Rules**

Page-specific rules are those that only apply to a subset of the website or web
app.  Many times, they will only be specific to a single page or grouping of
pages.

**Above-the-Fold Rules**

The above-the-fold rules are the rules that apply to just the HTML elements that
will be above-the-fold when a web page initially renders before the user has
interacted with the page.  Most of the time this includes the rules for the
site header which usually includes the main site navigation.  It will usually
include the first portion of the main content.

**Component Rules**

Component rules are those specific to a particular component.  A component in
this context is a set of one or more HTML elements that represents. A component is
know as a block in BEM terminology and a module in the SMACSS terminology.

**Media-Specific Rules**

Media-specific rules are those that apply specifically to a particular media
configuration.  These rules use a media-query (`@media (...) { ... }`) to
declare its rules.  A typical use of these rules is to define different styling
for different width devices.  Another typical use is to define print styling.

**Browser-Specific Rules**

These rules are those that target specific browsers.  Usually this is done to
provide cross-browser compatible styling.  This does not necessarily mean that
the styling must render pixel-for-pixel between two different browsers.

**Utility Rules**

These rules are those that provide some type of utility.  For example, a CSS
class named `hidden` might be used to hide the element to which is is applied.
The `clearfix` is a common utility rule that allows a element to automatically
clear any floated child elements.


## Organization

Knowing the organization (ordering and grouping) expectations of the CSS rules
used for a website or web app is vital to its usability and maintainability.  If
the development team is not familiar with the expected organization, then the
CSS rules can become very sloppy, very quickly.

There are many ways to order and to group the various categories of CSS rules.
When determining an optimal organization strategy, one must take the following
factors into account.

* Cascading nature of CSS
* Rule category
* Controlability
  + Can be thought of as a spectrum.
  + Third-party style sheets would be toward the no-control end of the spectrum and
    custom site styles at the other end.
* Browser caching
* Volatility
  + Can be thought of as a spectrum.
  + Third-party style sheets would be toward the non-volatile end and custom site
    styles would be at the other end.
* Bandwidth
* Bundlability
  + Depends on what build tools are available to the development team.
* Resource requests
* Rule Applicability
  + Site
  + Page
  + Above-the-fold
  + Component
  + Media
  + Browser (aka User-Agent)
* Lazy loadability
* Site/app performance/user experience

Because of the cascading nature of CSS, in general, you'll want to order the
CSS rules from lowest [specificity] to highest specificity.  This allows the
most efficient use of the cascading nature of CSS.

Because third-party style sheets tend to be relatively non-volatile, you can
take advantage of browser caching.  The web server can be configured to set the
cache control headers to never expire this resource as long as it is properly
versioned.  On the otherhand, for performance reasons primarily related to user
experience, you will want to minimize the number of extraneous requests.  If the
ability to bundle CSS rules together is available, then consider bundling the
third-party style sheets with the main CSS bundle.  However, do realize that
you will be less able to take advantage of browser caching if the CSS rules
bundled with the third-part rules are volatile.  This may not be a concern if
the third-party styles are little in size.  However, if the third-party styles
are large, it may be less efficient to repeatedly serve one large bundle over
one non-volatile bundle and one volatile bundle.

Because there is little control over a third-party style sheet's content (unless
you are actively involved with the third-party framework/library) and there is
usually a need to tweak, via overriding, at least some of the styles that come
with the third-party framework/library, these styles should come before the
site's/app's custom styles.

**Recommendation**

Bundle together all non-volatile third-party styles into a single bundle and
make sure the cache control headers are properly set.  If there are only two
or three third-party style sheets, then retrieving them from a CDN may be more
optimal.

**Site Style Sheet Groupings**

The following is a successful way to organize the site's CSS rules that keeps it
lean and maintainable.

* Variables
* Base rules
  + Box-sizing (all or select elements)
  + Focus
  + Scrollbars
  + Text selection
  + Form related
    - placeholders
    - validation
  + Data tables
    - border collapsing
    - borders
    - padding
    - vertical alignment
* Third-party overrides
* "Leaf" components
  + Icons
  + Form controls
  + Buttons
  + Links
  + Tabs
* Restricted container components
* Arbitrary container components
  + Usually layout components
  + Page region components


## Bundling





[bootstrap]: https://getbootstrap.com/
[specificity]: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
