# PuTTY Notes

## Configuration

It appears that these are saved in the Window's registry under the `HKEY_CURRENT_USER\SOFTWARE\SimonTatham\PuTTY` key.

TODO: Confirm whether there are configurations saved elsewhere.


## Common Configuration Changes

+ Session
  - Host Name: `${hostname}`
+ Window
  - Lines of Scrollback: 50000
+ Connection
  - Data
    * Auto-login username: `${username}`
  - SSH
    * Auth
      + Private key file for authentication: `${path-to-file}`
