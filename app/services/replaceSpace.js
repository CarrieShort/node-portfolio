module.exports = function(app) {
  app.factory('replaceSpace', () => {
    return function(input, replacementCharacter){
        return input.replace(/\s+|\.+/g,replacementCharacter);
    }
  });
};
