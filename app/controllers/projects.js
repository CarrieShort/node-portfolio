module.exports = function(app) {
  app.controller('ProjectController', ['$http', '$location', function($http, $location) {
    this.getProject = function() {
      var projectPath = $location.path().split('/').pop();
      $http({
        method: 'GET',
        url: 'api/project/' + projectPath
      }).then((res) => {
        this.projectData = res.data;
      }, (response) => {
        console.log(response);
      });
    };
    this.getAll = function() {
      $http({
        method: 'GET',
        url: 'api/projects'
      })
      .then((res) => {
        this.all = res.data;
      }, (response) => {
        console.log(response);
      });
    };
  }]);
};
