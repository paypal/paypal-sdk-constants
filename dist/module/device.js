'use strict';

exports.__esModule = true;
exports.getUserAgent = getUserAgent;
exports.isDevice = isDevice;
exports.isWebView = isWebView;
exports.isStandAlone = isStandAlone;
exports.isFacebookWebView = isFacebookWebView;
exports.isFirefoxIOS = isFirefoxIOS;
exports.isEdgeIOS = isEdgeIOS;
exports.isOperaMini = isOperaMini;
exports.isAndroid = isAndroid;
exports.isIos = isIos;
exports.isGoogleSearchApp = isGoogleSearchApp;
exports.isQQBrowser = isQQBrowser;
exports.isIosWebview = isIosWebview;
exports.isAndroidWebview = isAndroidWebview;
exports.isIE = isIE;
exports.isIECompHeader = isIECompHeader;
exports.isElectron = isElectron;
exports.isIEIntranet = isIEIntranet;
exports.isMacOsCna = isMacOsCna;
exports.supportsPopups = supportsPopups;
function getUserAgent() {
    return window.navigator.mockUserAgent || window.navigator.userAgent;
}

function isDevice() {
    var userAgent = getUserAgent();
    if (userAgent.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)) {
        return true;
    }

    return false;
}

function isWebView() {
    var userAgent = getUserAgent();
    return (/(iPhone|iPod|iPad|Macintosh).*AppleWebKit(?!.*Safari)/i.test(userAgent) || /\bwv\b/.test(userAgent) || /Android.*Version\/(\d)\.(\d)/i.test(userAgent)
    );
}

function isStandAlone() {
    return window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
}

function isFacebookWebView() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();

    return ua.indexOf('FBAN') !== -1 || ua.indexOf('FBAV') !== -1;
}

function isFirefoxIOS() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();

    return (/FxiOS/i.test(ua)
    );
}

function isEdgeIOS() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();

    return (/EdgiOS/i.test(ua)
    );
}

function isOperaMini() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();

    return ua.indexOf('Opera Mini') > -1;
}

function isAndroid() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();

    return (/Android/.test(ua)
    );
}

function isIos() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();

    return (/iPhone|iPod|iPad/.test(ua)
    );
}

function isGoogleSearchApp() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();

    return (/\bGSA\b/.test(ua)
    );
}

function isQQBrowser() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();

    return (/QQBrowser/.test(ua)
    );
}

function isIosWebview() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();

    if (isIos(ua)) {
        if (isGoogleSearchApp(ua)) {
            return true;
        }
        return (/.+AppleWebKit(?!.*Safari)/.test(ua)
        );
    }
    return false;
}

function isAndroidWebview() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();

    if (isAndroid(ua)) {
        return (/Version\/[\d.]+/.test(ua) && !isOperaMini(ua)
        );
    }
    return false;
}

function isIE() {

    if (window.document.documentMode) {
        return true;
    }

    return Boolean(window.navigator && window.navigator.userAgent && /Edge|MSIE/i.test(window.navigator.userAgent));
}

function isIECompHeader() {
    var mHttp = window.document.querySelector('meta[http-equiv="X-UA-Compatible"]');
    var mContent = window.document.querySelector('meta[content="IE=edge"]');
    if (mHttp && mContent) {
        return true;
    }
    return false;
}

function isElectron() {
    if (typeof process !== 'undefined' && process.versions && process.versions.electron) {
        return true;
    }
    return false;
}

function isIEIntranet() {

    // This status check only works for older versions of IE with document.documentMode set

    if (window.document.documentMode) {
        try {
            var status = window.status;

            window.status = 'testIntranetMode';

            if (window.status === 'testIntranetMode') {
                window.status = status;

                return true;
            }

            return false;
        } catch (err) {

            return false;
        }
    }

    return false;
}

function isMacOsCna() {
    var userAgent = getUserAgent();
    return (/Macintosh.*AppleWebKit(?!.*Safari)/i.test(userAgent)
    );
}

function supportsPopups() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();

    return !(isIosWebview(ua) || isAndroidWebview(ua) || isOperaMini(ua) || isFirefoxIOS(ua) || isEdgeIOS(ua) || isFacebookWebView(ua) || isQQBrowser(ua) || isElectron() || isMacOsCna() || isStandAlone());
}