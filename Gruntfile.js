module.exports = function( grunt ) {

	grunt.initConfig({
		jshint: {
			options: {
				"curly": true,
				"eqnull": true,
				"eqeqeq": true,
				"undef": true,
				"globals": {
					"jQuery": true
				}
			},

			files: {
				src: ['js/*.js']
			}
		},

		concat: {
			options: {

			},

			dist: {
				src: [
					'js/jquery.min.js',
					'js/jquery.easing.js',
					'js/jquery.classywiggle.min.js',
					'js/2gismap.js',
					'js/mmPlugins.js',
					'js/main.js',
					'js/headerScroller.js',
					'js/onLoad.js',
					'js/catalogImages.js',
					'js/underscore.js',
					'js/backbone.js',
					'js/backbone.localStorage-min.js',
					'js/modelCollection.js',
					'js/view.js',
					'js/init.js',
					'js/init.js',
					'js/basketCart.js',
					'js/changeForm.js'
				],
				dest: 'dist/scripts.js'
			}
		},

		uglify: {
			options: {
				stripBanners: true,
				banner: '/* vPunke.ru, author: Artyom Anashev, version: 0.0.1 \n*/'
			},

			dist: {
				src: 'dist/scripts.js',
				dest: 'dist/scripts.min.js'
			}
		},

		cssmin: {
			options: {
				stripBanners: true,
				banner: '/* minified css file \n*/'
			},

			dist: {
				src: [
					'css/style.css',
					'css/catalog.css',
					'css/aboutme.css',
					'css/media.css',
					'css/font-awesome.min.css'
				],
				dest: 'dist/style.min.css'
			}
		},

		removelogging: {
			dist: {
				src: 'dist/scripts.min.js',
				dest: 'dist/scriptsnl.min.js'
			}
		},

		watch: {
			scripts: {
				files: 'js/*.js',
				tasks: ['concat', 'uglify', 'cssmin']
			},

			css: {
				files: 'css/*.css',
				tasks: ['concat', 'uglify', 'cssmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-remove-logging');

	grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'removelogging']);
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('watch', ['watch']);
};