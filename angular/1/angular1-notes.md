# Angular 1 Notes

See https://angularjs.org/ for details about AngularJS 1.

See https://docs.angularjs.org/guide for the developer's guide.

See https://docs.angularjs.org/api for the API reference.

## From Lynda.com's Learning AngularJS 1

See https://www.lynda.com/AngularJS-tutorials/Up-Running-AngularJS/154414-2.html
for details.

**What is AngularJS?**

* JavaScript framework
* For creating Single Page Applications (SPAs)

**Why Use AngularJS?**

* Advantages
  - Excellent templating engine
  - Handles DOM "masterfully"
  - Easy data manipulation
* MVC Architecture
  - Models
  - Views
  - Controllers
* Core Features
  - Directives
    + Basically, commands that start with "ng-"
  - Data binding
  - Dependency Injection
  - Filters
  - Modules
  - Routes
  - Services
  - Controllers
  
Angular uses an MV* (MV star) or an MVW (MV whatever) architecture.


### Controllers

**js/controllers.js**

```js
var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', ..., function MyController($scope, ...) {
  // ...
}]);
```

**index.html**

```html
<!DOCTYPE html>
<html ng-app="myApp">
  <head>...</head>
  <body>
    <div ng-controller="MyController">
    </div>
  </body>
</html>
```

### ngRepeat Directive

```html
  <ul>
    <li ng-repeat="item in list">
      {{ item.name }}
    </li>
  </ul>
```

### ngSrc Directive

```html
  <img ng-src="images/{{ item.url_thumbnail }}" .../>
```

### Filters

```html
  {{ item.name | uppercase }}
```

### Routing

**index.html**

```html
...
    <script src="angular-route.js"></script>
...
    <div ng-view></div>
```

**app.js**

```js
var myApp = angular.module('myApp', [
  'ngRoute',
  'myControllers',
  ...
]);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/list', {
      controller: 'ListController',
      templateUrl: 'partials/list.htm'
    }).
    when('/details/:id', {
      controller: 'DetailsController',
      templateUrl: 'partials/details.htm'
    }).
    ...
    otherwise({
      redirectTo: '/list'
    });
}]);
```

**controllers.js**

```js
var myControllers = angular.module('myControllers', []);

myControllers.controller('ListController', [..., function (...) {
  ...
});

myControllers.controller('DetailsController', ['$routeParams', ..., function ($routeParams, ...) {
  ...
  // Do something with `$routeParams.id`
  ...
});
```

### Animation

**index.html**

```html
...
    <script src="angular-animate.js"></script>
...
```

**app.js | controllers.js**

var ... = angular.module('...', [
  'ngAnimate',
  ...
]);

**index.html | partials/*.htm**

```html
...
  <li class="thing" ng-animate="'animate'" ...>
  </li>
...
```

**CSS**

```css
.thing.ng-enter.ng-enter-active,
.thing.ng-leave {
  ...
}

.thing.ng-leave.ng-leave-active,
.thing.ng-enter {
  ...
}
```

## From Lynda.com's AngularJS 1.x Tips and Tricks

### Performance

**ng-if vs ng-show**

```html
<div ng-show="$ctrl.enabled">...</div>
<!-- vs -->
<div ng-if="$ctrl.enabled">...</div>
```

| Action                                   | ng-show/ng-hide | ng-if |
| ---------------------------------------- | --------------- | ----- |
| Renders element when false               | true            | false |
| Adds/removes `display: none`             | true            | false |
| Re-initialize components when displaying | false           | true  |

