# WordPress Cron Notes

Unlike a traditional system cron that schedules tasks for specific times, WP-Cron will only process pending tasks during a request.


## Uncategorized

**Add Custom Interval**

```php
function example_add_cron_interval( $schedules ) {
	$schedules['five_seconds'] = array(
		'interval' => 5,
		'display'  => esc_html__( 'Every Five Seconds' ),
	);
	return $schedules;
}
add_filter( 'cron_schedules', 'example_add_cron_interval' );
```

See https://developer.wordpress.org/reference/hooks/cron_schedules/.

**Other Related Hooks**

- https://developer.wordpress.org/reference/hooks/cron_request/
