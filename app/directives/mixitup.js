var mixitup = require('mixitup');

module.exports = function(app) {
 app.directive('mixItUp', ($timeout, $rootScope) => {
   return {
     restrict: 'A',
     scope: {
       entities: '='
     },
     link: function(scope, element, attr) {
               scope.$on('projectsLoaded', function(){
                 var mixer = mixitup(element);
                 console.log('i heard a broadcast');
               });
     }
   }
 });
}
