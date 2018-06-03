# Terminology Notes


## Aside or Sidebar?

Many times an aside and sidebar are used interchangeably in the HTML markup and
CSS world.  However, they are distinct things.  A sidebar is a region that is
to the left or right of another region.  It is, however, common to have asides
within the sidebar region.  An aside is a special type of section.  It is a
section that is tangentially related to the content around it.  Aside are not
only found in a sidebar region, they may be found in other regions too.  Sidebar
regions not only contain asides, but they may contain other content as well such
as advertisements or navigation.

See Region or Section below.


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


## Region or Section?

Many times region and section are used interchangeably.  However, I distinguish
the two by the following definitions.

**Region**

A region is an area within a context such as a header, body, sidebar, or footer
within a document.  These regions usually will contain sections of the document.
Sections may be moved to different regions but the header region will always be
the header region.  If a header region is moved else where, then it is no longer
a header region.

**Section**

A section is a part within a greater whole such as a section within a document.
Sections are usually contained within regions but they may span multiple
regions too.  However, span multiple regions is not typical.  In HTML, it is
not possible from a DOM perspective.  Sections can be styled to appear like
they span multiple regions.

Sections may be composed of regions too.
