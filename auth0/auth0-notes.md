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


## Deployment Options

Auth0 offers in the following deployment models:

| Deployment             | Description |
| ---------------------- | ----------- |
| Public Cloud           | A multi-tenant cloud service running on Auth0's cloud. |
| Standard Private Cloud | A dedicated cloud service running on Auth0's cloud. |
| Managed Private Cloud  | A dedicated cloud service running on either Auth0's cloud or the customer's AWS cloud infrastructure. |

See https://auth0.com/docs/get-started/deployment-options for details.


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
