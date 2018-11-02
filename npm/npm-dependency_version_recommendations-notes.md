# NPM Dependency Version Recommendations Notes

By default, running `npm install` will update the `dependencies` section in the
NPM manifest (`package.json`) using NPM's [default semver range][caret-ranges]
(caret-ranges) operator (`^`) which basically means to only allow a
non-breaking-change version greater than or equal to specified version. The
same version range operator is also used when the flag `-D` (`--save-dev`) is
included without also including `--no-save` or `-E` (`--save-exact`).

**Recommendations**

Because the dependencies under `dependencies` are needed when your package is
used and your code is not depending on a feature that was released in a later
minor update (otherwise the declared minor version would be greater), I
recommend using [tilde-ranges] of the form `~1.2` or `~1.2.3` instead of
caret-ranges. The point being: use a version range that only allows the latest
patch version. If your package starts depending on a new feature introduced in
a minor release, then simply update the minor version appropriately.

Because the dependencies under `devDependencies` are only needed during the
development of your package, the default of caret-ranges is acceptable. However,
for the same reason mentioned above, using tilde-ranges would also be
acceptable.

An exact version should be avoid in most cases. Usually, you will want to at
least allow for patch updates. There may be exceptions. For example, if your
code depends on the bug/issue addressed in a patch, then using an exact
version without updating the code would make sense.


[caret-ranges]: https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004
[tilde-ranges]: https://docs.npmjs.com/misc/semver#tilde-ranges-123-12-1
