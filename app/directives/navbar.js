module.exports = function(app) {
  app.directive('navBar', ['$window', ($window) => {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: '/templates/directives/navbar.html',
      link: function(scope, elements, attrs, controller) {
        var header = angular.element(elements[0]);
        var headerPosition = header[0].offsetTop;
        angular.element($window).bind('scroll', function() {
             if (this.pageYOffset > headerPosition) {
                 header.addClass('sticky');
             } else {
                 header.removeClass('sticky');
             }
        });
      }
    };
  }]);
};
