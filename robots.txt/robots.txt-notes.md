# robots.txt Notes

From [Wikipedia][wikipedia-robots]:

> The robots exclusion standard, also known as the robots exclusion protocol or
> simply `robots.txt`, is a standard used by websites to communicate with web
> crawlers and other web robots.  The standard specifies how to inform the web
> robot about which areas of the website should not be processed or scanned.

When a site owner wishes to give instructions to web robots they place a text
file called `robots.txt` in the root of the web site hierarchy.  A
`robots.txt` file on a website will function as a request that specified
robots ignore specified files or directories when crawling a site.

A `robots.txt` file covers one origin.  For websites with multiple subdomains,
each subdomain must have its own robots.txt file.


## Specification

See http://www.robotstxt.org/orig.html and
https://en.wikipedia.org/wiki/Robots_exclusion_standard for details.


[wikipedia-robots]: https://en.wikipedia.org/wiki/Robots_exclusion_standard
