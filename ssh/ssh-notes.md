# SSH Notes


## SSH Keys

An SSH key is an access credential, similar to a password, used in the SSH protocol. SSH keys grant, automate, and enable remote access to servers.

> While it is possible to manage your servers using password-based logins, it is
> often a better idea to set up and utilize SSH key pairs.  SSH keys are more
> secure than passwords, and can help you log in without having to remember long
> passwords.


## Tools

**ssh-agent**

The `ssh-agent` is a helper program that keeps track of user's identity keys and their passphrases. The agent can then use the keys to log into other servers without having the user type in a password or passphrase again.

The SSH agent is used for SSH public key authentication. It uses SSH keys for authentication. Users can create SSH keys using the `ssh-keygen` command and install them on servers using the `ssh-copy-id` command.

See https://www.ssh.com/ssh/agent for details.

**ssh-keygen**

The `ssh-keygen` is a tool for creating new authentication key pairs for SSH. Such key pairs are used for automating logins, single sign-on, and for authenticating hosts.
