var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var livereload = require('gulp-livereload');
	
function style() {
    return (
        gulp
            .src("./scss/*.scss")
 
            // Use sass with the files found, and log any errors
            .pipe(sass())
            .on("error", sass.logError)
 
            // What is the destination for the compiled file?
            .pipe(gulp.dest("./src/css"))
            .pipe(browserSync.stream())
    );
}
	
function reload() {
    browserSync.reload();
}
 
function watch(){	
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    gulp.watch('./scss/*.scss', style);
    gulp.watch("./src/*.html", reload);
}

exports.watch = watch;