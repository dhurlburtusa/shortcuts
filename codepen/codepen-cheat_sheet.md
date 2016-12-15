# CodePen Cheat Sheet


## External Resources

See https://blog.codepen.io/2013/05/28/new-feature-use-pens-as-external-resources/ and
https://blog.codepen.io/documentation/editor/adding-external-resources/ for details.

**Using Resources from GitHub**

Unfortunately, CodePen won't execute JavaScript served from GitHub since GitHub returns the raw JavaScript with a MIME
of text/plain.  An easy way to get around this is to use the https://rawgit.com/ service.

* Go to GitHub and navigate to the file you want to use as a resource.
* Click Raw to see the raw version.
* Copy the URL of the raw version.
* Go to RawGit.
* Paste the URL to generate the URL to use on CodePen.
  - Two URLs are generated. One for development and the other for production.
  - Copy one of the URLs.
* Go to CodePen and open the Pen you want to add the resource.
* Open Settings
  - Depending on the resource type, JavaScript or CSS, choose the correct settings.
* Paste the URL in the CodePen settings.
* Save settings.
