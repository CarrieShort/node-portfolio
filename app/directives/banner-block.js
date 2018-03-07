module.exports = function(app) {
  app.directive('bannerBlock', ['loadFilter', 'replaceSpace', (loadFilter, replaceSpace) => {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: '/templates/directives/banner-block.html',
      link: function(scope, element, attr) {
        scope.updateFilter = loadFilter.updateFilter;
      }
    };
  }]);
};
