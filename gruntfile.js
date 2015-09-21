(function() {

    "use strict";
    module.exports = function(grunt) {

        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            jsbeautifier: {
                files: ['{,*/}*.js'],
                options: {}
            },

            jshint: {
                gruntfile: {
                    src: 'Gruntfile.js'
                },
                all: ['src/{,*/}*.js'],
                options: {
                    globals: {
                        module: true
                    }
                }
            },

            uglify: {
                dist: {
                    files: {
                        'dist/<%= pkg.name %>.min.js': 'dist/<%= pkg.name %>.js',
                        'dist/<%= pkg.name %>.templates.min.js': 'dist/<%= pkg.name %>.templates.js'
                    }
                }
            },

            ngdocs: {
                all: ['src/js/*.js']
            },

            concat: {
                options: {
                    separator: ';'
                },
                dist: {
                    src: ['src/{,*/}*.js'],
                    dest: 'dist/<%= pkg.name %>.js'
                }
            },

            watch: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint', 'jsbeautifier']
            },

            ngtemplates: {
                app: {
                    module: '<%= pkg.name %>',
                    src: "src/{,*/}*.html",
                    dest: 'dist/<%= pkg.name %>.templates.js',
                },
                options: {
                    htmlmin: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true
                    }
                }
            }
        });

        grunt.loadNpmTasks("grunt-jsbeautifier");
        grunt.loadNpmTasks("grunt-contrib-uglify");
        grunt.loadNpmTasks("grunt-contrib-jshint");
        grunt.loadNpmTasks("grunt-contrib-watch");
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-ngdocs');
        grunt.loadNpmTasks('grunt-angular-templates');

        grunt.registerTask('build', ['jshint', 'jsbeautifier']);
        grunt.registerTask('prod', ['jshint', 'concat', 'ngtemplates', 'uglify']);
    };

})();
