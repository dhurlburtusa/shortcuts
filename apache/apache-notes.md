# Apache Notes

See http://httpd.apache.org/ for details.


## Testing Available Modules

### Without Access to httpd.conf, httpd, or apachectl

The following can be added to a .htaccess file to help determine the modules
available on your system.  This is useful when you don't have access to
httpd.conf.

**Note**: This will only work if the `headers_module` has been loaded.

The following script adds HTTP headers to the response.

```apache

<IfModule mod_headers.c>
  HEADER add mod_headers.c true

  <IfModule mod_access_compat.c>
    HEADER add mod_access_compat.c true
  </IfModule>
  <IfModule !mod_access_compat.c>
    HEADER add mod_access_compat.c false
  </IfModule>

  <IfModule mod_actions.c>
    HEADER add mod_actions.c true
  </IfModule>
  <IfModule !mod_actions.c>
    HEADER add mod_actions.c false
  </IfModule>

  <IfModule mod_alias.c>
    HEADER add mod_alias.c true
  </IfModule>
  <IfModule !mod_alias.c>
    HEADER add mod_alias.c false
  </IfModule>

  <IfModule mod_allowmethods.c>
    HEADER add mod_allowmethods.c true
  </IfModule>
  <IfModule !mod_allowmethods.c>
    HEADER add mod_allowmethods.c false
  </IfModule>

  <IfModule mod_asis.c>
    HEADER add mod_asis.c true
  </IfModule>
  <IfModule !mod_asis.c>
    HEADER add mod_asis.c false
  </IfModule>

  <IfModule mod_auth_basic.c>
    HEADER add mod_auth_basic.c true
  </IfModule>
  <IfModule !mod_auth_basic.c>
    HEADER add mod_auth_basic.c false
  </IfModule>

  <IfModule mod_auth_digest.c>
    HEADER add mod_auth_digest.c true
  </IfModule>
  <IfModule !mod_auth_digest.c>
    HEADER add mod_auth_digest.c false
  </IfModule>

  <IfModule mod_auth_form.c>
    HEADER add mod_auth_form.c true
  </IfModule>
  <IfModule !mod_auth_form.c>
    HEADER add mod_auth_form.c false
  </IfModule>

  <IfModule mod_authn_anon.c>
    HEADER add mod_authn_anon.c true
  </IfModule>
  <IfModule !mod_authn_anon.c>
    HEADER add mod_authn_anon.c false
  </IfModule>

  <IfModule mod_authn_core.c>
    HEADER add mod_authn_core.c true
  </IfModule>
  <IfModule !mod_authn_core.c>
    HEADER add mod_authn_core.c false
  </IfModule>

  <IfModule mod_authn_dbd.c>
    HEADER add mod_authn_dbd.c true
  </IfModule>
  <IfModule !mod_authn_dbd.c>
    HEADER add mod_authn_dbd.c false
  </IfModule>

  <IfModule mod_authn_dbm.c>
    HEADER add mod_authn_dbm.c true
  </IfModule>
  <IfModule !mod_authn_dbm.c>
    HEADER add mod_authn_dbm.c false
  </IfModule>

  <IfModule mod_authn_file.c>
    HEADER add mod_authn_file.c true
  </IfModule>
  <IfModule !mod_authn_file.c>
    HEADER add mod_authn_file.c false
  </IfModule>

  <IfModule mod_authn_socache.c>
    HEADER add mod_authn_socache.c true
  </IfModule>
  <IfModule !mod_authn_socache.c>
    HEADER add mod_authn_socache.c false
  </IfModule>

  <IfModule mod_authnz_fcgi.c>
    HEADER add mod_authnz_fcgi.c true
  </IfModule>
  <IfModule !mod_authnz_fcgi.c>
    HEADER add mod_authnz_fcgi.c false
  </IfModule>

  <IfModule mod_authnz_ldap.c>
    HEADER add mod_authnz_ldap.c true
  </IfModule>
  <IfModule !mod_authnz_ldap.c>
    HEADER add mod_authnz_ldap.c false
  </IfModule>

  <IfModule mod_authz_core.c>
    HEADER add mod_authz_core.c true
  </IfModule>
  <IfModule !mod_authz_core.c>
    HEADER add mod_authz_core.c false
  </IfModule>

  <IfModule mod_authz_dbd.c>
    HEADER add mod_authz_dbd.c true
  </IfModule>
  <IfModule !mod_authz_dbd.c>
    HEADER add mod_authz_dbd.c false
  </IfModule>

  <IfModule mod_authz_dbm.c>
    HEADER add mod_authz_dbm.c true
  </IfModule>
  <IfModule !mod_authz_dbm.c>
    HEADER add mod_authz_dbm.c false
  </IfModule>

  <IfModule mod_authz_groupfile.c>
    HEADER add mod_authz_groupfile.c true
  </IfModule>
  <IfModule !mod_authz_groupfile.c>
    HEADER add mod_authz_groupfile.c false
  </IfModule>

  <IfModule mod_authz_host.c>
    HEADER add mod_authz_host.c true
  </IfModule>
  <IfModule !mod_authz_host.c>
    HEADER add mod_authz_host.c false
  </IfModule>

  <IfModule mod_authz_owner.c>
    HEADER add mod_authz_owner.c true
  </IfModule>
  <IfModule !mod_authz_owner.c>
    HEADER add mod_authz_owner.c false
  </IfModule>

  <IfModule mod_authz_user.c>
    HEADER add mod_authz_user.c true
  </IfModule>
  <IfModule !mod_authz_user.c>
    HEADER add mod_authz_user.c false
  </IfModule>

  <IfModule mod_autoindex.c>
    HEADER add mod_autoindex.c true
  </IfModule>
  <IfModule !mod_autoindex.c>
    HEADER add mod_autoindex.c false
  </IfModule>

  <IfModule mod_brotli.c>
    HEADER add mod_brotli.c true
  </IfModule>
  <IfModule !mod_brotli.c>
    HEADER add mod_brotli.c false
  </IfModule>

  <IfModule mod_buffer.c>
    HEADER add mod_buffer.c true
  </IfModule>
  <IfModule !mod_buffer.c>
    HEADER add mod_buffer.c false
  </IfModule>

  <IfModule mod_cache.c>
    HEADER add mod_cache.c true
  </IfModule>
  <IfModule !mod_cache.c>
    HEADER add mod_cache.c false
  </IfModule>

  <IfModule mod_cache_disk.c>
    HEADER add mod_cache_disk.c true
  </IfModule>
  <IfModule !mod_cache_disk.c>
    HEADER add mod_cache_disk.c false
  </IfModule>

  <IfModule mod_cache_socache.c>
    HEADER add mod_cache_socache.c true
  </IfModule>
  <IfModule !mod_cache_socache.c>
    HEADER add mod_cache_socache.c false
  </IfModule>

  <IfModule mod_cern_meta.c>
    HEADER add mod_cern_meta.c true
  </IfModule>
  <IfModule !mod_cern_meta.c>
    HEADER add mod_cern_meta.c false
  </IfModule>

  <IfModule mod_cgi.c>
    HEADER add mod_cgi.c true
  </IfModule>
  <IfModule !mod_cgi.c>
    HEADER add mod_cgi.c false
  </IfModule>

  <IfModule mod_cgid.c>
    HEADER add mod_cgid.c true
  </IfModule>
  <IfModule !mod_cgid.c>
    HEADER add mod_cgid.c false
  </IfModule>

  <IfModule mod_charset_lite.c>
    HEADER add mod_charset_lite.c true
  </IfModule>
  <IfModule !mod_charset_lite.c>
    HEADER add mod_charset_lite.c false
  </IfModule>

  <IfModule mod_data.c>
    HEADER add mod_data.c true
  </IfModule>
  <IfModule !mod_data.c>
    HEADER add mod_data.c false
  </IfModule>

  <IfModule mod_dav.c>
    HEADER add mod_dav.c true
  </IfModule>
  <IfModule !mod_dav.c>
    HEADER add mod_dav.c false
  </IfModule>

  <IfModule mod_dav_fs.c>
    HEADER add mod_dav_fs.c true
  </IfModule>
  <IfModule !mod_dav_fs.c>
    HEADER add mod_dav_fs.c false
  </IfModule>

  <IfModule mod_dav_lock.c>
    HEADER add mod_dav_lock.c true
  </IfModule>
  <IfModule !mod_dav_lock.c>
    HEADER add mod_dav_lock.c false
  </IfModule>

  <IfModule mod_dbd.c>
    HEADER add mod_dbd.c true
  </IfModule>
  <IfModule !mod_dbd.c>
    HEADER add mod_dbd.c false
  </IfModule>

  <IfModule mod_deflate.c>
    HEADER add mod_deflate.c true
  </IfModule>
  <IfModule !mod_deflate.c>
    HEADER add mod_deflate.c false
  </IfModule>

  <IfModule mod_dialup.c>
    HEADER add mod_dialup.c true
  </IfModule>
  <IfModule !mod_dialup.c>
    HEADER add mod_dialup.c false
  </IfModule>

  <IfModule mod_dir.c>
    HEADER add mod_dir.c true
  </IfModule>
  <IfModule !mod_dir.c>
    HEADER add mod_dir.c false
  </IfModule>

  <IfModule mod_dumpio.c>
    HEADER add mod_dumpio.c true
  </IfModule>
  <IfModule !mod_dumpio.c>
    HEADER add mod_dumpio.c false
  </IfModule>

  <IfModule mod_echo.c>
    HEADER add mod_echo.c true
  </IfModule>
  <IfModule !mod_echo.c>
    HEADER add mod_echo.c false
  </IfModule>

  <IfModule mod_env.c>
    HEADER add mod_env.c true
  </IfModule>
  <IfModule !mod_env.c>
    HEADER add mod_env.c false
  </IfModule>

  <IfModule mod_example_hooks.c>
    HEADER add mod_example_hooks.c true
  </IfModule>
  <IfModule !mod_example_hooks.c>
    HEADER add mod_example_hooks.c false
  </IfModule>

  <IfModule mod_expires.c>
    HEADER add mod_expires.c true
  </IfModule>
  <IfModule !mod_expires.c>
    HEADER add mod_expires.c false
  </IfModule>

  <IfModule mod_ext_filter.c>
    HEADER add mod_ext_filter.c true
  </IfModule>
  <IfModule !mod_ext_filter.c>
    HEADER add mod_ext_filter.c false
  </IfModule>

  <IfModule mod_file_cache.c>
    HEADER add mod_file_cache.c true
  </IfModule>
  <IfModule !mod_file_cache.c>
    HEADER add mod_file_cache.c false
  </IfModule>

  <IfModule mod_filter.c>
    HEADER add mod_filter.c true
  </IfModule>
  <IfModule !mod_filter.c>
    HEADER add mod_filter.c false
  </IfModule>

  <IfModule mod_heartbeat.c>
    HEADER add mod_heartbeat.c true
  </IfModule>
  <IfModule !mod_heartbeat.c>
    HEADER add mod_heartbeat.c false
  </IfModule>

  <IfModule mod_heartmonitor.c>
    HEADER add mod_heartmonitor.c true
  </IfModule>
  <IfModule !mod_heartmonitor.c>
    HEADER add mod_heartmonitor.c false
  </IfModule>

  <IfModule mod_http2.c>
    HEADER add mod_http2.c true
  </IfModule>
  <IfModule !mod_http2.c>
    HEADER add mod_http2.c false
  </IfModule>

  <IfModule mod_ident.c>
    HEADER add mod_ident.c true
  </IfModule>
  <IfModule !mod_ident.c>
    HEADER add mod_ident.c false
  </IfModule>

  <IfModule mod_imagemap.c>
    HEADER add mod_imagemap.c true
  </IfModule>
  <IfModule !mod_imagemap.c>
    HEADER add mod_imagemap.c false
  </IfModule>

  <IfModule mod_include.c>
    HEADER add mod_include.c true
  </IfModule>
  <IfModule !mod_include.c>
    HEADER add mod_include.c false
  </IfModule>

  <IfModule mod_info.c>
    HEADER add mod_info.c true
  </IfModule>
  <IfModule !mod_info.c>
    HEADER add mod_info.c false
  </IfModule>

  <IfModule mod_isapi.c>
    HEADER add mod_isapi.c true
  </IfModule>
  <IfModule !mod_isapi.c>
    HEADER add mod_isapi.c false
  </IfModule>

  <IfModule mod_lbmethod_bybusyness.c>
    HEADER add mod_lbmethod_bybusyness.c true
  </IfModule>
  <IfModule !mod_lbmethod_bybusyness.c>
    HEADER add mod_lbmethod_bybusyness.c false
  </IfModule>

  <IfModule mod_lbmethod_byrequests.c>
    HEADER add mod_lbmethod_byrequests.c true
  </IfModule>
  <IfModule !mod_lbmethod_byrequests.c>
    HEADER add mod_lbmethod_byrequests.c false
  </IfModule>

  <IfModule mod_lbmethod_bytraffic.c>
    HEADER add mod_lbmethod_bytraffic.c true
  </IfModule>
  <IfModule !mod_lbmethod_bytraffic.c>
    HEADER add mod_lbmethod_bytraffic.c false
  </IfModule>

  <IfModule mod_lbmethod_heartbeat.c>
    HEADER add mod_lbmethod_heartbeat.c true
  </IfModule>
  <IfModule !mod_lbmethod_heartbeat.c>
    HEADER add mod_lbmethod_heartbeat.c false
  </IfModule>

  <IfModule mod_ldap.c>
    HEADER add mod_ldap.c true
  </IfModule>
  <IfModule !mod_ldap.c>
    HEADER add mod_ldap.c false
  </IfModule>

  <IfModule mod_log_config.c>
    HEADER add mod_log_config.c true
  </IfModule>
  <IfModule !mod_log_config.c>
    HEADER add mod_log_config.c false
  </IfModule>

  <IfModule mod_log_debug.c>
    HEADER add mod_log_debug.c true
  </IfModule>
  <IfModule !mod_log_debug.c>
    HEADER add mod_log_debug.c false
  </IfModule>

  <IfModule mod_log_forensic.c>
    HEADER add mod_log_forensic.c true
  </IfModule>
  <IfModule !mod_log_forensic.c>
    HEADER add mod_log_forensic.c false
  </IfModule>

  <IfModule mod_logio.c>
    HEADER add mod_logio.c true
  </IfModule>
  <IfModule !mod_logio.c>
    HEADER add mod_logio.c false
  </IfModule>

  <IfModule mod_lua.c>
    HEADER add mod_lua.c true
  </IfModule>
  <IfModule !mod_lua.c>
    HEADER add mod_lua.c false
  </IfModule>

  <IfModule mod_macro.c>
    HEADER add mod_macro.c true
  </IfModule>
  <IfModule !mod_macro.c>
    HEADER add mod_macro.c false
  </IfModule>

  <IfModule mod_mime.c>
    HEADER add mod_mime.c true
  </IfModule>
  <IfModule !mod_mime.c>
    HEADER add mod_mime.c false
  </IfModule>

  <IfModule mod_mime_magic.c>
    HEADER add mod_mime_magic.c true
  </IfModule>
  <IfModule !mod_mime_magic.c>
    HEADER add mod_mime_magic.c false
  </IfModule>

  <IfModule mod_negotiation.c>
    HEADER add mod_negotiation.c true
  </IfModule>
  <IfModule !mod_negotiation.c>
    HEADER add mod_negotiation.c false
  </IfModule>

  <IfModule mod_nw_ssl.c>
    HEADER add mod_nw_ssl.c true
  </IfModule>
  <IfModule !mod_nw_ssl.c>
    HEADER add mod_nw_ssl.c false
  </IfModule>

  <IfModule mod_privileges.c>
    HEADER add mod_privileges.c true
  </IfModule>
  <IfModule !mod_privileges.c>
    HEADER add mod_privileges.c false
  </IfModule>

  <IfModule mod_proxy.c>
    HEADER add mod_proxy.c true
  </IfModule>
  <IfModule !mod_proxy.c>
    HEADER add mod_proxy.c false
  </IfModule>

  <IfModule mod_proxy_ajp.c>
    HEADER add mod_proxy_ajp.c true
  </IfModule>
  <IfModule !mod_proxy_ajp.c>
    HEADER add mod_proxy_ajp.c false
  </IfModule>

  <IfModule mod_proxy_balancer.c>
    HEADER add mod_proxy_balancer.c true
  </IfModule>
  <IfModule !mod_proxy_balancer.c>
    HEADER add mod_proxy_balancer.c false
  </IfModule>

  <IfModule mod_proxy_connect.c>
    HEADER add mod_proxy_connect.c true
  </IfModule>
  <IfModule !mod_proxy_connect.c>
    HEADER add mod_proxy_connect.c false
  </IfModule>

  <IfModule mod_proxy_express.c>
    HEADER add mod_proxy_express.c true
  </IfModule>
  <IfModule !mod_proxy_express.c>
    HEADER add mod_proxy_express.c false
  </IfModule>

  <IfModule mod_proxy_fcgi.c>
    HEADER add mod_proxy_fcgi.c true
  </IfModule>
  <IfModule !mod_proxy_fcgi.c>
    HEADER add mod_proxy_fcgi.c false
  </IfModule>

  <IfModule mod_proxy_fdpass.c>
    HEADER add mod_proxy_fdpass.c true
  </IfModule>
  <IfModule !mod_proxy_fdpass.c>
    HEADER add mod_proxy_fdpass.c false
  </IfModule>

  <IfModule mod_proxy_ftp.c>
    HEADER add mod_proxy_ftp.c true
  </IfModule>
  <IfModule !mod_proxy_ftp.c>
    HEADER add mod_proxy_ftp.c false
  </IfModule>

  <IfModule mod_proxy_hcheck.c>
    HEADER add mod_proxy_hcheck.c true
  </IfModule>
  <IfModule !mod_proxy_hcheck.c>
    HEADER add mod_proxy_hcheck.c false
  </IfModule>

  <IfModule mod_proxy_html.c>
    HEADER add mod_proxy_html.c true
  </IfModule>
  <IfModule !mod_proxy_html.c>
    HEADER add mod_proxy_html.c false
  </IfModule>

  <IfModule mod_proxy_http.c>
    HEADER add mod_proxy_http.c true
  </IfModule>
  <IfModule !mod_proxy_http.c>
    HEADER add mod_proxy_http.c false
  </IfModule>

  <IfModule mod_proxy_http2.c>
    HEADER add mod_proxy_http2.c true
  </IfModule>
  <IfModule !mod_proxy_http2.c>
    HEADER add mod_proxy_http2.c false
  </IfModule>

  <IfModule mod_proxy_scgi.c>
    HEADER add mod_proxy_scgi.c true
  </IfModule>
  <IfModule !mod_proxy_scgi.c>
    HEADER add mod_proxy_scgi.c false
  </IfModule>

  <IfModule mod_proxy_wstunnel.c>
    HEADER add mod_proxy_wstunnel.c true
  </IfModule>
  <IfModule !mod_proxy_wstunnel.c>
    HEADER add mod_proxy_wstunnel.c false
  </IfModule>

  <IfModule mod_ratelimit.c>
    HEADER add mod_ratelimit.c true
  </IfModule>
  <IfModule !mod_ratelimit.c>
    HEADER add mod_ratelimit.c false
  </IfModule>

  <IfModule mod_reflector.c>
    HEADER add mod_reflector.c true
  </IfModule>
  <IfModule !mod_reflector.c>
    HEADER add mod_reflector.c false
  </IfModule>

  <IfModule mod_remoteip.c>
    HEADER add mod_remoteip.c true
  </IfModule>
  <IfModule !mod_remoteip.c>
    HEADER add mod_remoteip.c false
  </IfModule>

  <IfModule mod_reqtimeout.c>
    HEADER add mod_reqtimeout.c true
  </IfModule>
  <IfModule !mod_reqtimeout.c>
    HEADER add mod_reqtimeout.c false
  </IfModule>

  <IfModule mod_request.c>
    HEADER add mod_request.c true
  </IfModule>
  <IfModule !mod_request.c>
    HEADER add mod_request.c false
  </IfModule>

  <IfModule mod_rewrite.c>
    HEADER add mod_rewrite.c true
  </IfModule>
  <IfModule !mod_rewrite.c>
    HEADER add mod_rewrite.c false
  </IfModule>

  <IfModule mod_sed.c>
    HEADER add mod_sed.c true
  </IfModule>
  <IfModule !mod_sed.c>
    HEADER add mod_sed.c false
  </IfModule>

  <IfModule mod_session.c>
    HEADER add mod_session.c true
  </IfModule>
  <IfModule !mod_session.c>
    HEADER add mod_session.c false
  </IfModule>

  <IfModule mod_session_cookie.c>
    HEADER add mod_session_cookie.c true
  </IfModule>
  <IfModule !mod_session_cookie.c>
    HEADER add mod_session_cookie.c false
  </IfModule>

  <IfModule mod_session_crypto.c>
    HEADER add mod_session_crypto.c true
  </IfModule>
  <IfModule !mod_session_crypto.c>
    HEADER add mod_session_crypto.c false
  </IfModule>

  <IfModule mod_session_dbd.c>
    HEADER add mod_session_dbd.c true
  </IfModule>
  <IfModule !mod_session_dbd.c>
    HEADER add mod_session_dbd.c false
  </IfModule>

  <IfModule mod_setenvif.c>
    HEADER add mod_setenvif.c true
  </IfModule>
  <IfModule !mod_setenvif.c>
    HEADER add mod_setenvif.c false
  </IfModule>

  <IfModule mod_slotmem_plain.c>
    HEADER add mod_slotmem_plain.c true
  </IfModule>
  <IfModule !mod_slotmem_plain.c>
    HEADER add mod_slotmem_plain.c false
  </IfModule>

  <IfModule mod_slotmem_shm.c>
    HEADER add mod_slotmem_shm.c true
  </IfModule>
  <IfModule !mod_slotmem_shm.c>
    HEADER add mod_slotmem_shm.c false
  </IfModule>

  <IfModule mod_so.c>
    HEADER add mod_so.c true
  </IfModule>
  <IfModule !mod_so.c>
    HEADER add mod_so.c false
  </IfModule>

  <IfModule mod_socache_dbm.c>
    HEADER add mod_socache_dbm.c true
  </IfModule>
  <IfModule !mod_socache_dbm.c>
    HEADER add mod_socache_dbm.c false
  </IfModule>

  <IfModule mod_socache_dc.c>
    HEADER add mod_socache_dc.c true
  </IfModule>
  <IfModule !mod_socache_dc.c>
    HEADER add mod_socache_dc.c false
  </IfModule>

  <IfModule mod_socache_memcache.c>
    HEADER add mod_socache_memcache.c true
  </IfModule>
  <IfModule !mod_socache_memcache.c>
    HEADER add mod_socache_memcache.c false
  </IfModule>

  <IfModule mod_socache_shmcb.c>
    HEADER add mod_socache_shmcb.c true
  </IfModule>
  <IfModule !mod_socache_shmcb.c>
    HEADER add mod_socache_shmcb.c false
  </IfModule>

  <IfModule mod_speling.c>
    HEADER add mod_speling.c true
  </IfModule>
  <IfModule !mod_speling.c>
    HEADER add mod_speling.c false
  </IfModule>

  <IfModule mod_ssl.c>
    HEADER add mod_ssl.c true
  </IfModule>
  <IfModule !mod_ssl.c>
    HEADER add mod_ssl.c false
  </IfModule>

  <IfModule mod_status.c>
    HEADER add mod_status.c true
  </IfModule>
  <IfModule !mod_status.c>
    HEADER add mod_status.c false
  </IfModule>

  <IfModule mod_substitute.c>
    HEADER add mod_substitute.c true
  </IfModule>
  <IfModule !mod_substitute.c>
    HEADER add mod_substitute.c false
  </IfModule>

  <IfModule mod_suexec.c>
    HEADER add mod_suexec.c true
  </IfModule>
  <IfModule !mod_suexec.c>
    HEADER add mod_suexec.c false
  </IfModule>

  <IfModule mod_unique_id.c>
    HEADER add mod_unique_id.c true
  </IfModule>
  <IfModule !mod_unique_id.c>
    HEADER add mod_unique_id.c false
  </IfModule>

  <IfModule mod_unixd.c>
    HEADER add mod_unixd.c true
  </IfModule>
  <IfModule !mod_unixd.c>
    HEADER add mod_unixd.c false
  </IfModule>

  <IfModule mod_userdir.c>
    HEADER add mod_userdir.c true
  </IfModule>
  <IfModule !mod_userdir.c>
    HEADER add mod_userdir.c false
  </IfModule>

  <IfModule mod_usertrack.c>
    HEADER add mod_usertrack.c true
  </IfModule>
  <IfModule !mod_usertrack.c>
    HEADER add mod_usertrack.c false
  </IfModule>

  <IfModule mod_version.c>
    HEADER add mod_version.c true
  </IfModule>
  <IfModule !mod_version.c>
    HEADER add mod_version.c false
  </IfModule>

  <IfModule mod_vhost_alias.c>
    HEADER add mod_vhost_alias.c true
  </IfModule>
  <IfModule !mod_vhost_alias.c>
    HEADER add mod_vhost_alias.c false
  </IfModule>

  <IfModule mod_watchdog.c>
    HEADER add mod_watchdog.c true
  </IfModule>
  <IfModule !mod_watchdog.c>
    HEADER add mod_watchdog.c false
  </IfModule>

  <IfModule mod_wsgi.c>
    HEADER add mod_wsgi.c true
  </IfModule>
  <IfModule !mod_wsgi.c>
    HEADER add mod_wsgi.c false
  </IfModule>

  <IfModule mod_xml2enc.c>
    HEADER add mod_xml2enc.c true
  </IfModule>
  <IfModule !mod_xml2enc.c>
    HEADER add mod_xml2enc.c false
  </IfModule>

</IfModule>
```

**Caveats**

The above snippet only checks the modules that are known to the snippet.  So,
the script will need to be updated when new modules are made available.
