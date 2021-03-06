"use strict";

var gulp = require('gulp'),

    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    del = require('del');


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
