var sass         = require('gulp-sass');
var prefix       = require('gulp-autoprefixer');
var gulp         = require('gulp');
var livereload   = require('gulp-livereload');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(prefix({ cascade: true }))
        .pipe(gulp.dest('build'))
        .on('error', handleErrors)
        .pipe(livereload());
});