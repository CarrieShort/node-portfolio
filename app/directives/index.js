module.exports = function(app) {
  require('./navbar.js')(app);
  require('./portfolio-preview.js')(app);
  require('./scroll-to-target.js')(app);
  require('./mixitup.js')(app);
  require('./on-finish-emit.js')(app);
  require('./bg-img.js')(app);
  require('./banner-block.js')(app);
};
