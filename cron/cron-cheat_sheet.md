# cron Cheat Sheet

See [Intro to cron][unixgeeks_cron] and [man 8 cron][man8cron] for details.

## crontab Command

See [crontab(1)][man1crontab] and [crontab(5)][man5crontab] for details.

### Configuration

The configuration of `cron` is done in what are known as crontabs or cron
tables, which are plaintext files in a particular format.  The `crontab`
command is used to create and/or update these crontabs.

#### Format

Each crontab can have three types of lines: 1) comments 2) environment setting
or 3) cron command.  Blank lines and leading spaces and tabs are ignored.

**Comments**

Lines whose first non-space character is a hash-sign (#) are comments, and
they are ignored.

**Environment Settings**

The crontab file is parsed from top to bottom, so any environment settings
will affect only the cron commands below them in the file.  An environment
setting is of the form,

    name = value

where the spaces around the equal-sign (=) are optional, and any subsequent
non-leading spaces in value will be part of the value assigned to name.  The
value string may be placed in quotes (single or double, but matching) to
preserve leading or trailing blanks.  To define an empty variable, quotes must
be used.

**cron Commands**

Each line has five time and date fields, followed by a command.  The fields
may be separated by spaces or tabs.

The time and date fields are:

| field        | allowed values     |
| ------------ | ------------------ |
| minute       | `0`-`59` |
| hour         | `0`-`23` |
| day of month | `1`-`31` |
| month        | `1`-`12` (or names, see below) |
| day of week  | `0`-`7` (`0` or `7` is `Sun`, or use names) |

A field may be an asterisk (`*`), which always stands for 'any'.

Ranges of numbers are allowed.  Ranges are two numbers separated with a
hyphen.  The specified range is inclusive.  For example, `8-11` for an hours
entry specifies execution at hours 8, 9, 10, and 11.

Lists are allowed.  A list is a set of numbers (or ranges) separated by
commas.  Examples: `1,2,5,9`, `0-4,8-12`.

Step values can be used in conjunction with ranges.  Following a range with
`/<number>` specifies skips of the number's value through the range.  For
example, `0-23/2` can be used in the hours field to specify command execution
every other hour.  Steps are also permitted after an asterisk, so if you want
to say 'every two hours', just use `*/2`.

Backslash escape the newline character to allow multiple lines.

Note: The day of a command's execution can be specified by two fields -- day
of month and day of week.  If both fields are restricted (i.e., aren't `*`),
the command will be run when either field matches the current time.  For
example, `30 4 1,15 * 5` would cause a command to be run at 4:30 am on the
1st and 15th of each month, plus every Friday.

Instead of the first five fields, one of eight special strings may appear:

| string    | meaning |
| --------- | ------- |
| @reboot   | Run once, at startup. |
| @yearly   | Run once a year, "0 0 1 1 *". |
| @annually | (same as @yearly) |
| @monthly  | Run once a month, "0 0 1 * *". |
| @weekly   | Run once a week, "0 0 * * 0". |
| @daily    | Run once a day, "0 0 * * *". |
| @midnight | (same as @daily) |
| @hourly   | Run once an hour, "0 * * * *". |


[man1crontab]: http://man.he.net/man1/crontab
[man5crontab]: http://man.he.net/man5/crontab
[man8cron]: http://man.he.net/man8/cron
[unixgeeks_cron]: http://www.unixgeeks.org/security/newbie/unix/cron-1.html
