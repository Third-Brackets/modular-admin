var path = require('path');

var rootDir = path.resolve("../");					// Root dir
var srcDir = path.resolve("../src");				// Source files
var destDir = path.resolve("../dist");				// Build destination
var npmDir =  path.resolve("../node_modules");		// Npm dir

var config = {
	rootDir: rootDir,
	srcDir: srcDir,
	destDir: destDir,
	npmDir: npmDir,
	port: 4000,
	paths: {}
};

// Vendor libs paths
config.paths.vendor = {
	scripts: [
		npmDir + '/jquery/dist/jquery.js',
		npmDir + '/jquery-validation/dist/jquery.validate.js',
		npmDir + '/metismenu/dist/metisMenu.js',
		npmDir + '/nprogress/nprogress.js',
		npmDir + '/responsive-toolkit/dist/bootstrap-toolkit.js',
		npmDir + '/sortablejs/Sortable.js',
		npmDir + '/tether/dist/js/tether.js',
		npmDir + '/tinycolor2/tinycolor.js',
		npmDir + '/dropzone/dist/dropzone.js',
		npmDir + '/jquery-touchswipe/jquery.touchSwipe.js',
		npmDir + '/jquery.browser/dist/jquery.browser.js',
		npmDir + '/popper.js/dist/umd/popper.js',
		npmDir + '/bootstrap/dist/js/bootstrap.js',
		npmDir + '/trumbowyg/dist/trumbowyg.min.js',
		npmDir + '/toastr/build/toastr.min.js',
	],
	styles: [
		npmDir + '/animate.css/animate.css',
		npmDir + '/font-awesome/css/font-awesome.css',
		npmDir + '/metismenu/dist/metisMenu.css',
		npmDir + '/nprogress/nprogress.css',
		npmDir + '/dropzone/dist/dropzone.css',
		npmDir + '/trumbowyg/dist/ui/trumbowyg.min.css',
		npmDir + '/toastr/build/toastr.min.css',
		npmDir + '/bootstrap/dist/css/bootstrap.css',
	],
	fonts: [
		npmDir + '/font-awesome/fonts/*'
	],
	assets: [],
};

// Application Paths
config.paths.app = {
	scripts: [
		srcDir + "/config.js",
		srcDir + "/**/!(_context|config|main|*-helper)*.js",
		srcDir + "/main.js",
		"!" + srcDir + "/_vendor/**"
	],
	styles: [
		srcDir + "/_main.scss",
		srcDir + "/**/!(_main|_variables|*-theme)*.scss",
	],
	themes: srcDir + "/**/*-theme.scss",
	templates: srcDir + "/**/*.hbs",
	pages: srcDir + "/**/*-page.hbs",
	layouts: srcDir + "/**/*-layout.hbs",
	helpers: [
		srcDir + "/**/*-helper.js",
		rootDir + '/node_modules/handlebars-layouts/index.js',
	],
	assets: srcDir + "/_assets/**/*"
};


module.exports = config;
