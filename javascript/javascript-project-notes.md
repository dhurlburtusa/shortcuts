# JavaScript Project Notes

The following are notes on common steps taking when creating and maintaining a
JavaScript project.


## Creating

* `mkdir my-project && cd my-project`
* `git flow init`
* `yarn init` or `npm init`
* Add a [.gitignore][gitignore-template] file.
* Add dependencies:
  + `yarn add $dependency`
  + `npm install --save $dependency`
* Add dev dependencies:
  + `yarn add --dev $dependency` or `yarn add -D $dependency`
  + `npm install --save-dev $dependency`


[gitignore-template]: https://github.com/dhurlburtusa/shortcuts/blob/master/git/.gitignore.template
