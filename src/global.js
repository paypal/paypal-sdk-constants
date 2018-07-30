/* @flow */

import { getGlobal } from './util';

export function getGlobalNameSpace<T : Object>(name : string, version : string, value? : T) : T {

    let glob = getGlobal();
    let key  = `__${ name }__${ version }_global__`;

    if (glob[key]) {
        return glob[key];
    }

    glob[key] = value || {};
    return glob[key];
}
