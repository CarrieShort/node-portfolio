const angular = require('angular');
const portfolioApp = angular.module('portfolioApp', [require('angular-route')]);

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
        templateUrl: '/templates/views/portfolio.html'
      })
      .when('/portfolio/foo', {
          templateUrl: '/templates/views/detail.html'
        })
    .when('/about', {
        templateUrl: '/templates/views/subpage.html'
      })
    .when('/portfolio/:project', {
        templateUrl: '/templates/views/project.html'
      })
    .otherwise({
        template: '<h1>None</h1><p>Nothing has been selected</p>'
    });
    $locationProvider.html5Mode(true);
}]);
