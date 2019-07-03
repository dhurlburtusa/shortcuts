# Ansible Notes

Ansible is a powerful IT automation and orchestration engine.

* A simple automation language that describes an IT application infrastructure in
  Ansible playbooks.
* An automation engine which runs the Ansible playbooks.

Check out https://www.ansible.com/resources/videos/quick-start-video for a good
short overview of Ansible.

See https//www.ansible.com/ for more details.

**Requirements**

For Control node:

* Installed on Linux (includes Red Hat, Debian, CentOS, OS X, any of the BSDs, and
  so on).
* Python 2.6, 2.7, 3.5+.

For Managed nodes:

* Installed on Linux, Windows, etc
* Python 2.6, 2.7, 3.5+.
* OpenSSH (WinRM for Windows).
* sftp (preferable) or scp.


## Installation

There are many different ways to install Ansible on the control node.  The
easiest way is to use the package manager of your OS.

**Latest Releases via Apt (Ubuntu)**

```sh
$ sudo apt-get update
$ sudo apt-get install software-properties-common
$ sudo apt-add-repository ppa:ansible/ansible
$ sudo apt-get update
$ sudo apt-get install ansible
```

See
http://docs.ansible.com/ansible/latest/intro_installation.html#installing-the-control-machine
for a complete list.


## Initial Setup

Edit (or create) `/etc/ansible/hosts` and put one or more remote systems in it.
Your public SSH key should be located in `authorized_keys` on those systems.
This file is known as the inventory file.

The inventory file will need to be updated as managed nodes are added, changed,
or removed.


## Modes of Operation

These are known as strategies.

**Linear**

- Execute list of tasks on multiple hosts at the same time.

**Serial**

- Execute list of tasks one host at a time.

**Free**

- Execute tasks as fast as you can.

See https://docs.ansible.com/ansible/latest/user_guide/playbooks_strategies.html
for details.


## Language Basics

Playbooks contain plays.
Plays contain tasks.
Tasks call modules.

Tasks run sequentially.

Handlers are triggered by tasks, and they are run once, at the end of plays.


## Inventory

Basically a list of managed nodes (aka hosts) using IP addresses or hostnames.
The hosts are referenced in playbooks.

* May be static or dynamic.
* May be in different formats depending on inventory plugins.
  + INI (by default)
  + YAML with plugin
* Allows grouping of hosts.
* Allows variables.

The default location for the inventory is `/etc/ansible/hosts` in an INI format.
The headings in brackets become group names.  It is ok to put host in more than
one group.

**Default Groups**

There are two default groups: `all` and `ungrouped`.  `all` contains every host.
`ungrouped` contains all hosts that don’t have another group aside from `all`.

### Patterns

```ini
[webservers]
www[01:50].example.com

[databases]
db-[a:f].example.com
```

### Connection Types

```ini
[targets]
localhost              ansible_connection=local
other1.example.com     ansible_connection=ssh        ansible_user=warden
other2.example.com     ansible_connection=ssh        ansible_user=warden
```

### Variables

**Host Variables**

```ini
[denver]
host1 http_port=80 maxRequestsPerChild=808
host2 http_port=303 maxRequestsPerChild=909
```

**Group Variables**

```ini
[denver]
host1
host2

[denver:vars]
ntp_server=ntp.denver.example.com
proxy=proxy.denver.example.com
```

```yml
denver:
  hosts:
    host1:
    host2:
  vars:
    ntp_server: ntp.denver.example.com
    proxy: proxy.denver.example.com
```

Note: Group variables is only a convenient way to apply variables to multiple
hosts at once; variables are always flattened to the host level before a play is
executed.  Variables will come from all of the groups the host is a member of.

**Externalizing Variables**

Note: The preferred practice in Ansible is to not store variables in the main
inventory file.

In addition to storing variables directly in the inventory file, host and group
variables can be stored in individual files relative to the inventory file or a
playbook. If both paths exist, variables in the playbook directory will override
variables set in the inventory directory.

These variable files are in YAML format. Valid file extensions include ‘.yml’,
‘.yaml’, ‘.json’, or no file extension.

Assuming the inventory file path is: `/etc/ansible/hosts`

If the host is named ‘foosball’ and in groups ‘raleigh’ and ‘webservers’,
variables in YAML files at the following locations will be made available to the
host:

```
/etc/ansible/group_vars/raleigh
/etc/ansible/group_vars/webservers
/etc/ansible/host_vars/foosball
```

It is okay if these files do not exist, as this is an optional feature.

As an advanced use case, you can create directories named after your groups or
hosts and Ansible will read all the files in these directories in
lexicographical order. An example with the ‘raleigh’ group:

```
/etc/ansible/group_vars/raleigh/db_settings
/etc/ansible/group_vars/raleigh/cluster_settings
```

All hosts that are in the ‘raleigh’ group will have the variables defined in
these files available to them.  This can be very useful to keep your variables
organized when a single file starts to be too big or when you want to use
Ansible Vault on a part of a group’s variables.

See http://docs.ansible.com/ansible/latest/intro_inventory.html for details and
examples.

See http://docs.ansible.com/ansible/latest/ansible-inventory.html for use of the
`ansible-inventory` command-line tool.


## Playbooks

Playbooks are Ansible’s configuration, deployment, and orchestration language.
They can describe a policy you want your remote systems to enforce, or a set of
steps in a general IT process.

- Written with YAML file(s).
- Consists of plays which consists of tasks which call modules.
- Allows variables from: playbooks, files, inventories, command line, and more.
- Tasks run sequentially.
- Handlers are triggered by tasks and are run once at the end of plays.

For each play in a playbook, you get to choose which machines (aka hosts) in
your infrastructure to target and what remote user to complete the tasks as.

### Reusability

A playbook can be decomposed into smaller files and then reused.  There are
three ways to reuse: `includes` (dynamic), `imports` (static), and `roles`.

- Ansible pre-processes all static imports during Playbook parsing time.
- Dynamic includes are processed during runtime at the point in which that task is
  encountered.

See https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse.html#tradeoffs-and-pitfalls-between-includes-and-imports
for information about tradeoffs and pitfalls between includes and imports.

```yml
# playbook.yml
- import_playbook: databases.yml
- import_playbook: webservers.yml
```

```yml
# common_tasks.yml
- name: placeholder foo
  command: /bin/foo
- name: placeholder bar
  command: /bin/bar
```

```yml
# more_handlers.yml
- name: restart apache
  service:
    name: apache
    state: restarted
```

```yml
  tasks:
    - import_tasks: common_tasks.yml
    # or
    - include_tasks: common_tasks.yml

  handlers:
    - import_tasks: more_handlers.yml
    # or
    - include_tasks: more_handlers.yml
```

**Roles**

Roles are ways of automatically loading certain vars_files, tasks, and handlers
based on a known file structure.  Grouping content by roles also allows easy
sharing of roles with other users.

**Role Directory Structure**

Example project structure:

```
site.yml
webservers.yml
fooservers.yml
roles/
   common/
     tasks/
     handlers/
     files/
     templates/
     vars/
     defaults/
     meta/
   webservers/
     tasks/
     defaults/
     meta/
```

Roles expect files to be in certain directory names.  Roles must include at
least one of these directories, however it is perfectly fine to exclude any
which are not being used.  When in use, each directory must contain a `main.yml`
file, which contains the relevant content:

- `tasks` - contains the main list of tasks to be executed by the role.
- `handlers` - contains handlers, which may be used by this role or even anywhere
  outside this role.
- `defaults` - default variables for the role.
- `vars` - other variables for the role.
- `files` - contains files which can be deployed via this role.
- `templates` - contains templates which can be deployed via this role.
- `meta` - defines some meta data for this role.

### Execution Order

The order of execution for your playbook is as follows:

- Any `pre_tasks` defined in the play.
- Any handlers triggered so far will be run.
- Each role listed in `roles` will execute in turn.  Any role dependencies defined
  in the roles `meta/main.yml` will be run first, subject to tag filtering and
  conditionals.
- Any `tasks` defined in the play.
- Any handlers triggered so far will be run.
- Any `post_tasks` defined in the play.
- Any handlers triggered so far will be run.


## Variables

Variable names should be letters, numbers, and underscores.  Variables should
always start with a letter.

**Inventory**

TODO: Finish documenting.

**Playbooks**

Variables can be set in playbooks at various levels. It can be set at the play

**Facts**

## Templating

Take into account that templating happens on the Ansible controller, not on the
task’s target host, so filters also execute on the controller as they manipulate
local data.

## Misc Uncategorized

docs.ansible.com/ansible/intro_installation.html
docs.ansible.com/ansible/modules_by_category.html

**Running**

```sh
ansible <inventory> -m ...
```

```sh
ansible-playbook ...
```

```sh
ansible-vault create some_file.yml
```

```sh
ansible-vault encrypt some_file.yml
```

```sh
ansible-vault view some_encrypted_file.yml
```

```sh
ansible-vault edit some_encrypted_file.yml
```

```sh
ansible-vault decrypt some_encrypted_file.yml
```

```sh
ansible-vault rekey some_encrypted_file.yml
```

Check mode: Dry-run for ad-hoc commands and playbooks. Use `-C` cli option.
Note: Not all modules support check mode.

Using Ansible Tower.


**Modules**

100s built-in
Others available from Ansible Galaxy.

http://docs.ansible.com/ansible/latest/modules_by_category.html

**Ansible Galaxy**

Source of community and vendor-provided Ansible playbooks, roles, and modules.

https://galaxy.ansible.com/
