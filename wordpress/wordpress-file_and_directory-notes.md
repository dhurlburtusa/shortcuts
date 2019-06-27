# WordPress File and Directory Notes


## Default

**Version 5.x**

- root/
  + index.php
  + license.txt
  + readme.html
  + wp-activate.php
  + wp-blog-header.php
  + wp-comments-post.php
  + wp-config-sample.php
  + wp-cron.php
  + wp-links-opml.php
  + wp-load.php
  + wp-login.php
  + wp-mail.php
  + wp-settings.php
  + wp-signup.php
  + wp-trackback.php
  + xmlrpc.php
  + wp-admin/
    * Many files and directories
  + wp-content/
    * index.php
    * plugins/
      - index.php
      - The rest depends on installed plugins.
    * themes/
      - index.php
      - The rest depends on installed themes
    * upgrade/
      - Empty
    * uploads/
      - {current-year}/
        + {current-month}/
  + wp-includes/
    * Many files and directories

## Third-Party

### WP File Manager Plugin

- root/
  + .quarantine/
  + .tmb/
  + wp-content/
    * plugins/
      - wp-file-manager/
        + Many files and directories
    * uploads/
      + wp-file-manager-pro/

### Wordfence Plugin

- root/
  + .user.ini
  + wordfence-waf.php
  + wp-content/
    * plugins/
      - wordfence/
        + Many files and directories
    * wflogs/
      - Several files
