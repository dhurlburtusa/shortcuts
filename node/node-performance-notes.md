# Node Performance Notes


## Misc

From https://nodejs.org/en/docs/guides/dont-block-the-event-loop/#conclusion:

Node has two types of threads: one Event Loop and k Workers. The Event Loop is responsible for JavaScript callbacks and non-blocking I/O, and a Worker executes tasks corresponding to C++ code that completes an asynchronous request, including blocking I/O and CPU-intensive work. Both types of threads work on no more than one activity at a time. If any callback or task takes a long time, the thread running it becomes blocked. If your application makes blocking callbacks or tasks, this can lead to degraded throughput (clients/second) at best, and complete denial of service at worst.

To write a high-throughput, more DoS-proof web server, you must ensure that on benign and on malicious input, neither your Event Loop nor your Workers will block.

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

From https://nodejs.org/en/docs/guides/dont-block-the-event-loop/#blocking-the-event-loop-node-core-modules:

- In a server, you should not use the following synchronous APIs from these modules:
  + Encryption:
    * `crypto.randomBytes` (synchronous version)
    * `crypto.randomFillSync`
    * `crypto.pbkdf2Sync`
    * You should also be careful about providing large input to the encryption and decryption routines.
  + Compression:
    * `zlib.inflateSync`
    * `zlib.deflateSync`
  + File system:
    * Do not use the synchronous file system APIs. For example, if the file you access is in a distributed file system like NFS, access times can vary widely.
  + Child process:
    * `child_process.spawnSync`
    * `child_process.execSync`
    * `child_process.execFileSync`

From https://nodejs.org/en/docs/guides/dont-block-the-event-loop/#offloading-conclusions:

- "Node excels for I/O-bound work, but for expensive computation it might not be the best option."

From https://nodejs.org/en/docs/guides/dont-block-the-event-loop/#avoiding-task-partitioning:

- "Routing shorter Tasks and longer Tasks to separate Worker Pools is another way to minimize Task time variation. The downside of this approach is that Workers in all of these Worker Pools will incur space and time overheads and will compete with each other for CPU time. Remember that each CPU-bound Task makes progress only while it is scheduled. As a result, you should only consider this approach after careful analysis."


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
