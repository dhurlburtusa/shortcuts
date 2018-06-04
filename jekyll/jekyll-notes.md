# Jekyll Notes

Jekyll is a simple, blog-aware, static site generator.  It takes a template
directory containing raw text files in various formats, runs it through a
converter, and spits out a complete, ready-to-publish static website.

## Directory Structure

```
.
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html # can also be an 'index.md' with valid YAML Frontmatter
```


## Configuration

Jekyll configuration can be specified in a `_config.yml` file placed in your
site's root directory.

See https://jekyllrb.com/docs/configuration/ for details.

**Note**: Using tabs in configuration files will either lead to parsing
errors, or Jekyll will revert to the default settings.  Use spaces instead.

**Front Matter Defaults**

Site-wide defaults can be specified using the `defaults` key in the
configuration file.

The `defaults` key holds an array of `scope`/`values` pairs that define what
defaults should be set for a particular file path, and optionally, a file type
in that path.

```
defaults:
  -
    scope:
      path: "" # an empty string here means all files in the project
    values:
      layout: "default"
  -
    scope:
      path: ""
      type: "posts" # "drafts" | "pages" | "posts" or any collection.
    values:
      layout: "default"
```


## Front Matter

Any file that contains a YAML front matter block will be processed by Jekyll
as a special file.  The front matter must be the first thing in the file and
must take the form of valid YAML set between triple-dashed lines. 

Here is a basic example:

```
---
layout: post
title: Blogging Like a Hacker
---
```


## Templates

Jekyll uses the [Liquid] template language.  See
https://jekyllrb.com/docs/templates/ for details.


## Running

**Installing Gems**

This only needs to be done once or whenever the gems change.

```sh
bundle install
```

**Starting the Dev Server**

```sh
bundle exec jekyll serve
```

**Building for Production**

1. Set your production URL in `_config.yml` e.g. url: https://example.com.
2. Run `JEKYLL_ENV=production bundle exec jekyll build`


## Misc

* The contents of `<destination>` are automatically cleaned, by default, when
  the site is built.  Some files could be retained by specifying them within the
  `<keep_files>` configuration directive.


[liquid]: http://liquidmarkup.org
