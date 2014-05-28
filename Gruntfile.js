/*
 * generator-hoodie
 * https://github.com/hoodiehq/generator-hoodie
 *
 * Copyright (c) 2014 Robert Katzki
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'app/index.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-release');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);
};
