# Rails Notes


## Installing

**Prerequisites**

Rails requires Ruby version 2.5.0 or later, [SQLite3], and [yarn].

**Installing SQLite3 on Windows**

I haven't found complete instructions on how to install SQLite3 on Windows that works with the `sqlite3` Ruby gem.

1) Goto https://www.sqlite.org/download.html
  a) From the "Source Code" section, download the `sqlite-amalgamation` zip file.
  b) From the "Precompiled Binaries for Windows" section
    i) Download one of the two `sqlite-dll` zip files based on your system's architecture.
    ii) Download the `sqlite-tools` zip file.
2) Create a destination directory for the contents of SQLite 3 zip files.
3) Upzip all the zip files.
4) Copy all the contents of each of the zip files to the destination directory.
5) Add this destination directory to your PATH.

As of Oct 11th, 2019, the destination directory should have the following files:
- shell.c
- sqlite3.c
- sqlite3.h
- sqlite3ext.h
- sqlite3.def
- sqlite3.dll
- sqldiff.exe
- sqlite3.exe
- sqlite3_analyzer.exe

Now that the .c and .h files are available to the `sqlite3` Ruby gem, it should be able to compile a version for itself to use. (I am not sure why it just doesn't use the DLL.)

```sh
# This may take a few minutes if it is the first time installing.
gem install rails
```

**Skipping Installation of Ruby Documentation**

When Ruby gems are installed, the documentation is generated too. This increases the time to complete installation of the gem and uses more disk space. To prevent the installation of the documentation but not have to remember to disable it everytime `gem install` is called, run the following:

```sh
echo "gem: --no-document" >> ~/.gemrc
```

**Installation**

```sh
gem install rails
```


## Uncategorized

**Generate New App**

```sh
rails new {app_name}
# E.g.
rails new blog
```

**Generate a Controller**

```sh
rails generate controller {Controller_name} {action_name}
# E.g.
rails generate controller Example index
```

**Get Information about the Rails App**

```sh
rails about
```

**Routes info During Development**

- http://localhost:3000/rails/info/routes
- `rails routes`


[sqlite3]: https://www.sqlite.org/
[yarn]: https://yarnpkg.com/
