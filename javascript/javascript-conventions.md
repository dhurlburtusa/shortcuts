# JavaScript Conventions


## Import Ordering

Ordering begins by separating absolute imports from relative imports.  Absolute
imports are those that import from your package's dependencies.  Relative
imports are those that import modules from within your package and are easily
recognized by being prefixed with `./` or `../`.  The absolute imports will come
before the relative imports.

The absolute imports are then divided into two groupings based on what is being
imported.  The imports that import CSS are listed first.  Because it is CSS, the
order matters for the correct cascading effect.  The second group contains all
the remaining absolute imports.  However, these are sorted alphabetically by
package name.  Here is an example for clarification.

```js
import 'normalize.css';

import _ from 'lodash';
import PTs from 'prop-types';
import React from 'react';
import {
  Button,
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
```

The relative imports are then divided into several groupings.  The first group
contains imports of modules that are shared between many areas of the package.
These imports should traverse all the way up to the root of the source directory
before traversing down to the specific module.  In general, these imports will
be prefixed with `../`.  The next group contains imports that are directly
related to the current module.  These imports will be prefixed with `./`.  Each
of these groupings are then sorted alphabetically by package name.  The last
grouping contains only CSS imports.

```js
// Some module two levels deep.

// Absolute imports excluded for brevity.

import User from '../../lib/User';
import Api from '../../services/Api';

import AccountPage from './AccountPage';

import './AccountPage.css';
```
