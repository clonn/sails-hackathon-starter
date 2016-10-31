'use strict';

//////////////////////
// devDependencies
//////////////////////
var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  uglifycss = require('gulp-uglifycss'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  less = require('gulp-less'),
  del = require('del');


//////////////////////
// config
//////////////////////
var config = {

  scssInput: 'assets/styles/**/*.scss',
  cssOutput: '.tmp/public/styles',

  jsInput: 'assets/js/*.js',
  jsOutput: '.tmp/public/js',

  sass: function() {
    return gulp
      .src(config.scssInput)
      .pipe(sass({
          outputStyle: 'compressed'
        })
        .on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['> 1%', 'IE 7'],
        cascade: false
      }))
      .pipe(gulp.dest(config.cssOutput))
      .pipe(browserSync.stream());
  },

  js: function() {
    return gulp
      .src(config.jsInput)
      .pipe(babel({compact: false}))
      .pipe(uglify())
      .pipe(gulp.dest(config.jsOutput))
      .pipe(browserSync.stream());
  },

  less: function() {
    return gulp
      .src(['assets/styles/material/material.less', 'assets/styles/material/material_colors.less'])
      .pipe(less())
      .pipe(uglifycss({
        // "maxLineLen": 80,
        "uglyComments": true
      }))
      .pipe(gulp.dest(config.cssOutput))
      .pipe(browserSync.stream());
  },

  clean: function() {
    del.sync(['.tmp/public/**', '!.tmp/public']);
  },

  copy: function() {
    return gulp
      .src(['assets/**', 'assets/styles/**/*.css', 'assets/js/**', 'assets/fonts/**'])
      .pipe(gulp.dest('.tmp/public'));
  },

  watch: function() {
    browserSync.init({
      proxy: "localhost:1337"
    });
    gulp.watch(config.scssInput, ['onlysass']);
    gulp.watch(config.jsInput, ['js']);
    gulp.watch('views/**/*.jade').on('change', browserSync.reload);
  }
};

//////////////////////
// tasks order
//////////////////////
gulp.task('clean', config.clean);
gulp.task('copy', ['clean'], config.copy);
gulp.task('sass', ['copy'], config.sass);
gulp.task('onlysass', config.sass);
gulp.task('less', ['sass'], config.less);
gulp.task('js', ['less'], config.js);
gulp.task('watch', ['js'], config.watch);
gulp.task('default', ['watch']);

//////////////////////
// build
//////////////////////
gulp.task('build', ['js']);
