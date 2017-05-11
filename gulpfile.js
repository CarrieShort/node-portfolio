const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('webpack:dev', () => {
  gulp.src('./app/js/entry.js')
  .pipe(webpack({
    devtool: 'source-map'
  }))
  .pipe(gulp.dest('bundle.js'));
});

gulp.task('static:dev', () => {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('build:dev', ['webpack:dev', 'static:dev']);
gulp.task('default', ['build:dev']);
