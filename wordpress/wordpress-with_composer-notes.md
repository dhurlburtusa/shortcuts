# WordPress with Composer Notes


## Prerequisites

- Composer


## Steps

```sh
cd /path/to/base/of/wordpress/projects
mkdir domain.tld
cd domain.tld
git flow init
mkdir logs
mkdir -p skel/wp
```

```sql
CREATE DATABASE wp_domain_tld DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL ON wp_domain_tld.* TO 'wordpressuser'@'localhost';
```

```sh
composer install
composer wp core install -- --url=http://domain.tld --title="My New WP Site" --admin_user="wp.admin" --admin_email="admin@example.com"
```
