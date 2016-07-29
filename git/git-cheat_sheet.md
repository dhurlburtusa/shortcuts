# Git Cheatsheet

See [git documenation](https://git-scm.com/docs/git).

See [Appendix A: Git Quick Reference](https://git-scm.com/docs/user-manual.html#git-quick-start).


## Terminology

<dl>
  <dt><a href="https://git-scm.com/docs/gitglossary#def_commit-ish">commit-ish</a></dt>
  <dd>
    A commit object or an object that can be recursively dereferenced to a commit object.  The following are all
    commit-ishes: a commit object, a tag object that points to a commit object, a tag object that points to a tag
    object that points to a commit object, etc.
  </dd>

  <dt><a href="https://git-scm.com/docs/gitglossary#def_head">head</a></dt>
  <dd>
    A named reference to the commit at the tip of a branch.  Heads are stored in a file in <code>$GIT_DIR/refs/heads/</code>
    directory, except when using packed refs. (See <a href="https://git-scm.com/docs/git-pack-refs">git-pack-refs[1]</a>.)
  </dd>

  <dt><a href="https://git-scm.com/docs/gitglossary#def_HEAD">HEAD</a></dt>
  <dd>
    The current branch.  In more detail: Your working tree is normally derived from the state of the tree referred to
    by HEAD.  HEAD is a reference to one of the heads in your repository, except when using a detached HEAD, in which
    case it directly references an arbitrary commit.
  </dd>

  <dt><a href="https://git-scm.com/docs/gitglossary#def_tag">tag</a></dt>
  <dd>
    In short, a reference to a particular commit.  A ref under <code>refs/tags/</code> namespace that points to an object
    of an arbitrary type (typically a tag points to either a tag or a commit object).  In contrast to a head, a tag is not
    updated by the commit command.  A Git tag has nothing to do with a Lisp tag (which would be called an object type in Git's
    context).  A tag is most typically used to mark a particular point in the commit ancestry chain.
  </dd>

  <dt><a href="https://git-scm.com/docs/gitglossary#def_tree-ish">tree-ish</a></dt>
  <dd>
    A tree object or an object that can be recursively dereferenced to a tree object.  Dereferencing a commit object
    yields the tree object corresponding to the revision's top directory.  The following are all tree-ishes:
    a commit-ish, a tree object, a tag object that points to a tree object, a tag object that points to a tag object
    that points to a tree object, etc.
  </dd>
</dl>


## Initialization

### Starting from Local Computer

```sh
$ cd /path/to/my/new/codebase
$ git init
$ git add .
$ git commit
```

Eventually, you may want to push the code to a remote repository such as Github.  See the [remote](#remote) section.

### Starting from Github

To start a project from Github:

1. Go to Github (assumes you already have an account)
2. Navigate to the Repositories tab (e.g., https://github.com/dhurlburtusa?tab=repositories)
3. Click New button.
4. Complete form and click Create repository button.
5. Clone the repository.


## Add

    $ git add file1 file2 file3


## Clone

Clone an existing repository into a new directory.  Creates remote-tracking branches for each branch in the cloned
repository (visible using `git branch -r`).  Creates and checks out an initial branch that is forked from the cloned
repository's currently active branch.

The existing repository becomes known as the origin repository, tracking repository, or the remote repository.  It will
be a remote repo tagged as `origin`.

There are several methods that can be used to clone a repository.

### Univeral

See https://git-scm.com/docs/git-clone for details.

```sh
git clone <repository>
```

For example:

```sh
$ cd /path/to/store/clone
$ git clone git://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git
```

#### Repository URL

The URL to the repository.  It is used by the clone command.  See [GIT URLs](https://git-scm.com/docs/git-clone#_git_urls_a_id_urls_a) for more details.

##### Github

To find the repository URL for a Github project, go to the main page of the repository.  Click the "Clone or download" button.
In the dropdown you will be able to get the https version of the URL or the ssh version of the URL.

### Github Desktop

On Windows, you can clone a github repository by going to the main page of the repository.  Click the "Clone or download"
button.  In the dropdown, select "Open in Desktop".  There may be a brief pause while the application is being started.  Once
started, you will be prompted to select a folder where you want to clone the repository.

(This assumes you already have Github Desktop already installed.)


## Diff

See what is about to be committed.

```sh
$ git diff --staged
```


## Rename

```sh
git mv <source>... <destination>
```


## Status

Get a brief summary.

```sh
$ git status
```


## Commit

```sh
$ git commit
```


## Branches

List branches:

```sh
$ git branch
```

Create branch:

```sh
$ git branch <new-branch-name>
```

Switch branches:

```sh
$ git checkout <branch-name>
```

Deleting a branch that's already been merged:

```sh
$ git branch -d <branch-name>
```


Deleting a branch regardless of its merge status:

```sh
$ git branch -D <branch-name>
```

<!--
### How to Start a New Branch:

The following shows how to start a new branch while maintaining the existing working copy on its current branch.
This allows you to have a working copy per branch instead of a single working copy where you have to switch between
branches.

    $ cd /path/to/repo/to/be/cloned/on/master/branch
    $ git clone --local . path/to/clone
    $ cd path/to/clone
    $ git branch <new-branch>
    $ git co <new-branch>
-->

## Merging

1. Get on the branch you want to merge into (e.g. `git checkout <branch-name>`).
2. `git merge <incoming-branch>`

It is [recommened](http://nvie.com/posts/a-successful-git-branching-model/) that the `--no-ff` option be used.

## History

```sh
$ git log
```

Use `gitk` for a GUI version


## Remote

Allows to manage tracked repositories.  A Github repository is usually a tracked repository.

### List Existing Remotes

```sh
$ git remote --verbose
```

### Add a Remote

```sh
$ git remote add <name> <url>
```

Here is an example.  It is common to use `origin` for the name of the remote that represents the central repository.

```sh
$ git remote add origin https://github.com/dhurlburtusa/qc-core.git
```


## Tags

List tags:

```sh
$ git tag -l
```

Create lightweight tag:

```sh
$ git tag <tagname>
```

Create annotated tag with a message:

```sh
$ git tag -a [-m <msg>] <tagname>
```


## Push

Allows to update remote refs along with associated objects.  See https://git-scm.com/docs/git-push for details.

```sh
$ git push -u <upstream-name> <branch-name>
```

For example:

```sh
$ git push -u origin master
```


## GUI

Use one of:

* `git gui`           for full GUI.
* `gitk`              for repo browser.
* `git citool`        for one-time commit.


## Ignore/Exclude

See https://git-scm.com/docs/gitignore for details.

* ~/.config/git/ignore
* .$GIT_DIR/info/exclude
* .gitignore
* sub-folder/.gitignore

To stop tracking a file that is currently tracked, use `git rm --cached`.

### Pattern Format

    # This is a comment.
    # Trailing spaces are ignored unless they are quoted with backslash.
    # The "!" prefix negates pattern.

    # Match "foo.html", "foo/bar.html", and so on.
    *.html

    # Match "foo/bar.html", "foo/qux.html", and so on.
    foo/*.html

    # Match "foo.html", "bar.html", and so on, but not "foo/bar.html".
    /*.html

    #Match "foo" file, symlink, or directory.
    foo

    # Match directory "foo" and paths underneath it.
    foo/

    # Match file or directory "foo" anywhere. Same as pattern "foo".
    **/foo

    # Match everything inside relative to .gitignore file.
    abc/**

    # Match "a/b", "a/x/b", "a/x/y/b", and so on.
    a/**/b


## Attributes

* $GIT_DIR/info/attributes
* .gitattributes

<!--
## Hooks

* $GIT_DIR/hooks
-->

## Config

See https://git-scm.com/docs/git-config for details.

There are several location options: --system, --global, --local, or --file <filename>.

The system location is OS dependent.  On *nix systems, it is in `$(prefix)/etc/gitconfig`.  On Windows, it depends.
In my version of Windows (8.1), it is at `C:\Users\danny\AppData\Local\GitHub\PortableGit_0123456789abcdefg\mingw32\etc\gitconfig`.
This leads me to believe that it is different for each user.  It also depends on the origin of git.  I got git
through the GitHub Desktop tool.

The global location is user specific.  That is, each user has their own global config location.  This location by
default is `~/.gitconfig`.

The local location is repository specific.  That is, each repo has its own local config location.  This location by
default is `.git/config`.

The values from all the above locations can be overridden on the command line using the `-c` options.

```sh
git -c foo.bar=qux
```

Some Examples:

    #
    # This is the config file, and
    # a '#' or ';' character indicates
    # a comment
    #
    ; core variables
    [core]
      ; Don't trust file modes
      filemode = false
