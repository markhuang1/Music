module.exports = function(grunt){
	
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		
		uglify:{
			test:{
				src:'./src/js/*.js',
				dest:'./dirt/js/index.js'
			}
		},
		htmlmin:{
			test:{
				src:'./src/*.html',
				dest:'./dirt/index.html'
			}
		},
		cssmin:{
			test:{
				src:'./src/css/*.css',
				dest:'./dirt/css/index.css'
			}
		},
		imagemin:{
			dist:{
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
			 files: [{
                    expand: true,
                    cwd: './src/img',
                    src: ['**/*.*'], 
                    dest: './dirt/img' 
                }]
			}
		}
		
		
	});
	
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	
	grunt.registerTask("default",["htmlmin","cssmin","uglify","imagemin"]);
	
}