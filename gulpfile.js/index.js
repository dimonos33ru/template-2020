// const path = require('./path');

global.$ = {
	gulp: require('gulp'),
	sass: require('gulp-sass'),
	autoprefixer: require('gulp-autoprefixer'),
	cleanCSS: require('gulp-clean-css'),
	csso: require('gulp-csso'),
	purgecss: require('gulp-purgecss'),
	sourcemaps: require('gulp-sourcemaps'),
	notify: require('gulp-notify'),
	del: require('del'),
	browserSync: require('browser-sync').create(),
	uglify: require('gulp-uglify'),
	babel: require('gulp-babel'),
	concat: require('gulp-concat'),
	panini: require('panini'),
	htmlValidator: require('gulp-w3c-html-validator'),
	imagemin: require('gulp-imagemin'),
	cache: require('gulp-cache'),
};

exports.clear = function cacheClear(callback) {
	return $.cache.clearAll(callback);
};

const { series, parallel } = require('gulp');

const browserSync = require('./tasks/server');
const { styleDev, styleBuild, stylePurge } = require('./tasks/style');
const scripts = require('./tasks/scripts');
const html = require('./tasks/html');
const fonts = require('./tasks/font');
const image = require('./tasks/image');
const cleanBuild = require('./tasks/claen-build');
const startWatch = require('./tasks/watch');

exports.default = series(
	cleanBuild,
	parallel(styleDev, scripts, html, fonts, image),
	parallel(startWatch, browserSync)
);
exports.build = series(cleanBuild, parallel(styleBuild, scripts, html, fonts, image));
exports.purge = stylePurge;
