const angular = require('angular');
const portfolioApp = angular.module('portfolioApp', [require('angular-route')]);

require('./directives')(portfolioApp);

portfolioApp.config(['$routeProvider', function($routing) {
  $routing
    .when('/', {
        templateUrl: 'templates/views/home.html'
      })
    .when('/portfolio', {
        templateUrl: 'templates/views/portfolio.html'
      })
    .when('/about', {
        templateUrl: 'templates/views/subpage.html'
      })
    .when('/portfolio/:project', {
        templateUrl: 'templates/views/project.html'
      })
    .otherwise({
        template: '<h1>None</h1><p>Nothing has been selected</p>'
    });
}]);
