module.exports = function(app) {
  app.service('loadFilter', function () {
    this.current = function () {
      return localStorage.getItem('filter') || 'all';
    };
    this.updateFilter = function (filter) {
      localStorage.setItem('filter', filter);
    };
  });
};
