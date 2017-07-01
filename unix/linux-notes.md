# Linux Notes


## From Lynda.com

### User and Group Management

From the Linux: User and Group Management course.

#### User Accounts

User account details is stored in `/etc/passwd`.

**/etc/passwd**

Contains user account details -- one line per user.  The file has seven
colon-delimited columns.

| Column | Description |
| :----: | ----------- |
| 1      | User name.  |
| 2      | Encoded password or an x indicating the encoded password is stored in `/etc/shadow`. |
| 3      | User ID. 0-999 => System accounts. 1000+ => User accounts. |
| 4      | Primary group ID.  See `/etc/group`. |
| 5      | Comment field. |
| 6      | Home directory. |
| 7      | Login shell. |

**/etc/shadow**

Contains encoded passwords for each user.  The file has nine colon-delimited
columns.

| Column | Description |
| :----: | ----------- |
| 1      | User name.  |
| 2      | Password hash. |
| 3      | Number of days between 1970-01-01 and the date of the most recent password change. |
| 4      | Number of days before the password can be changed. |
| 5      | Number of days before the password must be changed. |
| 6      | Number of days to warn before password expires. |
| 7      | Number of days after the password expires that the account is disabled. |
| 8      | Number of days between 1970-01-01 and the date the account was disabled. |
| 9      | Reserved for future use. |

**Hashed Passwords**

May begin with a $, hash type, and $.

| Hash Type ID | Hash Type |
| :----------: | --------- |
| 1            | MD5       |
| 2a or 2y     | Blowfish  |
| 5            | SHA256    |
| 6            | SHA512    |

