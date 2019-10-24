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

**Functions**

- wp_get_schedules()
	+ https://developer.wordpress.org/reference/functions/wp_get_schedules/
- wp_schedule_event( int $timestamp, string $recurrence, string $hook, array $args = array() )
	+ https://developer.wordpress.org/reference/functions/wp_schedule_single_event/
- wp_schedule_single_event( int $timestamp, string $hook, array $args = array() )
	+ https://developer.wordpress.org/reference/functions/wp_schedule_event/
- wp_reschedule_event( int $timestamp, string $recurrence, string $hook, array $args = array() )
	+ https://developer.wordpress.org/reference/functions/wp_reschedule_event/
- wp_next_scheduled( string $hook, array $args = array() )
	+ https://developer.wordpress.org/reference/functions/wp_next_scheduled/

**Other Related Hooks**

**Filters**

- https://developer.wordpress.org/reference/hooks/cron_request/
- https://developer.wordpress.org/reference/hooks/cron_schedules/
- https://developer.wordpress.org/reference/hooks/pre_schedule_event/
- https://developer.wordpress.org/reference/hooks/schedule_event/
