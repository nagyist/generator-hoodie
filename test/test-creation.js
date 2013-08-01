/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('hoodie generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('hoodie:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig',
      '.gitignore',
      '.bowerrc',
      'bower.json',
      'package.json',
      'Gruntfile.js',
      'app/styles/main.styl',
      'app/scripts/main.js',
      'app/scripts/hoodie.js',
      'app/jade/layouts/_default.jade',
      'app/jade/index.jade'
    ];

    helpers.mockPrompt(this.app, {
      'projectName': 'Test'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
