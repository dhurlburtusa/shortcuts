# WordPress Performance Notes


## Plugins Known to be Slow

Based on the TTFB in Chrome Dev Tools, I have determined that the following plugins significantly slow down a request.

- Easy Update Manager (aka stops-core-theme-and-plugin-updates)
  + Adds 100+ ms to front-end requests when using NGiNX and php-cgi.exe or Apache.
- Yoast (aka wordpress-seo)
  + Adds ~25 ms to front-end requests when using NGiNX and php-cgi.exe.
  + Adds ~75 ms to front-end requests when using Apache.
