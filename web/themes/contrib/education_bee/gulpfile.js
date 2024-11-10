const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const paths = {
  styles: {
    src: 'scss/**/*.scss',
    dest: 'css/'
  }
};

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
}

exports.styles = styles;
exports.watch = watch;
