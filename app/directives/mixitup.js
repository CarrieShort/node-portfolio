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

       // scope.$watch('entities', function($last){
       //   var val = scope.entities || null;
       //   console.log('this is val', val);
       //      if (val) {
       //
       //        var mixer = mixitup($elm);
       //        console.log(scope.entities);
       //           console.log('mixitup reload');
       //           console.log(scope.entities.length);
       //
       //
       //      }
       //    }, true);
     }
   }
 });
}
