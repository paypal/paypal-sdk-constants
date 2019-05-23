!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("ppsdkconstants", [], factory) : "object" == typeof exports ? exports.ppsdkconstants = factory() : root.ppsdkconstants = factory();
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./src/index.js");
    }({
        "./src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            var _COUNTRY_LANGS, COUNTRY = {
                AD: "AD",
                AE: "AE",
                AG: "AG",
                AI: "AI",
                AL: "AL",
                AM: "AM",
                AN: "AN",
                AO: "AO",
                AR: "AR",
                AT: "AT",
                AU: "AU",
                AW: "AW",
                AZ: "AZ",
                BA: "BA",
                BB: "BB",
                BE: "BE",
                BF: "BF",
                BG: "BG",
                BH: "BH",
                BI: "BI",
                BJ: "BJ",
                BM: "BM",
                BN: "BN",
                BO: "BO",
                BR: "BR",
                BS: "BS",
                BT: "BT",
                BW: "BW",
                BY: "BY",
                BZ: "BZ",
                CA: "CA",
                CD: "CD",
                CG: "CG",
                CH: "CH",
                CI: "CI",
                CK: "CK",
                CL: "CL",
                CM: "CM",
                CN: "CN",
                CO: "CO",
                CR: "CR",
                CV: "CV",
                CY: "CY",
                CZ: "CZ",
                DE: "DE",
                DJ: "DJ",
                DK: "DK",
                DM: "DM",
                DO: "DO",
                DZ: "DZ",
                EC: "EC",
                EE: "EE",
                EG: "EG",
                ER: "ER",
                ES: "ES",
                ET: "ET",
                FI: "FI",
                FJ: "FJ",
                FK: "FK",
                FM: "FM",
                FO: "FO",
                FR: "FR",
                GA: "GA",
                GB: "GB",
                GD: "GD",
                GE: "GE",
                GF: "GF",
                GI: "GI",
                GL: "GL",
                GM: "GM",
                GN: "GN",
                GP: "GP",
                GR: "GR",
                GT: "GT",
                GW: "GW",
                GY: "GY",
                HK: "HK",
                HN: "HN",
                HR: "HR",
                HU: "HU",
                ID: "ID",
                IE: "IE",
                IL: "IL",
                IN: "IN",
                IS: "IS",
                IT: "IT",
                JM: "JM",
                JO: "JO",
                JP: "JP",
                KE: "KE",
                KG: "KG",
                KH: "KH",
                KI: "KI",
                KM: "KM",
                KN: "KN",
                KR: "KR",
                KW: "KW",
                KY: "KY",
                KZ: "KZ",
                LA: "LA",
                LC: "LC",
                LI: "LI",
                LK: "LK",
                LS: "LS",
                LT: "LT",
                LU: "LU",
                LV: "LV",
                MA: "MA",
                MC: "MC",
                MD: "MD",
                ME: "ME",
                MG: "MG",
                MH: "MH",
                MK: "MK",
                ML: "ML",
                MN: "MN",
                MQ: "MQ",
                MR: "MR",
                MS: "MS",
                MT: "MT",
                MU: "MU",
                MV: "MV",
                MW: "MW",
                MX: "MX",
                MY: "MY",
                MZ: "MZ",
                NA: "NA",
                NC: "NC",
                NE: "NE",
                NF: "NF",
                NG: "NG",
                NI: "NI",
                NL: "NL",
                NO: "NO",
                NP: "NP",
                NR: "NR",
                NU: "NU",
                NZ: "NZ",
                OM: "OM",
                PA: "PA",
                PE: "PE",
                PF: "PF",
                PG: "PG",
                PH: "PH",
                PL: "PL",
                PM: "PM",
                PN: "PN",
                PT: "PT",
                PW: "PW",
                PY: "PY",
                QA: "QA",
                RE: "RE",
                RO: "RO",
                RS: "RS",
                RU: "RU",
                RW: "RW",
                SA: "SA",
                SB: "SB",
                SC: "SC",
                SE: "SE",
                SG: "SG",
                SH: "SH",
                SI: "SI",
                SJ: "SJ",
                SK: "SK",
                SL: "SL",
                SM: "SM",
                SN: "SN",
                SO: "SO",
                SR: "SR",
                ST: "ST",
                SV: "SV",
                SZ: "SZ",
                TC: "TC",
                TD: "TD",
                TG: "TG",
                TH: "TH",
                TJ: "TJ",
                TM: "TM",
                TN: "TN",
                TO: "TO",
                TR: "TR",
                TT: "TT",
                TV: "TV",
                TW: "TW",
                TZ: "TZ",
                UA: "UA",
                UG: "UG",
                US: "US",
                UY: "UY",
                VA: "VA",
                VC: "VC",
                VE: "VE",
                VG: "VG",
                VN: "VN",
                VU: "VU",
                WF: "WF",
                WS: "WS",
                YE: "YE",
                YT: "YT",
                ZA: "ZA",
                ZM: "ZM",
                ZW: "ZW"
            }, LANG = {
                AR: "ar",
                CS: "cs",
                DA: "da",
                DE: "de",
                EL: "el",
                EN: "en",
                ES: "es",
                FI: "fi",
                FR: "fr",
                HE: "he",
                HU: "hu",
                ID: "id",
                IT: "it",
                JA: "ja",
                KO: "ko",
                NL: "nl",
                NO: "no",
                PL: "pl",
                PT: "pt",
                RU: "ru",
                SK: "sk",
                SV: "sv",
                TH: "th",
                TR: "tr",
                ZH: "zh"
            }, COUNTRY_LANGS = ((_COUNTRY_LANGS = {})[COUNTRY.AD] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.AE] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH, LANG.AR ], _COUNTRY_LANGS[COUNTRY.AG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.AI] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.AL] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.AM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.AN] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.AO] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.AR] = [ LANG.ES, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.AT] = [ LANG.DE, LANG.EN ], _COUNTRY_LANGS[COUNTRY.AU] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.AW] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.AZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.BA] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.BB] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.BE] = [ LANG.EN, LANG.NL, LANG.FR ], _COUNTRY_LANGS[COUNTRY.BF] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.BG] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.BH] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.BI] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.BJ] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.BM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.BN] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.BO] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.BR] = [ LANG.PT, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.BS] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.BT] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.BW] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.BY] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.BZ] = [ LANG.EN, LANG.ES, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.CA] = [ LANG.EN, LANG.FR ], 
            _COUNTRY_LANGS[COUNTRY.CD] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.CG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.CH] = [ LANG.DE, LANG.FR, LANG.EN ], _COUNTRY_LANGS[COUNTRY.CI] = [ LANG.FR, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.CK] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.CL] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.CM] = [ LANG.FR, LANG.EN ], _COUNTRY_LANGS[COUNTRY.CN] = [ LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.CO] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.CR] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.CV] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.CY] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.CZ] = [ LANG.CS, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.DE] = [ LANG.DE, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.DJ] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.DK] = [ LANG.DA, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.DM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.DO] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.DZ] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.EC] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.EE] = [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.EG] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.ER] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.ES] = [ LANG.ES, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.ET] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.FI] = [ LANG.FI, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.FJ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.FK] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.FM] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.FO] = [ LANG.DA, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.FR] = [ LANG.FR, LANG.EN ], _COUNTRY_LANGS[COUNTRY.GA] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.GB] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.GD] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.GE] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.GF] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.GI] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.GL] = [ LANG.DA, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.GM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.GN] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.GP] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.GR] = [ LANG.EL, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.GT] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.GW] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.GY] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.HK] = [ LANG.EN, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.HN] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.HR] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.HU] = [ LANG.HU, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.ID] = [ LANG.ID, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.IE] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.IL] = [ LANG.HE, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.IN] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.IS] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.IT] = [ LANG.IT, LANG.EN ], _COUNTRY_LANGS[COUNTRY.JM] = [ LANG.EN, LANG.ES, LANG.FR, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.JO] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.JP] = [ LANG.JA, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.KE] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.KG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.KH] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.KI] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.KM] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.KN] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.KR] = [ LANG.KO, LANG.EN ], _COUNTRY_LANGS[COUNTRY.KW] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.KY] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.KZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.LA] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.LC] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.LI] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.LK] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.LS] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.LT] = [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.LU] = [ LANG.EN, LANG.DE, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.LV] = [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.MA] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.MC] = [ LANG.FR, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.MD] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.ME] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.MG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.MH] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.MK] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.ML] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.MN] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.MQ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.MR] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.MS] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.MT] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.MU] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.MV] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.MW] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.MX] = [ LANG.ES, LANG.EN ], _COUNTRY_LANGS[COUNTRY.MY] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.MZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.NA] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.NC] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.NE] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.NF] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.NG] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.NI] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.NL] = [ LANG.NL, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.NO] = [ LANG.NO, LANG.EN ], _COUNTRY_LANGS[COUNTRY.NP] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.NR] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.NU] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.NZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.OM] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.PA] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.PE] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.PF] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.PG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.PH] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.PL] = [ LANG.PL, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.PM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.PN] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.PT] = [ LANG.PT, LANG.EN ], _COUNTRY_LANGS[COUNTRY.PW] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.PY] = [ LANG.ES, LANG.EN ], _COUNTRY_LANGS[COUNTRY.QA] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH, LANG.AR ], 
            _COUNTRY_LANGS[COUNTRY.RE] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.RO] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.RS] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.RU] = [ LANG.RU, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.RW] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SA] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.SB] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SC] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.SE] = [ LANG.SV, LANG.EN ], _COUNTRY_LANGS[COUNTRY.SG] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.SH] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SI] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.SJ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SK] = [ LANG.SK, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.SL] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.SN] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SO] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.SR] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.ST] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.SV] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.TC] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.TD] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.TG] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.TH] = [ LANG.TH, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.TJ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.TM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.TN] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.TO] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.TR] = [ LANG.TR, LANG.EN ], _COUNTRY_LANGS[COUNTRY.TT] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.TV] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.TW] = [ LANG.ZH, LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.TZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.UA] = [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.UG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.US] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.UY] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.VA] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.VC] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.VE] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.VG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.VN] = [ LANG.EN ], 
            _COUNTRY_LANGS[COUNTRY.VU] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.WF] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.WS] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.YE] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.YT] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.ZA] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
            _COUNTRY_LANGS[COUNTRY.ZM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.ZW] = [ LANG.EN ], 
            _COUNTRY_LANGS), SDK_SETTINGS = {
                CLIENT_TOKEN: "data-client-token",
                PARTNER_ATTRIBUTION_ID: "data-partner-attribution-id",
                STAGE_HOST: "data-stage-host",
                API_STAGE_HOST: "data-api-stage-host",
                CSP_NONCE: "data-csp-nonce",
                ENABLE_3DS: "data-enable-3ds"
            }, SDK_QUERY_KEYS = {
                COMPONENTS: "components",
                ENV: "env",
                DEBUG: "debug",
                CACHEBUST: "cachebust",
                CLIENT_ID: "client-id",
                MERCHANT_ID: "merchant-id",
                LOCALE: "locale",
                CURRENCY: "currency",
                INTENT: "intent",
                COMMIT: "commit",
                VAULT: "vault",
                BUYER_COUNTRY: "buyer-country",
                DISABLE_FUNDING: "disable-funding",
                DISABLE_CARD: "disable-card",
                LOCALE_COUNTRY: "locale-country",
                LOCALE_LANG: "locale-lang",
                FRAMEWORK: "framework",
                INTEGRATION_DATE: "integration-date",
                ORDER_CURRENCY: "order-currency",
                ORDER_INTENT: "order-intent",
                ORDER_COMMIT: "order-commit",
                ORDER_VAULT: "order-vault"
            }, COMPONENTS = {
                BUTTONS: "buttons",
                HOSTED_FIELDS: "hosted-fields"
            }, FRAMEWORK = {
                ANGULARJS: "angularjs",
                ANGULAR: "angular",
                REACT: "react",
                VUE: "vue"
            }, DEBUG = {
                TRUE: !0,
                FALSE: !1
            }, QUERY_BOOL = {
                TRUE: "true",
                FALSE: "false"
            }, ENV = {
                LOCAL: "local",
                STAGE: "stage",
                SANDBOX: "sandbox",
                PRODUCTION: "production",
                TEST: "test"
            }, FPTI_KEY = {
                FEED: "feed_name",
                STATE: "state_name",
                TRANSITION: "transition_name",
                BUTTON_TYPE: "button_type",
                SESSION_UID: "page_session_id",
                BUTTON_SESSION_UID: "button_session_id",
                TOKEN: "token",
                CONTEXT_ID: "context_id",
                CONTEXT_TYPE: "context_type",
                REFERER: "referer_url",
                PAY_ID: "pay_id",
                SELLER_ID: "seller_id",
                CLIENT_ID: "client_id",
                DATA_SOURCE: "serverside_data_source",
                BUTTON_SOURCE: "button_source",
                ERROR_CODE: "ext_error_code",
                ERROR_DESC: "ext_error_desc",
                PAGE_LOAD_TIME: "page_load_time",
                EXPERIMENT_NAME: "pxp_exp_id",
                TREATMENT_NAME: "pxp_trtmnt_id",
                TRANSITION_TIME: "transition_time",
                FUNDING_LIST: "eligible_payment_methods",
                FUNDING_COUNT: "eligible_payment_count",
                CHOSEN_FUNDING: "selected_payment_method",
                BUTTON_LAYOUT: "button_layout",
                VERSION: "checkoutjs_version",
                LOCALE: "locale",
                BUYER_COUNTRY: "buyer_cntry",
                INTEGRATION_IDENTIFIER: "integration_identifier",
                PARTNER_ATTRIBUTION_ID: "bn_code",
                SDK_NAME: "sdk_name",
                SDK_VERSION: "sdk_version",
                USER_AGENT: "user_agent",
                USER_ACTION: "user_action",
                CONTEXT_CORRID: "context_correlation_id"
            }, FPTI_USER_ACTION = {
                COMMIT: "commit",
                CONTINUE: "continue"
            }, FPTI_DATA_SOURCE = {
                PAYMENTS_SDK: "checkout"
            }, FPTI_FEED = {
                PAYMENTS_SDK: "payments_sdk"
            }, FPTI_SDK_NAME = {
                PAYMENTS_SDK: "payments_sdk"
            }, INTENT = {
                CAPTURE: "capture",
                AUTHORIZE: "authorize",
                ORDER: "order"
            }, COMMIT = {
                TRUE: !0,
                FALSE: !1
            }, VAULT = {
                TRUE: !0,
                FALSE: !1
            }, CURRENCY = {
                AUD: "AUD",
                BRL: "BRL",
                CAD: "CAD",
                CZK: "CZK",
                DKK: "DKK",
                EUR: "EUR",
                HKD: "HKD",
                HUF: "HUF",
                INR: "INR",
                ILS: "ILS",
                JPY: "JPY",
                MYR: "MYR",
                MXN: "MXN",
                TWD: "TWD",
                NZD: "NZD",
                NOK: "NOK",
                PHP: "PHP",
                PLN: "PLN",
                GBP: "GBP",
                RUB: "RUB",
                SGD: "SGD",
                SEK: "SEK",
                CHF: "CHF",
                THB: "THB",
                USD: "USD"
            }, PLATFORM = {
                DESKTOP: "desktop",
                MOBILE: "mobile"
            }, FUNDING = {
                PAYPAL: "paypal",
                VENMO: "venmo",
                ITAU: "itau",
                CREDIT: "credit",
                CARD: "card",
                IDEAL: "ideal",
                SEPA: "sepa",
                BANCONTACT: "bancontact",
                GIROPAY: "giropay",
                SOFORT: "sofort",
                EPS: "eps",
                MYBANK: "mybank",
                P24: "p24",
                ZIMPLER: "zimpler",
                WECHATPAY: "wechatpay"
            }, CARD = {
                VISA: "visa",
                MASTERCARD: "mastercard",
                AMEX: "amex",
                DISCOVER: "discover",
                HIPER: "hiper",
                ELO: "elo",
                JCB: "jcb",
                CUP: "cup"
            }, DEFAULT_COUNTRY = COUNTRY.US, DEFAULT_CURRENCY = CURRENCY.USD, DEFAULT_INTENT = INTENT.CAPTURE, DEFAULT_COMMIT = COMMIT.TRUE, DEFAULT_SALE_COMMIT = COMMIT.TRUE, DEFAULT_NONSALE_COMMIT = COMMIT.TRUE, DEFAULT_VAULT = VAULT.FALSE, DEFAULT_COMPONENTS = COMPONENTS.BUTTONS, DEFAULT_DEBUG = DEBUG.FALSE;
            __webpack_require__.d(__webpack_exports__, "COUNTRY", function() {
                return COUNTRY;
            });
            __webpack_require__.d(__webpack_exports__, "LANG", function() {
                return LANG;
            });
            __webpack_require__.d(__webpack_exports__, "COUNTRY_LANGS", function() {
                return COUNTRY_LANGS;
            });
            __webpack_require__.d(__webpack_exports__, "SDK_PATH", function() {
                return "/sdk/js";
            });
            __webpack_require__.d(__webpack_exports__, "SDK_SETTINGS", function() {
                return SDK_SETTINGS;
            });
            __webpack_require__.d(__webpack_exports__, "SDK_QUERY_KEYS", function() {
                return SDK_QUERY_KEYS;
            });
            __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() {
                return COMPONENTS;
            });
            __webpack_require__.d(__webpack_exports__, "FRAMEWORK", function() {
                return FRAMEWORK;
            });
            __webpack_require__.d(__webpack_exports__, "DEBUG", function() {
                return DEBUG;
            });
            __webpack_require__.d(__webpack_exports__, "QUERY_BOOL", function() {
                return QUERY_BOOL;
            });
            __webpack_require__.d(__webpack_exports__, "UNKNOWN", function() {
                return "unknown";
            });
            __webpack_require__.d(__webpack_exports__, "ENV", function() {
                return ENV;
            });
            __webpack_require__.d(__webpack_exports__, "FPTI_KEY", function() {
                return FPTI_KEY;
            });
            __webpack_require__.d(__webpack_exports__, "FPTI_USER_ACTION", function() {
                return FPTI_USER_ACTION;
            });
            __webpack_require__.d(__webpack_exports__, "FPTI_DATA_SOURCE", function() {
                return FPTI_DATA_SOURCE;
            });
            __webpack_require__.d(__webpack_exports__, "FPTI_FEED", function() {
                return FPTI_FEED;
            });
            __webpack_require__.d(__webpack_exports__, "FPTI_SDK_NAME", function() {
                return FPTI_SDK_NAME;
            });
            __webpack_require__.d(__webpack_exports__, "INTENT", function() {
                return INTENT;
            });
            __webpack_require__.d(__webpack_exports__, "COMMIT", function() {
                return COMMIT;
            });
            __webpack_require__.d(__webpack_exports__, "VAULT", function() {
                return VAULT;
            });
            __webpack_require__.d(__webpack_exports__, "CURRENCY", function() {
                return CURRENCY;
            });
            __webpack_require__.d(__webpack_exports__, "PLATFORM", function() {
                return PLATFORM;
            });
            __webpack_require__.d(__webpack_exports__, "FUNDING", function() {
                return FUNDING;
            });
            __webpack_require__.d(__webpack_exports__, "CARD", function() {
                return CARD;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_COUNTRY", function() {
                return DEFAULT_COUNTRY;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_CURRENCY", function() {
                return DEFAULT_CURRENCY;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_INTENT", function() {
                return DEFAULT_INTENT;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_COMMIT", function() {
                return DEFAULT_COMMIT;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_SALE_COMMIT", function() {
                return DEFAULT_SALE_COMMIT;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_NONSALE_COMMIT", function() {
                return DEFAULT_NONSALE_COMMIT;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_VAULT", function() {
                return DEFAULT_VAULT;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_COMPONENTS", function() {
                return DEFAULT_COMPONENTS;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_DEBUG", function() {
                return DEFAULT_DEBUG;
            });
        }
    });
});
//# sourceMappingURL=paypal-sdk-constants.js.map