var ut = require('./util.js');


ut.modify_pk(function(data) {
  if (!data.scripts) {
    data.scripts = {};
  }

  var cmd = 'npm start ver--1';
  var sp  = null;

  if (data.scripts.preversion) {
    data.scripts.preversion += ' && ' + cmd;
  } else {
    data.scripts.preversion = cmd;
  }
});