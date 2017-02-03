'use strict';

const gulp   = require('gulp'),
      eslint = require('gulp-eslint');

const paths = {
  js: {
    src: 'src/assets/js/*.js'
  }
}

gulp.task('js-eslint', _ => {
  return gulp.src(paths.js.src, {base: './'})
    .pipe(eslint({fix: true}))
    .pipe(eslint.format())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', _ => {
  gulp.watch(paths.js.src, ['js-eslint']);
});

gulp.task('default', [
  'js-eslint',
  'watch'
]);
