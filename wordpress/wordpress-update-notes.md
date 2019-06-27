# WordPress Update Notes

## Changing Root Directory Location

If you want to change the directory where the WordPress files are stored, then here are some changes that may need to be made beside moving the files.

- If using NGiNX, you probably need to update a `root` directive.
- If the Wordfence Plugin was installed and extended protection was enabled, then you should have a `.user.ini` file in the root. There is an absolute file path reference in here pointing to WAF PHP code.
