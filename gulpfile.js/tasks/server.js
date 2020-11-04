const path = require('../path');
// const browserSync = require('browser-sync').create();

module.exports = function serverSync() {
	$.browserSync.init({
		server: {
			baseDir: path.build.html,
		},
		port: 3000,
		notify: false,
		ui: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	});
};
