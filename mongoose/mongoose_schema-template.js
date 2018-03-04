import mongoose, { Schema } from 'mongoose';


const Mixed = Schema.Types.Mixed;
const ObjectId = Schema.Types.ObjectId;

// See http://mongoosejs.com/docs/guide.html,
// http://mongoosejs.com/docs/api.html#Schema, and
// http://mongoosejs.com/docs/schematypes.html for more
// information.
//
// **Error Message Templates**
//
// May contain placeholders in the form of {FOO}.  Known acceptable
// placeholders: MAX, MAXLENGTH, MIN, MINLENGTH, PATH, TYPE, VALUE
// possible placeholder: REASON
const mySchema = new Schema(
  {
    anAliasField: {
      type: ...,
      alias: '...',
      ...
    },
    aField: {
      type: Array | Boolean | Buffer | Date | Mixed | Number | ObjectId | String,
      alias: ...,
      default: ...,
      get: ...,
      required: ...,
      select: ...,
      set: ...,
      validate: ...,
      ...
    },
    aDateField: {
      type: Number,
      min: ...,
      max: ...,
    },
    aNumberField: {
      type: Number,
      min: ...,
      max: ...,
    },
    aStringField: {
      type: String,
      enum: ['A', 'Set', 'of', 'Valid', 'Values'],
      enum: {
        values: ['A', 'Set', 'of', 'Valid', 'Values'],
        message: 'An error message template.',
      },
      lowercase: true | false,
      maxlength: Number,
      maxlength: [Number, 'An error message template.'],
      match: /^\d{3}$/i,
      match: [/^\d{3}$/i, 'An error message template.'],
      minlength: Number,
      minlength: [Number, 'An error message template.'],
      trim: true | false,
      uppercase: true | false,
    },
    aFieldWithADefaultValue: {
      type: ...,
      default: ...,
      ...
    },
    anotherFieldWithADefaultValue: {
      type: ...,
      default: function () {
        return ...;
      },
      ...
    },
    yetAnotherFieldWithADefaultValue: {
      type: ...,
      default: Date.now,
      ...
    },
    anIndexedField: {
      type: ...,
      index: true | false | 'hashed' | '2d' | { unique: true | false, ... } | { ... },
      ...
    },
    aRequiredField: {
      type: ...,
      required: true | false | [boolean, 'An error message template.'],
      ...
    },
    anotherRequiredField: {
      type: ...,
      required: 'An error message template.',
      ...
    },
    yetAnotherRequiredField: {
      type: ...,
      required: function () {
        ...
        return true | false | [boolean, 'An error message template.'];
      },
      ...
    },
    aSparseField: {
      type: ...,
      sparse: true | false,
      ...
    },
    aTextField: {
      type: ...,
      text: true | false,
      ...
    },
    aUniqueField: {
      type: ...,
      unique: true | false,
      ...
    },
    aValidatedField: {
      type: ...,
      validate: function (val) {
        ...
        return true | false;
      },
      ...
    },
    anotherValidatedField: {
      type: ...,
      validate: [
        function (val) {
          ...
          return true | false;
        },
        'An error message template.'
      ],
      ...
    },
    aFieldWithMultipleValidations: {
      type: ...,
      validate: [
        {
          validator: function (val) {
            ...
          },
          msg: '...',
        },
        {
          ...
        }
      ],
    },
  },
  // Optional options:
  {
    // Overrides the collection name  Mongoose produces by default from the model name.
    collection: 'my-models',
    timestamps: true,
    // Use field names different than the defaults.
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    toJSON: {
      depopulate: true | false,
      getters: true | false,
      minimize: true | false,
      transform: function (doc, ret, opts) {
        ...
        return ...;
      },
      versionKey: true | false,
      virtuals: true | false,
    },
    toObject: {
      depopulate: true | false,
      getters: true | false,
      minimize: true | false,
      transform: function (doc, ret, opts) {
        ...
        return ...;
      },
      versionKey: true | false,
      virtuals: true | false,
    },
    ...
  }
);

mySchema.index(
  {
    [...]: 1 | -1,
  },
  {
    ...
  }
);

// Add instance methods to models.

mySchema.method('...', function (...) {
  ...
});

mySchema.method(
  {
    [...]: function (...) {
    ...
    },
    ...
  }
);

// Add Middleware Pre/Post Hooks:
// See http://mongoosejs.com/docs/middleware.html for details.

// **Document Middleware**
//
// Document middleware works on these methods: `init`, `remove`, `save`, and
// `validate`.
//
// Note: `validate` hooks are run before any `save` hooks.
// Note: `this` refers to the document.
// 
// There are two types of pre hooks, serial and parallel.
//
// Call `next` or `done` with an argument of type `Error` to interrupt the flow.
//
// Serial
mySchema.pre('...', function (next) {
  ...
  next([Error]);
});
// Parallel
mySchema.pre('...', true, function (next, done) {
  ...
  next(); // Kicks off the next middleware in parallel.
  ...
  done();
});

// Synchronous
mySchema.post('...', function (doc) { ... });
// Asynchronous
mySchema.post('...', function (doc, next) {
  ...
  next();
});
// Error handling
mySchema.post('...', function (err, doc, next) {
  ...
  next();
});

// **Query Middleware**
//
// Query middleware works on these methods: `count`, `find`, `findOne`,
// `findOneAndRemove`, `findOneAndUpdate`, and `update`.
//
// Note: `this` refers to the query.

mySchema.pre('...', function () {
  ...
});

mySchema.post('...', function (result) {
  ...
});

// Add static methods to model class

mySchema.static('...', function (...) {
  ...
});

mySchema.pre('find', function (next) {
  ...
  next();
});

mySchema.post('find', function (docs) {
  ...
});

mySchema.static(
  {
    [...]: function (...) {
    ...
    },
    ...
  }
);

mySchema.virtual('...')
  .get(function () {
    return this....;
  })
  .set(function (value) {
     this.... = ...;
  });

// Optionally export the schema.
export mySchema;

const MyModel = mongoose.model('MyModel', mySchema);

export default MyModel;
