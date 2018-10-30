# JavaScript Push API Notes

Push is based on service workers because service workers operate in the
background.

## Misc

- Permissions are per browser per device per origin.
- Browsers choose the push service, not the developer.
- Need to save subscriptions in database. It may be associated with a particular
  user.
  + May want to save the User-Agent request header when saving the subscription.
- https://www.npmjs.com/package/web-push

See https://developer.mozilla.org/en-US/docs/Web/API/Push_API,
https://web-push-book.gauntface.com/, and
https://developers.google.com/web/fundamentals/push-notifications/ for details.
