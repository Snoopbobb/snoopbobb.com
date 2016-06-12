var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  return gulp.src([
  		'bower_components/jquery/dist/jquery.js', 
  		'bower_components/bootstrap/dist/js/bootstrap.js'
  		// 'js/*.js' to check entire js folder for changes
  		])
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});

gulp.task('css', function () {
  return gulp.src([
      'bower_components/bootstrap/dist/css/bootstrap.css', 
      // 'bower_components/animate.css/animate.css',
      'bower_components/fontawesome/css/font-awesome.css'
      // 'css/*.css'  To check entire css folder for changes
      ])
    .pipe(concatCss("build.css"))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	// gulp.watch(['./js/*.js'], ['scripts']); watches entire js folder for changes
	gulp.watch(['./scss/*.scss'], ['sass']);
  // gulp.watch(['./css/*.css'], ['css']); Watches entire css folder for changes
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass', 'scripts', 'css', 'watch']);