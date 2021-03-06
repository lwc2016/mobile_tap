module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify: {
			build: {
				src: "dist/tap.js",
				dest: "dist/tap.min.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.registerTask("default", ["uglify"]);
};