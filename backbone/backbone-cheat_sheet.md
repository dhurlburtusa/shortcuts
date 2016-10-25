# Backbone Cheat Sheet

## Dependencies

Backbone has two JavaScript library dependencies: [jQuery](https://jquery.com/) and [UnderscoreJS](http://underscorejs.org/). jQuery is not a hard dependency and [can be replaced](https://github.com/jashkenas/backbone/wiki/Using-Backbone-without-jQuery).

## Models

A Model manages an internal table of data attributes and triggers "change" events when any of its data is modified.
Models handle syncing data with a persistence layer — usually a REST API with a backing database.

```js
Backbone.Model.extend(properties, [classProperties]);
```

**Template**

```js
/**
 *
 */
MyModel = Backbone.Model.extend({

  /*
   * @type {Object|Function} defaults - The defaults hash (or function) can be used to specify the default attributes
   *   for your model.  When creating an instance of the model, any unspecified attributes will be set to their
   *   default value.
   */
  defaults: {
    attr1: 'default',
    attr2: 0,
    ...
  },

  defaults: function () {
    return {
      attr1: 'default',
      attr2: 0,
      attr3: new Date(),
      attr4: {},
      ...
    };
  },

  /*
   * @type {string} [idAttribute='id'] - Use if you're directly communicating with a backend (CouchDB, MongoDB) that uses a
   *   different unique key, you may set a Model's `idAttribute` to transparently map from that key to `id`.
   */
  idAttribute: "id",

  /*
   * @type {Function} constructor - The constructor for the model.  Set to override the default constructor inherited from
   * `Backbone.Model`.
   *
   * @param {Object} [attributes] The model attributes to be set.
   * @param {Object} [options] The model options.
   * @param {Backbone.Collection} [options.collection] A reference to the collection the model should belong to.  It will
   *   also be used to help compute the model's url.  It is not common to set this.  The `model.collection` property is
   *   normally created automatically when you first add a model to a collection.
   * @param {boolean} [options.parse] When `true`, the attributes will first be converted by parse before being set on
   *   the model.
   */
  constructor: function (attributes, options) {
    ...
    Backbone.Model.apply(this, arguments);
    ...
    // this.collection will be created if options.collection is set.
  },

  /*
   * @template
   * @type {Function} initialize - An initialization function.  This will be invoked when the model is created.
   */
  initialize: function () {
    ...
    Backbone.Model.prototype.initialize.apply(this, arguments);
    ...
  },

  /*
   * @template
   * @type {Function} parse - A function to parse/transform the response from the server.
   *
   * @param {Object} response - The raw response object.
   * @param {Object} options - Undocumented. TODO: Figure out what can be set.
   */
  parse: function (response, options) {
    return response.data;
  },

  /*
   * @template
   * @type {Function} validate - Called when `save` is called.  Called when `set` is called with the validate option set to
   *   `true`.
   * 
   * @param {Object} attributes - 
   * @param {Object} [options] - The options passed to `save` or `set`.
   */
  validate: function (attributes, options) {
    ...
  }

});
```
