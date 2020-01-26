# Shopify Notes

> Shopify enables you to create powerful ecommerce solutions for a variety of scenarios, including integrating your service into the Shopify admin, customizing any website, and more.


## App Types

You can create three different types of apps for Shopify stores: public, custom, and private. App types can't be changed after the app has been created.

**Public Apps**

A public Shopify app interacts with the Shopify API on behalf of multiple stores. All public apps need to go through Shopify’s review process.

- Can be converted to a sales channel.
- Created from the Partner Dashboard.

**Custom Apps**

Custom Shopify apps interact with the Shopify API on behalf of a single store. The store's Shopify URL `example.myshopify.com` is provided on app creation and can't be changed. Custom apps are not listed on the Shopify App Store and do not require a Shopify app review.

- Cannot be converted to a sales channel.
- Created from the Partner Dashboard.

**Private Apps**

Private apps interact with the Shopify API on behalf of a single store. Private apps are created in the Shopify admin, and are not listed on the Shopify App Store. Private apps do not require a Shopify app review.

- Cannot be converted to a sales channel.
- Created from the merchant's store.

Note: Developers can still create private apps, but custom apps are the recommended solution.


## Authentication

Before it can interact with the Shopify API, your app must provide the necessary authentication credentials in each HTTP request that it makes to Shopify. The way to provide these credentials depends on the type of app that you're developing. Shopify supports three different types of apps: public apps, custom apps, and private apps. Each app uses a specific authentication mechanism.

**Public Apps**

Credentials need to be generated from the Partner Dashboard and then they are used to implement OAuth. Public apps authenticate to Shopify by providing the `X-Shopify-Access-Token` header field in each HTTP request to the Shopify API.

See https://help.shopify.com/en/api/getting-started/authentication/public-authentication for details.

**Custom Apps**

An installation link needs to be generated from the Partner Dashboard. The merchant uses the link to go through the OAuth process in order to install the app on their store. Custom apps authenticate to Shopify by providing the `X-Shopify-Access-Token` header in each HTTP request to the Shopify API.

See https://help.shopify.com/en/api/getting-started/authentication/custom-authentication for details.

**Private Apps**

Credentials need to be generated from the Shopify admin and they are provided in the requests to Shopify. A private app can make authenticated requests to the Shopify Admin REST API using basic authentication or by including its Shopify access token in the request header.

Private apps can authenticate with Shopify by including the request header `X-Shopify-Access-Token: {access_token}`, where `{access_token}` is replaced by your private app's Admin API password.

See https://help.shopify.com/en/api/getting-started/authentication/private-authentication for details.


## Access

There are several means to access a store's admin section. The owner or a staff member can access through logging in. A collaborator account can be granted.

**Staff Members**

See https://help.shopify.com/en/manual/your-account/staff-accounts/create-staff-accounts for details.

**Collaborator Account**

See https://help.shopify.com/en/partners/dashboard/request-access and https://help.shopify.com/en/manual/your-account/staff-accounts/collaborator-accounts for details.


## Storefront API

The Storefront API gives you full creative control to build customized purchasing experiences for your customers.

Using the Storefront API, you can:

- Fetch data about products and collections.
- Create unique checkout experiences with full control over the shopping cart.
- Create new customers or modify existing ones, including address information.

The Storefront API can only be accessed using GraphQL.

The Storefront API provides unauthenticated access to customers, checkouts, product collections, and other store resources.

### Authentication

To authenticate with the Storefront API as either a private or public app, you need to obtain a storefront access token with the unauthenticated access scopes. As a private app, you can obtain the token when creating a private app in the Shopify admin. As a public app, you need to obtain the token by using OAuth. You need to include the token in a request header to access the Storefront API:

```
X-Shopify-Storefront-Access-Token: < storefront-access-token >
```

See https://help.shopify.com/en/api/storefront-api/getting-started#storefront-api-authentication for details.
