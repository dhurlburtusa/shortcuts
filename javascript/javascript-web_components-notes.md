# JavaScript Web Components Notes

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code. Put another way, web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Web components are based on four main specifications:

- Custom Elements
- Shadow DOM
- ES Modules
- HTML Template

See https://developer.mozilla.org/en-US/docs/Web/Web_Components for details.


## Custom Elements

There are two types of custom elements:

- **Autonomous custom elements** are standalone — they don't inherit from standard HTML elements. You use these on a page by literally writing them out as an HTML element. For example `<popup-info>`, or `document.createElement("popup-info")`.
- **Customized built-in elements** inherit from basic HTML elements. To create one of these, you have to specify which element they extend, and they are used by writing out the basic element but specifying the name of the custom element in the `is` attribute (or property). For example `<p is="word-count">`, or `document.createElement("p", { is: "word-count" })`.

### Lifecycle Callbacks

You can define several different callbacks inside a custom element's class definition, which fire at different points in the element's lifecycle:

- **connectedCallback**: Invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.

  Note: `connectedCallback` may be called once your element is no longer connected, use `Node.isConnected` to make sure.

- **disconnectedCallback**: Invoked each time the custom element is disconnected from the document's DOM.

- **adoptedCallback**: Invoked each time the custom element is moved to a new document.

- **attributeChangedCallback**: Invoked each time one of the custom element's attributes is added, removed, or changed. Which attributes to notice change for is specified in a static get `observedAttributes` method.

