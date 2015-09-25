module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		release: {
			options: {
				//bump: false, //default: true
				//file: 'bower.json', //default: package.json
				//add: false, //default: true
				//commit: false, //default: true
				//tag: false, //default: true
				//push: false, //default: true
				//pushTags: false, //default: true
				//npmtag: true, //default: no tag
				//folder: 'folder/to/publish/to/npm', //default project root
				//commitMessage: 'check out my release <%= version %>', //default: 'release <%= version %>'
				//tagMessage: 'tagging version <%= version %>', //default: 'Version <%= version %>',
				//tagName: 'v<%= version %>', //default: '<%= version %>'

				file: 'bower.json', //default: package.json
				add: false, //default: true
				commit: false, //default: true
				tag: false, //default: true
				push: false, //default: true
				pushTags: false, //default: true
				npm: false
			}
		},
		less: {
		  dist: {
		    files: {
		      "dist/css/videogular.css": "less/videogular.less"
		    }
		  }
		},
		cssmin: {
			options: {
				sourceMap: true
			},
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'dist/css',
		      src: ['*.css', '!*.min.css'],
		      dest: 'dist/css',
		      ext: '.min.css'
		    }]
		  }
		}

	});

	grunt.loadNpmTasks('grunt-release');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('major', ['less:dist', 'cssmin', 'release:major']);
	grunt.registerTask('minor', ['less:dist', 'cssmin', 'release:minor']);
	grunt.registerTask('patch', ['less:dist', 'cssmin', 'release:patch']);
};
