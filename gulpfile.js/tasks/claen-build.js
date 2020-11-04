const path = require('../path');

module.exports = function cleanBuild() {
	return $.del([path.clean]);
};
