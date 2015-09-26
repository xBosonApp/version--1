var ut = require('./util.js');


if (!module.parent) {
  add();
} else {
  module.exports = add;
  module.exports._add = _add;
}


function add() {
  ut.modify_pk('add', _add);
}


function _add(data) {
  var old = data.version
  var tmp = old.split('.');
  if (++tmp[2] > 99) {
    ++tmp[1];
    tmp[2] = 1;
  }
  var newv = tmp.join('.');
  console.log('Version  \t#', old, '==>', newv);
  data.version = newv;

  process.env.npm_package_version = newv;
}