# Ansible Notes

Ansible is a powerful IT automation and orchestration engine.

* A simple automation language that describes an IT application infrastructure in
  Ansible playbooks.
* An automation engine which runs the Ansible playbooks.

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


## Language Basics

Playbooks contain plays.
Plays contain tasks.
Tasks call modules.

Tasks run sequentially.

Handlers are triggered by tasks, and they are run once, at the end of plays.


## Inventory

Basically a list of managed nodes using IP addresses or hostnames.

* May be static or dynamic.
* May be in different formats depending on inventory plugins.
  + INI (by default)
  + YAML with plugin
* Allows grouping of hosts.
* Allows variables.

See http://docs.ansible.com/ansible/latest/intro_inventory.html for details and
examples.

See http://docs.ansible.com/ansible/latest/ansible-inventory.html for use of the
`ansible-inventory` command-line tool.


## Playbooks

Playbooks describe the desired state of a node.

* Written with YAML file(s).
* Consists of plays which consists of tasks which call modules.
* Allows variables from: playbooks, files, inventories, command line, and more.
* Tasks run sequentially.
* Handlers are triggered by tasks and are run once at the end of plays.


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

Using Ansible Tower.


**Modules**

100s built-in
Others available from Ansible Galaxy.

http://docs.ansible.com/ansible/latest/modules_by_category.html

**Ansible Galaxy**

Source of community and vendor-provided Ansible playbooks, roles, and modules.

https://galaxy.ansible.com/
