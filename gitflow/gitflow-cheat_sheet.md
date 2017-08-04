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


[br-model]: http://nvie.com/git-model
