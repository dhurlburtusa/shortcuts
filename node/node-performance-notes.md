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
