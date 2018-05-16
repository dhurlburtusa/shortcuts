# WordPress All In One WP Security Plugin Notes


## Recommended Settings

* Settings > WP Version Info
  + Check to remove the version and meta info produced by WP from all pages.
* User Accounts > WP Username
  + Ensure there is no user named `admin`.
* User Accounts > Display Name
  + Ensure no display name is identical to the username.
* User Login > Login Lockdown
  + Login Lockdown Options
    - Enable Login Lockdown Feature: checked
    - Allow Unlock Requests: unchecked
    - Max Login Attempts: 50
    - Login Retry Time Period (min): 5
    - Time Length of Lockout (min): 60
    - Display Generic Error Message: check for a little more security.
    - Instantly Lockout Invalid Usernames: check if normal users aren't allowed to login.
    - Instantly Lockout Specific Usernames: add usernames if necessary.
    - Notify By Email: check if you want.
  + Login Lockdown IP Whitelist Settings
    - Optionally enable and add your IP address.
    - Note: If you don't have a static IP address, then relying on this isn't 100%.
* User Login > Force Logout
  + Force User Logout Options
    - Optional
* User Registration > Manual Approval
  + Manually Approve New Registrations
    - Enable manual approval of new registrations: check if required.
* User Registration > Registration Captcha
  + Registration Page Captcha Settings
    - Enable Captcha On Registration Page: check if required.
* User Registration > Registration Honeypot
  + Registration Form Honeypot Settings
    - Enable Honeypot On Registration Page: checked
* Database Security > DB Prefix
  + DB Prefix Options
    - If your current prefix is `wp_`, then change it.
* Database Security > DB Backup
  + Automated Scheduled Backups
    - Enable if you don't have another backup solution.
* Filesystem Security > File Permissions
  + WP Directory and File Permissions Scan Results
    - If the necessary permissions aren't set, attempt to change them.  This may
      require SSH access.
* Filesystem Security > PHP File Editing
  + Disable PHP File Editing
    - Disable Ability To Edit PHP Files: checked.
* Filesystem Security > WP File Access
  + Prevent Access to Default WP Files
    - Prevent Access to WP Default Install Files: checked
* Blacklist Manager > Ban Users
  + IP Hosts and User Agent Blacklist Settings
    - Enable IP or User Agent Blacklisting: check if you have any IPs or User-Agents
      to block.
