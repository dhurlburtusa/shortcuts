# Ionic Notes

Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular, React, and Vue.

Ionic Framework focuses on the frontend UX and UI interaction of an app — UI controls, interactions, gestures, animations.

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


## Installing Ionic Tooling

```sh
npm install -g cordova-res native-run
```


## Creating an App

```sh
ionic start <app-name> <starter-name>
# Where <starter-name> is: blank, sidemenu, or tabs
```

See https://ionicframework.com/docs/developing/starting for details.


## Running the App

```sh
cd <app-dir>
ionic serve
```


## Ionic + Angular

```sh
npm install @ionic/angular@latest --save
```


## Ionic + React

```sh
npm install @ionic/react
npm install @ionic/react-router
```

**CSS**

See https://ionicframework.com/docs/intro/cdn#css to include the CSS in a React project.


## Adding Native Support

```sh
cd <app-dir>
ionic cap add android
ionic cap add ios
```

Note: The project needs to be built first (i.e., `npm run build`).


## Opening Native IDEs

```sh
cd <app-dir>
ionic cap open android
ionic cap open ios
```


## Adaptive Styling

See https://ionicframework.com/docs/core-concepts/fundamentals#adaptive-styling.
