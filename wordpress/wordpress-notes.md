# WordPress Notes


## Child Themes

> A child theme is a theme that inherits the functionality and styling of
> another theme, called the parent theme.  Child themes are the recommended way
> of modifying an existing theme.

Like all WP themes, they live in subdirectories of the WordPress themes
directory (wp-content/themes/ by default).  It is recommended (though not
required) that the name of your child theme directory is appended with '-child'.

The child theme directory requires at minimum a `style.css` and a
`functions.php` file.

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
