const path = require('../path');
const { src, dest } = $.gulp;

const libs = 'node_modules/jquery/dist/jquery.min.js';

module.exports = function scripts() {
	return src([path.src.js])
		.pipe($.concat('index.min.js'))
		.pipe(
			$.babel({
				presets: ['@babel/env'],
			})
		)
		.pipe($.uglify())
		.pipe(dest(path.build.js))
		.pipe($.browserSync.stream());
};
