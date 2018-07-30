'use strict';

exports.__esModule = true;
exports.getGlobalNameSpace = getGlobalNameSpace;

var _util = require('./util');

function getGlobalNameSpace(name, version, value) {

    var glob = (0, _util.getGlobal)();
    var key = '__' + name + '__' + version + '_global__';

    if (glob[key]) {
        return glob[key];
    }

    glob[key] = value || {};
    return glob[key];
}