var mixitup = require('mixitup');

module.exports = function(app) {
 app.directive('mixItUp', ['loadFilter', 'replaceSpace', (loadFilter, replaceSpace, $timeout, $rootScope) => {
   return {
     restrict: 'A',
     scope: {
       entities: '='
     },
     link: function(scope, element, attrs, controller) {
               scope.$on('projectsLoaded', function(){
                 var filter = replaceSpace(loadFilter.current()).toLowerCase();
                 var mixer = mixitup(element, {
                   load: {
        filter: '.category-' + filter
    }
                 });
                 $('.filter ul li').click(function() {
                   var newFilter = $(this).attr('data-filter').split('.category-').pop();
                   loadFilter.updateFilter()
                   localStorage.setItem('filter', newFilter);
                 });
               });
     }
   }
 }]);
}
