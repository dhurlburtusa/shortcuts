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
