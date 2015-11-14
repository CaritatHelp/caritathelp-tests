var gulp = require('gulp'),
    rename = require('gulp-rename'),
    changed = require('gulp-changed'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    runSequence = require('run-sequence'),
    shell = require('gulp-shell'),
    browserSync = require('browser-sync');

gulp.task('styles', function(){
  gulp.src(['less/main.less'])
    .pipe(less())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css/'));
  gulp.src(['assets/css/main.min.css'])
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts', function(){
  gulp.src(['scripts/main.js'])
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));
  gulp.src(['assets/js/main.min.js'])
    .pipe(gulp.dest('_site/assets/js/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('jekyll-build', shell.task(['jekyll build --watch']));

gulp.task('serve', function() {
  browserSync({
    server: {
        baseDir: '_site'
      },
  });
});

gulp.task('reload', function () {
  browserSync.reload();
});

gulp.task('watch', function(){
  gulp.watch("less/**/*.less", ['styles']);
  gulp.watch("scripts/**/*.js", ['scripts']);
  gulp.watch('_site/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['jekyll-build', 'serve', 'watch'], function(){
});