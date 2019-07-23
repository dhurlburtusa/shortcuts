# WordPress Custom Fields Notes

Custom fields, also referred to as post metadata, is a feature in WordPress which allows users to add additional information when writing a post. Users can display this metadata by using template tags in their WordPress themes.

Note: Custom fields starting with an underscore do not display in the edit screen's custom fields module.

See https://www.wpbeginner.com/wp-tutorials/wordpress-custom-fields-101-tips-tricks-and-hacks/ for a good overview of custom fields and see https://metabox.io/what-is-custom-fields-in-wordpress/ and its related articles for in-depth knowledge of custom fields and WP metadata.


## Metadata API

Custom fields are implemented using the WordPress [Metadata API][metadata-api]. The metadata API is used with various meta types such as `comments` and `users`, but for custom fields, the `post` meta type is used. The metadata API is composed of four low-level functions: `add_metadata`, `update_metadata`, `get_metadata`, and `delete_metadata`. However, it is not recommended to use these directly. There are several functions that can be used to handle post metadata.

- [add_post_meta]
- [get_post_meta]
- [update_post_meta]
- [delete_post_meta]
- [get_post_custom]: Get's all the custom fields for a particular post ID (i.e., post, page, etc).
- [get_post_custom_keys]: Get's all the custom field names for a particular post ID.
- [get_post_custom_values]: Get's all the custom field values for a particular post ID.


## Links

- https://www.wpbeginner.com/wp-tutorials/how-to-add-additional-custom-meta-fields-to-custom-taxonomies/
- https://www.wpbeginner.com/wp-tutorials/how-to-add-custom-meta-boxes-in-wordpress-posts-and-post-types/
- https://www.wpbeginner.com/wp-tutorials/how-to-rewrite-guest-author-name-with-custom-fields-in-wordpress/
- https://www.wpbeginner.com/wp-themes/display-different-sidebar-for-each-post-and-page-for-wordpress/
- https://www.wpbeginner.com/wp-tutorials/how-to-show-hidden-custom-fields-in-wordpress/

**Not Helpful**

- https://wordpress.org/support/article/custom-fields/


[add_post_meta]: https://codex.wordpress.org/Function_Reference/add_post_meta
[delete_post_meta]: https://codex.wordpress.org/Function_Reference/delete_post_meta
[get_post_custom]: https://developer.wordpress.org/reference/functions/get_post_custom
[get_post_custom_keys]: https://developer.wordpress.org/reference/functions/get_post_custom_keys
[get_post_custom_values]: https://developer.wordpress.org/reference/functions/get_post_custom_values
[get_post_meta]: https://codex.wordpress.org/Function_Reference/get_post_meta
[metadata-api]: https://codex.wordpress.org/Metadata_API
[update_post_meta]: https://codex.wordpress.org/Function_Reference/update_post_meta
