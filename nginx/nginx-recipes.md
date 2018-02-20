# NGiNX Recipes


## HTTPS Only Setup

```
server {

	listen	80;
	listen	[::]:80;

	# FQDN, LAN IP, WAN IP
	server_name	domain.name 192.168.1.126 73.3.230.59;

	# May change to 301 when you are sure HTTPS-only is what you want.
	return	302 https://$server_name$request_uri;

}
server {

	listen	443 ssl;
	listen	[::]:443 ssl;

	# FQDN, LAN IP, WAN IP
	server_name	domain.name 192.168.1.126 73.3.230.59;

	ssl_certificate	domain.name.crt;
	ssl_certificate_key	domain.name.key;

#	ssl_session_cache	shared:SSL:1m;
	ssl_session_timeout	5m;

	ssl_protocols	TLSv1 TLSv1.1 TLSv1.2;
	ssl_prefer_server_ciphers	on;

#	ssl_ciphers	EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
	ssl_ciphers	HIGH:!aNULL:!MD5;

	...

}
```
