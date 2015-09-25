var ut = require('./util.js');


ut.modify_pk('add', function(data) {
  var old = data.version
  var tmp = old.split('.');
  if (++tmp[2] > 99) {
    ++tmp[1];
  }
  var newv = tmp.join('.');
  console.log('Version  \t#', old, '==>', newv);
  data.version = newv;
});