const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('webpack:dev', () => {
  gulp.src('app/js/entry.js')
  .pipe(webpack({
    devtool: 'source-map'
  }))
  .pipe(gulp.dest('bundle.js'));
});

gulp.task('default', ['webpack:dev']);
