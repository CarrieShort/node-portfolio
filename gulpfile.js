const gulp = require('gulp');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const minifyCss = require('gulp-minify-css');

gulp.task('webpack:dev', () => {
  gulp.src(['./app/app.js', 'app/assets/js/**/*.js'])
  .pipe(webpack({
    devtool: 'source-map',
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', () => {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:dev', () => {
  return gulp.src('app/assets/sass/**/*.scss')
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(maps.write())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('image:dev', () => {
  return gulp.src('app/assets/images/*')
  .pipe(gulp.dest('./build/images'));
});

gulp.task('build:dev', ['webpack:dev', 'static:dev', 'sass:dev', 'image:dev']);
gulp.task('default', ['build:dev']);
