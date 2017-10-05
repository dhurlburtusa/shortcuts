# JavaScript Events Notes

See https://developer.mozilla.org/en-US/docs/Web/API/Event and
https://developer.mozilla.org/en-US/docs/Web/Events for details.


## Standard Event API

The following demonstrates the standard API.  That is, it does not show any
legacy properties or methods.

```js
evt.bubbles /*: boolean */
evt.cancelable /*: boolean */
evt.composed /*: boolean */
evt.currentEvent /*: ?mixed */
evt.defaultPrevented /*: boolean */
evt.eventPhase /*: Event.NONE | Event.CAPTURING_PHASE | Event.AT_TARGET | Event.BUBBLING_PHASE */
evt.isTrusted /*: boolean */
evt.target /*: mixed */
evt.timeStamp /*: DOMHighResTimeStamp | DOMTimeStamp */
evt.type /*: string */
evt.preventDefault()
evt.stopImmediatePropagation()
evt.stopPropagation()
```


## Event Delegation

Event delegation is a technique with the following benefits.

**Benefits**

* Allows effective listening on dynamically added content.
* Performance improvement over hundreds of individual event handlers.

**Example**

In the following example, we have a panel that contains a list.  Let's suppose
that the list either has hundreds of items, has dynamically added and removed
items, or both.  With event delegation, we won't have to deal with adding and
removing click events for each list item.

```html
<div class="Panel">
  <!-- ... -->
  <ul class="List">
    <!-- ... -->
    <li class="List-Item" data-id="someId">
      <span class="Icon  Icon--Like"></span>
      <span class="Text">Text</span>
    </li>
    <!-- ... -->
  </ul>
  <!-- ... -->
</div>
```

```js
// An ancestor element that must exist before adding the delegation handler.
var panelElmt = document.querySelector('.List')

// The following delegation handler is designed to detect the following:
//
// * Whether a Like icon was clicked
// * Whether an item was clicked
//
// Add the event delegation handler:
panelElmt.addEventListener('click', function (evt) {
  var elmt, id
  
  // Note: evt.currentTarget will be the div.Panel element and evt.target
  // will be the actual element clicked such as .Icon, .List-Item, .Text.
  if (evt.target !== evt.currentTarget) {
    // Now we need to check which element was actually clicked.  Knowledge
    // of the expected DOM structure is required in order to figure this out
    // correctly.
    
    // You will want to put the most specific checks first.
    
    // If the target is a element without child elments, then the universal
    // selector is not needed.  However, for robustness, you may want to
    // including just in case someone adds some child elements in the future.
    if (evt.target.matches('.Icon--Like')) {
      elmt = evt.target.closest('.List-Item')
      id = elmt.dataset.id
      
      // Do something:
      // likeThis(id)
    }
    // Check if the actual element clicked is the one of interest.
    // That is, was an item or one of its child elements clicked?
    else if (evt.target.matches('.List-Item, .List-Item *')) {
      // It is likely we will want to know exactly which item out of many
      // was clicked.  Since the target will be an item element or one of
      // its children, we have to get a reference to the item element.
      // Then we can extract some identifying information from the item.
      elmt = evt.target.closest('.List-Item')
      id = elmt.dataset.id

      // Do something:
      console.log('Item with id: ' + id + ' clicked')
    }
    else {
      // The .Panel element itself was clicked.  Do something if necessary.
    }
  }

  // The following is optional.  It depends on whether you want the event to
  // continue through the DOM.
  evt.stopPropagation()
  // Or
  evt.stopImmediatePropagation()
})
```

**Caveats**

The detection of which element actually fired the event or which parent element
is significant depends on [`Element#matches`][el-matches] and
[`Element#closest`][el-closest].  Fortunately, works in all modern browsers
except IE.  IE needs a polyfill for `matches` and `closest`.

The following polyfill will allow the above event delegation code to work in
IE9+.

```js
  if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector
  }
  if (typeof Element.prototype.closest !== 'function') {
    Element.prototype.closest = function (s) {
      var el = this
      var ancestor = this
      if (!document.documentElement.contains(el)) { return null }
      do {
        if (ancestor.matches(s)) { return ancestor }
        ancestor = ancestor.parentElement
      } while (ancestor !== null)
      return null
    }
  }
```


[el-closest]: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
[el-matches]: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
