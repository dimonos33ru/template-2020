const path = require('../path');
const { src, dest } = $.gulp;

function styleDev() {
	return src(path.src.scss)
		.pipe($.sourcemaps.init())
		.pipe(
			$.sass().on(
				'error',
				$.notify.onError({
					message: 'Error: <%= error.message %>',
					title: 'SCSS Error!!!',
				})
			)
		)
		.pipe($.concat('style.min.css'))
		.pipe($.sourcemaps.write())
		.pipe(dest(path.build.css))
		.pipe($.browserSync.stream());
}

function styleBuild() {
	return src(path.src.scss)
		.pipe($.sass())
		.pipe($.concat('style.min.css'))
		.pipe($.autoprefixer({ cascade: false }))
		.pipe($.csso())
		.pipe(dest(path.build.css));
}

function stylePurge() {
	return src(path.src.scss)
		.pipe($.sass())
		.pipe($.concat('style.min.purge.css'))
		.pipe(
			$.purgecss({
				content: ['build/**/*.html'],
			})
		)
		.pipe($.autoprefixer({ cascade: false }))
		.pipe($.csso())
		.pipe(dest(path.build.css));
}

module.exports.styleDev = styleDev;
module.exports.styleBuild = styleBuild;
module.exports.stylePurge = stylePurge;
