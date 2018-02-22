var mixitup = require('mixitup');

module.exports = function(app) {
 app.directive('mixItUp', ($timeout, $rootScope) => {
   return {
     restrict: 'A',
     scope: {
       entities: '='
     },
     link: function(scope, element, attrs, controller) {
               scope.$on('projectsLoaded', function(){
                 var mixer = mixitup(element);
                 console.log(scope.$parent.projectCtrl.filter)
                 if (scope.$parent.projectCtrl.filter) {
                   setTimeout(function() { mixer.filter('.category-' + scope.$parent.projectCtrl.filter); }, 10);
                 }
                 $('.filter ul li').click(function() {
                   history.pushState(null, null, '/portfolio#' + $(this).attr('data-filter').split('.category-').pop());
                 });
               });
     }
   }
 });
}
