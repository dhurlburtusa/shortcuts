# WordPress Security Notes


## Actionable Steps

* Keep WordPress core updated.
* Update WordPress plugins when the update includes a security fix.
* Update WordPress themes when the update includes a security fix.
* Require users have a strong password.
* Limit who has admin account access.
* Use a managed WordPress hosting service that provides at least:
  + Automatic backups
* Install a WordPress backup solution.
  + Some good options:
    - [BackupBuddy]
    - [UpdraftPlus]
    - [VaultPress]
* Configure backup solution to save backups to a remote location such as your
  Dropbox account.
* Install a WordPress security plugin(s).
  + Necessary Features:
    - File integrity monitoring
    - Failed login attempts
    - Malware scanning
    - Web application firewall
  + Some good options:
    - [All in One WP Security & Firewall]
    - [Sucuri Scanner]
    - [Wordfence]
    - [WPScan]
* Disable PHP file execution in certain WordPress directories.
  + See http://www.wpbeginner.com/wp-tutorials/how-to-disable-php-execution-in-certain-wordpress-directories/
    for details.
* Limit login attempts.
* Disable directory indexing and browsing.
  + Add `Options -Indexes` to `.htaccess` file.
  + See http://www.wpbeginner.com/wp-tutorials/disable-directory-browsing-wordpress/
    for details.
* Disable XML-RPC in WordPress.
  + See http://www.wpbeginner.com/plugins/how-to-disable-xml-rpc-in-wordpress/ for
    details.
* Automatically log out idle users in WordPress.
* Delete all inactive themes.
* Delete `.php` files from the `wp-content/uploads/` directory.
* Disable access to certain files.
* Use Secure File System Permissions
  + `sudo chown -R root:www-data /path/to/wordpress/install`

**.htaccess**

```
# Top-Level .htaccess

# Prevent Directory Indexing and Browsing
Options -Indexes

# BEGIN WordPress
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteBase /
	RewriteRule ^index\.php$ - [L]
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule . /index.php [L]
</IfModule>
# END WordPress

# BEGIN GD-SSL
<IfModule mod_rewrite.c>
	Options +FollowSymLinks
	RewriteEngine On
	RewriteCond %{HTTPS} !=on
	RewriteCond %{HTTP_USER_AGENT} ^(.+)$
	RewriteCond %{SERVER_NAME} ^example\.com$
	RewriteRule .* https://%{SERVER_NAME}%{REQUEST_URI} [R=301,L]
	Header add Strict-Transport-Security "max-age=300"
</IfModule>
# END GD-SSL

# BEGIN All In One WP Security

#AIOWPS_BLOCK_WP_FILE_ACCESS_START
<Files license.txt>
	<IfModule mod_authz_core.c>
		Require all denied
	</IfModule>
	<IfModule !mod_authz_core.c>
		Order deny,allow
		Deny from all
	</IfModule>
</Files>

<Files wp-config-sample.php>
	<IfModule mod_authz_core.c>
		Require all denied
	</IfModule>
	<IfModule !mod_authz_core.c>
		Order deny,allow
		Deny from all
	</IfModule>
</Files>

<Files readme.html>
	<IfModule mod_authz_core.c>
		Require all denied
	</IfModule>
	<IfModule !mod_authz_core.c>
		Order deny,allow
		Deny from all
	</IfModule>
</Files>
#AIOWPS_BLOCK_WP_FILE_ACCESS_END

#AIOWPS_BASIC_HTACCESS_RULES_START
<Files .htaccess>
	<IfModule mod_authz_core.c>
		Require all denied
	</IfModule>
	<IfModule !mod_authz_core.c>
		Order deny,allow
		Deny from all
	</IfModule>
</Files>

ServerSignature Off
LimitRequestBody 10240000

<Files wp-config.php>
	<IfModule mod_authz_core.c>
		Require all denied
	</IfModule>
	<IfModule !mod_authz_core.c>
		Order deny,allow
		Deny from all
	</IfModule>
</Files>
#AIOWPS_BASIC_HTACCESS_RULES_END

#AIOWPS_PINGBACK_HTACCESS_RULES_START
<Files xmlrpc.php>
	<IfModule mod_authz_core.c>
		Require all denied
	</IfModule>
	<IfModule !mod_authz_core.c>
		Order deny,allow
		Deny from all
		# Allow from certain IPs:
		#allow from 123.123.123.123
	</IfModule>
</Files>
#AIOWPS_PINGBACK_HTACCESS_RULES_END

#AIOWPS_DEBUG_LOG_BLOCK_HTACCESS_RULES_START
<Files debug.log>
	<IfModule mod_authz_core.c>
		Require all denied
	</IfModule>
	<IfModule !mod_authz_core.c>
		Order deny,allow
		Deny from all
	</IfModule>
</Files>
#AIOWPS_DEBUG_LOG_BLOCK_HTACCESS_RULES_END

#AIOWPS_DISABLE_TRACE_TRACK_START
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteCond %{REQUEST_METHOD} ^(TRACE|TRACK)
	RewriteRule .* - [F]
</IfModule>
#AIOWPS_DISABLE_TRACE_TRACK_END

#AIOWPS_FORBID_PROXY_COMMENTS_START
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteCond %{REQUEST_METHOD} ^POST
	RewriteCond %{HTTP:VIA} !^$ [OR]
	RewriteCond %{HTTP:FORWARDED} !^$ [OR]
	RewriteCond %{HTTP:USERAGENT_VIA} !^$ [OR]
	RewriteCond %{HTTP:X_FORWARDED_FOR} !^$ [OR]
	RewriteCond %{HTTP:X_FORWARDED_HOST} !^$ [OR]
	RewriteCond %{HTTP:PROXY_CONNECTION} !^$ [OR]
	RewriteCond %{HTTP:XPROXY_CONNECTION} !^$ [OR]
	RewriteCond %{HTTP:HTTP_PC_REMOTE_ADDR} !^$ [OR]
	RewriteCond %{HTTP:HTTP_CLIENT_IP} !^$
	RewriteRule wp-comments-post\.php - [F]
</IfModule>
#AIOWPS_FORBID_PROXY_COMMENTS_END

#AIOWPS_DENY_BAD_QUERY_STRINGS_START
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteCond %{QUERY_STRING} ftp:     [NC,OR]
	RewriteCond %{QUERY_STRING} http:    [NC,OR]
	RewriteCond %{QUERY_STRING} https:   [NC,OR]
	RewriteCond %{QUERY_STRING} mosConfig [NC,OR]
	RewriteCond %{QUERY_STRING} ^.*(globals|encode|localhost|loopback).* [NC,OR]
	RewriteCond %{QUERY_STRING} (\;|'|\"|%22).*(request|insert|union|declare|drop) [NC]
	RewriteRule ^(.*)$ - [F,L]
</IfModule>
#AIOWPS_DENY_BAD_QUERY_STRINGS_END

#AIOWPS_ADVANCED_CHAR_STRING_FILTER_START
<IfModule mod_alias.c>
	RedirectMatch 403 \,
	RedirectMatch 403 \:
	RedirectMatch 403 \;
	RedirectMatch 403 \=
	RedirectMatch 403 \[
	RedirectMatch 403 \]
	RedirectMatch 403 \^
	RedirectMatch 403 \`
	RedirectMatch 403 \{
	RedirectMatch 403 \}
	RedirectMatch 403 \~
	RedirectMatch 403 \"
	RedirectMatch 403 \$
	RedirectMatch 403 \<
	RedirectMatch 403 \>
	RedirectMatch 403 \|
	RedirectMatch 403 \.\.
	RedirectMatch 403 \%0
	RedirectMatch 403 \%A
	RedirectMatch 403 \%B
	RedirectMatch 403 \%C
	RedirectMatch 403 \%D
	RedirectMatch 403 \%E
	RedirectMatch 403 \%F
	RedirectMatch 403 \%22
	RedirectMatch 403 \%27
	RedirectMatch 403 \%28
	RedirectMatch 403 \%29
	RedirectMatch 403 \%3C
	RedirectMatch 403 \%3E
	RedirectMatch 403 \%3F
	RedirectMatch 403 \%5B
	RedirectMatch 403 \%5C
	RedirectMatch 403 \%5D
	RedirectMatch 403 \%7B
	RedirectMatch 403 \%7C
	RedirectMatch 403 \%7D

	# COMMON PATTERNS
	Redirectmatch 403 \_vpi
	RedirectMatch 403 \.inc
	Redirectmatch 403 xAou6
	Redirectmatch 403 db\_name
	Redirectmatch 403 select\(
	Redirectmatch 403 convert\(
	Redirectmatch 403 \/query\/
	RedirectMatch 403 ImpEvData
	Redirectmatch 403 \.XMLHTTP
	Redirectmatch 403 proxydeny
	RedirectMatch 403 function\.
	Redirectmatch 403 remoteFile
	Redirectmatch 403 servername
	Redirectmatch 403 \&rptmode\=
	Redirectmatch 403 sys\_cpanel
	RedirectMatch 403 db\_connect
	RedirectMatch 403 doeditconfig
	RedirectMatch 403 check\_proxy
	Redirectmatch 403 system\_user
	Redirectmatch 403 \/\(null\)\/
	Redirectmatch 403 clientrequest
	Redirectmatch 403 option\_value
	RedirectMatch 403 ref\.outcontrol

	# SPECIFIC EXPLOITS
	RedirectMatch 403 errors\.
	RedirectMatch 403 config\.
	RedirectMatch 403 include\.
	RedirectMatch 403 display\.
	RedirectMatch 403 register\.
	Redirectmatch 403 password\.
	RedirectMatch 403 maincore\.
	RedirectMatch 403 authorize\.
	Redirectmatch 403 macromates\.
	RedirectMatch 403 head\_auth\.
	RedirectMatch 403 submit\_links\.
	RedirectMatch 403 change\_action\.
	Redirectmatch 403 com\_facileforms\/
	RedirectMatch 403 admin\_db\_utilities\.
	RedirectMatch 403 admin\.webring\.docs\.
	Redirectmatch 403 Table\/Latest\/index\.
</IfModule>
#AIOWPS_ADVANCED_CHAR_STRING_FILTER_END

#AIOWPS_PREVENT_IMAGE_HOTLINKS_START
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteCond %{HTTP_REFERER} !^$
	RewriteCond %{REQUEST_FILENAME} -f
	RewriteCond %{REQUEST_FILENAME} \.(gif|jpe?g?|png)$ [NC]
	RewriteCond %{HTTP_REFERER} !^http(s)?://example\.com [NC]
	RewriteRule \.(gif|jpe?g?|png)$ - [F,NC,L]
</IfModule>
#AIOWPS_PREVENT_IMAGE_HOTLINKS_END

# END All In One WP Security

# Wordfence WAF
<Files ".user.ini">
	<IfModule mod_authz_core.c>
		Require all denied
	</IfModule>
	<IfModule !mod_authz_core.c>
		Order deny,allow
		Deny from all
	</IfModule>
</Files>
# END Wordfence WAF
```

**An NGiNX Config File**

```nginx
server {
	...
	gzip on;
	gzip_min_length 200;
	gzip_types application/javascript application/json application/manifest+json application/octet-stream application/xml application/xml+rss image/jpeg image/png image/svg+xml text/css text/javascript text/plain text/xml;
	#gzip_types application/javascript application/json application/manifest+json application/xml application/xml+rss image/png image/svg+xml text/css text/javascript text/plain text/xml;

	location ^~ /assets {
		root /var/www/example.com/html/assets;
		try_files $uri $uri/ =404;
		expires 1M;
	}

	location = /wordfence-waf.php { deny all; }

	# I am not 100% sure if we want this. I don't know who should be calling this.
	# But I an going to deny it for now.
	location = /wp-activate.php { deny all; }

	location = /wp-config.php { deny all; }

	location = /wp-config-sample.php { return 404; }

	# I am not 100% sure if we want this. I don't know who should be calling this.
	# But I an going to deny it for now.
	location = /wp-links-opml.php { deny all; }

	# I am not 100% sure if we want this. I don't know who should be calling this.
	# But I an going to deny it for now.
	location = /wp-load.php { deny all; }

	# I am not 100% sure if we want this. I don't know who should be calling this.
	# But I an going to deny it for now.
	location = /wp-mail.php { deny all; }

	# I am not 100% sure if we want this. I don't know who should be calling this.
	# But I an going to deny it for now.
	location = /wp-settings.php { deny all; }

	# I am not 100% sure if we want this. I don't know who should be calling this.
	# But I an going to deny it for now.
	location = /wp-signup.php { deny all; }

	# I am not 100% sure if we want this. I don't know who should be calling this.
	# But I an going to deny it for now.
	location = /wp-trackback.php { deny all; }

	location = /xmlrpc.php { deny all; }

	location / {
		#try_files $uri $uri/ =404;
		# The following is used by WordPress.
		try_files $uri $uri/ /index.php$is_args$args;
	}

	# Deny access to certain types of files
	location ~* .+\.log$|log.+\.txt$|.+\.md$|.+\.pem$|.+\.pl$ {
		return 404;
	}

	location ~* ^/[^/]+\.(css|eot|gif|ico|jpeg|jpg|js|json|png|svg|ttf|txt|woff2?|xml)$ {
		#root /var/www/example.com/html/assets;
		expires 1M;
		#log_not_found off;
	}

	location ~* \.(css|eot|gif|ico|jpeg|jpg|js|json|png|svg|ttf|txt|webmanifest|woff2?|xml)$ {
		expires 24h;
		#log_not_found off;
	}

	# Deny access to specific files
	location ~* /changelog(?:\.txt)?|/license(?:\.txt)?|/readme\.(?:html|txt)? {
		return 404;
	}

	# Deny access to where Sucuri saves data.
	location ~* ^/wp-content/uploads/sucuri { return 404; }

	# Deny access to /updraft/ directory
	location ~* ^/wp-content/updraft/ { return 404; }

	# Deny access to any files with a .php extension in the uploads directory
	# Works in sub-directory installs and also in multisite network
	# Keep logging the requests to parse later (or to pass to firewall utilities such as fail2ban)
	location ~* /(?:files|uploads|wp-content|wp-includes)/.*\.php$ {
		return 404;
	}

	location ~* \.php$ {
		include snippets/fastcgi-php.conf;
		fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
	}

	# The following location denying access to "hidden" files handles this case.
	#location ~ /\.ht { deny all; }

	# Deny access to "hidden" files
	location ~ /\. { return 404; }
	...
}
```

**php.ini**

```
...
expose_php = Off
...
```


## Useful Links

* https://sucuri.net/guides/wordpress-security/
* http://www.wpbeginner.com/wordpress-security/


[all in one wp security & firewall]: https://wordpress.org/plugins/all-in-one-wp-security-and-firewall/
[backupbuddy]: https://ithemes.com/purchase/backupbuddy/
[sucuri scanner]: https://wordpress.org/plugins/sucuri-scanner/
[updraftplus]: https://wordpress.org/plugins/updraftplus/
[vaultpress]: https://vaultpress.com/
[Wordfence]: https://wordpress.org/plugins/wordfence/
[WPScan]: https://wordpress.org/plugins/wpscan/
