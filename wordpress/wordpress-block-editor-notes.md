# WordPress Block Editor Notes

See https://developer.wordpress.org/block-editor/ for details.


## Uncategorized

- Blocks are hierarchical
- The block grammar is an HTML comment, either a self-closing tag or with a beginning tag and an ending tag.
- In the start tag, depending on the block type and user customizations, there can be a JSON object.
- The Paragraph is the default block.
- Post content in WordPress is stored as HTML-like text in the `post_content` column of the `wp_posts` table.
- Blocks can be static or dynamic. Static blocks contain rendered content and an object of Attributes used to re-render based on changes. Dynamic blocks require server-side data and rendering while the post content is being generated (rendering).


**Example Syntax**

```html
<!-- wp:paragraph {"key": "value"} -->
<p>Welcome to the world of blocks.</p>
<!-- /wp:paragraph -->
```
