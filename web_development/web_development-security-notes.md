# Web Development Security Notes

When doing web development, security should be top priority.  Here are listed
several security issues to keep in mind when developing.


## SQL Injection

**Useful Links**

- https://www.owasp.org/index.php/SQL_Injection
- https://www.owasp.org/index.php/Blind_SQL_Injection


## Cross-Site Scripting (XSS)

There are various vectors for XSS.

- **DOM Based XSS**
	+ A form of client-side XSS.
- **Reflected**
	+ Reflected attacks are those where the injected script is reflected off the web server, such as in an error message, search result, or any other response that includes some or all of the input sent to the server as part of the request. Reflected attacks are delivered to victims via another route, such as in an e-mail message, or on some other website.
	+ A form of server-side XSS.
- **Stored**
	+ Stored attacks are those where the injected script is permanently stored on the target servers, such as in a database, in a message forum, visitor log, comment field, etc. The victim then retrieves the malicious script from the server when it requests the stored information.
	+ A form of server-side XSS.

XSS attacks always execute in the browser.

The difference between Reflected/Stored XSS and DOM XSS is where the attack is added or injected into the application. With R/S XSS the attack is injected into the application during server-side processing of requests where untrusted input is dynamically added to HTML. For DOM XSS, the attack is injected into the application during runtime in the client directly.

Escaping of user supplied data must be handled correctly in the four standard contexts: HTML, HTML, attributes, URL, and CSS.

Encoding of CSS, URLs, HTML, HTML attributes, and JavaScript within each context must be handled correctly.

**Useful Links**

- https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)
- https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.md
- https://github.com/OWASP/CheatSheetSeries/blog/master/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.md

## Cross-Site Request Forgery (CSRF)

Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a
malicious web site, email, blog, instant message, or program causes a user’s web
browser to perform an unwanted action on a trusted site when the user is
authenticated.  A CSRF attack works because browser requests automatically
include any credentials associated with the site, such as the user's session
cookie, IP address, etc.  Therefore, if the user is authenticated to the site,
the site cannot distinguish between the forged or legitimate request sent by the
victim.

Note: The impact of a successful CSRF attack is limited to the capabilities
exposed by the vulnerable application.

Note: XSS is not necessary for CSRF to work.  However, any cross-site scripting
vulnerability can be used to defeat all CSRF mitigation techniques available in
the market today except mitigation techniques that involve user interaction.

Note: It is imperative that no XSS vulnerabilities are present to ensure that
CSRF defenses can't be circumvented.

**Useful Links**

- https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
- https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md
- https://seclab.stanford.edu/websec/csrf/csrf.pdf


## Tools

**Useful Links**

- http://w3af.org/
- https://oxdef.info/pages/csp-tester
