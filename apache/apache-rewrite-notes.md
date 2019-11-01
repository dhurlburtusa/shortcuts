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

