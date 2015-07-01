'use strict';

var argv = require('yargs').argv;
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');
var ngTemplateCache = require('gulp-angular-templatecache');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var rjs = require('requirejs');
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglifyjs');

gulp.task('clean:public', function (cb) { return del('./public/assets', cb); });
gulp.task('clean:fonts', function (cb) { return del('./public/assets/fonts', cb); });
gulp.task('clean:images', function (cb) { return del('./public/assets/img', cb); });
gulp.task('clean:js', function (cb) { return del('./public/assets/js', cb); });
gulp.task('clean:css', function (cb) { return del('./public/assets/css', cb); });

gulp.task('copy:fonts', [ 'clean:fonts' ], function() {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./public/assets/fonts'));
});

gulp.task('copy:images', [ 'clean:images' ], function() {
  return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./public/assets/img'));
});

gulp.task('build:views', function() {
  return gulp.src('./src/views/**/*.html')
    .pipe(ngTemplateCache({
      moduleSystem: 'RequireJS',
      module: 'App.Templates',
      standalone: true
    }))
    .pipe(gulp.dest('./src/js'))
      .on('finish', function() {
        gulp.start([ 'build:js' ]);
      });
});

gulp.task('build:js', [ 'clean:js' ], function(cb) {
  var options = {
    baseUrl: './src/js',
    mainConfigFile: './src/js/main.js',
    out: './public/assets/js/main.min.js',
    optimize: 'none',
    include: [ 'main' ],
    name: 'almond',
    generateSourceMaps: false,
    preserveLicenseComments: false,
    wrapShim: true
  };

  rjs.optimize(options, function() {
    if (argv.verbose) {
      gutil.log(arguments['0']);
    }

    if (argv.production) {
      gulp.src('./public/assets/js/main.min.js')
        .pipe(ngAnnotate())
        .pipe(uglify('main.min.js'))
        .pipe(gulp.dest('./public/assets/js'))
          .on('finish', cb);
    } else {
      gulp.src('./public/assets/js/main.min.js')
        .pipe(gulp.dest('./public/assets/js'))
          .on('finish', cb);
    }
  });
});

gulp.task('build:css', function() {
  return sass('./src/scss/main.scss', {
        style: 'compressed',
        loadPath: './bower_components'
      })
      .on('error', notify.onError(function(err) {
        return 'CSS Error:' + err.message;
      }))
    // .pipe(autoprefixer({
    //     browsers: {
    //       versions: ['last 2 versions']
    //     },
    //     cascade: false,
    //     remove: true
    //   }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(notify('CSS Success: <%= file.relative %>'));
});

gulp.task('lint:js', function() {
  return gulp.src([ './src/js/**/*.js', '!./src/js/templates.js' ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch('./src/views/**/*.html', [ 'build:views' ]);
  gulp.watch('./src/js/**/*.js', [ 'build:js' ]);
  gulp.watch('./src/scss/**/*.scss', [ 'build:css' ]);
  gulp.watch('./src/img/**/*.scss', [ 'copy:images' ]);
  gulp.watch('./src/fonts/**/*.scss', [ 'copy:fonts' ]);
})

gulp.task('build', [ 'clean:public' ], function(cb) {
  gulp.start([ 'build:views', 'build:css', 'copy:fonts', 'copy:images' ], cb);
});

gulp.task('default', [ 'build' ], function() {
  gulp.start([ 'watch' ]);
});
