module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    jasmine: {
      options: {
        specs:   'tests/spec/*.js'
      },
      isBot: {
        src: ['isBot.js']
      },
      isBotMin: {
        src: ['isBot.min.js']
      }
    },

    uglify: {
      options: {
        report: 'min'
      },
      main: {
        files: {
          'isBot.min.js': ['isBot.js']
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'isBot.js', 'tests/spec/**/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'uglify', 'jasmine']);

};
