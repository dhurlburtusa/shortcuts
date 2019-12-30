# Web Development Checklist


## Project Conventions

There are several things a developer should be aware of before working on a
project.  If they are not aware of these, then the decisions they make may go
against the grain.

* Browser Support
* SEO requirements
* Accessibility
* Internationalization/Localization
* Coding standards
  + Conventions
    - ESlint
    - Prettier
  + CSS strategy
    - Mobile 1st
    - CSS Modules
    - Global CSS
    - Styled Components
    - Pre-processors (Sass, Less)
    - Post CSS
    - Organization
      * Media query choices.
      * x-browser rules location(s): separate file, inline, other?
    - Naming convention: Bem, Suit, SMACSS, other?
      * See https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849
      * See http://thesassway.com/advanced/modular-css-naming-conventions
      * See http://getbem.com/naming/
      * See https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md
      * JavaScript hook CSS classes
    - Nesting (such as with Sass)
    - Font-Size strategy:
      - Absolute such as `px`s.
      - Parent element relative such as `em`s.
      - Root relative such as `rem`s.  See
        https://snook.ca/archives/html_and_css/font-size-with-rem.
    - When !important is allowed?
      * For general state (aka utility) classes such as `hidden`: `display: none
        !important`.
      * To override third-party styles when they used "dumb" selectors that you don't
        want to repeat.
      * To override inlined styles you have no control over.
      * See
        https://www.smashingmagazine.com/2010/11/the-important-css-declaration-how-and-when-to-use-it/
      * See https://css-tricks.com/when-using-important-is-the-right-choice/
  + Etc
* Development environment dependencies/requirements
* Branch strategy?
  + Git Flow
  + Other?


## Web Security

- Developer has read all relevant documents at https://github.com/OWASP/CheatSheetSeries/tree/master/cheatsheets
  and has subscribed to watch the repo as it changes to keep up with the latest
  advice.
  
  + [OWASP Top Ten](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
  + [AJAX Security](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/AJAX_Security_Cheat_Sheet.md)
  + [Authentication](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Authentication_Cheat_Sheet.md)
  + [Clickjacking Defense](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Clickjacking_Defense_Cheat_Sheet.md)
  + [Credential_Stuffing Prevention](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Credential_Stuffing_Prevention_Cheat_Sheet.md)
  + [Cross-Site Request Forgery Prevention](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md)
  + [Cross-Site Scripting Prevention](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.md)
  + [DOM-Based XSS Prevention](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.md)
  + [Error Handling](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Error_Handling_Cheat_Sheet.md)
  + [Forgot Password](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Forgot_Password_Cheat_Sheet.md)
  + [HTML5 Security](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/HTML5_Security_Cheat_Sheet.md)
  + [HTTP Strict-Transport-Security](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.md)
  + [Injection_Prevention](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Injection_Prevention_Cheat_Sheet.md)
  + [Input Validation](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Input_Validation_Cheat_Sheet.md)
  + [JSON Web Tokens](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/JSON_Web_Token_Cheat_Sheet_for_Java.md)
  + [Logging](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Logging_Cheat_Sheet.md)
  + [Mass Assignment](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Mass_Assignment_Cheat_Sheet.md)
  + [PHP Configuration](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/PHP_Configuration_Cheat_Sheet.md)
  + [Password Storage](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Password_Storage_Cheat_Sheet.md)
  + [Protect FileUpload Against Malicious File](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Protect_FileUpload_Against_Malicious_File.md)
  + [Query Parameterization](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Query_Parameterization_Cheat_Sheet.md)
  + [REST Assessment](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/REST_Assessment_Cheat_Sheet.md)
  + [REST Security](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/REST_Security_Cheat_Sheet.md)
  + [SAML Security](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/SAML_Security_Cheat_Sheet.md)
  + [SQL Injection Prevention](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.md)
  + [Session Management](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Session_Management_Cheat_Sheet.md)
  + [Third Party JavaScript Management](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.md)
  + [Transport Layer Protection](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.md)
  + [Unvalidated Redirects and Forwards](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
  + [User Privacy Protection](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/User_Privacy_Protection_Cheat_Sheet.md)
  + [Virtual Patching](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Virtual_Patching_Cheat_Sheet.md)
  + [Vulnerability Disclosure](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.md)
  + [Web Service Security](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Web_Service_Security_Cheat_Sheet.md)
  + [XML External Entity Prevention](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.md)
  + [XML Security](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/XML_Security_Cheat_Sheet.md)
