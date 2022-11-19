
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { watch } = require('gulp');
gulp.task('sass', function(){
  return gulp.src('assets/sass/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('assets/css'))
});
gulp.task('watch', () => {
  gulp.watch('assets/sass/**/*.scss', (done) => {
      gulp.series(['clean', 'sass'])(done);
  });
});
