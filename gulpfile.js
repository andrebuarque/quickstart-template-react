var gulp = require('gulp');
var concat = require('gulp-concat');
var strip = require('gulp-strip-comments');
var removeEmptyLines = require('gulp-remove-empty-lines');

gulp.task('scripts', function() {
  return gulp.src([
  		'./src/assets/js/jquery-1.10.2.js', 
  		'./src/assets/js/bootstrap.min.js', 
  		'./src/assets/js/bootstrap-checkbox-radio.js',
      './src/assets/js/bootstrap-notify.js',
      './src/assets/js/paper-dashboard.js',
      './src/assets/js/demo.js'
  	])
    .pipe(concat('scripts.js'))
    .pipe(strip())
    .pipe(removeEmptyLines())
    .pipe(gulp.dest('./public'));
});

gulp.task('css', function() {
  return gulp.src([
      './src/assets/css/bootstrap.min.css', 
      './src/assets/css/animate.min.css', 
      './src/assets/css/paper-dashboard.css',
      './src/assets/css/demo.css',
      './src/assets/css/themify-icons.css'
    ])
    .pipe(concat('styles.css'))
    .pipe(removeEmptyLines())
    .pipe(gulp.dest('./src'));
});

gulp.task('default', ['scripts', 'css']);