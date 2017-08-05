# Gitflow Cheat Sheet

Gitflow is a collection of Git extensions to provide high-level repository
operations for Vincent Driessen's [branching model][br-model].

## Setup

The branching model uses two main branches: `master` and `develop`.  There are
several ways to create these branches in a repository.

### Steps

#### Vanilla

After initializing a repo by use `git init`, the `master` branch will exist.
However, there does not seem to be an _easy_ way to create the `develop` branch
without first making an initial commit.

```sh
# Initialize the Git repo:
$ git init

# Make a change and commit
$ touch README.md
$ git add .
$ git commit -m "Initial Commit"

# Create the develop branch from master and switch to it
$ git branch develop master
$ git checkout develop
# Or
$ git checkout -b develop master
```

#### Using git-flow

`git-flow` simplifies everything:

```sh
$ git flow init
```


## Feature Branches

**Naming Convention**

The default naming convention used by `git-flow` is `feature/$name`.

### Steps

#### Vanilla

**Creating**

```sh
$ git checkout -b feature/$name develop
```

**Implement Feature**

...

**Periodically Keep Up-to-date with `develop` Branch**

```sh
$ git merge --no-ff develop -m "Merge branch develop into feature/$name"
```

**When Feature is Ready to Release**

```sh
$ git checkout develop
$ git merge --no-ff feature/$name -m "Merge branch feature/$name into develop"
$ git branch -d feature/$name
$ git push origin develop
```


#### Using git-flow

**Creating**

```sh
$ git flow feature start $name
```

**Implement Feature**

...

**Periodically Keep Up-to-date with `develop` Branch**

```sh
$ git merge --no-ff develop -m "Merge branch develop into feature/$name"
```

**When Feature is Ready to Release**

```sh
$ git flow feature finish $name
$ git push origin develop
```


## Release Branches

It is a good idea to have your Continuous Integration server hooked to your
release branches to help ensure you only release code that passes all tests.

### Steps

#### Vanilla

**Creating**

```sh
$ git checkout -b release/#.#.# develop
```

**Update version Numbers**

```sh
...
$ git commit -m "Update Version"
$ git push origin release/#.#.#
```

**Fix any Bugs and Commit to Release Branch**

```sh
# Fix bugs
...
$ git commit -m "Fix ..."
$ git push origin release/#.#.#

# Merge fixes back to `develop` branch
$ git checkout develop
$ git merge --no-ff release/#.#.# -m "Merge branch release/#.#.# into develop"
$ git push origin develop
$ git checkout release/#.#.#
...
```

**Finish Release**

```sh
$ git checkout develop
$ git merge --no-ff release/#.#.# -m "Merge branch release/#.#.# into develop"
$ git push origin develop
$ git checkout master
$ git merge --no-ff release/#.#.# -m "Merge branch release/#.#.# into master"

# Tag Release
$ git tag -a "v#.#.#" -m "Release #.#.#"
$ git branch -d release/#.#.#
$ git push origin master
```

#### Using git-flow

**Creating**

```sh
$ git flow release start #.#.#
```

**Update version Numbers**

```sh
...
$ git commit -m "Update Version"
$ git push origin release/#.#.#
```

**Fix any Bugs and Commit to Release Branch**

```sh
# Fix bugs
...
$ git commit -m "Fix ..."
$ git push origin release/#.#.#

# Merge fixes back to `develop` branch
$ git checkout develop
$ git merge --no-ff release/#.#.# -m "Merge branch release/#.#.# into develop"
$ git push origin develop
$ git checkout release/#.#.#
...
```

**Finish Release**

```sh
$ git flow release finish #.#.#
$ git push origin master
```


## Hotfix Branches

It is a good idea to have your Continuous Integration server hooked to your
hotfix branches to help ensure you only release code that passes all tests.

### Steps

#### Vanilla

**Creating**

```sh
$ git checkout -b hotfix/#.#.# master
```

**Update version Numbers**

```sh
...
$ git commit -m "Update Version"
$ git push origin hotfix/#.#.#
```

**Fix any Bugs, Add/Update Tests, and Commit to Hotfix Branch**

```sh
# Fix bugs and add/update tests
...
$ git commit -m "Fix ..."
$ git push origin hotfix/#.#.#
```

**Finish Hotfix**

```sh
$ git checkout develop
$ git merge --no-ff hotfix/#.#.# -m "Merge branch hotfix/#.#.# into develop"
$ git push origin develop
$ git checkout master
$ git merge --no-ff hotfix/#.#.# -m "Merge branch hotfix/#.#.# into master"

# Tag Hotfix
$ git tag -a "v#.#.#" -m "Hotfix #.#.#"
$ git branch -d hotfix/#.#.#
$ git push origin master
```

#### Using git-flow

**Creating**

```sh
$ git flow hotfix start #.#.#
```

**Update version Numbers**

```sh
...
$ git commit -m "Update Version"
$ git push origin hotfix/#.#.#
```

**Fix any Bugs, Add/Update Tests, and Commit to Hotfix Branch**

```sh
# Fix bugs and add/update tests
...
$ git commit -m "Fix ..."
$ git push origin hotfix/#.#.#
```

**Finish Hotfix**

```sh
$ git flow hotfix finish #.#.#
$ git push origin master
```


[br-model]: http://nvie.com/git-model
