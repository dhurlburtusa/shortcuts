# WordPress Database Notes

See https://codex.wordpress.org/Database_Description for details.

## Initial Set of Tables

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

## Initial Set of Columns of Select Tables

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

## Select Options

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

## Backing Up/Exporting

```sh
sudo mysqldump {database_name} > {database_name}.sql
```

Note: For some reason when I tried to import it using MySQL Workbench, it complained that it was not UTF-8 encoded. I simply opened it up in VS Code, made sure the editor encoding was set to UTF-8, and saved it.
