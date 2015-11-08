"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    del = require('del');

//gulp.task("concatScripts", function() {
//    return gulp.src([
//
//            'js/script.js'
//        ])
//        .pipe(maps.init())
//        .pipe(concat('app.js'))
//        .pipe(maps.write('./'))
//        .pipe(gulp.dest('js'));
//});

//gulp.task("minifyScripts", ["concatScripts"], function() {
//    return gulp.src("js/app.js")
//        .pipe(uglify())
//        .pipe(rename('app.min.js'))
//        .pipe(gulp.dest('js'));
//});

gulp.task('compileSass', function() {
    return gulp.src("scss/application.scss")
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write('./'))
        .pipe(gulp.dest('css'));
});

gulp.task('watchFiles', function() {
    gulp.watch('scss/**/*.scss', ['compileSass']);

});

gulp.task('clean', function() {
    del(['dist', 'css/application.css*']);
});

gulp.task("build", ['compileSass'], function() {
    return gulp.src(["css/application.css", 'index.html',
            "images/**", "fonts/**"], { base: './'})
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

gulp.task("default", ["clean"], function() {
    gulp.start('build');
});
