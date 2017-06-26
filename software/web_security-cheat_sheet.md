# Web Security Cheat Sheet

Security follows a very basic formula:

    Awareness + Protection = Security

Security is only as strong as the weakest link.


## How much security?

* Should match your needs and goals. No need for a high security vault to
  protect a 100 dollar bill but may need one to protect $100,000,000.
  + Are you a big target?
  + Are there many who would want to exploit your vulnerabilities.
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
* Blacklisting vs Whitelisting

### Least Privilege

> Every program and every privileged user of the system should operate using the least
> amount of privilege necessary to complete the job.

**Benefits**

* Code stability
  + Controlled data access
  + Easier to test actions and interactions
* System security
  + Vulnerabilities are limited and localized

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

### Blacklisting vs Whitelisting

* Blacklisting
  + A no-access list
  + A reference list for what's forbidden
* Whitelisting
  + A reference list for what is permitted
  + Allows restricted-by-default functionality

Restricted by default is more secure.


## Best Practices

### Passwords

* Require strong passwords
* Keep Credentials Private
  + Hashed passwords
  + Public-key cryptography
    - Public key + private key
    - SSH keys
    - SSH agent, Keychain
    - SSH agent forwarding
* Hashing Algorithms for Passwords
  + MD5
  + SHA-1
  + SHA-2 (SHA-256, SHA-512)
  + Whirlpool
  + Tiger
  + AES
  + Blowfish
    - Secure, free, easy, slow

### Misc

* Validate input
* Session Fixation Solutions
  + Do not accept session identifiers from GET or POST variables.
  + Regenerate session identifier periodically, at key points.  Especially
    important to regenerate after log in.
* Credit Card Payments
  + Transmit all payment info over SSL
  + Never store full credit card number
  + Never store security code (CVV)
  + Store card brand and last four digits of card number
* Database Backup Security
  + Back up databases regulary (weekly, nightly, hourly)
  + Protect database backups physically
* Map Exposure Points and Data Passageways
  + Incoming Exposure Points
    - URLs
    - Forms
    - Cookies/Sessions
    - Database reads
    - Your public APIs
  + Outgoing Exposure Points
    - HTML
    - JavaScript/JSON/XML/RSS
    - Cookies/Sessions
    - Database writes
    - Third-party APIs
  + Mapping Data Passageways
    - What paths does data take?
    - Helps understand site topography


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
  + Sanitize any user controlled text that gets output to browser

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

### SQL Injection

**Examples of Data Used**

    foo' OR 1 = 1; --
    q' OR 1=(SELECT COUNT(*) FROM tblAdminLogins); --
    q' UNION SELECT username, password FROM users; --
    q'; DROP TABLE customers; --
    q'; UPDATE users SET admin=1 WHERE username='hacker'; --
    q'; INSERT INTO orders (customer_id, product_id, 2906, 567, 995.0); --

* Hacker is able to execute arbitrary SQL requests
* Can be used to probe database schema
  + Trial and error looking for valid SQL
* Can be used to steal database data
  + Usernames, passwords, credit cards, encrypted data
* Can be used to add or change database data
  + Place orders
  + Assign elevated privileges
* Can be used to destroy database data
  + Truncate or drop tables
* Prevention
  + Give limited privileges to application's database user
  + Sanitize input
  + Escape for SQL
  + Prepared statements

### URL Manipulation

* Editing the URL string to probe the site
* Can be used for revealing private information
* Can be used for performing restricted actions
* Prevention
  + First, realize that URLs are exposed and editable
  + Don't use obscurity for access control
  + Keep error messages vague
  + Clarify GET and POST requests
    - GET requests should be idempotent (no changes)
    - POST requests should be used for making changes

### Faked Requests and Forms

* Request header information can be manufactured
  + Plugins and tools for all major browsers
  + Advanced tools for command line
  + Can be part of a script
* Forms can easily be manufactured by duplicating a known form
* Prevention
  + Do not rely on form structure for data validation
  + Do not rely on client-side data validations
    - Be sure to also include server-side validation
  + Use HTTP Referer to enforce same-domain forms
    - However, headers can be faked
  + Use CSRF protections

### Cookie Visibility and Theft

* Cookie data is visible to users
* Cookies can be stolen using XSS attacks
* Cookies can be sniffed by observing network traffic
* Protection
  + Only put non-sensitive data in cookies
  + Use HttpOnly cookies
    - Won't be able to call `document.cookie` anymore
  + Use Secure cookies (HTTPS only)
  + Set cookie expiration date
  + Set cookie domain and path
  + Encrypt cookie data
  + Use server-side sessions instead of client-side cookies

### Session Hijacking

* Similar to cookie theft
* Can be used to assume your identity and logged in status
* Can be used to steal personal info, change password
* Often done by network eavesdropping
  + Beware of open wireless networks at coffee shops
* Protection
  + Save user agent in session and confirm it (weak)
  + Check IP address (buggy)
  + Use HttpOnly cookies
    - Can't be stolen via XSS
  + Regenerate session identifier periodically, at key points
    - Especially important to regenerate after log in.
  + Expire/remove old session files regularly
    - Keep track of last activity in session
  + Use SSL
  + Use Secure cookies

### Session Fixation

* Trick a user into using a hacker-provided session identifier
* Can be used to assume your identity and logged in status
* Can be used to steal personal info, change password
* Successful if user authenticates a known session identifier
* Prevention
  + Do not accept session identifiers from GET or POST variables
  + Regenerate session identifier periodically, at key points
    - Especially important to regenerate after log in.
  + Expire/remove old session files regularly
    - Keep track of last activity in session

### Remote System Execution

* Remotely run operating system commands on a webserver
* Can be used to do anything your OS can do
* Most powerful hack
* Typically hardest to achieve (unless you make it easy)
* Prevention
  + Avoid system execution keywords
    - system, exec, shell, sh, shell_exec, open, popen, proc_open, call,
      subprocess, spawn, passthru, eval, %x, and ` (backtick)
  + Perform system execution with extreme caution
  + Sanitize any dynamic data carefully
  + Understand the commands and their syntax completely
  + Add additional data validations

### File-Upload Abuse

* Abuse of allowed file upload features
* Can be used to upload too much (quantity, file size)
* Can be used to upload malicious files
* Protection
  + Require user authentication, no anonymous uploads
  + Limit maximum upload size
  + Limit allowable file formats, file extensions
  + Use caution when opening uploaded files
  + Do not host uploaded files which have not been verified

### Denial of Service

* Attempt to make a server unavailable to users
* Usually performed by overloading a server with too many requests
* Includes DNS and routing disruption
* Includes using up disk space, processor power, bandwidth
* Attacks often performed by distributed network ("DDoS")
* Cheap to launch, difficult to prevent
* Usually performed by person or group with a grudge
* Can be used as a distraction from other hacking attempts
* Protection
  + Firewalls
    - Allow you to set rules about what traffic is allowed to pass onto the web
      server
      * You can block access to certain ports or filter out IP addresses of attackers
  + Switches and routers
    - Often have rate limiting and filtering features such as access control lists
  + Load management hardware/software
    - Could be load balancing tools
    - Could spin up additional instances of a server in the cloud
  + Collection of reverse proxy servers
  + Map your infrastructure
  + Keep infrastructure up to date
  + Purchase high-quality hosting and equipment
  + Make network traffic visible
  + Develop a response plan
  + If you're under attack
    - Change IP address
    - "Black hole" or "null route" traffic
