var gulp, shell;

gulp = require('gulp');

shell = require('gulp-shell');

gulp.task('default', function() {
  return gulp.src('').pipe(shell('DEBUG=coffeepress:* nodemon bin/www'));
});
