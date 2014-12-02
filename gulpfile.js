var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
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

gulp.task('sass', ['clean'], function() {
  return gulp.src('src/sass/style.scss')
    .pipe(sass())
    .pipe(rename(pkg.name + '.css'))
    .pipe(gulp.dest(dirName + '/css'));
});

gulp.task('cssmin', ['sass'], function() {
  return gulp.src(dirName + '/css/' + pkg.name + '.css')
    .pipe(cssmin())
    .pipe(rename(pkg.name + '.min.css'))
    .pipe(gulp.dest(dirName + '/css'));
});

gulp.task('js', ['clean'], function() {
  return gulp.src('src/js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(browserify())
    .pipe(rename(pkg.name + '.js'))
    .pipe(gulp.dest(dirName + '/js'));  
});

gulp.task('uglify', ['js'], function() {
  return gulp.src(dirName + '/js/' + pkg.name + '.js')
    .pipe(uglify())
    .pipe(rename(pkg.name + '.min.js'))
    .pipe(gulp.dest(dirName + '/js'));  
});

/***********************
 * public tasks
 ***********************/
var buildTasks = ['sass', 'cssmin', 'js', 'uglify'];

gulp.task('dist', buildTasks, function() {
  // your 'dist' task goes here
});

gulp.task('examples', buildTasks, function() {
  // your 'examples' task goes here
});
