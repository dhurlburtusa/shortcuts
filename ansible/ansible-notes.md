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


## Inventory

A list of nodes using IP addresses or hostnames.  May be static or dynamic.

* Allows variables.


## Playbooks

Playbooks describe the desired state of a node.

* Written with YAML file(s).
* Consists of plays which consists of tasks which call modules.
* Allows variables from: playbooks, files, inventories, command line, and more.
* Tasks run sequentially.
* Handlers are triggered by tasks and are run once at the end of plays.
