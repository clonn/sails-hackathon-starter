var Sails = require('sails'),
  sails = undefined;

global.request = require('supertest-as-promised');
global.sinon = require("sinon");
global.should = require('chai').should();
global.expect = require('chai').expect;

// global.config = require('./resources/config');

require("babel-core/register");
require("babel-polyfill");
var rc = require("rc");

before(function(done) {

  var config = rc('sails');
  config.environment = 'test';
  Sails.lift(config, function(err, server) {
    sails = server;
    if (err) {
      return done(err);
    }
    return done(err, sails);
  });
  return;
});

after(function(done) {
  sails.lower(done);
  return;
});
