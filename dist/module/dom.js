'use strict';

exports.__esModule = true;
exports.enablePerformance = exports.parseQuery = exports.documentBody = exports.documentReady = undefined;
exports.onDocumentReady = onDocumentReady;
exports.getQueryParam = getQueryParam;
exports.urlWillRedirectPage = urlWillRedirectPage;
exports.extendUrl = extendUrl;
exports.redirect = redirect;
exports.hasMetaViewPort = hasMetaViewPort;
exports.isElementVisible = isElementVisible;
exports.getPageRenderTime = getPageRenderTime;
exports.htmlEncode = htmlEncode;

var _src = require('zalgo-promise/src');

var _util = require('./util');

var _device = require('./device');

function isDocumentReady() {
    return Boolean(document.body) && document.readyState === 'complete';
}

var documentReady = exports.documentReady = new _src.ZalgoPromise(function (resolve) {

    if (isDocumentReady()) {
        return resolve();
    }

    var interval = setInterval(function () {
        if (isDocumentReady()) {
            clearInterval(interval);
            return resolve();
        }
    }, 10);
});

var documentBody = exports.documentBody = documentReady.then(function () {
    if (document.body) {
        return document.body;
    }

    throw new Error('Document ready but document.body not present');
});

function onDocumentReady(method) {
    return documentReady.then(method);
}

var parseQuery = exports.parseQuery = (0, _util.memoize)(function (queryString) {

    var params = {};

    if (!queryString) {
        return params;
    }

    if (queryString.indexOf('=') === -1) {
        return params;
    }

    for (var _iterator = queryString.split('&'), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var pair = _ref;

        pair = pair.split('=');

        if (pair[0] && pair[1]) {
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
    }

    return params;
});

function getQueryParam(name) {
    return parseQuery(window.location.search.slice(1))[name];
}

function urlWillRedirectPage(url) {

    if (url.indexOf('#') === -1) {
        return true;
    }

    if (url.indexOf('#') === 0) {
        return false;
    }

    if (url.split('#')[0] === window.location.href.split('#')[0]) {
        return false;
    }

    return true;
}

function extendUrl(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    var hasHash = url.indexOf('#') > 0;

    var _url$split = url.split('#'),
        serverUrl = _url$split[0],
        hash = _url$split[1];

    if (hash && !serverUrl) {
        var _ref2 = ['#' + hash, ''];
        serverUrl = _ref2[0];
        hash = _ref2[1];
    }

    var _serverUrl$split = serverUrl.split('?'),
        originalUrl = _serverUrl$split[0],
        originalQueryString = _serverUrl$split[1];

    if (originalQueryString) {
        var originalQuery = parseQuery(originalQueryString);

        for (var _key in originalQuery) {
            if (!params.hasOwnProperty(_key)) {
                params[_key] = originalQuery[_key];
            }
        }
    }

    var newQueryString = Object.keys(params).filter(function (key) {
        return key && params[key];
    }).sort().map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');

    var newUrl = originalUrl;

    if (newQueryString) {
        newUrl = newUrl + '?' + newQueryString;
    }

    if (hasHash) {
        newUrl = newUrl + '#' + (hash || '');
    }

    return newUrl;
}

function redirect(url) {
    var win = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

    return new _src.ZalgoPromise(function (resolve) {
        setTimeout(function () {
            win.location = url;
            if (!urlWillRedirectPage(url)) {
                resolve();
            }
        }, 1);
    });
}

function hasMetaViewPort() {
    var meta = document.querySelector('meta[name=viewport]');

    if ((0, _device.isDevice)() && window.screen.width < 660 && !meta) {
        return false;
    }

    return true;
}

function isElementVisible(el) {
    return Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

var enablePerformance = exports.enablePerformance = (0, _util.memoize)(function () {
    /* eslint-disable compat/compat */
    return Boolean(window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1000 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0);
    /* eslint-enable compat/compat */
});

function getPageRenderTime() {
    return documentReady.then(function () {

        if (!enablePerformance()) {
            return;
        }

        var timing = window.performance.timing;

        if (timing.connectEnd && timing.domInteractive) {
            return timing.domInteractive - timing.connectEnd;
        }
    });
}

function htmlEncode() {
    var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    return html.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/\//g, '&#x2F;');
}