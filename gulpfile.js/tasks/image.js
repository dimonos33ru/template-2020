const path = require('../path');
const { src, dest } = $.gulp;

module.exports = function html() {
	return src(path.src.img)
		.pipe($.cache($.imagemin({ verbose: true })))
		.pipe(dest(path.build.img));
};
