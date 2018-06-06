# Web Development Checklist


## Project Conventions

There are several things a developer should be aware of before working on a
project.  If they are not aware of these, then the decisions they make may go
against the grain.

* Browser Support
* SEO requirements
* Accessibility
* Internationalization/Localization
* Coding standards
  + Conventions
    - ESlint
    - Prettier
  + CSS strategy
    - CSS Modules
    - Global CSS
    - Pre-processors (Sass, Less)
    - Post CSS
    - Organization
      * Media query choices.
      * x-browser rules location(s): separate file, inline, other?
    - Naming convention: Bem, Suit, SMACSS, other?
      * See https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849
      * See http://thesassway.com/advanced/modular-css-naming-conventions
      * See http://getbem.com/naming/
      * See https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md
      * JavaScript hook CSS classes
    - Font-Size strategy:
      - Absolute such as `px`s.
      - Parent element relative such as `em`s.
      - Root relative such as `rem`s.  See
        https://snook.ca/archives/html_and_css/font-size-with-rem.
    - When !important is allowed?
      * For general state (aka utility) classes such as `hidden`: `display: none
        !important`.
      * To override third-party styles when they used "dumb" selectors that you don't
        want to repeat.
      * To override inlined styles you have no control over.
      * See
        https://www.smashingmagazine.com/2010/11/the-important-css-declaration-how-and-when-to-use-it/
      * See https://css-tricks.com/when-using-important-is-the-right-choice/
  + Etc
* Development environment dependencies/requirements
