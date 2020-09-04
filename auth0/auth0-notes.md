# Auth0 Notes

Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications.

You can connect any application to Auth0 and define the identity providers you want to use.

Based on your app's technology, choose one of the SDKs (or call the API) and hook it up to your app. Now each time a user tries to authenticate, Auth0 will verify their identity and send the required information back to your app.


## Use Cases

- Add user authentication and authorization to an app.
- Secure an API with OAuth 2.0.
- Add Single Sign-on to allow access to multiple apps.
- Securely access your API from a JavaScript front-end app or a mobile app.
- Passwordless authentication.
- Block suspicious IP addresses if they make consecutive failed login attempts, in order to avoid DDoS attacks.
- Enforce multi-factor authentication (MFA).
- Use analytics to track users on your site or application.


## Auth0 Basics of Application Setup

- Set up an Auth0 account.
- Create a tenant and domain.
- Register your application(s).
- Set up connections (i.e., basically ways users will log in).
- Extend Auth0's functionality:
  + Rules
  + Hooks
  + Extensions


## Tenants

Everything starts with an Auth0 tenant. This is where you configure your use of Auth0, and the where Auth0 assets - such as applications, connections, and user profiles are defined, managed and stored. You access an Auth0 tenant via the Auth0 Dashboard, where you can also create additional, associated tenants. You can create more than one Auth0 tenant so that you can structure your tenants in a way that will isolate different domains of users and also support your Software Development Life Cycle (SDLC).

Tenant names cannot be changed or reused once deleted.

See https://auth0.com/docs/get-started/learn-the-basics, https://auth0.com/docs/get-started/dashboard/tenant-settings, https://auth0.com/docs/support/delete-or-reset-tenant, and https://auth0.com/docs/best-practices/tenant-settings-best-practices for details.


## Deployment Options

Auth0 offers in the following deployment models:

| Deployment             | Description |
| ---------------------- | ----------- |
| Public Cloud           | A multi-tenant cloud service running on Auth0's cloud. |
| Standard Private Cloud | A dedicated cloud service running on Auth0's cloud. |
| Managed Private Cloud  | A dedicated cloud service running on either Auth0's cloud or the customer's AWS cloud infrastructure. |

See https://auth0.com/docs/get-started/deployment-options for details.


## Custom Domains

Auth0 allows you to map the domain for your tenant to **one custom domain** of your choosing. This allows you to maintain a consistent experience for your users by keeping them on your domain instead of redirecting or using Auth0's domain.

Auth0 custom domains are available with any paid subscription plan.

Auth0 recommends that you use custom domains with Universal Login for the most seamless and secure experience for your users.

Auth0 recommends that you whitelist your custom domain instead.

See https://auth0.com/docs/custom-domains for details.


## Terminology

- Account: A user's account. Can have one or more tenants.
- Tenant: In Auth0, a tenant is logically isolated.
  + Encouraged to create one tenant for each environment (development, staging, production).
- Region: A geographic region for tenents and its domain.
- Application: Must be registered with the tenant. Can be done via the Dashboard.
  + Types
    * Native/Mobile
    * Single-Page App
    * Regular Web App
    * Backend/API
  + Assigned a Client ID, Client secret.
- Connection: Auth0 sits between your app and the identity provider that authenticates your users. This relationship between Auth0 and the identity provider is referred to as a Connection.
  + Each connection can be shared among multiple applications. You can configure any number of connections, and then choose which of them to enable for each application.
  + Types
    * Database: Securely store and manage username / password credentials either in an Auth0 Database or in your own.
    * Social: Configure social connections like Facebook, Twitter, Github and others.
    * Enterprise: Configure Enterprise Connections like Active Directory, SAML, Office 365 and others.
    * Passwordless: Let your users signup and login using one-time codes (delivered by email or SMS) or one-click links, instead of passwords.


## Tokens

There are basically two main types of tokens that are related to identity: ID tokens and access tokens.

### ID Tokens

ID tokens are JSON web tokens (JWTs) meant for use by the application only. For example, if there's an app that uses Google to log in users and to sync their calendars, Google sends an ID token to the app that includes information about the user.

Do not use ID tokens to gain access to an API.

By default, an ID token is valid for 36000 seconds (10 hours). If there are security concerns, you can shorten the time period before the token expires, keeping in mind that one of the purposes of the token is to improve user experience by caching user information.

### Access Tokens

Access tokens (which aren't always JWTs) are used to inform an API that the bearer of the token has been authorized to access the API and perform a predetermined set of actions (specified by the scopes granted).

Note that the token does not contain any information about the user besides their ID (`sub` claim). It only contains authorization information about which actions the application is allowed to perform at the API (`scope` claim). This is what makes it useful for securing an API but not for authenticating a user.

Access tokens must never be used for authentication. Access tokens cannot tell if the user has authenticated. The only user information the access token possesses is the user ID, located in the sub claim. In your applications, treat access tokens as opaque strings since they are meant for APIs.


## Security

### ID Tokens

Do not use ID tokens to gain access to an API.

Do not add sensitive data to the payload: Tokens are signed to protect against manipulation and are easily decoded.

Do not send tokens over non-HTTPS connections.

Be sure to validate ID tokens before using the information it contains. You can use a [library](https://jwt.io/#libraries-io) to help with this task.

Each token contains information for the intended audience (which is usually the recipient). According to the OpenID Connect specification, the audience of the ID token (indicated by the aud claim) must be the client ID of the application making the authentication request. If this is not the case, you should not trust the token.

Conversely, an API expects a token with the aud value to equal the API's unique identifier. Therefore, unless you maintain control over both the application and the API, sending an ID token to an API will generally not work. Since the ID token is not signed by the API, the API would have no way of knowing if the application had modified the token (e.g., adding more scopes) if it were to accept the ID Token. See the [JWT Handbook](https://auth0.com/resources/ebooks/jwt-handbook) for more information.

### Access Tokens

Access tokens must never be used for authentication.

### Token Storage

You need to ensure that tokens and other sensitive data are not vulnerable to cross-site scripting attacks and can't be read by malicious JavaScript.

