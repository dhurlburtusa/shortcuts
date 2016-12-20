# UNIX Cheat Sheet


## Manual Pages

```sh
man [-k] <term>
```

the `-k` option lists the summaries of manual entries that contain `term`.

### Sections

The manual pages are broken into eight sections

| Section | Contents                            |
| :-----: | ----------------------------------- |
| 1       | user commands                       |
| 2       | system calls                        |
| 3       | C library functions                 |
| 4       | devices and network interfaces      |
| 5       | file formats                        |
| 6       | games and demos                     |
| 7       | overviews, conventions, and misc    |
| 8       | superuser and system administration |

Most implementations of `man` display only the information about the first occurrence of an entry.

**Displaying an entry from a specific section**

```sh
# syntax
man -S <section> <term>
```

```sh
# example
man -S 3 string
```
