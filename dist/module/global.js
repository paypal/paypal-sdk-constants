'use strict';

exports.__esModule = true;
exports.getGlobalNameSpace = getGlobalNameSpace;

var _util = require('./util');

function getGlobalNameSpace(_ref) {
    var name = _ref.name,
        version = _ref.version,
        def = _ref.def;


    var glob = (0, _util.getGlobal)();
    var key = '__' + name + '__' + version + '_global__';

    if (glob[key]) {
        return glob[key];
    }

    glob[key] = def || {};
    return glob[key];
}