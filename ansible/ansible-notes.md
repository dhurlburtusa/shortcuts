# Ansible Notes

Ansible is a powerful IT automation and orchestration engine.

* A simple automation language that describes an IT application infrastructure in
  Ansible playbooks.
* An automation engine which runs the Ansible playbooks.

See https//www.ansible.com/ for more details.

**Requirements**

* OpenSSH (WinRM for Windows)
* Python 2.4+
* A Linux control node.
* One or more nodes of virtually any type including Linux and Windows


## Inventory

A list of nodes using IP addresses or hostnames.  May be static or dynamic.

* Allows variables.
