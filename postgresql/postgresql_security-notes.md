# PostgreSQL Security Notes

Some ideas for securing a PostgreSQL server came from https://www.digitalocean.com/community/tutorials/how-to-secure-postgresql-on-an-ubuntu-vps.

## Roles

Postgres only has roles. It does not have users. However, a role with login privilege is often treated like a user.

Roles can be members of other roles.

Roles can be granted permissions or they can have permissions revoked.

Postgres has a role named `PUBLIC`.

**Securing Databases for a Project**

The following is a recommended way to secure one or more databases for a project. It is primarily based off the recommendations at https://www.digitalocean.com/community/tutorials/how-to-secure-postgresql-on-an-ubuntu-vps.

To demonstrate this security recommendation, we are going to have two databases for a Ruby on Rails application. One database will be used in development. The other database will be used in testing. The application will have two "user" roles (i.e., a connection to the database may be made with these roles). One role will only have read-only permissions. This role will be used with `SELECT` queries and any other read-only operation. The other role will have write access including read-only permissions. This role will be allowed to `INSERT`, `UPDATE`, `DELETE`, and other writable operations. This will be used to limit the code surface that is capable of changing the database. These "user" roles will be used at runtime. They will not have the ability to change the schema of the database. That is, they will not be able to add/remove columns, create/drop tables, create/drop databases, etc. In order to perform these "dangerous" operations, a role is created just for the project. This role won't have login privileges. It is some times known as a "permissions" role. This particular role will have just enough permissions to allow it to perform database migrations. That is, it will not be able to create/drop roles or create/drop databases. This role will be granted to a special "login" role used specifically for deployment of databases and handling database migrations. For this demonstration, we'll assume this role is named `deployer` and was created with a statement like the following:

```psql
CREATE ROLE deployer WITH LOGIN PASSWORD 'asdf1234' CREATEDB CREATEROLE;
```

The following are the statements/commands used in a `psql` session initiated with

```sh
psql -U postgres -d postgres -h localhost -W
```

```psql
# Create our application role with no login privileges. It will be the owner of each database.
CREATE ROLE rails_hello_app;

# Allow deployer to have same privileges as application role. This will allow the deployer to migrate the application's database(s).
GRANT rails_hello_app TO deployer;

# Create our development and test databases:
CREATE DATABASE rails_hello_app_development WITH OWNER rails_hello_app;

CREATE DATABASE rails_hello_app_test WITH OWNER rails_hello_app;

# Create the read/write role with login privilege.
CREATE ROLE rails_hello_app_rw WITH LOGIN PASSWORD 'asdf1234';

# Create the read-only role with login privilege.
CREATE ROLE rails_hello_app_ro WITH LOGIN PASSWORD 'asdf1234';

# Connect to the development database. The statements that follow will apply to this database.
\c rails_hello_app_development

ALTER SCHEMA public OWNER TO rails_hello_app;

# Revoke all privileges from the PUBLIC role from the public schema.
REVOKE ALL ON SCHEMA public FROM PUBLIC;

# Grant all privileges to the application role on the public schema.
GRANT ALL ON SCHEMA public TO rails_hello_app;

# Grant the read/write role read/write privileges:
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO rails_hello_app_rw;

GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO rails_hello_app_rw;

# Grant the read-only role read-only privileges:
GRANT SELECT ON ALL TABLES IN SCHEMA public TO rails_hello_app_ro;

GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO rails_hello_app_ro;

# Switch to the test database and repeat:
\c rails_hello_app_test

ALTER SCHEMA public OWNER TO rails_hello_app;

# Revoke all privileges from the PUBLIC role from the public schema.
REVOKE ALL ON SCHEMA public FROM PUBLIC;

# Grant all privileges to the application role on the public schema.
GRANT ALL ON SCHEMA public TO rails_hello_app;

GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO rails_hello_app_rw;

GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO rails_hello_app_rw;

GRANT SELECT ON ALL TABLES IN SCHEMA public TO rails_hello_app_ro;

GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO rails_hello_app_ro;
```
