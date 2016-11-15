module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['app/js/*.js'],
                tasks: ['jsbeautifier']
            }, // scripts
            styles: {
                files: ['app/scss/*.scss', 'app/scss/**/*.scss', 'app/scss/**/**/*.scss'],
                tasks: ['sass']
            } // styles
        },
        sass: {
            dev: {
                files: {
                    'app/css/main.css': 'app/scss/main.scss'
                }
            }
        }, // sass
        jshint: {
            all: ['app/js/*.js']
        }, // jshint
        jsbeautifier: {
            files: ['app/js/*.js'],
            options: {}
        }, // jsbeautifier
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'app/js/*.js',
                        'app/css/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./app"
                    }
                }
            }
        } // browserSync
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
  //  grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['jsbeautifier', 'browserSync', 'watch']); // jshint
};
