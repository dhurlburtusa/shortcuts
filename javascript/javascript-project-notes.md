
# JavaScript Project Notes

The following are notes on common steps taking when creating and maintaining a
JavaScript project.


## Creating

* `mkdir my-project && cd my-project`
* `git flow init`<sup>†</sup>
  + Use all defaults except `v` for the version tag prefix.  
* `yarn init` or `npm init`<sup>‡</sup>
* Add a [.gitignore][gitignore-template] file.
* Add dependencies:
  + `yarn add $dependency`
  + `npm install --save $dependency`
* Add dev dependencies:
  + `yarn add --dev $dependency` or `yarn add -D $dependency`
  + `npm install --save-dev $dependency`


† On Windows, run command from git-bash.

‡ On Windows, running command from git-bash does NOT work well.  Running with
  Cmd or Powershell has worked well.  VS Code can be configured to use Cmd or
  Powershell.
 
[gitignore-template]: https://github.com/dhurlburtusa/shortcuts/blob/master/git/.gitignore.template
