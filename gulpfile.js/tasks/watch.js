const path = require('../path');
const { watch } = $.gulp;

const { styleDev } = require('./style');
const scripts = require('./scripts');
const html = require('./html');

module.exports = function startWatch() {
	watch(path.watching.html, html);
	watch(path.watching.scss, styleDev);
	watch(path.watching.js, scripts);
};
