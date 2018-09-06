const gulp          = require ('gulp');
const sass          = require ('gulp-sass');
const concat        = require ('gulp-concat');
const rename        = require ('gulp-rename');


gulp.task('sass-compile', function(){
  return gulp.src('assets/src/scss/**/*.scss')
  .pipe(sass())
  .pipe(rename('base.css'))
  .pipe(gulp.dest('assets/dist/css'))
})

gulp.task('js-compile', function(){
  return gulp.src('assets/src/js/**/*.js')
  //.pipe(concat('base.js'))
  .pipe(gulp.dest('assets/dist/js'))
})