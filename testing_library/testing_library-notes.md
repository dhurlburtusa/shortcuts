# Testing Library Notes

The `@testing-library` family of packages helps you test UI components in a user-centric way.

> The more your tests resemble the way your software is used, the more confidence they can give you.


## Packages

`@testing-library` is a family of packages. The core library, DOM Testing Library, is a light-weight solution for testing web pages by querying and interacting with DOM nodes. The core library has been wrapped to provide ergonomic APIs for several frameworks, including React, Angular, and Vue.

- [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Native Testing Library](https://testing-library.com/docs/native-testing-library/intro)
- [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro)
- [Puppeteer Testing Library](https://testing-library.com/docs/pptr-testing-library/intro)
- [Testcafe Testing Library](https://testing-library.com/docs/testcafe-testing-library/intro)


## What This Library is Not

1. A test runner or framework.
1. Specific to a testing framework.

`DOM Testing Library` works with any environment that provides DOM APIs, such as Jest, Mocha + JSDOM, or a real browser.


## DOM Testing Library

The `DOM Testing Library` is a very light-weight solution for testing DOM nodes (whether simulated with JSDOM as provided by default with Jest or in the browser). The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page.
