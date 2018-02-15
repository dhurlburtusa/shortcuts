# PHP Recipes


## Calculating Execution Time

```php
$starttime = microtime(TRUE);
// ...
$endtime = microtime(TRUE);
$duration_us = 1000000 * ($endtime - $starttime);
// Output:
// E.g.
error_log("Execution time: {$duration_us} μs");
```
