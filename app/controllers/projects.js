module.exports = function(app) {
  app.controller('ProjectController', ['$http', '$location', '$scope', 'replaceSpace', function($http, $location, $scope, replaceSpace) {
    this.helpers = {};
    this.helpers.replaceSpace = replaceSpace;
    console.log(this.helpers.replaceSpace)
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
        this.all.keywordCount = {};
        for(i = 0; i < this.all.length; i += 1) {
          this.all[i].classes = [];
          for(j = 0; j < this.all[i].keywords.length; j += 1) {
            this.all[i].classes.push('category-' + replaceSpace(this.all[i].keywords[j], '-'));
            this.all.keywordCount[this.all[i].keywords[j]] = (this.all.keywordCount[this.all[i].keywords[j]] || 0) + 1;
          }
        }

      }, (response) => {
        console.log(response);

      });
    };
  }]);
};
