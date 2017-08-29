# reCAPTCHA Notes

reCAPTCHA protects you against spam and other types of automated abuse by
verifying whether the "user" is a human or a "bot".

See https://www.google.com/recaptcha/ and https://developers.google.com/recaptcha/
for details.


## Installation

1) Sign up for an API key pair at https://www.google.com/recaptcha/admin
2) Choose a type of reCAPTCHA
  + reCAPTCHA v2: This option requires the user to click a checkbox indicating the
    user is not a robot.
  + Invisible reCAPTCHA: This option does not require the user to click on a
    checkbox, instead it is invoked directly when the user clicks on an existing
    button on your site or can be invoked via a JavaScript API call.
  + reCAPTCHA Android: This option requires you use the reCATPCHA Android library
    to perform the verification.
3) Add the widget to your webpage. Which set of instructions will depend on the
   type you chose in the previous step.
  + reCAPTCHA v2: You have two choices 1) automatically render the widget or 2)
    explicitly render the widget.  Below summarizes choice #1.  For instructions on
    choice #2 or for more details, see https://developers.google.com/recaptcha/docs/display
    for details.
    - Add `<script src="https://www.google.com/recaptcha/api.js" async defer></script>`
      somewhere on your page.
    - Add `<div class="g-recaptcha" data-sitekey="your_site_key"></div>` to the form
      that needs the verification.
  + Invisible reCAPTCHA: See https://developers.google.com/recaptcha/docs/invisible
    for details.
  + reCAPTCHA Android: See https://developer.android.com/training/safetynet/recaptcha.html
    for details.
