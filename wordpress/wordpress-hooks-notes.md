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
