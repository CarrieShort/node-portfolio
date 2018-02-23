module.exports = function(app) {
  app.directive('bgImg', function() {
    return {
        link: function(scope, element, attr) {
          var url = attr.bgImg;
          element.css({
            'background-image': 'url(' + url +')'
          });
        }
    }
  });
}
