# Bundler Notes

Bundler manages an application's dependencies through its entire life across many machines systematically and repeatably.


## Commands

**init**

`bundle init` generates a Gemfile in the current working directory.

```
bundle init [--gemspec=FILE]
```


## Gemfile

A Ruby file with a format for describing gem dependencies for Ruby programs. It is evaluated in a context which makes available a number of methods used to describe the gem requirements.

**source**

Used to declare a Rubygems repository to search for gems in.

```ruby
source {repo_url}
# E.g.,
source "https://rubygems.org"
```

**ruby**

Used to declare a specific Ruby version, patch-level, engine, and/or engine version.

```ruby
ruby {version}[, :patchlevel => {patchlevel}][, :engine => {engine}, :engine_version => {engine_version}]
# E.g.,
ruby "2.0.0"
```

**gem**

Used to declare gem requirements.

```ruby
gem {name}[, {version_spec}]*[, :require => {require}][, :group => {group}][, :platforms => {platforms}][, :source => {source}]
gem {name}[, {version_spec}]*[, :require => {require}][, :group => {group}][, :platforms => {platforms}][, :git => {git}][, :branch => {branch} | :tag => {tag} | :ref => {ref}][, :submodules => true]
```

See https://bundler.io/man/gemfile.5.html for details.
