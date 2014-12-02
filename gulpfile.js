var gulp = require('gulp'),
    clean = require('gulp-clean'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    pkg = require('./package.json');

// config
var taskName = process.argv[process.argv.length - 1],
    dirName = null;

if (taskName === 'dist') dirName = 'dist';
else if (taskName === 'examples') dirName = 'examples/assets/' + pkg.name;
else throw 'Did not understand task "' + taskName + '"';


/*************************
 * recipes
 *************************/
gulp.task('clean', function() {
  return gulp.src(dirName, {read: false})
    .pipe(clean({force: true}));
});

gulp.task('js', ['clean'], function() {
  return gulp.src('src/js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(browserify())
    .pipe(uglify())
    .pipe(rename(pkg.name + '.js'))
    .pipe(gulp.dest(dirName + '/js'));  
});


/***********************
 * public tasks
 ***********************/
var buildTasks = ['js'];

gulp.task('dist', buildTasks, function() {
  // your 'dist' task goes here
});

gulp.task('examples', buildTasks, function() {
  // your 'examples' task goes here
});
