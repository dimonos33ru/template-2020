const path = require('../path');
const { src, dest } = $.gulp;

module.exports = function html() {
	$.panini.refresh();
	return src(path.src.html)
		.pipe(
			$.panini({
				root: '#src/html/pages/',
				layouts: '#src/html/layouts/',
				partials: '#src/html/partials/',
				data: '#src/html/data/',
			})
		)
		.pipe($.htmlValidator())
		.pipe($.htmlValidator.reporter())
		.pipe(dest(path.build.html))
		.on('end', $.browserSync.reload);
};
