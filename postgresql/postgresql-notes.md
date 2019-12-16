# PostgreSQL Notes


## Installation

**Ubuntu**

See https://www.postgresql.org/download/linux/ubuntu/ and/or https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04.

**Windows**

See https://www.postgresql.org/download/windows/.


## Server Administration

The PostgreSQL daemon is run under a separate user account. This user account should only own the data that is managed by the server, and should not be shared with other daemons. The user name `postgres` is often used.

### Database Cluster

Before you can do anything, you must initialize a database storage area on disk. This is known as a database cluster. (The SQL standard uses the term catalog cluster.) A database cluster is a collection of databases that is managed by a single instance of a running database server.

In file system terms, a database cluster is a single directory under which all data will be stored. This is some times known as the data directory or data area.


## Environment Variables

| Name     | Description |
| -------- | ----------- |
| `PGDATA` | The path to the data directory. |
| `PGHOST` | The host of the Postgres server. |
| `PGPORT` | The post the Postgres server is listening on. |
