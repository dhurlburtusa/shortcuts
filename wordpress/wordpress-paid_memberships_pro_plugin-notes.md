# Wordpress PaidMembershipsPro Plugin Notes

Note: Requires an account to even access the documentation.


## Installation

Install like almost any other plugin by using `Admin` > `Plugins` > `Add New`.


## Setup

* In `Admin` > `Plugins`, Activate the plugin.
  + This will:
    - Add several tables to your WordPress database.
    - Add several options to the `options` table.
    - Add a Memberships menu to the top nav bar.
    - Add a Memberships menu to the left nav bar.
    - Add a Menu Item to the Settings menu.
    - Admin > Posts > Add/Edit will have a Require Membership option.
    - Admin > Pages > Add/Edit will have a Require Membership option.
    - Admin > Users > Add/Edit will allow a level of membership to be selected.
    - Admin > Users > All Users will have a Membership Level column.
    - Make going to /wp-login.php?action=register take you to "Membership Levels" page.
  + The Memberships menu has:
    - Membership Levels
    - Page Settings
    - Payment Settings
    - Email Settings
    - Advanced Settings
    - Add Ons
    - Members List
    - Reports
    - Orders
    - Discount Codes
* Add a New Membership Level


## Database

| Table Name |
| ---------- |
| `pmpro_discount_codes` |
| `pmpro_discount_codes_levels` |
| `pmpro_discount_codes_uses` |
| `pmpro_membership_levelmeta` |
| `pmpro_membership_leveles` |
| `pmpro_membership_orders` |
| `pmpro_memberships_categories` |
| `pmpro_memberships_pages` |
| `pmpro_memberships_users` |
