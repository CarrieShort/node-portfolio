const angular = require('angular');
const portfolioApp = angular.module('portfolioApp', [require('angular-route'), require('angular-sanitize')]);
require('./services')(portfolioApp);
require('./controllers')(portfolioApp);
require('./directives')(portfolioApp);

portfolioApp.config(['$routeProvider', '$locationProvider', function($routing, $locationProvider) {
  $routing
    .when('/', {
        templateUrl: '/templates/views/home.html',
        controller: 'FeaturedController',
        controllerAs: 'featuredCtrl'
      })
    .when('/portfolio', {
        templateUrl: '/templates/views/portfolio.html',
        controller: 'ProjectController',
        controllerAs: 'projectCtrl'
      })
      .when('/portfolio:*', {
          templateUrl: '/templates/views/portfolio.html',
          controller: 'ProjectController',
          controllerAs: 'projectCtrl'
        })
      .when('/project/:name', {
          templateUrl: '/templates/views/detail.html',
          controller: 'ProjectController',
          controllerAs: 'projectCtrl'
        })
    .when('/about', {
        templateUrl: '/templates/views/subpage.html'
      })
    .when('/history', {
        templateUrl: '/templates/views/history.html'
      })
    .otherwise({
        template: '<h1>None</h1><p>Nothing has been selected</p>'
    });
    $locationProvider.html5Mode(true);
}]);
