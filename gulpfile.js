'use strict';

var babelify = require('babelify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    del = require('del'),
    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    source = require('vinyl-source-stream');


// ============================================================================
// HELPER METHODS
// ============================================================================

function makeTask(displayName, fn) {
  if (displayName) fn.displayName = displayName;
  return fn;
}


function clean(dirname) {
  return makeTask('clean: ' + dirname, function(done) {
    return del(dirname, done);
  });
}


function browserifyStream(pathname, opts) {
  var opts = opts || {};

  // init browserify
  var b = browserify({
    entries: [pathname],
    paths: ['./'].concat(opts.paths || []),
    extensions: [].concat(opts.extensions || [])
  });

  // apply methods
  ['external', 'transform'].forEach(function(method) {
    if (!opts[method]) return;

    [].concat(opts[method]).forEach(function(args) {
      b[method].apply(b, [].concat(args));
    });
  });

  // NOTE: run jshint here to avoid errors from buffer()
  return b
    .bundle()
    .pipe(source('tmpfile'))
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default', {verbose: true}))
    .pipe(buffer());
}


// ============================================================================
// PRIVATE TASKS
// ============================================================================

function buildJs(dirname) {
  return makeTask('build-js: ' + dirname, function() {
    return browserifyStream('./build-targets/seed.js')
      .pipe(plugins.babel())
      .pipe(plugins.rename('seed.js'))
      .pipe(gulp.dest(dirname))
      .pipe(plugins.uglify())
      .pipe(plugins.rename('seed.min.js'))
      .pipe(gulp.dest(dirname));
  });
}


function buildCss(dirname) {
  return makeTask('build-css: ' + dirname, function() {
    return gulp.src('./src/sass/style.scss')
      .pipe(plugins.sass({outputStyle: 'expanded'}))
      .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .on('error', function(err) {console.log(err.message);})
      .pipe(plugins.rename('seed.css'))
      .pipe(gulp.dest(dirname))
      .pipe(plugins.cssmin({advanced: false}))
      .pipe(plugins.rename('seed.min.css'))
      .pipe(gulp.dest(dirname));
  });
}


function buildReact(dirname) {
  return makeTask('build-react: ' + dirname, function() {
    return browserifyStream(
      './build-targets/seed-react.js',
      {
        extensions: ['.jsx'],
        external: ['react'],
        transform: [
          // handle export syntax
          babelify.configure({plugins: ['add-module-exports']})
        ]
      })
      .pipe(plugins.replace('require("react")', "window.React"))
      .pipe(plugins.rename('seed-react.js'))
      .pipe(gulp.dest(dirname))
      .pipe(plugins.uglify())
      .pipe(plugins.rename('seed-react.min.js'))
      .pipe(gulp.dest(dirname));
  });
}


function buildE2eTests() {
  return makeTask('build-e2e-tests', function() {
    return browserifyStream(
      './build-targets/e2e-tests.js',
      {
        extensions: ['.jsx'],
        transform: [babelify.configure()]
      })
      .pipe(plugins.rename('tests.js'))
      .pipe(gulp.dest('./e2e-tests'));
  });
}


// ============================================================================
// PUBLIC TASKS
// ============================================================================

gulp.task('build-examples', gulp.series(
  clean('./examples/assets/js-seed'),
  gulp.parallel(
    buildJs('./examples/assets/js-seed/js'),
    buildCss('./examples/assets/js-seed/css'),
    buildReact('./examples/assets/js-seed/react')
  )
));


gulp.task('build-dist', gulp.series(
  clean('./dist'),
  gulp.parallel(
    buildJs('./dist/js'),
    buildCss('./dist/css'),
    buildReact('./dist/react')
  )
));


gulp.task('build-e2e-tests', gulp.series(
  clean('./e2e-tests/tests.js'),
  buildE2eTests()
));


gulp.task('build-all', gulp.parallel(
  'build-examples',
  'build-dist',
  'build-e2e-tests'
));
