# The WordPress `wp-login.php` Notes


## Hooks

### Actions

**Via `wp-settings.php`**

- `mu_plugin_loaded`, $mu_plugin
- `network_plugin_loaded`, $network_plugin, Only applies to multisite.
- `muplugins_loaded`, none
- `plugin_loaded`, $plugin
- `plugins_loaded`, none
- `sanitize_comment_cookies`, none
- `setup_theme`, none
- `after_setup_theme`, none
- `init`, none
- `wp_loaded`, none

**Via Self**

- `login_init`, none
- `login_form_{$action}`, none
  + `login_form_confirmaction`, none
  + `login_form_login`, none
  + `login_form_logout`, none
  + `login_form_lostpassword`, none
  + `login_form_postpass`, none
  + `login_form_register`, none
  + `login_form_resetpass`, none
  + `login_form_retrievepassword`, none
  + `login_form_rp`, none
  + `login_form_foo`, none
  + `login_form_foo`, none
  + `login_form_foo`, none

**When `$action === 'login'`**

- 


### Filters

- `login_link_separator`

**When `$action === 'login'`**

- `login_redirect`
