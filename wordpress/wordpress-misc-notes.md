# WordPress Misc Notes


## Legacy

**Legacy `$error`**

The `$error` global appears to be legacy -- not 100% sure about that.

I found this snippet of code in `wp-login.php`.

```php
	// In case a plugin uses `$error` rather than the `$wp_errors` object.
	if ( ! empty( $error ) ) {
		$wp_error->add( 'error', $error );
		unset( $error );
	}
```

Consider using in custom plugins and themes.
