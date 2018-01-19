# Google Tag Manager Notes

Google Tag Manager (GTM) is a tag management system that allows you to quickly
and easily update tags and code snippets on your website or mobile app, such
as those intended for traffic analysis and marketing optimization.


## Setup

Install the following snippets of code on all the web pages you want to manage
tags for.

Copy the following JavaScript and paste it as close to the opening `<head>`
tag as possible
  
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</script>
<!-- End Google Tag Manager -->
```

Copy the following snippet and paste it immediately after the opening `<body>`
tag.

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## Data Layer

A data layer is an object that contains all of the information that you want
to pass to Google Tag Manager.  Information such as events or variables can be
passed to Google Tag Manager via the data layer, and triggers can be set up in
Google Tag Manager based on the values of variables.

If the data is needed when the GTM tag is loaded, then the dataLayer must be
created before the GTM tag.
```html
<script>
  dataLayer = [];
  dataLayer.push({ ... });
</script>
...
<!-- Google Tag Manager -->
...
<!-- End Google Tag Manager -->
```

More data can be added after the GTM tag is loaded.  You just push more data
on to the layer using the `Array#push` method.

```js
// Events:
dataLayer.push({'event': '<event_name>'});

// Variables:
dataLayer.push({'<variable_name>': '<variable_value>'});
```

**Common Data Layer Variables**

| Name                    | Comment |
| ----------------------- | ------- |
| pageCategory            | E.g., ['Uncategorized']. |
| pagePostAuthor          | E.g., 'username'. |
| pagePostAuthorID        | E.g., 1. |
| pagePostDate            | E.g., 'January 14, 2018'. |
| pagePostDateDay         | E.g., '14'. |
| pagePostDateMonth       | E.g., '01'. |
| pagePostDateYear        | E.g., '2018'. |
| pagePostType            | 'bloghome' , 'frontpage', 'page', 'post' |
| pagePostType2           | 'author-post', 'category-post', 'month-post', 'single-page', 'single-post' |
| pageTitle               | E.g., 'About Us \| ' |
| postCountOnPage         | E.g., 1. |
| postCountTotal          | E.g., 1. |
| postID                  | E.g., 1. |
| siteID                  | E.g., 0. |
| siteName                | |
| siteSearchFrom          | E.g., 'https://example.com/blog' |
| siteSearchResults       | |
| siteSearchTerm          | |
| visitorEmail            | E.g., 'me@example.com' |
| visitorId               | E.g., 1. |
| visitorLoginState       | E.g., 'logged-in', 'logged-out' |
| visitorRegistrationDate | E.g., 1515892215. |
| visitorType             | E.g., 'administrator', 'visitor-logged-out' |


## Configuration

There are several ways to configure GTM.  Usually, the user interface at
https://tagmanager.google.com/ is used.  Another way is to use the REST API.
See https://developers.google.com/tag-manager/api/v2/ for more details.

### Exporting Configuration

The current configuration can be exported using the following procedure:

1. Log into Tag Manager.
2. Select the container to be exported.
3. Select the Admin tab.
4. Select Export Container.
5. Select the version or workspace.

**File Format**

The file format of the configuration export is in JSON with the following
shape using FlowType type notation:

```json5
type Fingerprint = string; // E.g., "1500087883049" which is the same as Date.now().

type Value = {
  type: "BOOLEAN" | "TEMPLATE", etc
  value: ?string,
}

type BuiltInVariable = {
  accountId: string, // E.g., "1234567890"
  containerId: string, // E.g., "7654321"
  name: string, // E.g., "Page URL"
  type: string, // E.g., "PAGE_URL"
}

type Filter = ...;

type FolderId = string; // E.g., "12".  Appears to be sequential.

type Folder = {
  accountId: string, // E.g., "1234567890"
  containerId: string, // E.g., "7654321"
  folderId: FolderId,
  name: string,
  fingerprint: Fingerprint
}

type Tag = {
}

type TriggerId = string; // E.g., "12".  Appears to be sequential.

type Trigger = {
  accountId: string, // E.g., "1234567890"
  containerId: string, // E.g., "7654321"
  fingerprint: Fingerprint,
  name: string,
  parentFolderId: ?FolderId,
  triggerId: TriggerId,
  type: "CLICK",
} | {
  accountId: string, // E.g., "1234567890"
  containerId: string, // E.g., "7654321"
  customEventFilter: Array<Filter>,
  fingerprint: Fingerprint,
  name: string,
  parentFolderId: ?FolderId,
  triggerId: TriggerId,
  type: "CUSTOM_EVENT",
} | {
  accountId: string, // E.g., "1234567890"
  autoEventFilter: Array<Filter>,
  checkValidation: Value,
  containerId: string, // E.g., "7654321"
  filter: Array<Filter>,
  fingerprint: Fingerprint,
  name: string,
  parentFolderId: ?FolderId,
  triggerId: TriggerId,
  type: "LINK_CLICK",
  uniqueTriggerId: Value,
  waitForTags: Value,
  waitForTagsTimeout: Value,
} | {
  accountId: string, // E.g., "1234567890"
  containerId: string, // E.g., "7654321"
  filter: Array<Filter>,
  fingerprint: Fingerprint,
  name: string,
  parentFolderId: ?FolderId,
  triggerId: TriggerId,
  type: "PAGEVIEW",
}

type Variable = {
  accountId: string, // E.g., "1234567890"
  containerId: string, // E.g., "7654321"
  fingerprint: Fingerprint,
  name: string,
  parameter: Array<VariableParameter>,
  parentFolderId: string,
  type: "aev" | "c" | "gas" | "jsm" | "r" | "smm" | "v"
  variableId: string, // E.g., "12".  Appears to be sequential.
}

type VariableParameter = {
  key: string,
  type: "BOOLEAN" | "INTEGER" | "TEMPLATE"
  value: string,
} | {
  key: string,
  type: "LIST",
  list: Array<VariableParameter>,
}

type GtmExportFormat = {
  exportFormatVersion: number,
  exportTime: string, // Formatted in ISO-8601
  containerVersion: {
    accountId: string, // E.g., "1234567890"
    builtInVariable: Array<BuiltInVariable>,
    container: {
      accountId: string, // E.g., "1234567890"
      containerId: string, // E.g., "7654321"
      fingerprint: Fingerprint, // E.g., "1500087883049",
      name: string, // E.g., "example.com",
      path: string, // E.g., "accounts/1234567890/containers/7654321"
      publicId: string, // E.g., "GTM-XXXXXXX",
      tagManagerUrl: string, // E.g., "https://tagmanager.google.com/#/container/accounts/1234567890/containers/7654321/workspaces?apiLink=container"
      usageContext: [
        "WEB"
      ],
    },
    containerId: string, // E.g., "7654321"
    containerVersionId: string, // E.g., "0"
    fingerprint: Fingerprint, // E.g., "0"
    folder: Array<Folder>,
    path: string, // E.g., "accounts/1234567890/containers/7654321/versions/0"
    tag: Array<Tag>,
    tagManagerUrl: string, // E.g., "https://tagmanager.google.com/#/versions/accounts/1234567890/containers/7654321/versions/0?apiLink=version"
    trigger: Array<Trigger>,
    variable: Array<Variable>, // Sorted alphabetically by name.
  }
}
```

* When a folder is added, it has a `fingerprint` equal to `Date.now`.  And the
  container's `fingerprint` is updated to the same value.


## Variables

### Built-In

See https://support.google.com/tagmanager/answer/7182738 for details.

Many of the built-in variables' documentation lacks examples which makes it
hard to write an expression when you question exactly what the value might
look like.

| Name              | Example(s)                                 | Comments |
| ----------------- | ------------------------------------------ | -------- |
| Container ID      | 'GTM-1ABCD23'                              | |
| Container Version | 'QUICK_PREVIEW'                            | May be other values too. (Please update as they become known.) |
| Debug Mode        | true, false                                | |
| Environment Name  | 'Draft Environment 1 2018-01-16 12:42:32 ' | May be other values too. (Please update as they become known.) |
| Event             | null, 'gtm.js', 'gtm.dom', 'gtm.load'      |  May be other values too. (Please update as they become known.) |
| HTML ID           | ?                                          | 'undefined'. (Please update as example values become known.) |
| Page Hostname     | 'www.example.com'                          | |
| Page Path         | '/', '/about/', etc                        | Does not contain query string or fragment identifier. |
| Page URL          | 'https://www.example.com/about/?foo=bar'   | Does not contain fragment identifier (aka hash). |
| Random Number     | 123456789                                  | |
| Referrer          | 'https://www.example.com/'                 | |


## Misc

GTM fires tags asynchronously.
