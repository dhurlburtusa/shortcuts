# WordPress Drop-Ins Notes

WordPress drop-ins are special PHP files that will get executed if they exist. By default, none of the drop-ins exist. Different drop-ins execute at different points in the request/response lifecycle. All are expected to live in the `wp-content` directory.

- `advanced-cache.php`: Used to handle caching. It is called if `WP_CACHE` is `true`.
- `db.php`: Used to create a custom database class. It is called on load (i.e. during a request).
- `db-error.php`: Automatically called on database error.
- `install.php`: A custom installation script. It is called during installation.
- `maintenance.php`: Used to create a custom maintenance message. It is called during maintenance.
- `object-cache.php`: Used for external object cache. It is called on load (i.e. during a request).
- `php-error.php`: Used to provide a custom PHP error message. Automatically called on PHP error.
- `fatal-error-handler.php`: A custom PHP fatal error handler. Automatically called on a fatal PHP error.

There are other drop-ins if running as a multisite. See the `_get_dropins` function defined in `wp-admin/includes/plugin.php`.
