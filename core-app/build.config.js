module.exports = {
	build_dir: 'build',
	compile_dir: 'dist',

	app_files: {
		js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
		jsunit: [ 'src/**/*.spec.js' ],

		atpl: [ 'src/app/**/*.tpl.html' ],
		ctpl: [ 'src/common/**/*.tpl.html' ],

		html: [ 'src/index.html' ],
		less: 'src/less/main.less'
	},

	test_files: {
		js: [
			'vendor/angular-mocks/angular-mocks.js'
		]
	},

	/**
	 * This is the same as `app_files`, except it contains patterns that
	 * reference vendor code (`vendor/`) that we need to place into the build
	 * process somewhere. While the `app_files` property ensures all
	 * standardized files are collected for compilation, it is the user's job
	 * to ensure non-standardized (i.e. vendor-related) files are handled
	 * appropriately in `vendor_files.js`.
	 *
	 * The `vendor_files.js` property holds files to be automatically
	 * concatenated and minified with our project source files.
	 *
	 * The `vendor_files.css` property holds any CSS files to be automatically
	 * included in our app.
	 *
	 * The `vendor_files.assets` property holds any assets to be copied along
	 * with our app's assets. This structure is flattened, so it is not
	 * recommended that you use wildcards.
	 */
	vendor_files: {
		js: [
			'vendor/jquery/dist/jquery.js',
			'vendor/bootstrap/dist/js/bootstrap.js',
			'vendor/angular/angular.js',
			'vendor/angular-route/angular-route.js',
			'vendor/angular-ui-router/release/angular-ui-router.js',
			'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
			'vendor/angular-sanitize/angular-sanitize.js',
		],
		jsopt: [
		],
		css: [

		],
		assets: [
			'vendor/bootstrap/fonts/**',
			'vendor/font-awesome/fonts/**'
		]
	}
};
