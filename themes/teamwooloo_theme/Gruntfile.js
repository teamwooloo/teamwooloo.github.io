module.exports = function(grunt){
    grunt.initConfig({
        gitclone: {
            fontawesome: {
                options: {
                    //Yes, the organization is FortAwesome, spelled with a R,
                    // verification: https://twitter.com/fontawesome/status/420609150360375296
                    repository: 'https://github.com/FortAwesome/Font-Awesome.git',
                    directory: 'tmp/fontawesome',
                    depth: 1
                }
            },
            fancybox: {
                options: {
                    repository: 'https://github.com/fancyapps/fancyBox.git',
                    directory: 'tmp/fancybox',
                    depth: 1
                }
            },
            bootstrap: {
                options: {
                    repository: 'https://github.com/twbs/bootstrap.git',
                    directory: 'tmp/bootstrap',
                    branch: 'v4-dev',
                    depth: 1
                }
            },
            tether: {
                options: {
                    repository: 'https://github.com/HubSpot/tether.git',
                    directory: 'tmp/tether',
                    depth: 1
                }
            },
            yt_background: {
                options: {
                    repository: 'https://github.com/pupunzi/jquery.mb.YTPlayer.git',
                    directory: 'tmp/yt_background',
                    depth: 1
                }
            }
        },
        copy: {
            fontawesome: {
                expand: true,
                cwd: 'tmp/fontawesome/',
                src: ['css/**', 'fonts/**'],
                dest: 'source/css/fontawesome/'
            },
            fancybox: {
                expand: true,
                cwd: 'tmp/fancybox/source/',
                src: ['**'],
                dest: 'source/fancybox/'
            },
            bootstrap_js: {
                expand: true,
                cwd: 'tmp/bootstrap/dist/js/',
                src: ['bootstrap.min.js', 'umd/**'],
                dest: 'source/js/bootstrap/'
            },
            bootstrap_scss: {
                expand: true,
                cwd: 'tmp/bootstrap/scss/',
                src: ['**'],
                dest: 'source/css/_bootstrap/'
            },
            tether: {
                expand: true,
                cwd: 'tmp/tether/dist/js/',
                src: ['tether.min.js'],
                dest: 'source/js/tether/'
            },
            yt_background_js: {
                expand: true,
                cwd: 'tmp/yt_background/dist',
                src: ['jquery.mb.YTPlayer.min.js'],
                dest: 'source/js/yt_background/'
            },
            yt_background_css: {
                expand: true,
                cwd: 'tmp/yt_background/dist/css',
                src: ['**'],
                dest: 'source/css/yt_background/'
            }
        },
        _clean: {
            tmp: ['tmp'],
            fontawesome: ['source/css/fontawesome'],
            fancybox: ['source/fancybox'],
            bootstrap_js: ['source/js/bootstrap'],
            bootstrap_scss: ['source/css/_bootstrap'],
            tether: ['source/js/tether'],
            yt_background_js: ['source/js/yt_background'],
            yt_background_css: ['source/js/yt_background']
        }
    });

    //WARNING!!! .git-ignore must be updated with sources that don't need to be versioned, because Grunt handles them.


    require('load-grunt-tasks')(grunt);

    grunt.renameTask('clean', '_clean');

    grunt.registerTask('fontawesome', ['gitclone:fontawesome', 'copy:fontawesome', '_clean:tmp']);
    grunt.registerTask('fancybox', ['gitclone:fancybox', 'copy:fancybox', '_clean:tmp']);
    grunt.registerTask('bootstrap', ['gitclone:bootstrap', 'copy:bootstrap_js', 'copy:bootstrap_scss', '_clean:tmp']);
    grunt.registerTask('tether', ['gitclone:tether', 'copy:tether', '_clean:tmp']);
    grunt.registerTask('yt_background', ['gitclone:yt_background', 'copy:yt_background_js', 'copy:yt_background_css', '_clean:tmp']);
    grunt.registerTask('default', ['gitclone', 'copy', '_clean:tmp']);
    grunt.registerTask('clean', ['_clean']);
};
