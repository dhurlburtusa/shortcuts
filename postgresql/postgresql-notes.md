# PostgreSQL Notes


## Server Administration

The PostgreSQL daemon is run under a separate user account. This user account should only own the data that is managed by the server, and should not be shared with other daemons. The user name `postgres` is often used.

### Database Cluster

Before you can do anything, you must initialize a database storage area on disk. This is known as a database cluster. (The SQL standard uses the term catalog cluster.) A database cluster is a collection of databases that is managed by a single instance of a running database server.

In file system terms, a database cluster is a single directory under which all data will be stored. This is some times known as the data directory or data area.


## Environment Variables

| Name     | Description |
| -------- | ----------- |
| `PGHOST` | The host of the Postgres server. |
| `PGPORT` | The post the Postgres server is listening on. |
