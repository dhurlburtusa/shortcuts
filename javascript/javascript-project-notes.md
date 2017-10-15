
# JavaScript Project Notes

The following are notes on common steps taking when creating and maintaining a
JavaScript project.


## Creating

* `mkdir my-project && cd my-project`
* `git flow init`<sup>†</sup>
  + Use all defaults except `v` for the version tag prefix.  
* Add a `package.json` file:
  + Do one of:
    - `yarn init`
    - `npm init`
    - Start from a [package.json template][package_json-template].
* Add a [.gitignore][gitignore-template] file.
* Add dependencies:
  + Do one of:
    - `yarn add $dependency`
    - `npm install --save $dependency`
* Add dev dependencies:
  + Do one of:
    - `yarn add --dev $dependency`
    - `yarn add -D $dependency`
    - `npm install --save-dev $dependency`


† On Windows, run command from git-bash.


[gitignore-template]: https://github.com/dhurlburtusa/shortcuts/blob/master/git/.gitignore.template
[package_json-template]: https://github.com/dhurlburtusa/shortcuts/blob/master/npm/package.template.json.md
