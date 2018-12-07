var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

var sassTask = function() {
  return gulp.src('source/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('distribute/css'))
    .pipe(connect.reload());
};
var copyTask = function() {
  return gulp.src('source/Headers/**/*.html')
    .pipe(gulp.dest('distribute'))
    .pipe(connect.reload());
};
var connectTask = function(done) {
  connect.server({
    root: 'distribute',
    port: '3000',
    host: 'localhost',
    livereload: true,
  });
  done()
};
var watchTask = function(done) {
  gulp.watch('source/styles/**/*.scss', gulp.series('sass'));
  gulp.watch('source/Headers/**/*.html', gulp.series('copy'));
  done();
};
var prefix = function() {
  return gulp.src('source/styles/**/*.scss')
  .pipe(autoprefixer({
      browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
      cascade: false
  }))
  .pipe(gulp.dest('distribute'))
};

gulp.task('sass', sassTask);
gulp.task('copy', copyTask);
gulp.task('connect', connectTask);
gulp.task('watch', watchTask);
gulp.task('prefix', prefix);
gulp.task('default', gulp.series('sass', 'prefix', 'copy', 'watch', 'connect'));
