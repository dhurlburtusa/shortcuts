# Web Development Security Notes

When doing web development, security should be top priority.  Here are listed
several security issues to keep in mind when developing.


## SQL Injection

**Useful Links**

- https://www.owasp.org/index.php/SQL_Injection
- https://www.owasp.org/index.php/Blind_SQL_Injection


## Cross-Site Scripting (XSS)

**Useful Links**

- https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)
- https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.md


## Cross-Site Request Forgery (CSRF)

Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a
malicious web site, email, blog, instant message, or program causes a user’s web
browser to perform an unwanted action on a trusted site when the user is
authenticated.  A CSRF attack works because browser requests automatically
include any credentials associated with the site, such as the user's session
cookie, IP address, etc.  Therefore, if the user is authenticated to the site,
the site cannot distinguish between the forged or legitimate request sent by the
victim.

Note: XSS is not necessary for CSRF to work.  However, any cross-site scripting
vulnerability can be used to defeat all CSRF mitigation techniques available in
the market today except mitigation techniques that involve user interaction.

Note: It is imperative that no XSS vulnerabilities are present to ensure that
CSRF defenses can't be circumvented.

**Useful Links**

- https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
- https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md
- https://seclab.stanford.edu/websec/csrf/csrf.pdf
