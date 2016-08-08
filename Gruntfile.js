module.exports = function(grunt) { 
grunt.initConfig({ 
	pkg: grunt.file.readJSON('package.json') ,
	watch: {
		less: {
			files: ['less/*.less','js/*.js', 'js/**/*.js'],
			tasks: ['less','concat','uglify', 'cssmin']
		}
	},
	less: {
		build: {
		files: {
			'style/style.css': 'less/style.less'	
		}
	}
	},
	cssmin:{
		build:{
			src:'style/style.css',
			dest:'style/style.min.css'
		}
	},
	concat:{
		build:{
			src:['js/*.js','js/**/*.js'],
			dest:'scripts/script.js'
		}
	},
	uglify:{
		build:{
			src:['scripts/script.js'],
			dest:'scripts/script.min.js'
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default',  ['less', 'watch', 'concat', 'uglify', 'cssmin']);
}
