var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var buildProduction = utilities.env.production;
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

// take all SASS from styles, build and move to tmp/css

gulp.task('buildSASS', function() {
  return gulp.src(['styles/*.scss'])
    .pipe(sourcemaps.init()) 
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./tmp/css'));
});

// take all CSS from styles, concat and move to tmp/css

gulp.task('buildCSS', function() {
  return gulp.src(['styles/*.css'])
    .pipe(concatCss("basicstyles.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./tmp/css'));
});

// take all css files from inside tmp/css (regardless of made with SASS or plain CSS), 
// and put htem in build/css to keep separate from vendor.css from bower.

gulp.task('concatenateAllStyles', function(){
  return gulp.src(['tmp/css/*.css'])
    .pipe(concatCss("finalstyles.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/css'));
});

gulp.task("clean", function(){
  return del(['build/js', 'build/css', 'tmp']);
});

gulp.task('build', ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
  gulp.start('styles');
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });

  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
  gulp.watch(['*.html'], ['htmlBuild']); // html changes, reload.
  gulp.watch(['styles/*'], ['styles']);

});

gulp.task('htmlBuild', function(){
  browserSync.reload();
});

// uncomment this version for CSS only
gulp.task("pullStyles", ["buildCSS"], function(){
  return gulp.start('concatenateAllStyles');
});

// uncomment this version for SASS and CSS
// gulp.task("pullStyles", ["buildCSS", "buildSASS"], function(){
//   return gulp.start('concatenateAllStyles');
// });

gulp.task('styles', ['pullStyles'], function(){
  browserSync.reload();
});

gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});

gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
});

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});