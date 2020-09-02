# Vimeo Notes


## Vimeo API

The Vimeo API is a REST API.

The API focuses around access to a registered app. Apps are registered in the [Vimeo developer UI](https://developer.vimeo.com/apps).

If you want to make API requests, you need to have an access token. And if you want to get an access token, you need to follow an authentication workflow.

### Client Credentials Grant

The client credentials grant provides access to public data only. You don't need permission from your end user for that, so the entire authentication workflow happens without their participation.

**Step 1. Make a POST Request.**

Make a POST request to 
```
POST https://api.vimeo.com/oauth/authorize/client
```

See https://developer.vimeo.com/api/authentication#using-the-client-credentials-grant-step-1 for details.

**Step 2. Get the Access Token**

The response from the API includes the access token string among some other technical details.
```json
{
  "access_token": "{token}",
  "token_type": "bearer",
  "scope": "{scope_list}"
}
```

See https://developer.vimeo.com/api/authentication#using-the-client-credentials-grant-step-2 for details.

### Authorization Code Grant

With the authorization code grant, the end user explicitly consents for your app to access their private data, including exactly which scopes to permit or deny. The front end and logic of the consent mechanism are all on Vimeo's side; you send your end user to Vimeo through a browser, and Vimeo takes care of it. You don't even need to log them in. Vimeo sends them back to you with an authorization code, which you present to the API in exchange for an access token. Unlike in the implicit grant, this access token resides on the server, and it remains active as long as we perceive that you're using it.

**Step 1. Send your end user to the authorization URL.**

Direct your end user to the following address:

```
https://api.vimeo.com/oauth/authorize?response_type=code&client_id={client_id}&redirect_uri={redirect_uri}&state={state}&scope={scope_list}
```

See https://developer.vimeo.com/api/authentication#using-the-auth-code-grant-step-1 for details.

**Step 2. Receive access permission from your end user.**

Vimeo basically prompts the user to accept or deny the app's request to access their private information.

**Step 3. Get the authorization code.**

Once they accept, we send them to the redirect URI, along with the code and state query parameters:

```
{redirect_uri}?code={code}&state={state}
```

NOTE: Vimeo retains any custom query parameters that you include with your URI.

See https://developer.vimeo.com/api/authentication#using-the-auth-code-grant-step-3 for details.

**Step 4. Send us the authorization code.**

You now have the authorization code that you can exchange for an access token, so make a POST request to /oauth/access_token:

```
POST https://api.vimeo.com/oauth/access_token
```

Include certain request headers.

In the request body, send the `grant_type` field with the value `authorization_code`, the authorization code string that you just received, and the `redirect_uri` to the redirect URI that you specified previously.

```json
{
  "grant_type": "authorization_code",
  "code": "{code}",
  "redirect_uri": "{redirect_uri}"
}
```

See https://developer.vimeo.com/api/authentication#using-the-auth-code-grant-step-4 for details.

**Step 5. Get the access token.**

The API responds with the access token and details about the authenticated user.

```json
{
  "access_token": "{token}",
  "token_type": "bearer",
  "scope": "{scope_list}",
  "user": "{user_representation}"
}
```

See https://developer.vimeo.com/api/authentication#using-the-auth-code-grant-step-5 for details.

### Implicit Grant

With the implicit grant, your app gains access to private data, but the workflow is abbreviated. You don't receive an authorization code to exchange for an access token like you do in the authorization code grant. The API just gives you the access token, and you get it through the browser, as part of a URL. The access token has a one-hour lifespan.

To obtain an access token with the implicit grant, first make sure that your app is set up for it. Go to My Apps, open your app's information page, look under the settings for OAuth redirect authentication, and, if necessary, click the control for enabling implicit authentication.

Once you're sure that you've turned on this setting, here are the general steps:

**Step 1. Send your end user to the authorization URL.**

Send your end user here:

```
https://api.vimeo.com/oauth/authorize?response_type=token&client_id={client_id}&redirect_uri={redirect_uri}&state={state}&scope={scope_list}
```

See https://developer.vimeo.com/api/authentication#using-the-implicit-grant-step-1 for details.

**Step 2. Receive access permission from your end user.**

Your end user creates a new account or logs in, accepts or denies your app's request for access, and chooses which scopes to allow.

**Step 3. Get the access token.**

Vimeo sends the end user to your redirect URI, but they append the access token to it, along with other information, in a URL fragment (the part after the hash sign):

```
{redirect_uri}#access_token={access_token}&token_type=bearer&scope={scope_list}&state={state}&expires_in={expires_in}
```

See https://developer.vimeo.com/api/authentication#using-the-implicit-grant-step-3 for details.

### Device Code Grant

Not every Internet-connected device includes a browser, and many of these devices are input-constrained, or difficult to use to enter information. The device code grant is for cases like these. In this workflow, the browserless device displays a special URL and code. Your end user switches to a computer or tablet, opens a browser, goes to the URL, and enters the code. Back in the browserless device, your app intercepts that the code has been entered and receives an access token from the API.

See https://developer.vimeo.com/api/authentication#using-the-device-code-grant for details.
