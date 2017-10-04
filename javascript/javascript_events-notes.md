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
