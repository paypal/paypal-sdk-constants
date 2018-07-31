/* @flow */

import { getGlobal } from './util';

export function getGlobalNameSpace<T : Object>({ name, version, def } : { name : string, version : string, def? : T }) : T {

    let glob = getGlobal();
    let key  = `__${ name }__${ version }_global__`;

    if (glob[key]) {
        return glob[key];
    }

    glob[key] = def || {};
    return glob[key];
}
