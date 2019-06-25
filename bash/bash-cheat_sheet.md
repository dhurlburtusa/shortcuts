# Bash Cheat Sheet


## Examples of Common Commands

```bash
ls -al
ls -al *.txt
```

```bash
echo $PATH
grep -i "needle" haystack
```

```bash
help              # display list of common commands
cd DIR            # change directory
cd -              # change to previous directory
clear             # clear screen
cp FILE1 FILE2    # copy FILE1 as FILE2
ln FILE1 FILE2    # link FILE2 to FILE1     
mkdir DIR         # make a new directory
mkdir DIR1 DIR2   # make many new directories
mkdir -p DIR/DIR  # make tree of directories
mv FILE DIR       # move FILE to DIR
mv FILE1 FILE2    # rename FILE1 as FILE2
rm FILE           # remove file
rmdir DIR         # remove empty directory
```


## Useful Aliases

The following aliases me be put in your `.bashrc` (preferrable) or
`.bash_profile` file.

```sh
alias la='ls -al'
alias ll='ls -l'
alias ga='git add'
alias gcm='git commit -m'
alias gd='git diff'
alias gds='git diff --staged'
alias gl='git log'
alias gs='git status'
```


## Command-line Navigation

Key Combo    | Result
---------    | ------
Ctrl-A       | Move to beginning of the line
Ctrl-E       | Move to the end of the line
Ctrl-U       | Deletes from the caret to the beginning of the line
Ctrl-K       | Deletes form the caret to the end of the line
Ctrl-Shift-C | Copy to clipboard
Ctrl-Shift-V | Paste from clipboard


## Manual Pages

Most commands come with a manual.  You can view the command's manual page by using the `man` command.

> “Never memorize something that you can look up.”

― Albert Einstein

```bash
man COMMAND
```


## Find Files

Use the `find` or `grep` command.

### Find Files by Name

```bash
# Syntax
find DIR -name "pattern"

# Example
find . -name "*.txt"
```

### Find Files Containing Text

```sh
# Syntax
grep [OPTION]... PATTERN [FILE]...

# Example
# Find some text in the current directory and its subdirectories.
grep -Enr 'some text' ./
```


## File Permissions

Ordered by read (4), write (2), execute (1) for user, group, and others.

### Change Mode

```bash
# Syntax
chmod [OPTION]... MODE[,MODE]... FILE...
chmod [OPTION]... OCTAL-MODE FILE...

# Examples
chmod u=rw,g=r,o=r my_file.txt
chmod 644 my_file.txt
chmod u=rwx,g=rx,o=rx my_script.sh
chmod 755 my_script.sh
```


## Search for Patterns

Use the `grep` command.

```bash
# Syntax
grep [OPTION]... PATTERN [FILE]...
```


## Redirection

stdin(0), stdout(1), stderr(2)

```bash
# Syntax
DESCRIPTOR> FILE   # truncate file, then write
DESCRIPTOR>> FILE  # append to file

# Examples
# Redirect stdout to file
ls 1> filelist.txt
# or for short (stdout is default)
ls > filelist.txt

# Redirect stderr to file
ls notreal 2> errors.txt
```


## Firewall

**Firewall Applications**

```bash
sudo ufw app list
```

**Firewall Status**

```bash
sudo ufw status
```

**List Firewall Rules**

```bash
sudo iptables -L
```

**Add Firewall Rule**

```bash
# Block access for a particular IP address:
sudo iptables -I INPUT -s 80.82.70.222/32 -j DROP
```

After you make changes to the firewall configuration, you probably
want to save it so the changes take effect after the server is restarted.

```bash
# Red Hat/CentOS
sudo service iptables save
# Ubuntu
sudo iptables-save
```


## Network

**Check Who's Listening**

```bash
netstat -nl
```
