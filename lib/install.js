var ut = require('./util.js');


ut.modify_pk('install', function(data) {
  if (!data.scripts) {
    data.scripts = {};
  }

  var cmd = ut.add_cmd;
  var sp  = data.scripts.preversion;

  if (sp) {
    if (sp.indexOf(cmd) < 0) {
      data.scripts.preversion += ' && ' + cmd;
    }
  } else {
    data.scripts.preversion = cmd;
  }
});