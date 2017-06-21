# Web Security Cheat Sheet

Security follows a very basic formula:

    Awareness + Protection = Security


## Fundamental Principles

* Least privilege
* Simple is more secure
* Never trust users
* Expect the unexpected
* Defence in depth
* Security through Obscurity

### Least Privilege

> Every program and every privileged user of the system should operate using the least
> amount of privilege necessary to complete the job.

**Benefits**

* Code stability
  - Controlled data access
  - Easier to test actions and interactions
* System security
  - Vulnerabilities are limited and localized

### Simple is more Secure

* Complexity invites bugs
* Use clearly named functions and variables
* Write code comments
* Break up long sections of code into small functions
* Don't repeat yourself
* Legacy code is a security concern
* Built-in functions are often better than your own versions
* Disable or remove unused features when possible
