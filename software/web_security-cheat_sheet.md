# Web Security Cheat Sheet

Security follows a very basic formula:

    Awareness + Protection = Security

Security is only as strong as the weakest link.


## How much security?

* Should match your needs and goals. No need for a high security vault to
  protect a 100 dollar bill but may need one to protect $100,000,000.
  - Are you a big target?
  - Are there many who would want to exploit your vulnerabilities.
* Execute the security you need really well
* Re-evalute periodically
  + Review all technology in use (hardware, software)
  + Review code in use and still in development
  + Review procedures
  + Review access privileges
  + Educate and re-educate


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

### Never Trust Users

Never trust the data coming from users.  Even well-meaning users can send
incompatible data.

_Always_ sanitize and validate data coming from the user.

Note: Data coming from the database may have originated from the user and is
therefore a candidate for sanitation.

### Expect the Unexpected

* Security is not reactive
* Prevent the crime before it happens
* Ask, "What are all the things a user could try on this page?"
* Consider edge cases

### Defence in Depth

* Layered defences
* Originally a military term
  + Slowing the advance of an attacker
  + Attacks lose momentum
* Redundant security
* Areas to Focus On
  + People
    - Security Policy
    - Education
    - Getting them to follow best practices
    - Assigning responsibilities
  + Technology
    - Hardware, software, acquisition and maintenance, the system administration, as
      well as the programming that you do.
    - Firewalls, intrusion detection, encryption to protect the data while it's in
      transit, access controls, etc.
  + Operations
    - Periodic security reviews
    - Data handling procedures
    - Monitoring responsibilities
    - How you respond to threats

### Security through Obscurity

* More information benefits hackers
* Limit exposed information
* Limit feedback
* Obscurity **does not** mean misdirection


## Common Attacks

* Cross-site Scripting (XSS)
* Cross-site Request Forgery (CSRF)
* SQL Injection
* URL Manipulation
* Faked Requests and Forms
* Cookie Visibility and Theft
* Session Hijacking
* Session Fixation
* Remote System Execution
* File-Upload Abuse
* Denial of Service

### Cross-site Scripting (XSS)

* Hacker can inject JavaScript into a web page
* Used to trick users into running JavaScript code
* Used to steal cookies which could contain session data.
* Prevention
  - Sanitize any user controlled text that gets output to browser

### Cross-site Request Forgery (CSRF)

* Hacker trick users into making a request to your server
* Can be used for fraudulent clicks
* Can take advantage of a user's logged in state
* Prevention
  + GET requests should be idempotent
    - Makes no changes
    - Can be called repeatedly without side-effects
  + Only use POST requests for making changes
  + Use a "form token"
    - Store token in user's session
    - Add a hidden form field with form token as value
    - Compare session form token and submitted form token
    - Improvements
      * Store token generation time in user's session
      * Check if too much time has passed
