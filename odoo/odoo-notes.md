# Odoo Notes

Odoo is an all-in-one business software including CRM, website/e-commerce, billing, accounting, manufacturing, warehouse - and project management, and inventory.


## Installation

There are multiple ways to install Odoo. Here we'll give an overview using packaged installers. See https://www.odoo.com/documentation/13.0/setup/install.html for more details and other installation options.

**Windows**

Download the Windows installer from https://www.odoo.com/page/download. Fill out the form to be allowed to download. Fake information is allowed. (The download was really slow. Ask me for a copy of 13.0.)

https://www.odoo.com/thanks/download

**Debian/Ubuntu**

```sh
# Install PostgreSQL if not already installed
apt-get install postgresql -y
```

Install wkhtmltopdf. See https://wkhtmltopdf.org/downloads.html to download the package.

See https://www.digitalocean.com/community/tutorials/package-management-basics-apt-yum-dnf-pkg#install-a-package-from-the-local-filesystem for how to install a debian package.

See https://www.odoo.com/documentation/13.0/setup/install.html#repository for remaining instructions.


## Deployment

See https://www.odoo.com/documentation/13.0/setup/deploy.html for details.
