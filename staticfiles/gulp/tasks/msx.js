var gulp = require('gulp');
var msx = require('gulp-msx');
var config = require('../config').jsx;

gulp.task('transform-jsx', function() {
  return gulp.src(config.src)
    .pipe(msx())
    .pipe(gulp.dest(config.dest));
});
