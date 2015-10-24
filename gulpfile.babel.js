import gulp         from 'gulp';
import gutil        from 'gulp-util';
import livereload   from 'gulp-livereload';

import express     from 'express';
import liveConnect from 'connect-livereload';
import path        from 'path';

let app = express();

gulp.task('css', () => {
  return gulp.src('./css/*.css')
    .pipe(livereload())
});

gulp.task('js', () => {
  return gulp.src('./js/*.js')
    .pipe(livereload())
});

gulp.task('server', (done) => {
  app.use(liveConnect());
  app.use(express.static(path.resolve('.')));
  app.listen(3000, () => {
    gutil.log('Listening on port 3000');
    done();
  });
});

gulp.task('watch', (done) => {
  livereload.listen({start: true});
  gulp.watch('./css/*.css', ['jade']);
  gulp.watch('./js/*.js', ['js']);
  done();
});

gulp.task('dev', ['server', 'watch']);
gulp.task('default', ['dev']);
