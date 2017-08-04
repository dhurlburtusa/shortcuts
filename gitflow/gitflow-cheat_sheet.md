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


[br-model]: http://nvie.com/git-model
