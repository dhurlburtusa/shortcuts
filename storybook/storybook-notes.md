# Storybook Notes

Storybook is a UI development environment and playground for UI components.  The
tool enables users to create components independently and showcase components
interactively in an isolated development environment.

Storybook runs outside of the main app so users can develop UI components in
isolation without worrying about app specific dependencies and requirements.

Storybook also supports a lot of addons and comes with a flexible API to
customize Storybook as desired. A Static version of Storybook can also be built
and deployed to an HTTP server.

Storybook supports many different frontend view layers with more coming!  React,
Vue, Angular, Mithril, Marko, HTML, Svelte, Meteor, and Ember are currently
supported.


## Writing Stories

A Storybook is a collection of stories. Each story represents a single visual
state of a component.

> Technically, a story is a function that returns something that can be rendered
> to screen.
