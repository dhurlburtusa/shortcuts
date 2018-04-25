# WordPress Notes


## Common URIs

* /wp-login.php
* /wp-login.php?action=register
* /wp-login.php?action=lostpassword


## Database

See https://codex.wordpress.org/Database_Description for details.

**Initial Set of Tables**

After WordPress is installed, the following set of tables will exist.  Note: The tables
listed here are shown without the prefix that WordPress typically uses.

| Table Name           |
| -------------------- |
| `commentmeta`        |
| `comments`           |
| `links`              |
| `options`            |
| `postmeta`           |
| `posts`              |
| `term_relationships` |
| `term_taxonomy`      |
| `termmeta`           |
| `terms`              |
| `usermeta`           |
| `users`              |

**Initial Set of Columns of Select Tables**

**`users` Table**

| Column Name           | Data Type    |
| --------------------- | ------------ |
| `ID`                  | bigint(20)   |
| `user_login`          | varchar(60)  |
| `user_pass`           | varchar(255) |
| `user_nicename`       | varchar(50)  |
| `user_email`          | varchar(100) |
| `user_url`            | varchar(100) |
| `user_registered`     | datetime     |
| `user_activation_key` | varchar(255) |
| `user_status`         | int(11)      |
| `display_name`        | varchar(250) |

**`posts` Table**

| Column Name             | Data Type    |
| ----------------------- | ------------ |
| `ID`                    | bigint(20)   |
| `post_author`           | bigint(20)   |
| `post_date`             | datetime     |
| `post_date_gmt`         | datetime     |
| `post_content`          | longtext     |
| `post_title`            | text         |
| `post_excerpt`          | text         |
| `post_status`           | varchar(20)  |
| `comment_status`        | varchar(20)  |
| `ping_status`           | varchar(20)  |
| `post_password`         | varchar(255) |
| `post_name`             | varchar(200) |
| `to_ping`               | text         |
| `pinged`                | text         |
| `post_modified`         | datetime     |
| `post_modified_gmt`     | datetime     |
| `post_content_filtered` | longtext     |
| `post_parent`           | bigint(20)   |
| `guid`                  | varchar(255) |
| `menu_order`            | int(11)      |
| `post_type`             | varchar(20)  |
| `post_mime_type`        | varchar(20)  |
| `comment_count`         | bigint(20)   |

**`options` Table**

| Column Name             | Data Type    |
| ----------------------- | ------------ |
| `option_id`             | bigint(20)   |
| `option_name`           | varchar(191) |
| `option_value`          | longtext     |
| `autoload`              | varchar(20)  |

**`links` Table**

| Column Name        | Data Type    |
| ------------------ | ------------ |
| `link_id`          | bigint(20)   |
| `link_url`         | varchar(255) |
| `link_name`        | varchar(255) |
| `link_image`       | varchar(255) |
| `link_target`      | varchar(25)  |
| `link_description` | varchar(255) |
| `link_visible`     | varchar(20)  |
| `link_owner`       | bigint(20)   |
| `link_rating`      | int(11)      |
| `link_updated`     | datetime     |
| `link_rel`         | varchar(255) |
| `link_notes`       | mediumtext   |
| `link_rss`         | varchar(255) |

**`comments` Table**

| Column Name            | Data Type    |
| ---------------------- | ------------ |
| `link_id`              | bigint(20)   |
| `comment_ID`           | bigint(20)   |
| `comment_post_ID`      | bigint(20)   |
| `comment_author`       | tinytext     |
| `comment_author_email` | varchar(100) |
| `comment_author_url`   | varchar(200) |
| `comment_author_IP`    | varchar(100) |
| `comment_date`         | datetime     |
| `comment_date_gmt`     | datetime     |
| `comment_content`      | text         |
| `comment_karma`        | int(11)      |
| `comment_approved`     | varchar(20)  |
| `comment_agent`        | varchar(255) |
| `comment_type`         | varchar(20)  |
| `comment_parent`       | bigint(20)   |
| `user_id`              | bigint(20)   |

**Select Options**

The following is a select list of options from the `options` table.

| Option Name       | Example Option Value | Description          |
| ----------------- | -------------------- | -------------------- |
| `admin_email`     | admin@example.com    | Administrator email. |
| `blogname`        | My First Blog        | Blog title.          |
| `blogdescription` | Another Blog         | Blog tagline.        |
| `current_theme`   | mytheme-child        |                      |
| `date_format`     | F j, Y               | Default date format. |
| `home`            | http://example.com   | Blog address.        |
| `posts_per_page`  | 10                   | The maximum number of posts on the blog index. |
| `show_on_front`   | posts                | What to show on the front page. One of 'posts' or 'page'. |
| `siteurl`         | http://example.com   | WordPress address.   |
| `stylesheet`      | mytheme-child        | The slug of the currently activated stylesheet (style.css). |
| `template`        | mytheme-child        | The slug of the currently activated theme. |
| `time_format`     | g:i a                | Default time format. |

See https://codex.wordpress.org/Option_Reference for more details.


## Plugins

### Common/Popular

**WP Development**

* [Divi Builder](https://www.elegantthemes.com/plugins/divi-builder/)
* [Google Tag Manager](https://wordpress.org/plugins/duracelltomi-google-tag-manager/)
* [Theme My Login](https://wordpress.org/plugins/theme-my-login/)
* [UpdraftPlus - Backup](https://wordpress.org/plugins/updraftplus/)

**Notes**

* [PaidMembershipsPro](https://github.com/dhurlburtusa/shortcuts/blob/master/wordpress/wordpress-paid_memberships_pro_plugin-notes.md)
* [Stripe](https://github.com/dhurlburtusa/shortcuts/blob/master/stripe/stripe_payments_wordpress_plugin-notes.md)


## Themes

At their most basic level, WordPress themes are collections of different files
that work together to create what you see, as well as how your site behaves.

### Template Files

WordPress themes are made up of template files.  These are PHP files that
contain a mixture of HTML, Template Tags, and PHP code.

**Common WordPress Template Files**

Below is a list of some basic theme templates and files recognized by WordPress.

* **index.php**: The main template file. It is required in all themes.
* **style.css**: The main stylesheet. It is required in all themes.
* **rtl.css**: The right-to-left stylesheet is included automatically if the
  website language's text direction is right-to-left.
* **comments.php**: The comments template.
* **front-page.php**: The front page template is always used as the site front
  page if it exists, regardless of what settings on Admin > Settings > Reading.
* **home.php**: The home page template is the front page by default.  If you do
  not set WordPress to use a static front page, this template is used to show
  latest posts.
* **header.php**: The header template file usually contains your site's document
  type, meta information, links to stylesheets and scripts, and other data.
* **singular.php**: The singular template is used for posts when `single.php` is
  not found, or for pages when `page.php` is not found.  If `singular.php` is
  not found, `index.php` is used.
* **single.php**: The single post template is used when a visitor requests a
  single post.
* **single-{post-type}.php**: The single post template used when a visitor
  requests a single post from a custom post type.
* **archive-{post-type}.php**: The archive post type template is used when
  visitors request a custom post type archive.  The `archive.php` template file
  is used if the `archive-{post-type}.php` is not present.
* **page.php**: The page template is used when visitors request individual
  pages, which are a built-in template.
* **page-{slug}.php**: The page slug template is used when visitors request a
  specific page, for example one with the "about" slug (`page-about.php`).
* **category.php**: The category template is used when visitors request posts by
  category.
* **tag.php**: The tag template is used when visitors request posts by tag.
* **taxonomy.php**: The taxonomy term template is used when a visitor requests a
  term in a custom taxonomy.
* **author.php**: The author page template is used whenever a visitor loads an
  author page.
* **date.php**: The date/time template is used when posts are requested by date
  or time.
* **archive.php**: The archive template is used when visitors request posts by
  category, author, or date.  **Note**: this template will be overridden if more
  specific templates are present like `category.php`, `author.php`, and
  `date.php`.
* **search.php**: The search results template is used to display a visitor's
  search results.
* **attachment.php**: The attachment template is used when viewing a single
  attachment like an image, pdf, or other media file.
* **image.php**: The image attachment template is a more specific version of
  `attachment.php` and is used when viewing a single image attachment.  If not
  present, WordPress will use `attachment.php` instead.
* **404.php**: The 404 template is used when WordPress cannot find a post, page,
  or other content that matches the visitor’s request.

See https://developer.wordpress.org/themes/basics/template-files/ for more
details.

There are only two files absolutely required in a WordPress theme:

* index.php
* style.css

The `style.css` file must begin with a stylesheet header comment which will
look something like the following:

```css
/*
 Theme Name:   Name of Theme
 Theme URI:    http://example.com/name-of-theme/
 Author:       John Doe
 Author URI:   http://example.com
 Description:  This is a theme.
 Version:      x.x.x
 License:      GNU General Public License v2 or later
 License URI:  http://www.gnu.org/licenses/gpl-2.0.html
 Text Domain:  name-of-theme
 Tags:         light, dark, two-columns, right-sidebar, responsive-layout, accessibility-ready
*/
```

`Theme Name`, `Author`, `Description`, `Version`, `License`, `License URI`,
and `Text Domain` are all required.  The rest are optional.

Note: When you have the bare minimum, the Customizer will have the "Site
Identity", the Menus, "Static Front Page", and the "Additional CSS" tabs.

### File Organization

Although there is no required file structure, here is an example of how the
Twenty Seventeen Theme organizes its files:

```
assets/
  +- css/
  +- images/
  +- js/
inc/
template-parts/
  +- footer/
  +- header/
  +- navigation/
  +- page/
  +- post/
404.php
archive.php
comments.php
footer.php
front-page.php
functions.php
header.php
index.php
page.php
README.txt
rtl.css
screenshot.png
search.php
searchform.php
sidebar.php
single.php
style.css
```

### Conditional Tags

* **`is_home()`**: Determines if the query is for the blog homepage.  See
  https://developer.wordpress.org/reference/functions/is_home/.
* **`is_front_page()`**: Determines if the query is for the front page of the
  site.  See https://developer.wordpress.org/reference/functions/is_front_page/.
* **`is_admin()`**: Determines if the current request is for an administrative
  interface page.  See https://developer.wordpress.org/reference/functions/is_admin/.
* **`is_single(?$post)`**: Determines if the query is for an existing single post.
  See https://developer.wordpress.org/reference/functions/is_single/.
* **`is_singular(?$post_types)`**: Determines if the query is for an existing
  single post of any post type (post, attachment, page, or custom post types).
  See https://developer.wordpress.org/reference/functions/is_singular/.
* **`is_sticky(?$post_id)`**: Determines if the post is sticky.  See
  https://developer.wordpress.org/reference/functions/is_sticky/.
* **`post_type_exists($post_type)`**: Determines if the post type is registered.
  See https://developer.wordpress.org/reference/functions/post_type_exists/.
* **`is_post_type_hierarchical($post_type)`**: Determines if the post type is
  hierarchical.  See
  https://developer.wordpress.org/reference/functions/is_post_type_hierarchical/.
* **`is_post_type_archive(?$post_types)`**: Determines if the query is for an
  existing post type archive page.  See
  https://developer.wordpress.org/reference/functions/is_post_type_archive/.
* **`comments_open(?$post_id)`**: Determines if the current post or the
  specified post is open for comments.  See
  https://developer.wordpress.org/reference/functions/comments_open/.
* **`pings_open(?$post_id)`**: Determines if the current post is open for pings.
  See https://developer.wordpress.org/reference/functions/pings_open/.
* **`is_page(?$page)`**: Determines if the query is for an existing single page.
  See https://developer.wordpress.org/reference/functions/is_page/.
* **`is_page_template(?$template)`**: Determines if currently in a page
  template.  See
  https://developer.wordpress.org/reference/functions/is_page_template/.
* **`is_category(?$category)`**: Determines if the query is for an existing
  category archive page.  See
  https://developer.wordpress.org/reference/functions/is_category/.
* **`is_tag(?$tag)`**: Determines if the query is for an existing tag archive
  page.  See https://developer.wordpress.org/reference/functions/is_tag/.
* **`has_tag(?$tag, ?$post)`**: Determines if the current post or the specified
  post has any of the given tags.  See
  https://developer.wordpress.org/reference/functions/has_tag/.
* **`is_tax(?$taxonomy, ?$term)`**: Determines if the query is for an existing
  custom taxonomy archive page.  See
  https://developer.wordpress.org/reference/functions/is_tax/.
* **`has_term(?$taxonomy, ?$term, ?$post)`**: Determines if the current post or
  the specified post has any of the given terms.  See
  https://developer.wordpress.org/reference/functions/has_term/.
* **`taxonomy_exists($taxonomy)`**: Determines if the taxonomy name exists.  See
  https://developer.wordpress.org/reference/functions/taxonomy_exists/.
* **`is_author(?$author)`**: Determines if the query is for an existing author
  archive page.  See
  https://developer.wordpress.org/reference/functions/is_author/.
* **`is_multi_author()`**: Determines if this site has more than one author.
  See https://developer.wordpress.org/reference/functions/is_multi_author/.
* **`is_date()`**: Determines if the query is for an existing date archive.  See
  https://developer.wordpress.org/reference/functions/is_date/.
* **`is_year()`**: Determines if the query is for an existing year archive.  See
  https://developer.wordpress.org/reference/functions/is_year/.
* **`is_month()`**: Determines if the query is for an existing month archive.
  See https://developer.wordpress.org/reference/functions/is_month/.
* **`is_day()`**: Determines if the query is for an existing day archive.  See
  https://developer.wordpress.org/reference/functions/is_day/.
* **`is_time()`**: Determines if the query is for a specific time.  See
  https://developer.wordpress.org/reference/functions/is_time/
* **`is_new_day()`**: Determines if the publish date of the current post in the
  loop is different from the publish date of the previous post in the loop.  See
  https://developer.wordpress.org/reference/functions/is_new_day/.
* **`is_archive()`**: Determines if the query is for an existing archive page.
  See https://developer.wordpress.org/reference/functions/is_archive/.
* **`is_search()`**: Determines if the query is for a search.  See
  https://developer.wordpress.org/reference/functions/is_search/.
* **`is_404()`**: Determines if the query is a 404 (returns no results).  See
  https://developer.wordpress.org/reference/functions/is_404/.
* **`is_attachment(?$attachment)`**: Determines if the query is for an existing
  attachment page.  See
  https://developer.wordpress.org/reference/functions/is_attachment/.
* **`is_feed()`**: Determines if the query is for a feed.  See
  https://developer.wordpress.org/reference/functions/is_feed/.
* **`is_trackback()`**: Determines if the query is for a trackback endpoint
  call.  See https://developer.wordpress.org/reference/functions/is_trackback/.
* **`is_preview()`**: Determines if the query is for a post or page preview.
  See https://developer.wordpress.org/reference/functions/is_preview/.
* **`has_excerpt(?$post)`**: Determines if the post has a custom excerpt.  See
  https://developer.wordpress.org/reference/functions/has_excerpt/.
* **`has_nav_menu($location)`**: Determines is a registered nav menu location
  has a menu assigned to it.  See
  https://developer.wordpress.org/reference/functions/has_nav_menu/.
* **`in_the_loop()`**: Determines if the caller is in the Loop.  See
  https://developer.wordpress.org/reference/functions/in_the_loop/.
* **`is_active_sidebar($index)`**: Determines if a sidebar is in use.  See
  https://developer.wordpress.org/reference/functions/is_active_sidebar/.
* **`is_multisite()`**: Determines if Multisite is enabled.  See
  https://developer.wordpress.org/reference/functions/is_multisite/.
* **`is_main_site()`**: Determines if a site is the main site of the current
  network.  See
  https://developer.wordpress.org/reference/functions/is_main_site/.
* **`is_super_admin(?$user_id)`**: Determines if user is a site admin.  See
  https://developer.wordpress.org/reference/functions/is_super_admin/.
* **`is_plugin_active($plugin)`**: Determines if a plugin is active.  See
  https://developer.wordpress.org/reference/functions/is_plugin_active/.
* **`is_child_theme()`**: Determines if a child theme is in use.  See
  https://developer.wordpress.org/reference/functions/is_child_theme/.
* **`current_theme_supports($feature)`**: Determines if a theme supports a given
  feature.  See
  https://developer.wordpress.org/reference/functions/current_theme_supports/.

### Informational Tags

Here is a short list of what may be useful informational tags.

* **`get_bloginfo(?$show, ?$filter)`**: Retrieves information about the current
  site.  See https://developer.wordpress.org/reference/functions/get_bloginfo/.
* **`get_body_class(?$class)`**: Retrieves the classes for the body element as
  an array.  See
  https://developer.wordpress.org/reference/functions/get_body_class/.
* **`get_locale()`**: Retrieves the current locale.  See
  https://developer.wordpress.org/reference/functions/get_locale/.
* **`get_num_queries()`**: Retrieves the number of database queries during the
  WordPress execution.  See
  https://developer.wordpress.org/reference/functions/get_num_queries/.
* **`get_post_format(?$post)`**: Retrieves the format slug for the current post
  or of a given post.  See
  https://developer.wordpress.org/reference/functions/get_post_format/.
* **`get_post_type(?$post)`**: Retrieves the post type for the current post or of
  a given post.  See
  https://developer.wordpress.org/reference/functions/get_post_type/.
* **`get_the_category(?$id)`**: Retrieves the categories for the current post or
  of a post with the given ID.  See
  https://developer.wordpress.org/reference/functions/get_the_category/.
* **`get_the_time(?$format, ?$post)`**: Retrieves the time at which the post was
  written for the current post or the given post.

### Child Themes

> A child theme is a theme that inherits the functionality and styling of
> another theme, called the parent theme.  Child themes are the recommended way
> of modifying an existing theme.

Like all WP themes, they live in subdirectories of the WordPress themes
directory (`wp-content/themes/` by default).  It is recommended (though not
required) that the name of your child theme directory is appended with `-child`.

The child theme directory requires at minimum a `style.css` file.  However, a
`functions.php` file is typically included also so that the parent styles can
be imported.

The `style.css` file must begin with a stylesheet header comment which will
look something like the following:

```css
/*
 Theme Name:   <name-of-child-theme>
 Theme URI:    http://example.com/name-of-parent-theme-child/
 Description:  This is a child theme of such and such parent theme.
 Author:       John Doe
 Author URI:   http://example.com
 Template:     name-of-parent-theme
 Version:      x.x.x
 License:      GNU General Public License v2 or later
 License URI:  http://www.gnu.org/licenses/gpl-2.0.html
 Tags:         light, dark, two-columns, right-sidebar, responsive-layout, accessibility-ready
 Text Domain:  parent-theme-child
*/
```

`Template` is the only parameter that is required.  However, the `Theme Name`,
`Description`, `Author`, and `Version` are usually included since they show up
on the WP Admin.

The `functions.php` file usually includes the parent themes' styles.  The
following snippet demonstrates how to do that.

```php
<?php

add_action('wp_enqueue_scripts', 'child_enqueue_styles', 99);

function child_enqueue_styles() {
  $parent_style = 'parent-style';

  wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css' );
  wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array($parent_style));
}

if (get_stylesheet() !== get_template()) {
  add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
    update_option('theme_mods_' . get_template(), $value);
    return $old_value; // prevent update to child theme mods
  }, 10, 2);

  add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
    return get_option('theme_mods_' . get_template(), $default);
  });
}
?>
```

### Starter Themes

**Underscores**

`_`s is a starter theme.  See http://underscores.me/ for details.

### Post Types

There are many different types of content in WordPress.  There are five default
Post Types readily available to users or internally used by the WordPress
installation:

* Post: `post`
* Page: `page`
* Attachment: `attachment`
* Revision: `revision`
* Navigation menu: `nav_menu_item`

You may also create custom post types.  However, it is not recommended that you
place this functionality in your theme.  This type of functionality should be
placed/created in a plugin. 

## Debugging

In `wp-config.php`, you can define the following PHP variables.

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
```

See https://developer.wordpress.org/themes/getting-started/setting-up-a-development-environment/#other-wordpress-development-tools
for more details and options.
