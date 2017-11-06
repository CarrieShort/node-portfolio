module.exports = function(app) {
  app.directive('portfolioPreview', () => {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: '/templates/directives/preview.html'
    };
  });
};
