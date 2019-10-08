# WordPress Migration Notes


## Things to Remember

### Migrating from Non-Production to Production

- Remove transients.
  + They likely have stale or incorrect data.
  + Can use [Transients Manager Plugin](https://wordpress.org/plugins/transients-manager/).
