module.exports = function(app) {
  require('./featured-controller')(app);
  require('./projects')(app);
};
