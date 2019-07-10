# WordPress `wp-load.php` Notes

If `wp-config.php` exists or it exists in the parent directory, then it is loaded, which in turn is expected to load `wp-settings.php`. Otherwise, redirect to `/wp-admin/setup-config.php` to start the 5-minute install.

## Constants

- `ABSPATH`
