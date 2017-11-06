module.exports = function(app) {
  app.directive('navBar', ['$window', ($window) => {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: '/templates/directives/navbar.html',
      link: function(scope, elements, attrs, controller) {
        var navHeight;
        var header = angular.element(elements[0]);
        var headerPosition = header[0].offsetTop;
        var mobileNav = angular.element(document.querySelector('nav ul'));
        angular.element($window).bind('scroll', function() {
             if (this.pageYOffset > headerPosition) {
                 header.addClass('sticky');
             } else {
                 header.removeClass('sticky');
             }
        });
        $('.mobile-menu').on('click',function(e){
          e.preventDefault();
          $('nav ul').slideToggle();
        });
      }
    };
  }]);
};
