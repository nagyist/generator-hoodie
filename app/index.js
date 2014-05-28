'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var HoodieGenerator = module.exports = function HoodieGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(HoodieGenerator, yeoman.generators.Base);

HoodieGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'projectName',
    message: 'What is the name of your hoodie?'
  }];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;

    cb();
  }.bind(this));
};

HoodieGenerator.prototype.createFolders = function createFolders() {
  this.mkdir('app');
  this.mkdir('app/jade');
  this.mkdir('app/jade/layouts');
  this.mkdir('app/assets');
  this.mkdir('app/images');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
};

HoodieGenerator.prototype.createFiles = function createFiles() {
  this.copy('_main.styl', 'app/styles/main.styl');
  this.copy('_main.js', 'app/scripts/main.js');
  this.copy('jade/_default.jade', 'app/jade/layouts/_default.jade');
  this.copy('jade/_index.jade', 'app/jade/index.jade');
};

HoodieGenerator.prototype.projectfiles = function projectfiles() {
  this.template('_README.md', 'README.md');
  this.template('_Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');
};
