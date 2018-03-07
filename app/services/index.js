module.exports = function(app) {
  require('./replaceSpace.js')(app);
  require('./loadFilter.js')(app);
};
