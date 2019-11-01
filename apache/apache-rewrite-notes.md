# Apache Rewrite Notes


## RewriteRule

All `RewriteRule`s abide by the following format:

```
RewriteRule pattern substitution [flags]
```

- `pattern`
	+ Matches after `http(s)://your.domain.tld/`.

- `flags`
	+ `NC`
		* Makes rule case insensitive.
	+ `QSA`
		* Appends query string to `substitution`.

## RewriteCond

Rewrite rules are not necessarily always evaluated one by one without any limitations. The `RewriteCond` directive lets us add conditions to our rewrite rules to control when the rules will be processed. All `RewriteCond`s abide by the following format:

```
RewriteCond teststring condition [flags]
```

- `teststring`
	+ `%{REQUEST_FILENAME}`
- `condition`
	+ `-d`
	+ `-f`
	+ `!-d`
	+ `!-f`
