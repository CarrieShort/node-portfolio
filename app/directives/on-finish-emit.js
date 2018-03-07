module.exports = function(app) {
  app.directive('onFinishEmit', function($timeout, $rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            if (scope.$last === true) {

              setTimeout(function() {   $rootScope.$broadcast(attr.onFinishEmit); }, 1);
            }
        }
    }
  });
}
