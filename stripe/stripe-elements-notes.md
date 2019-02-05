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


## Including Stripe.js

In order to create Stripe Elements, tokenize customer information, and/or accept
payments with the browser payment APIs, the Stripe.js library needs to be
included on the site/app.

```js
<script src="https://js.stripe.com/v3/"></script>
```

It is recommended to include this library on every page of your site/app, not
just the checkout page, in order to leverage Stripe's advanced fraud
functionality.

Then somewhere after including Stripe.js, create a new instance of Stripe using
your publishable API key.

```html
<script>
  (function (global, Stripe) {
    var stripe = Stripe('pk_test_yourpublishablekey');
  })(self || this, Stripe);
</script>
```


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

In order to create one or more of the Elements, you must first instantiate an
`elements` instance using your Stripe instance.

```js
<script>
  (function (global, Stripe) {
    var stripe = Stripe('pk_test_yourpublishablekey');
    var elementsOptions = {
      fonts: [
        {
          cssSrc: 'https://fonts.googleapis.com/css?family=Open+Sans',
        },
        {
          family: 'SomeName',
          src: '/assets/fonts/my-custom.woff',
          display: 'auto', // One of 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
          style: 'normal', // One of 'normal' | 'italic' | 'oblique'
          unicodeRange: '', // A valid unicode-range.
          weight: '700', // A valid font-weight.
        },
      ],
      locale: 'en', // One of 'auto' | 'ar' | 'da' | 'de' | 'en' | 'es' | 'fi' | 'fr' |
                    // 'he' | 'it' | 'ja' | 'no' | 'nl' | 'pl' | 'sv' | 'zh'.
    };
    var elements = stripe.elements(elementsOptions);
  })(self || this, Stripe);
</script>
```

Once you have an `elements` instance you can create Elements objects.

**Markup**

```html
<label for="cardElement">Card</label>
<div id="cardElement"></div>

<label>
  Number
  <div id="cardNumber"></div>
</label>
<label for="cardExpiry">
  Expiration Date
</label>
<div id="cardExpiry"></div>
<label>
  CVC
  <div id="cardCvc"></div>
</label>
```

```js
<script>
  (function (global, Stripe) {
    var stripe = Stripe('pk_test_yourpublishablekey');
    var elementsOptions = {
      ...
    };
    var elements = stripe.elements(elementsOptions);
    var commonOptions = {
      classes: {
        base: 'Card',
        complete: 'Card--complete',
        empty: 'Card--empty',
        focus: 'Card--focus',
        invalid: 'Card--invalid',
        webkitAutofill: 'Card--webkit-autofill',
      },
      style: {
        base: {
          color: 'black',
          fontFamily: 'SomeName',
          fontSize: '1.2em',
          fontSmoothing: '',
          fontStyle: '',
          fontVariant: '',
          fontWeight: '',
          iconColor: '',
          lineHeight: '',
          letterSpacing: '',
          padding: '',
          textAlign: '',
          textDecoration: '',
          textShadow: '',
          textTransform: '',
          ':disable': { ... },
          ':focus': { ... },
          ':hover': { ... },
          '::-ms-clear': { ... },
          '::placeholder': { ... },
          '::selection': { ... },
          ':-webkit-autofill': { ... },
        },
        complete: { ... },
        empty: { ... },
        invalid: { ... },
        paymentRequestButton: {
          type: 'default', // 'default' | 'donate' | 'buy'
          height: '',
          theme: 'dark', // 'dark' | 'light' | 'light-outline'
        },
      },
    };
    var cardOptions = {
      ...commonOptions,
      disabled: true,
      hideIcon: true,
      hidePostalCode: true,
      iconStyle: 'default', // 'default' | 'solid'
      value: {
        postalCode: '99999',
      },
    };
    var cardElement = elements.create('card', cardOptions);

    cardElement.on('blur', function (evt) {
      ...
    });

    cardElement.on('change', function (evt) {
      const { complete, elementType, empty, error } = evt;
      // For postal code from card element:
      const { value } = evt;
      // For card and cardNumber elements:
      // One of 'amex' | 'diners' | 'discover' | 'jcb' | 'mastercard' |
      // 'unionpay' | 'unknown' | 'visa'.
      const { brand } = evt;
      const { /* Others, see doc. */ } = evt.
    });

    // Only for paymentRequestButton:
    cardElement.on('click', function (evt) {
      evt.preventDefault();
      ...
    });

    cardElement.on('focus', function (evt) {
      ...
    });

    cardElement.on('ready', function (evt) {
      ...
    });

    cardElement.mount('#cardElement');

    var cardNumberOptions = {
      ...commonOptions,
      disabled: true,
      placeholder: 'Card Number',
    };
    var cardNumberElement = elements.create('cardNumber', cardNumberOptions);
    ...

    var cardExpiryOptions = {
      ...commonOptions,
      disabled: true,
      placeholder: 'Expiration',
    };
    var cardExpiryElement = elements.create('cardExpiry', cardExpiryOptions);
    ...

    var cardCvcOptions = {
      ...commonOptions,
      disabled: false,
      placeholder: 'CVC',
    };
    var cardCvcElement = elements.create('cardCvc', cardCvcOptions);
    ...
  })(self || this, Stripe);
</script>
```
