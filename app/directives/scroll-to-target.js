module.exports = function(app) {
 app.directive('scrollToTarget', () => {
   return {
     restrict: 'A',
     scope: {
       scrollTo: '@'
     },
     link: function(scope, $elm, attr) {
       $elm.on('click', function() {
                $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top - 50 }, 500);
            });
     }
   }
 });
}
