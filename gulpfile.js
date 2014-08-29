var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	minifyCss = require('gulp-minify-css');

gulp.task('default', function() {

	gulp.src('css/*.css')
		.pipe(concatCss('style.css'))
		.pipe(minifyCss())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('dest/'))
		.pipe(notify('Done!'));

});

gulp.task('watch', function() {

	gulp.watch( 'css/*.css', ['default'] );

});