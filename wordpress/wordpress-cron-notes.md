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

- wp_clear_scheduled_hook( string $hook, array $args = array() )
	+ https://developer.wordpress.org/reference/functions/wp_clear_scheduled_hook/
- wp_get_ready_cron_jobs()
	+ https://developer.wordpress.org/reference/functions/wp_get_ready_cron_jobs/
- wp_get_schedule( string $hook, array $args = array() )
	+ https://developer.wordpress.org/reference/functions/wp_get_schedule/
- wp_get_scheduled_event( string $hook, array $args = array(), int|null $timestamp = null )
	+ https://developer.wordpress.org/reference/functions/wp_get_scheduled_event/
- wp_get_schedules()
	+ https://developer.wordpress.org/reference/functions/wp_get_schedules/
- wp_next_scheduled( string $hook, array $args = array() )
	+ https://developer.wordpress.org/reference/functions/wp_next_scheduled/
- wp_reschedule_event( int $timestamp, string $recurrence, string $hook, array $args = array() )
	+ https://developer.wordpress.org/reference/functions/wp_reschedule_event/
- wp_schedule_event( int $timestamp, string $recurrence, string $hook, array $args = array() )
	+ https://developer.wordpress.org/reference/functions/wp_schedule_single_event/
- wp_schedule_single_event( int $timestamp, string $hook, array $args = array() )
	+ https://developer.wordpress.org/reference/functions/wp_schedule_event/
- wp_unschedule_event( int $timestamp, string $hook, array $args = array() )
	+ https://developer.wordpress.org/reference/functions/wp_unschedule_event/
- wp_unschedule_hook( string $hook )
	+ https://developer.wordpress.org/reference/functions/wp_unschedule_hook/

**Misc**

Cron information is stored in the `cron` option in the `wp_options` table.

**Plugins Known Not to Clean Up Their Cron Jobs on Deletion**

- Updraft Plus
- WP Optimize
- Yoast

**Other Related Hooks**

**Filters**

- https://developer.wordpress.org/reference/hooks/cron_request/
- https://developer.wordpress.org/reference/hooks/cron_schedules/
- https://developer.wordpress.org/reference/hooks/get_schedule/
- https://developer.wordpress.org/reference/hooks/pre_clear_scheduled_hook/
- https://developer.wordpress.org/reference/hooks/pre_get_ready_cron_jobs/
- https://developer.wordpress.org/reference/hooks/pre_get_scheduled_event/
- https://developer.wordpress.org/reference/hooks/pre_reschedule_event/
- https://developer.wordpress.org/reference/hooks/pre_schedule_event/
- https://developer.wordpress.org/reference/hooks/pre_unschedule_event/
- https://developer.wordpress.org/reference/hooks/pre_unschedule_hook/
- https://developer.wordpress.org/reference/hooks/schedule_event/
