'use strict';

exports.__esModule = true;
exports.isLocalStorageEnabled = undefined;
exports.getGlobal = getGlobal;
exports.memoize = memoize;
exports.noop = noop;
exports.once = once;
exports.uniqueID = uniqueID;
exports.hashStr = hashStr;
exports.strHashStr = strHashStr;
exports.match = match;
exports.eventEmitter = eventEmitter;
exports.awaitKey = awaitKey;
exports.stringifyError = stringifyError;
exports.stringifyErrorMessage = stringifyErrorMessage;
exports.stringify = stringify;
exports.domainMatches = domainMatches;
exports.patchMethod = patchMethod;
exports.extend = extend;
exports.values = values;
exports.perc = perc;
exports.min = min;
exports.max = max;
exports.regexMap = regexMap;

var _hiBase = require('hi-base32');

var _hiBase2 = _interopRequireDefault(_hiBase);

var _src = require('zalgo-promise/src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getGlobal() {
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('No global found');
}

// eslint-disable-next-line flowtype/no-weak-types
function memoize(method) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    var cache = {};

    // eslint-disable-next-line no-unused-vars, flowtype/no-weak-types
    return function memoizedFunction() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var key = void 0;

        try {
            key = JSON.stringify(Array.prototype.slice.call(arguments));
        } catch (err) {
            throw new Error('Arguments not serializable -- can not be used to memoize');
        }

        var time = options.time;

        if (cache[key] && time && Date.now() - cache[key].time < time) {
            delete cache[key];
        }

        var glob = getGlobal();

        if (glob.__CACHE_START_TIME__ && cache[key] && cache[key].time < glob.__CACHE_START_TIME__) {
            delete cache[key];
        }

        if (cache[key]) {
            return cache[key].value;
        }

        cache[key] = {
            time: Date.now(),
            value: method.apply(this, arguments)
        };

        return cache[key].value;
    };
}

// eslint-disable-next-line no-unused-vars
function noop() {
    // pass
}

function once(method) {
    var called = false;

    return function onceFunction() {
        if (!called) {
            called = true;
            return method.apply(this, arguments);
        }
    };
}

function uniqueID() {

    var chars = '0123456789abcdef';

    var randomID = 'xxxxxxxxxx'.replace(/./g, function () {
        return chars.charAt(Math.floor(Math.random() * chars.length));
    });

    var timeID = _hiBase2['default'].encode(new Date().toISOString().slice(11, 19).replace('T', '.')).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return randomID + '_' + timeID;
}

function hashStr(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash += str[i].charCodeAt(0) * Math.pow(i % 10 + 1, 5);
    }
    return Math.floor(Math.pow(Math.sqrt(hash), 5));
}

function strHashStr(str) {
    var hash = '';

    for (var i = 0; i < str.length; i++) {
        var total = str[i].charCodeAt(0) * i;

        if (str[i + 1]) {
            total += str[i + 1].charCodeAt(0) * (i - 1);
        }

        hash += String.fromCharCode(97 + Math.abs(total) % 26);
    }

    return hash;
}

function match(str, pattern) {
    var regmatch = str.match(pattern);
    if (regmatch) {
        return regmatch[1];
    }
}

function eventEmitter() {

    var listeners = [];

    return {
        listen: function listen(method) {
            listeners.push(method);

            return {
                cancel: function cancel() {
                    listeners.splice(listeners.indexOf(method), 1);
                }
            };
        },
        once: function once(method) {
            var listener = this.listen(function onceListener() {
                method.apply(null, arguments);
                listener.cancel();
            });
        },
        trigger: function trigger() {
            for (var _iterator = listeners, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var listener = _ref;

                listener.apply(undefined, arguments);
            }
        }
    };
}

function awaitKey(obj, key) {
    return new _src.ZalgoPromise(function (resolve) {

        var value = obj[key];

        if (value) {
            return resolve(value);
        }

        delete obj[key];

        Object.defineProperty(obj, key, {

            configurable: true,

            set: function set(item) {
                value = item;

                if (value) {
                    resolve(value);
                }
            },
            get: function get() {
                return value;
            }
        });
    });
}

function stringifyError(err) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


    if (level >= 3) {
        return 'stringifyError stack overflow';
    }

    try {
        if (!err) {
            return '<unknown error: ' + Object.prototype.toString.call(err) + '>';
        }

        if (typeof err === 'string') {
            return err;
        }

        if (err instanceof Error) {
            var stack = err && err.stack;
            var message = err && err.message;

            if (stack && message) {
                if (stack.indexOf(message) !== -1) {
                    return stack;
                } else {
                    return message + '\n' + stack;
                }
            } else if (stack) {
                return stack;
            } else if (message) {
                return message;
            }
        }

        if (typeof err.toString === 'function') {
            return err.toString();
        }

        return Object.prototype.toString.call(err);
    } catch (newErr) {
        // eslint-disable-line unicorn/catch-error-name
        return 'Error while stringifying error: ' + stringifyError(newErr, level + 1);
    }
}

function stringifyErrorMessage(err) {

    var defaultMessage = '<unknown error: ' + Object.prototype.toString.call(err) + '>';

    if (!err) {
        return defaultMessage;
    }

    if (err instanceof Error) {
        return err.message || defaultMessage;
    }

    if (typeof err.message === 'string') {
        return err.message || defaultMessage;
    }

    return defaultMessage;
}

function stringify(item) {
    if (typeof item === 'string') {
        return item;
    }

    if (item && typeof item.toString === 'function') {
        return item.toString();
    }

    return Object.prototype.toString.call(item);
}

var isLocalStorageEnabled = exports.isLocalStorageEnabled = memoize(function () {
    try {
        if (typeof window === 'undefined') {
            return false;
        }

        if (window.localStorage) {
            var _value = Math.random().toString();
            window.localStorage.setItem('__test__localStorage__', _value);
            var result = window.localStorage.getItem('__test__localStorage__');
            window.localStorage.removeItem('__test__localStorage__');
            if (_value === result) {
                return true;
            }
        }
    } catch (err) {
        // pass
    }
    return false;
});

function domainMatches(hostname, domain) {
    hostname = hostname.split('://')[1];
    var index = hostname.indexOf(domain);
    return index !== -1 && hostname.slice(index) === domain;
}

function patchMethod(obj, name, handler) {
    var original = obj[name];

    obj[name] = function patchedMethod() {
        var _this = this,
            _arguments = arguments;

        return handler({
            context: this,
            args: Array.prototype.slice.call(arguments),
            original: original,
            callOriginal: function callOriginal() {
                return original.apply(_this, _arguments);
            }
        });
    };
}

function extend(obj, source) {
    if (!source) {
        return obj;
    }

    if (Object.assign) {
        return Object.assign(obj, source);
    }

    for (var _key2 in source) {
        if (source.hasOwnProperty(_key2)) {
            obj[_key2] = source[_key2];
        }
    }

    return obj;
}

function values(obj) {
    var result = [];
    for (var _key3 in obj) {
        if (obj.hasOwnProperty(_key3)) {
            result.push(obj[_key3]);
        }
    }
    return result;
}

function perc(pixels, percentage) {
    return Math.round(pixels * percentage / 100);
}

function min() {
    return Math.min.apply(Math, arguments);
}

function max() {
    return Math.max.apply(Math, arguments);
}

function regexMap(str, regex, handler) {
    var results = [];

    // $FlowFixMe
    str.replace(regex, function regexMapMatcher() {
        results.push(handler.apply(null, arguments));
    });

    return results;
}