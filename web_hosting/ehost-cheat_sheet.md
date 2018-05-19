# eHost Cheat Sheet


## Features

Here is some information about apps related to eHost.

### Available Apps

* B2Evolution
* Concrete5
* cPanel
* Drupal
* Joomla
* Magento
* MySQL
* OS Ticket
* phpBB
* PrestaShop
* WordPress

### Some Available Commands

* git (1.7.9.5)
* mysql (14.14)
* php (5.6.30)
* python (2.6.6)
* python3 (3.2.3)
* rails (2.3.18)
* ruby (1.8.7)

### Available Apache Modules

Besides the core, mpm_common, event, mpm_netware, mpmt_os2, prefork,
mpm_winnt, and worker modules, the following is the available Apache modules
as of 2017-06-22:

* mod_actions.c
* mod_alias.c
* mod_asis.c
* mod_auth_basic.c
* mod_auth_digest.c
* mod_authn_dbd.c
* mod_authn_dbm.c
* mod_authn_file.c
* mod_authz_dbm.c
* mod_authz_groupfile.c
* mod_authz_host.c
* mod_authz_user.c
* mod_autoindex.c
* mod_cache.c
* mod_cgid.c
* mod_dav.c
* mod_dav_fs.c
* mod_dav_lock.c
* mod_deflate.c
* mod_dir.c
* mod_env.c
* mod_expires.c
* mod_file_cache.c
* mod_filter.c
* mod_headers.c
* mod_include.c
* mod_info.c
* mod_log_config.c
* mod_log_forensic.c
* mod_logio.c
* mod_mime.c
* mod_mime_magic.c
* mod_negotiation.c
* mod_proxy.c
* mod_proxy_ajp.c
* mod_proxy_balancer.c
* mod_proxy_connect.c
* mod_proxy_ftp.c
* mod_proxy_http.c
* mod_proxy_scgi.c
* mod_reqtimeout.c
* mod_rewrite.c
* mod_setenvif.c
* mod_so.c
* mod_speling.c
* mod_ssl.c
* mod_status.c
* mod_substitute.c
* mod_suexec.c
* mod_unique_id.c
* mod_userdir.c
* mod_version.c


## Installing Django

I used the directions found at https://support.ehost.com/articles/employees/django-with-fastcgi
to help come up with the following:

* Detemine the latest version of virtualenv (15.0.1 at time of writing)
* SSH'd into server using PuTTY
* `mkdir temp; cd temp`
* `curl -O https://pypi.python.org/packages/source/v/virtualenv/virtualenv-15.0.1.tar.gz`
* `gzip -cd virtualenv-15.0.1.tar.gz | tar xf -`
* `cd virtualenv-15.0.1`
* `python2.7 setup.py install --user`
* `cd ~`
* `find temp -delete`
* `~/.local/bin/virtualenv virtenv --python=python2.7`
* `source ~/virtenv/bin/activate`
* `~/virtenv/bin/pip install pip --upgrade`
* `~/virtenv/bin/pip install django`
* `~/virtenv/bin/pip install flup`
* `chmod +x ~/virtenv/bin/django-admin.py`
* (To be cont'd)


## Setting Up SSH

* hostname: e19.ehosts.com
* port: 2222


## Support

### Links

Here are some useful links for eHost support.  Some, like the "employees" one, don't
appear to have a direct link anywhere.

* http://support.ehost.com/categories/cpanel
* http://support.ehost.com/categories/employees/
* http://support.ehost.com/categories/hosting-guide/
* http://support.ehost.com/categories/specialized-help/
