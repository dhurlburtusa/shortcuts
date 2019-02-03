# Stripe Elements Notes

Stripe Elements is a set of pre-built UI components for building your checkout
flow and is available as a feature of Stripe.js.  Elements provides ready-made
UI components like inputs and buttons for collecting information from the user.
Stripe.js then tokenizes the sensitive information within an Element without
ever having it touch your server.

Elements includes features like:

- Automatically format card information as it’s entered.
- Translate placeholders into your customer’s preferred language.
- Responsive design to fit the width of your customer’s screen or mobile device.
- Customizable styling to match the look and feel of your checkout flow.


## Elements

- Card
  + Has inputs for number, expiry, CVC, and postal code.
- Payment Request Button
  + Lets your customers check out with Apple Pay, Google Pay, Chrome saved cards,
    and Microsoft Pay.
- IBAN
  + Lets you collect your customers’ bank account details.  It validates IBAN
    formats in all SEPA countries, emits the bank’s name, and includes a dynamically
    updating bank logo icon for many popular banks. 
- iDEAL Bank
  + Lets you collect your customers’ bank for use with iDEAL payments.  It displays
    a list of iDEAL-member banks and their logos, allowing customers to select their
    bank inline (rather than in an interstitial bank selection page) and check out
    faster.

