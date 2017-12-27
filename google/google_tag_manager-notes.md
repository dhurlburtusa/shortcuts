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


## Misc

GTM fires tags asynchronously.
