// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
// Note: This file runs in the browser, not node.js.

// This is a good place to import custom typefaces and/or styles that apply to the
// entire site.
import './src/styles/site.css'
import 'typeface-merriweather'
import 'typeface-montserrat'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import createStore from './src/state/createStore'

/*
**Initial Load**

The following is the set of hooks that get called when `gatsby develop` is run.
The order is in the order the hooks generally get called. Some hooks are called
multiple times.

- disableCorePrefetching
- onClientEntry
- replaceHydrateFunction
- onPostPrefetchPathname
- wrapRootElement
- the replaced hydrate function
- onPreRouteUpdate
- shouldUpdateScroll
- replaceComponentRenderer
- wrapPageElement
- onRouteUpdate
- onInitialClientRender
- onPrefetchPathname

**Link Hover**

- onPostPrefetchPathname

**Route Navigation**

- replaceComponentRenderer
- wrapPageElement
- onPreRouteUpdate
- shouldUpdateScroll
- onRouteUpdate
- onPrefetchPathname

*/

/*
Plugins can take over prefetching logic.  If they do, they should call this to
disable the now duplicate core prefetching logic.
*/
// export const disableCorePrefetching = (cntx, cfg) => {
//   // console.log('disableCorePrefetching');
//   // console.dir(cntx, cfg);
//   const {
//     // Common (i.e., always present in all API hooks)
//     getResourceURLsForPathname,
//     getResourcesForPathname,
//     getResourcesForPathnameSync,
//   } = cntx;
//   const { plugins } = cfg;
//   // Implement new prefetching logic here.
//   return true;
// }

/*
Called when the Gatsby browser runtime first starts.
*/
export const onClientEntry = (cntx, cfg) => {
  // console.log('onClientEntry');
  // console.dir(cntx);
  // console.dir(cfg);
  // const {} = cntx; // undefined
  const { plugins } = cfg;
}

/*
Called when the initial (but not subsequent) render of Gatsby App is done on the
client.
*/
export const onInitialClientRender = (cntx, cfg) => {
  // console.log('onInitialClientRender');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
}

/*
Called when prefetching for a pathname is successful.  Allows for plugins with
custom prefetching logic.
*/
export const onPostPrefetchPathname = (cntx, cfg) => {
  // console.log('onPostPrefetchPathname');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    getResourceURLsForPathname,
    pathname,
    // Common (i.e., always present in all API hooks)
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
}

/*
Called when changing location is started.
*/
export const onPreRouteUpdate = (cntx, cfg) => {
  // console.log('onPreRouteUpdate');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    location,
    prevLocation,
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
  const {
    ancestorOrigins,
    assign,
    hash,
    host,
    hostname,
    href,
    key,
    origin,
    pathname,
    port,
    protocol,
    reload,
    replace,
    search,
    state,
  } = location;
}

/*
Called when prefetching for a pathname is triggered.  Allows for plugins with
custom prefetching logic.
*/
export const onPrefetchPathname = (cntx, cfg) => {
  // console.log('onPrefetchPathname');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    getResourcesForPathname,
    pathname,
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
}

/*
Called when the user changes routes.
*/
export const onRouteUpdate = (cntx, cfg) => {
  // console.log('onRouteUpdate');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    location,
    prevLocation,
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
  const {
    ancestorOrigins,
    assign,
    hash,
    host,
    hostname,
    href,
    key,
    origin,
    pathname,
    port,
    protocol,
    reload,
    replace,
    search,
    state,
  } = location;
}

/*
Called when changing location is longer than 1 second.
*/
export const onRouteUpdateDelayed = (cntx, cfg) => {
  // console.log('onRouteUpdateDelayed');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    action, // Not seen in code.
    location,
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
  const {
    ancestorOrigins,
    assign,
    hash,
    host,
    hostname,
    href,
    key,
    origin,
    pathname,
    port,
    protocol,
    reload,
    replace,
    search,
    state,
  } = location;
}

/*
Inform plugins when a service worker has become active.
*/
export const onServiceWorkerActive = (cntx, cfg) => {
  // console.log('onServiceWorkerActive');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    serviceWorker,
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
}

/*
Inform plugins when a service worker has been installed.
*/
export const onServiceWorkerInstalled = (cntx, cfg) => {
  // console.log('onServiceWorkerInstalled');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    serviceWorker,
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
}

/*
Inform plugins when a service worker is redundant.
*/
export const onServiceWorkerRedundant = (cntx, cfg) => {
  // console.log('onServiceWorkerRedundant');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    serviceWorker,
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
}

/*
Inform plugins of when a service worker has an update available.
*/
export const onServiceWorkerUpdateFound = (cntx, cfg) => {
  // console.log('onServiceWorkerUpdateFound');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    serviceWorker,
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
}

/*
Allow a plugin to register a Service Worker.  Should be a function that returns
true.
*/
export const registerServiceWorker = (cntx, cfg) => {
  // console.log('registerServiceWorker');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
  return true;
}

/*
Allow a plugin to replace the page component renderer.  This api runner can be
used to implement page transitions.
*/
export const replaceComponentRenderer = (cntx, cfg) => {
  // console.log('replaceComponentRenderer');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    loader,
    props,
    // Common (i.e., always present in all API hooks)
    // getResourceURLsForPathname,
    // getResourcesForPathname,
    // getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
  const {
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = loader;
  const {
    children,
    data,
    location,
    navigate,
    pageContext,
    pageResources,
    path,
    uri,
  } = props;
  const {
    // allMarkdownRemark: {
    //   edges,
    // },
    // markdownRemark: {
    //   excerpt,
    //   frontmatter,
    //   html,
    //   id,
    // },
    site: {
      siteMetadata,
    },
  } = data;
  const {
    // next: {
    //   fields: nextFields,
    //   frontmatter: nextFrontmatter,
    // },
    // previous: {
    //   fields: prevFields,
    //   frontmatter: prevFrontmatter,
    // },
    slug,
  } = pageContext;
  const {
    component,
    page: {
      componentChunkName,
      jsonName,
      path: pth,
    },
  } = pageResources;
}

/*
Allow a plugin to replace the `ReactDOM.render` function call by a custom
renderer.  This method should return a function with same signature as
`ReactDOM.render()`.

Note: It's very important to call the callback after rendering, otherwise Gatsby
will not be able to call `onInitialClientRender`.
*/
export const replaceHydrateFunction = (cntx, cfg) => {
  // console.log('replaceHydrateFunction');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
  return (element, container, callback) => {
    console.log('rendering!');
    ReactDOM.render(element, container, callback);
  };
}

/*
Allow a plugin to decide if the scroll position should update or not on a route
change.
*/
export const shouldUpdateScroll = (cntx, cfg) => {
  // console.log('shouldUpdateScroll');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    getSavedScrollPosition,
    pathname,
    prevRouterProps,
    routerProps,
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
  return true;
}

/*
Allow a plugin to wrap the page element.

This is useful for setting wrapper component around pages that won't get
unmounted on page change.  For setting Provider components, use
`wrapRootElement`.

Note: There is an equivalent hook in the SSR API.
*/
export const wrapPageElement = (cntx, cfg) => {
  // console.log('wrapPageElement');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    element,
    props,
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
  return (
    <div style={{ minHeight: '100vh' }}>
      {element}
    </div>
  )
}

const store = createStore()

/*
Allow a plugin to wrap the root element.

This is useful to setup any "Provider" components that will wrap your
application.  For setting persistent UI elements around pages, use
`wrapPageElement`.

Note: There is an equivalent hook in the SSR API.
*/
export const wrapRootElement = (cntx, cfg) => {
  // console.log('wrapRootElement');
  // console.dir(cntx);
  // console.dir(cfg);
  const {
    // Documented
    element,
    // Common (i.e., always present in all API hooks)
    getResourceURLsForPathname,
    getResourcesForPathname,
    getResourcesForPathnameSync,
  } = cntx;
  const { plugins } = cfg;
  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
}
