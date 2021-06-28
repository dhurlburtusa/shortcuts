# Ionic Notes

Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular, React, and Vue.

Ionic Framework focuses on the frontend UX and UI interaction of an app — UI controls, interactions, gestures, animations.

**One codebase, running everywhere**

Ionic is the only mobile app stack that enables web developers to build apps for all major app stores and the mobile web from a single codebase. And with [Adaptive Styling](https://ionicframework.com/docs/theming/platform-styles), Ionic apps look and feel at home on every device.

**UI Components**

Ionic Framework is a library of UI Components, which are reusable elements that serve as the building blocks for an application. Ionic Components are built with web standards using HTML, CSS, and JavaScript.

**Adaptive Styling**

Adaptive Styling is a built-in feature of Ionic Framework which allows app developers to use the same code base for multiple platforms. Every Ionic component adapts its look to the platform on which the app is running on.

See https://ionicframework.com/docs/core-concepts/fundamentals#adaptive-styling.

**Theming**

At the core, Ionic Framework is built using CSS which allows us to take advantage of the flexibility that CSS properties (variables) provide.

See https://ionicframework.com/docs/theming.

**Navigation**

Traditional web apps use a linear history, meaning that the user navigates forward to a page and can hit the back button to navigate back.

In contrast, mobile apps often utilize parallel, "non-linear" navigation. For example, a tabbed interface can have separate navigation stacks for each tab, making sure the user never loses their place as they navigate and switch between tabs.

Ionic apps embrace this mobile navigation approach, supporting parallel navigation histories that can also be nested, all while maintaining the familiar browser-style navigation concepts web developers are familiar with.

**Native Access**

One of the most common use cases for Ionic is to build an app which can be downloaded from both the App Store and Play Store. Both iOS and Android software development kits (SDKs) provide Web Views which render any Ionic app, while still allowing for full Native SDK access.

See https://ionicframework.com/docs/core-concepts/webview.


## Environment Setup

Node and npm are the only requirements.

**Terminal**

- Recommends using the built-in terminals.
  + For Windows, Command Prompt and PowerShell are supported. WSL is known to work with Ionic, but may not be supported.
  + For macOS, the built-in Terminal app is supported.
- Git Bash (from git-scm.com) does not support TTY interactivity and is not supported by Ionic.


## Installing Ionic

Ionic apps are created and developed primarily through the Ionic command-line utility.

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

The majority of Ionic app development can be spent right in the browser using the ionic serve command.

```sh
cd <app-dir>
ionic serve
```

There are a number of other ways to run an app, it's recommended to start with this workflow. To develop and test apps on devices and emulators, see the [Running an App Guide](https://ionicframework.com/docs/developing/previewing).


## Ionic + Angular

```sh
npm install @ionic/angular@latest --save
```


## Ionic + React

```sh
npm install @ionic/react
npm install @ionic/react-router
```

**Creating an App**

```sh
ionic start <app-name> <template-name> --type react --capacitor --no-git
# Where <template-name> is: blank, sidemenu, or tabs
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
