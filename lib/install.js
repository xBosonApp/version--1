var ut = require('./util.js');


ut.modify_pk('install', function(data) {
  if (!data.scripts) {
    data.scripts = {};
  }

  var cmd = ut.add_cmd;
  var sp  = data.scripts.prepublish;

  if (sp) {
    if (sp.indexOf(ut.nul_cmd) >= 0) {
      data.scripts.prepublish = sp.replace(ut.nul_cmd, cmd);
    }
    else if (sp.indexOf(cmd) < 0) {
      data.scripts.prepublish += ' && ' + cmd;
    }
  } else {
    data.scripts.prepublish = cmd;
  }

  require('./add.js')._add(data);
});