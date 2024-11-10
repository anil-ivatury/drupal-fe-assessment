const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Use Dart Sass
const sourcemaps = require('gulp-sourcemaps');

// Define paths
const paths = {
  scss: './**/*.scss',
  css: './'
};

// Task to compile SCSS to CSS with sourcemaps
gulp.task('sass', function () {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.css));
});

// Watch task
gulp.task('watch', function () {
  gulp.watch(paths.scss, gulp.series('sass'));
});

// Default task
gulp.task('default', gulp.series('sass', 'watch'));
