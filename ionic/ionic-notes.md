# Ionic Notes

Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular, React, and Vue.


**One codebase, running everywhere**

Ionic is the only mobile app stack that enables web developers to build apps for all major app stores and the mobile web from a single codebase. And with [Adaptive Styling](https://ionicframework.com/docs/theming/platform-styles), Ionic apps look and feel at home on every device.


## Environment Setup

Node and npm are the only requirements.

**Terminal**

- Recommends using the built-in terminals.
- Git Bash (from git-scm.com) does not support TTY interactivity and is not supported by Ionic.


## Installing Ionic

```sh
npm uninstall -g ionic
npm install -g @ionic/cli
```


## Creating an App

```sh
ionic start <app-name> <starter-name>
# Where <starter-name> is: blank, tabs, or sidemenu
```


## Running the App

```sh
cd <app-dir>
ionic serve
```


## Ionic + Angular

```sh
npm install @ionic/angular@latest --save
```
