# PostgreSQL Notes


## Server Administration

The PostgreSQL daemon is run under a separate user account. This user account should only own the data that is managed by the server, and should not be shared with other daemons. The user name `postgres` is often used.


## Environment Variables

| Name     | Description |
| -------- | ----------- |
| `PGHOST` | The host of the Postgres server. |
| `PGPORT` | The post the Postgres server is listening on. |
