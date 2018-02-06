module.exports = function(app) {
  app.directive('footer', () => {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: '/templates/directives/footer.html'
    };
  });
};
