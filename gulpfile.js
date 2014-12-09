var del = require('del'),
    gulp = require('gulp'),
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

if (taskName === 'dist') {
  dirName = 'dist';
} else if (taskName === 'examples' || taskName === 'watch') {
  dirName = 'examples/assets/' + pkg.name;
} else {
  throw 'Did not understand task "' + taskName + '"';
}


/*************************
 * recipes
 *************************/
gulp.task('clean', function(callback) {
  del([dirName], callback);
});

gulp.task('sass', function() {
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

gulp.task('js', function() {
  return gulp.src('src/js/init.js')
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

function build() {
  gulp.start('sass', 'cssmin', 'js', 'uglify');
}

/***********************
 * public tasks
 ***********************/
gulp.task('dist', ['clean'], function() {
  // your 'dist' task goes here
  build()
});

gulp.task('examples', ['clean'], function() {
  // your 'examples' task goes here
  build()
});

gulp.task('watch', function() {
  // watch .scss files
  gulp.watch('src/sass/**/*.scss', ['sass', 'cssmin']);

  // watch .js files
  gulp.watch('src/js/**/*.js', ['js', 'uglify']);
});
