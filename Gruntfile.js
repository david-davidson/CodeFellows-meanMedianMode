module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            all: {
                files: [
                    'numbers.js' 
                ],
                tasks: [
                    'jshint'
                ],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            files: ['numbers.js']
        },
    });
grunt.registerTask('default', [
    'jshint',
    'watch'
    ]);
};
