# Stripe Webhooks Notes

Use webhooks to be notified about events that happen in a Stripe account. You
can have Stripe send a single event to many webhook endpoints.

Webhooks are configured in the Dashboard's Webhooks settings section. Click `Add
endpoint` to reveal a form where you can add a new URL for receiving webhooks.

Stripe supports two webhook types: Account and Connect. You'll likely want to
create an Account webhook, unless you've created a Connect application.

Webhook data is sent as JSON in the POST request body. The full event details
are included and can be used directly, after parsing the JSON into an `Event`
object.

```node
// This example uses Express to receive webhooks
const app = require('express')();

//// Retrieve the raw body as a buffer and match all content types:
//app.use(require('body-parser').raw({type: '*/*'}));

app.use(bodyParser.json());

app.post('/stripe-webhooks-', function(req, res) {
  const event = req.body;
  console.dir(event);

  // Webhook endpoints might occasionally receive the same event more than once. It
  // is advised to guard against duplicated event receipts by making the event
  // processing idempotent.

  // If not a duplicate event, then do something with event.

  // All that Stripe expects in response is a 2xx status. Any headers or body are
  // ignored.
  res.sendStatus(200);
});
```

To ensure a POST to the webhook is from Stripe, you can check the IP address. See
https://stripe.com/docs/ips#webhook-ip-addresses for a list of IP addresses Stripe
for webhooks.

**Webhook Monitoring**

See https://github.com/stripe/stripe-webhook-monitor for details.
