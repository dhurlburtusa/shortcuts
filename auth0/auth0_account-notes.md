# Auth0 Account Notes


## Signup/Registration

- https://auth0.com/signup
- Enter email or select an IDP.
- Appears if you enter an email address with a email service provider such as gmail.com, you'll be prompted to pick an account type. You can choose either Company or Personal. If you pick Company, you'll be prompted to enter a company and and its size.
- If you need to pick a specific region and/or a custom tenant domain, then select "I need advanced features".
- If you use an email, then Auth0 will send you an email to verify it.


## Management UI

### Applications

Allows you to define different types of applications: Native, Single Page Web Applications, Regular Web Applications, and Machine to Machine Applications.

- A Generic "Default App" is created for you when you first sign up.

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
