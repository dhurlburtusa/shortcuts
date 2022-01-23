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


## Shadow DOM

The Shadow DOM API provides a way to attach a hidden separated DOM to an element. Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which can be attached to any elements you want, in the same way as the normal DOM.

### Terminology

- **Shadow host**: The regular DOM node that the shadow DOM is attached to.
- **Shadow tree**: The DOM tree inside the shadow DOM.
- **Shadow boundary**: The place where the shadow DOM ends and the regular DOM begins.
- **Shadow root**: The root node of the shadow tree.

You can affect the nodes in the shadow DOM in exactly the same way as non-shadow nodes — for example appending children or setting attributes, styling individual nodes using element.style.foo, or adding style to the entire shadow DOM tree inside a `<style>` element. The difference is that none of the code inside a shadow DOM can affect anything outside it, allowing for handy encapsulation.

The shadow DOM spec has made it so that you are allowed to actually manipulate the shadow DOM of your own custom elements.
