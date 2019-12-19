# Rails Runtime Notes


## Constants

| Name               | Description |
| ------------------ | ----------- |
| `APP_PATH`         | The application path. |


## Environment Variables

| Name               | Description |
| ------------------ | ----------- |
| `ENV['RAILS_ENV']` | The current rails environment. |
| `ENV['RAILS_RELATIVE_URL_ROOT']` | Self explanatory. |
| `ENV['RAILS_CACHE_ID']` | |
| `ENV['RAILS_APP_VERSION']` | The Rails app version. Used with `ENV['RAILS_CACHE_ID']` to generate expanded cache keys in Rails' caching code. |
