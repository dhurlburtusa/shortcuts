# Mongoose Notes


## Misc

* Built-in `Date` methods are not hooked into the mongoose change tracking logic
  which means that if you use a `Date` in your document and modify it with a
  method like `setMonth()`, mongoose will be unaware of this change and
  `doc.save()` will not persist this modification.  If you must modify `Date`
  types using built-in methods, tell mongoose about the change with
  `doc.markModified('pathToYourDate')` before saving.
