const path = require('../path');
const { src, dest } = $.gulp;

module.exports = function fonts() {
	return src(path.src.fonts).pipe(dest(path.build.fonts));
};
