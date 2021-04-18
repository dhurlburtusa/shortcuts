# Ionic React Notes

Ionic React is native React version of Ionic Framework.

Ionic React projects are just like React projects, leveraging react-dom and with setup normally found in a Create React App (CRA) app. For routing and navigation, React Router is used under the hood. Compatible with React version 16.8 and above.

Ionic React projects can be deployed to native iOS, Android, Electron, and the web as a Progressive Web App, using Capacitor, a modern native runtime. All with one shared codebase.


## React Navigation

IonReactRouter uses the popular React Router library under the hood. With Ionic and React Router, you can create multi-page apps with rich page transitions. Everything you know about routing using React Router carries over into Ionic React.

```jsx
import {
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

...
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/a">
          <RouteViewA />
        </Route>
        <Route path="/b">
          <RouteViewB />
        </Route>
        <Route exact path="/">
          <Redirect to="/a" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
...
```

See https://ionicframework.com/docs/react/navigation for details.
