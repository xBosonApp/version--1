var ut = require('./util.js');


ut.modify_pk('uninstall', function(data) {
  if (!data.scripts) {
    return;
  }

  var cmd = ut.add_cmd;
  var sp  = data.scripts.preversion;

  if (sp) {
    var b = sp.indexOf(cmd);
    if (b >= 0) {
      data.scripts.preversion = sp.replace(cmd, ut.nul_cmd);
    }
  }
});