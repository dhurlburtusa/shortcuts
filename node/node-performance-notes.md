# Node Performance Notes


## Misc

From https://nodejs.org/en/docs/guides/dont-block-the-event-loop/#how-careful-should-you-be:

- "Node uses the Google V8 engine for JavaScript, which is quite fast for many common operations. Exceptions to this rule are regexps and JSON operations."

From https://nodejs.org/en/docs/guides/dont-block-the-event-loop/#avoiding-vulnerable-regular-expressions:

- Avoiding vulnerable regular expressions:
  + A vulnerable regular expression is one on which your regular expression engine might take exponential time, exposing you to Regular Expression Denial of Service (REDOS) on "evil input".
  + Some rules of thumb to spotting a vulunerable RE:
    * Nested quantifiers like `(a+)*`.
    * OR's with overlapping clauses, like `(a|a)*`.
    * Using backreferences, like `(a.*) \1`.
    * Recommendation: use a non-re equivalent. E.g., when doing a simple string match, use `indexOf` instead.


## Anti-REDOS Strategies

There are some tools to check your regexps for safety, like

- [safe-regex]
- [rxxr2].

However, neither of these will catch _all_ vulnerable regexps.

Another approach is to use a different regexp engine. You could use the [node-re2] module, which uses Google's blazing-fast [RE2] regexp engine. But be warned, RE2 is not 100% compatible with Node's regexps, so check for regressions if you swap in the node-re2 module to handle your regexps. And particularly complicated regexps are not supported by node-re2.


[re2]: https://github.com/google/re2
[node-re2]: https://github.com/uhop/node-re2
[rxxr2]: http://www.cs.bham.ac.uk/~hxt/research/rxxr2/
[safe-regex]: https://github.com/substack/safe-regex
