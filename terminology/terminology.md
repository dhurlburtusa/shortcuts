# Terminology Notes


## Container or Wrapper?

Many times container and wrapper are used interchangeably in the HTML markup and
CSS world to describe a parent element.  However, starting now, I'll use them as
follows.

**Container**

A container is a parent element that contains contains zero or more related
child elements.

**Wrapper**

A wrapper is a parent element that wraps a specific child element.  Many times
a wrapper element is needed to get the desired layout of the child element when
the child element cannot do it on its own.

One example off the top of my head is a dialog.  Sometimes a wrapper is needed
to get it to position/layout where you want.


## Page or Screen?

Many times page and screen are used interchangeably.  However, I differentiate
them by the fact that a page is not necessarily displayed on the entire screen
of a device.  It may be in fullscreen mode.  On mobile devices, usually a page
is considered to take up the entire screen when ignoring the OS chrome.

The above terminology differentiation affects the choosen name of markup
elements in HTML.  Because an element in an HTML document can never represent a
screen (it can be styled to take up most or all of the screen), there should
fnver be a screen element except when the element's sole purpose is to only be
displayed in full screen mode.
