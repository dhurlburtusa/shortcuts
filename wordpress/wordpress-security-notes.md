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
* Disable PHP file execution in certain WordPress directories.
* Limit login attempts.
* Disable directory indexing and browsing.
* Disable XML-RPC in WordPress.
* Automatically log out idle users in WordPress.
* Delete all inactive themes.
* Delete `.php` files from the `wp-content/uploads/` directory.
* Disable PHP execution in certain WordPress directories.


[all in one wp security & firewall]: https://wordpress.org/plugins/all-in-one-wp-security-and-firewall/
[backupbuddy]: https://ithemes.com/purchase/backupbuddy/
[sucuri scanner]: https://wordpress.org/plugins/sucuri-scanner/
[updraftplus]: https://wordpress.org/plugins/updraftplus/
[vaultpress]: https://vaultpress.com/
[Wordfence]: https://wordpress.org/plugins/wordfence/

