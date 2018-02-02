module.exports = function(app) {
  require('./navbar.js')(app);
  require('./portfolio-preview.js')(app);
  require('./scroll-to-target.js')(app);
};
