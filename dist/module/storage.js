'use strict';

exports.__esModule = true;
exports.getStorage = getStorage;

var _util = require('./util');

var storeCache = {};

function getStorage(_ref) {
    var name = _ref.name,
        version = _ref.version,
        _ref$lifetime = _ref.lifetime,
        lifetime = _ref$lifetime === undefined ? 5 * 60 * 1000 : _ref$lifetime;


    var STORAGE_KEY = '__' + name + '_' + version + '_storage__';

    if (storeCache[STORAGE_KEY]) {
        return storeCache[STORAGE_KEY];
    }

    var accessedStorage = void 0;

    function getState(handler) {

        var localStorageEnabled = (0, _util.isLocalStorageEnabled)();
        var storage = void 0;

        if (accessedStorage) {
            storage = accessedStorage;
        }

        if (!storage && localStorageEnabled) {
            var rawStorage = window.localStorage.getItem(STORAGE_KEY);

            if (rawStorage) {
                storage = JSON.parse(rawStorage);
            }
        }

        if (!storage) {
            storage = window[STORAGE_KEY];
        }

        if (!storage) {
            storage = {
                id: (0, _util.uniqueID)()
            };
        }

        if (!storage.id) {
            storage.id = (0, _util.uniqueID)();
        }

        accessedStorage = storage;

        var result = handler(storage);

        if (localStorageEnabled) {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
        } else {
            window[STORAGE_KEY] = storage;
        }

        accessedStorage = null;

        return result;
    }

    function getID() {
        return getState(function (storage) {
            return storage.id;
        });
    }

    function getSession(handler) {
        return getState(function (storage) {

            var session = storage.__session__;
            var now = Date.now();

            if (session && now - session.created > lifetime) {
                session = null;
            }

            if (!session) {
                session = {
                    guid: (0, _util.uniqueID)(),
                    created: now
                };
            }

            storage.__session__ = session;

            return handler(session);
        });
    }

    function getSessionState(handler) {
        return getSession(function (session) {
            session.state = session.state || {};
            return handler(session.state);
        });
    }

    function getSessionID() {
        return getSession(function (session) {
            return session.guid;
        });
    }

    return {
        getState: getState,
        getID: getID,
        getSessionState: getSessionState,
        getSessionID: getSessionID
    };
}