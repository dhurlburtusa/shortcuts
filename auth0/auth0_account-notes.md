# Auth0 Account Notes


## Signup/Registration

- https://auth0.com/signup
- Enter email or select an IDP.
- Appears if you enter an email address with a email service provider such as gmail.com, you'll be prompted to pick an account type. You can choose either Company or Personal. If you pick Company, you'll be prompted to enter a company and and its size.
- If you need to pick a specific region and/or a custom tenant domain, then select "I need advanced features".
- If you use an email, then Auth0 will send you an email to verify it.


## Management UI

### Applications

Allows you to define different types of applications: Native, Single Page Application, Regular Web Application, and Machine to Machine Application.

- A Generic "Default App" is created for you when you first sign up.

**Generic (no specific application type chosen)**

- Name
- Domain (not editable)
- Client ID (not editable)
- Client Secret (not editable)
- Description
- Application Logo
- Application Type (unset)
- Token Endpoint Authentication Method: Post
- Application Login URI
- Allowed Callback URLs
- Allowed Logout URLs
- Allowed Web Origins
- Allowed Origins (CORS)
- ID Token Expiration
- Refresh Token Rotation
  + Disabled by default
- Refresh Token Expiration
  + Disabled by default
- Grant types
  + Available: Implicit, Authorization Code, Refresh Token, Client Credentials, Password, MFA (excludes Device Code and Passwordless OTP)
  + Selected by default: Implicit, Authorization Code, Refresh Token, Client Credentials

**Single Page Application**

- Name
- Domain (not editable)
- Client ID (not editable)
- Client Secret (not editable)
- Description
- Application Logo
- Application Type: Single Page Application
- Token Endpoint Authentication Method: None (not editable)
- Application Login URI
- Allowed Callback URLs
- Allowed Logout URLs
- Allowed Web Origins
- Allowed Origins (CORS)
- ID Token Expiration
- Refresh Token Rotation
  + Enabled by default
- Refresh Token Expiration
  + Enabled by default
- Grant types
  + Available: Implicit, Authorization Code, Refresh Token, Password, MFA (excludes Client Credentials, Device Code, and Passwordless OTP)
  + Selected by default: Implicit, Authorization Code, Refresh Token

**Regular Web Application**

- Name
- Domain (not editable)
- Client ID (not editable)
- Client Secret (not editable)
- Description
- Application Logo
- Application Type: Regular Web Application
- Token Endpoint Authentication Method: Post
- Application Login URI
- Allowed Callback URLs
- Allowed Logout URLs
- Allowed Web Origins
- Allowed Origins (CORS)
- ID Token Expiration
- Refresh Token Rotation
- Refresh Token Expiration
- Grant types
  + Available: Implicit, Authorization Code, Refresh Token, Client Credentials, Password, MFA, Passwordless OTP (excludes Device Code)
  + Selected by default: Implicit, Authorization Code, Refresh Token, Client Credentials

**Native**

- Name
- Domain (not editable)
- Client ID (not editable)
- Client Secret (not editable)
- Description
- Application Logo
- Application Type: Native
- Token Endpoint Authentication Method: None (not editable)
- Application Login URI
- Allowed Callback URLs
- Allowed Logout URLs
- Allowed Web Origins
- Allowed Origins (CORS)
- ID Token Expiration
- Refresh Token Rotation
- Refresh Token Expiration
- Grant types
  + Available: Implicit, Authorization Code, Refresh Token, Password, MFA, Device Code, Passwordless OTP (excludes Client Credentials)
  + Selected by default: Implicit, Authorization Code, Refresh Token

**Machine to Machine**

Requires at least one authorized API (see APIs section).

- Name
- Domain (not editable)
- Client ID (not editable)
- Client Secret (not editable)
- Description
- Application Logo
- Application Type: Machine to Machine (not editable)
- Token Endpoint Authentication Method: Post
- Application Login URI
- Allowed Callback URLs
- Allowed Logout URLs
- Allowed Web Origins
- Allowed Origins (CORS)
- ID Token Expiration
- Refresh Token Rotation
- Refresh Token Expiration
- Grant types
  + Available: Implicit, Authorization Code, Refresh Token, Client Credentials, Password, MFA, Passwordless OTP (excludes Device Code)
  + Selected by default: Client Credentials

### APIs

Allows you to define APIs that you can consume from your authorized applications.

- Initially, the Auth0 Management API is the only API available.

### Connections

Auth0 provides various types of "connections": database, social, enterprise, and passwordless.

Applications are declared to use one or more connection.

#### Database Connections

You can use an Auth0 database or you can supply your own.

- Initially, a Username-Password-Authentication database connection is available. By default, it uses an Auth0 database but this can be changed.

#### Social Connections

Auth0 provious various social connections like Google, Facebook, Twitter, and others so that you can let your users login with them.

### Rules

A rule is arbitrary JavaScript code that can be used to extend Auth0's default behavior when authenticating a user.

- Initially, no rules are available.

### Hooks

Hooks allow you to customize the behavior of Auth0 with Node.js code that is executed in selected extension points.

