'use strict';

const gulp   = require('gulp'),
      eslint = require('gulp-eslint');

const paths = {
  js: {
    src: 'src/assets/js/*.js'
  }
}

gulp.task('js-eslint', _ => {
  return gulp.src(paths.js.src)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch', _ => {
  gulp.watch(paths.js.src, ['js-eslint']);
});

gulp.task('default', [
  'js-eslint',
  'watch'
]);
