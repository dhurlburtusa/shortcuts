# WordPress Hooks Notes


## Actions

| Name                          | Admin | Non-Admin | Notes |
| ----------------------------- | ----- | --------- | ----- |
| `after_setup_theme`           |   ✓   |     ✓     |       |
| `edit_category`               |   ✓   |     ✓?    | TODO: Confirm non-admin. May occur during a REST call. |
| `enqueue_block_editor_assets` |   ✓   |     ✓?    |       |
| `save_post`                   |   ✓   |     ✓     | Have seen it called in non-admin area when rendering a page's preview from the edit page screen. |
| `widgets_init`                |   ✓   |     ✓     |       |
| `wp_enqueue_scripts`          |       |     ✓     |       |
| `wp_head`                     |       |     ✓     |       |
| `wtf__document_init`          |       |     ✓     |       |


## Filters

| Name                                  | Admin | Non-Admin | Notes |
| ------------------------------------- | ----- | --------- | ----- |
| `body_class`                          |       |     ✓     |       |
| `dynamic_sidebar_params`              |   ✓?  |     ✓?    |       |
| `excerpt_more`                        |   ✓   |     ✓     |       |
| `nav_menu_link_attributes`            |       |     ✓     |       |
| `widget_tag_cloud_args`               |   ✓?  |     ✓?    |       |
| `wp_calculate_image_sizes`            |   ✓   |     ✓     |       |
| `wp_get_attachment_image_attributes`  |   ✓   |     ✓     |       |
| `wp_nav_menu_objects`                 |       |     ✓     |       |
| `wp_resource_hints`                   |   ✓   |     ✓     |       |
| `wtf__document_body_content_tpl_name` |       |     ✓     |       |
