module.exports = function(app) {
  app.controller('FeaturedController', ['$http', function($http) {
    console.log('controller activated');
    this.go = function() {
      console.log('go');
    };
    this.getFeatured = function() {
      console.log('getFeatured runs');
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
