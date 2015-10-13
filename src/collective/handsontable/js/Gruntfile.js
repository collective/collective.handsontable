/* globals module:true */
module.exports = function(grunt) {
  'use strict';

  // Get mockup-core's grunt infrastructure
  var MockupGrunt = require('../bower_components/mockup/mockup/js/grunt');

  // Include the project's RequireJS configuration
  var requirejsOptions = require('./config');

  // Create a new insance of the Mockup grunt task suite
  var mockup = new MockupGrunt(requirejsOptions);

  // Register the Minimalpattern pattern
  mockup.registerBundle('handsontable');

  // initialize grunt and set up all tasks.
  mockup.initGrunt(grunt);

};
