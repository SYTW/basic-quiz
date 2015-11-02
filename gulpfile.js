var gulp, shell;

gulp = require('gulp');

shell = require('gulp-shell');

gulp.task('default', function() {
  return gulp.src('').pipe(shell('DEBUG=quiz:* nodemon bin/www'));
});

gulp.task('html', function() {
  return gulp.src('').pipe(shell('pandoc --standalone README.md -o README.html'));
});
