# Apache Rewrite Notes

See http://httpd.apache.org/docs/current/mod/mod_rewrite.html for details.

## RewriteRule

All `RewriteRule`s abide by the following format:

```
RewriteRule pattern substitution [flags]
```

- `pattern`
	+ Matches after `http(s)://your.domain.tld/`.

- `flags`
	+ `F`
		* Returns a 403 FORBIDDEN response to the client browser.
	+ `G`
		* Returns a 410 GONE response to the client browser.
	+ `L`
		* Stop the rewriting process immediately and don't apply any more rules.
	+ `N`
		* Re-run the rewriting process, starting again with the first rule, using the result of the ruleset so far as a starting point.
	+ `NC`
		* Makes the pattern comparison case-insensitive.
	+ `NE`
		* Prevent mod_rewrite from applying hexcode escaping of special characters in the result of the rewrite.
	+ `QSA`
		* Appends query string to `substitution`.
	+ `QSD`
		* Discard any query string attached to the incoming URI.
	+ `QSL`
		* Interpret the last (right-most) question mark as the query string delimiter, instead of the first (left-most) as normally used. Available in 2.4.19 and later.
	+ `R[=code]`
		* Forces an external redirect, optionally with the specified HTTP status code.

## RewriteCond

Rewrite rules are not necessarily always evaluated one by one without any limitations. The `RewriteCond` directive lets us add conditions to our rewrite rules to control when the rules will be processed. All `RewriteCond`s abide by the following format:

```
RewriteCond teststring condition [flags]
```

- `teststring`
	+ `%{REMOTE_ADDR}`
	+ `%{REQUEST_FILENAME}`
	+ `%{REQUEST_METHOD}`
	+ `%{REQUEST_SCHEME}`
	+ `%{REQUEST_URI}`
	+ `%{DOCUMENT_ROOT}`
	+ `%{PATH_INFO}`
	+ `%{QUERY_STRING}`
	+ `%{HTTP_ACCEPT}`
	+ `%{HTTP_COOKIE}`
	+ `%{HTTP_HOST}`
	+ `%{HTTP_REFERER}`
	+ `%{HTTP_USER_AGENT}`
	+ `%{SERVER_ADDR}`
	+ `%{SERVER_NAME}`
- `condition`
	+ `-d`
	+ `-f`
	+ `!-d`
	+ `!-f`
