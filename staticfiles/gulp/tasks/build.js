var gulp = require('gulp');

gulp.task('build', ['browserify', 'sass', 'assets', 'templates', 'transform-jsx'], function(){
    global.isBuilding = false;
});
