const angular = require('angular');
const portfolioApp = angular.module('portfolioApp', [require('angular-route'), require('angular-sanitize')]);

require('./controllers')(portfolioApp);
require('./directives')(portfolioApp);
require('./services')(portfolioApp);

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
      .when('/portfolio/:name', {
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
    .when('/portfolio/:project', {
        templateUrl: '/templates/views/project.html'
      })
    .otherwise({
        template: '<h1>None</h1><p>Nothing has been selected</p>'
    });
    $locationProvider.html5Mode(true);
}]);
