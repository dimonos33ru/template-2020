const build_folder = 'build';
const src_folder = '#src';

module.exports = {
	build: {
		html: `${build_folder}/`,
		css: `${build_folder}/css/`,
		js: `${build_folder}/js/`,
		img: `${build_folder}/img/`,
		fonts: `${build_folder}/fonts/`,
	},
	src: {
		html: `${src_folder}/html/pages/**/*.html`,
		scss: `${src_folder}/scss/main.scss`,
		js: `${src_folder}/js/main.js`,
		img: `${src_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
		fonts: `${src_folder}/fonts/**/*`,
	},
	watching: {
		html: `${src_folder}/html/**/*.html`,
		scss: `${src_folder}/scss/**/*.scss`,
		js: `${src_folder}/js/**/*.js`,
		img: `${src_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
	},
	clean: `${build_folder}/`,
};
