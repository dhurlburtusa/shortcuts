# Web Development Optimization Notes

- DNS Prefetching, preconnect, prefetching, preloading, prerendering assets:
  + https://css-tricks.com/prefetching-preloading-prebrowsing/
  + https://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/
- Using Server Push
  + https://www.smashingmagazine.com/2017/04/guide-http2-server-push/
    * Note: Pushing based on the precense of a cookie may be a bad idea. See the comment from Hadrien Gardeur in the article.
  + Be sure you understand the implications of using server push. How do you know you are not pushing something the browser has already cached? Are you just bloating the response?
