module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    clean: {
      tmp: 'tmp'
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],

      options: {
        jshintrc: '.jshintrc'
      }
    },

    sassThemes: {
      main: {
        options: {
          output: 'tmp',
          themes: ['black', 'white'],
          themeDir: 'test/fixtures/themes',
          themeImport: 'test/fixtures/_theme.scss',
          outputStyle: 'compact'

        },
        files: {
          'simple_{{themeName}}.css': ['test/fixtures/simple.scss']
        }
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'jshint', 'sassThemes', 'nodeunit']);
};
