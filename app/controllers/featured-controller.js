module.exports = function(app) {
  app.controller('FeaturedController', ['$http', function($http) {
    this.go = function() {
    };
    this.getFeatured = function() {
      $http({
        method: 'GET',
        url: 'api/projects/featured'
      })
      .then((res) => {
        this.all = res.data;
      }, (response) => {
        console.log(response);
      });
    };
  }]);
};
