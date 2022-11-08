/* eslint max-lines: 0 */
export enum COUNTRY {
  AD = "AD",
  AE = "AE",
  AG = "AG",
  AI = "AI",
  AL = "AL",
  AM = "AM",
  AN = "AN",
  AO = "AO",
  AR = "AR",
  AT = "AT",
  AU = "AU",
  AW = "AW",
  AZ = "AZ",
  BA = "BA",
  BB = "BB",
  BE = "BE",
  BF = "BF",
  BG = "BG",
  BH = "BH",
  BI = "BI",
  BJ = "BJ",
  BM = "BM",
  BN = "BN",
  BO = "BO",
  BR = "BR",
  BS = "BS",
  BT = "BT",
  BW = "BW",
  BY = "BY",
  BZ = "BZ",
  CA = "CA",
  CD = "CD",
  CG = "CG",
  CH = "CH",
  CI = "CI",
  CK = "CK",
  CL = "CL",
  CM = "CM",
  CN = "CN",
  CO = "CO",
  CR = "CR",
  CV = "CV",
  CY = "CY",
  CZ = "CZ",
  DE = "DE",
  DJ = "DJ",
  DK = "DK",
  DM = "DM",
  DO = "DO",
  DZ = "DZ",
  EC = "EC",
  EE = "EE",
  EG = "EG",
  ER = "ER",
  ES = "ES",
  ET = "ET",
  FI = "FI",
  FJ = "FJ",
  FK = "FK",
  FM = "FM",
  FO = "FO",
  FR = "FR",
  GA = "GA",
  GB = "GB",
  GD = "GD",
  GE = "GE",
  GF = "GF",
  GI = "GI",
  GL = "GL",
  GM = "GM",
  GN = "GN",
  GP = "GP",
  GR = "GR",
  GT = "GT",
  GW = "GW",
  GY = "GY",
  HK = "HK",
  HN = "HN",
  HR = "HR",
  HU = "HU",
  ID = "ID",
  IE = "IE",
  IL = "IL",
  IN = "IN",
  IS = "IS",
  IT = "IT",
  JM = "JM",
  JO = "JO",
  JP = "JP",
  KE = "KE",
  KG = "KG",
  KH = "KH",
  KI = "KI",
  KM = "KM",
  KN = "KN",
  KR = "KR",
  KW = "KW",
  KY = "KY",
  KZ = "KZ",
  LA = "LA",
  LC = "LC",
  LI = "LI",
  LK = "LK",
  LS = "LS",
  LT = "LT",
  LU = "LU",
  LV = "LV",
  MA = "MA",
  MC = "MC",
  MD = "MD",
  ME = "ME",
  MG = "MG",
  MH = "MH",
  MK = "MK",
  ML = "ML",
  MN = "MN",
  MQ = "MQ",
  MR = "MR",
  MS = "MS",
  MT = "MT",
  MU = "MU",
  MV = "MV",
  MW = "MW",
  MX = "MX",
  MY = "MY",
  MZ = "MZ",
  NA = "NA",
  NC = "NC",
  NE = "NE",
  NF = "NF",
  NG = "NG",
  NI = "NI",
  NL = "NL",
  NO = "NO",
  NP = "NP",
  NR = "NR",
  NU = "NU",
  NZ = "NZ",
  OM = "OM",
  PA = "PA",
  PE = "PE",
  PF = "PF",
  PG = "PG",
  PH = "PH",
  PL = "PL",
  PM = "PM",
  PN = "PN",
  PT = "PT",
  PW = "PW",
  PY = "PY",
  QA = "QA",
  RE = "RE",
  RO = "RO",
  RS = "RS",
  RU = "RU",
  RW = "RW",
  SA = "SA",
  SB = "SB",
  SC = "SC",
  SE = "SE",
  SG = "SG",
  SH = "SH",
  SI = "SI",
  SJ = "SJ",
  SK = "SK",
  SL = "SL",
  SM = "SM",
  SN = "SN",
  SO = "SO",
  SR = "SR",
  ST = "ST",
  SV = "SV",
  SZ = "SZ",
  TC = "TC",
  TD = "TD",
  TG = "TG",
  TH = "TH",
  TJ = "TJ",
  TM = "TM",
  TN = "TN",
  TO = "TO",
  TR = "TR",
  TT = "TT",
  TV = "TV",
  TW = "TW",
  TZ = "TZ",
  UA = "UA",
  UG = "UG",
  US = "US",
  UY = "UY",
  VA = "VA",
  VC = "VC",
  VE = "VE",
  VG = "VG",
  VN = "VN",
  VU = "VU",
  WF = "WF",
  WS = "WS",
  YE = "YE",
  YT = "YT",
  ZA = "ZA",
  ZM = "ZM",
  ZW = "ZW",
}
export enum LANG {
  AR = "ar",
  BG = "bg",
  CS = "cs",
  DA = "da",
  DE = "de",
  EL = "el",
  EN = "en",
  ES = "es",
  ET = "et",
  FI = "fi",
  FR = "fr",
  HE = "he",
  HU = "hu",
  ID = "id",
  IT = "it",
  JA = "ja",
  KO = "ko",
  LT = "lt",
  LV = "lv",
  MS = "ms",
  NL = "nl",
  NO = "no",
  PL = "pl",
  PT = "pt",
  RO = "ro",
  RU = "ru",
  SI = "si",
  SK = "sk",
  SL = "sl",
  SQ = "sq",
  SV = "sv",
  TH = "th",
  TL = "tl",
  TR = "tr",
  VI = "vi",
  ZH = "zh",
  ZH_HANT = "zh_Hant",
}
export type CountryLangs = {
  AD: "en" | "fr" | "es" | "zh";
  AE: "en" | "fr" | "es" | "zh" | "ar";
  AG: "en" | "fr" | "es" | "zh";
  AI: "en" | "fr" | "es" | "zh";
  AL: "sq" | "en";
  AM: "en" | "fr" | "es" | "zh";
  AN: "en" | "fr" | "es" | "zh";
  AO: "en" | "fr" | "es" | "zh";
  AR: "es" | "en";
  AT: "de" | "en";
  AU: "en";
  AW: "en" | "fr" | "es" | "zh";
  AZ: "en" | "fr" | "es" | "zh";
  BA: "en";
  BB: "en" | "fr" | "es" | "zh";
  BE: "en" | "nl" | "fr";
  BF: "fr" | "en" | "es" | "zh";
  BG: "bg" | "en";
  BH: "ar" | "en" | "fr" | "es" | "zh";
  BI: "fr" | "en" | "es" | "zh";
  BJ: "fr" | "en" | "es" | "zh";
  BM: "en" | "fr" | "es" | "zh";
  BN: "ms" | "en";
  BO: "es" | "en" | "fr" | "zh";
  BR: "pt" | "en";
  BS: "en" | "fr" | "es" | "zh";
  BT: "en";
  BW: "en" | "fr" | "es" | "zh";
  BY: "en";
  BZ: "en" | "es" | "fr" | "zh";
  CA: "en" | "fr";
  CD: "fr" | "en" | "es" | "zh";
  CG: "en" | "fr" | "es" | "zh";
  CH: "de" | "fr" | "en";
  CI: "fr" | "en";
  CK: "en" | "fr" | "es" | "zh";
  CL: "es" | "en" | "fr" | "zh";
  CM: "fr" | "en";
  CN: "zh";
  CO: "es" | "en" | "fr" | "zh";
  CR: "es" | "en" | "fr" | "zh";
  CV: "en" | "fr" | "es" | "zh";
  CY: "en";
  CZ: "cs" | "en";
  DE: "de" | "en";
  DJ: "fr" | "en" | "es" | "zh";
  DK: "da" | "en";
  DM: "en" | "fr" | "es" | "zh";
  DO: "es" | "en" | "fr" | "zh";
  DZ: "ar" | "en" | "fr" | "es" | "zh";
  EC: "es" | "en" | "fr" | "zh";
  EE: "et" | "en" | "ru";
  EG: "ar" | "en" | "fr" | "es" | "zh";
  ER: "en" | "fr" | "es" | "zh";
  ES: "es" | "en";
  ET: "en" | "fr" | "es" | "zh";
  FI: "fi" | "en";
  FJ: "en" | "fr" | "es" | "zh";
  FK: "en" | "fr" | "es" | "zh";
  FM: "en";
  FO: "da" | "en" | "fr" | "es" | "zh";
  FR: "fr" | "en";
  GA: "fr" | "en" | "es" | "zh";
  GB: "en";
  GD: "en" | "fr" | "es" | "zh";
  GE: "en" | "fr" | "es" | "zh";
  GF: "en" | "fr" | "es" | "zh";
  GI: "en" | "fr" | "es" | "zh";
  GL: "da" | "en" | "fr" | "es" | "zh";
  GM: "en" | "fr" | "es" | "zh";
  GN: "fr" | "en" | "es" | "zh";
  GP: "en" | "fr" | "es" | "zh";
  GR: "el" | "en";
  GT: "es" | "en" | "fr" | "zh";
  GW: "en" | "fr" | "es" | "zh";
  GY: "en" | "fr" | "es" | "zh";
  HK: "en" | "zh_Hant";
  HN: "es" | "en" | "fr" | "zh";
  HR: "en";
  HU: "hu" | "en";
  ID: "id" | "en";
  IE: "en" | "fr" | "es" | "zh";
  IL: "he" | "en";
  IN: "en";
  IS: "en";
  IT: "it" | "en";
  JM: "en" | "es" | "fr" | "zh";
  JO: "ar" | "en" | "fr" | "es" | "zh";
  JP: "ja" | "en";
  KE: "en" | "fr" | "es" | "zh";
  KG: "en" | "fr" | "es" | "zh";
  KH: "en";
  KI: "en" | "fr" | "es" | "zh";
  KM: "fr" | "en" | "es" | "zh";
  KN: "en" | "fr" | "es" | "zh";
  KR: "ko" | "en";
  KW: "ar" | "en" | "fr" | "es" | "zh";
  KY: "en" | "fr" | "es" | "zh";
  KZ: "en" | "fr" | "es" | "zh";
  LA: "en";
  LC: "en" | "fr" | "es" | "zh";
  LI: "en" | "fr" | "es" | "zh";
  LK: "si" | "en";
  LS: "en" | "fr" | "es" | "zh";
  LT: "lt" | "en" | "ru" | "zh";
  LU: "en" | "de" | "fr" | "es" | "zh";
  LV: "lv" | "en" | "ru";
  MA: "ar" | "en" | "fr" | "es" | "zh";
  MC: "fr" | "en";
  MD: "en";
  ME: "en";
  MG: "en" | "fr" | "es" | "zh";
  MH: "en" | "fr" | "es" | "zh";
  MK: "en";
  ML: "fr" | "en" | "es" | "zh";
  MN: "en";
  MQ: "en" | "fr" | "es" | "zh";
  MR: "en" | "fr" | "es" | "zh";
  MS: "en" | "fr" | "es" | "zh";
  MT: "en";
  MU: "en" | "fr" | "es" | "zh";
  MV: "en";
  MW: "en" | "fr" | "es" | "zh";
  MX: "es" | "en";
  MY: "ms" | "en";
  MZ: "en" | "fr" | "es" | "zh";
  NA: "en" | "fr" | "es" | "zh";
  NC: "en" | "fr" | "es" | "zh";
  NE: "fr" | "en" | "es" | "zh";
  NF: "en" | "fr" | "es" | "zh";
  NG: "en";
  NI: "es" | "en" | "fr" | "zh";
  NL: "nl" | "en";
  NO: "no" | "en";
  NP: "en";
  NR: "en" | "fr" | "es" | "zh";
  NU: "en" | "fr" | "es" | "zh";
  NZ: "en" | "fr" | "es" | "zh";
  OM: "ar" | "en" | "fr" | "es" | "zh";
  PA: "es" | "en" | "fr" | "zh";
  PE: "es" | "en" | "fr" | "zh";
  PF: "en" | "fr" | "es" | "zh";
  PG: "en" | "fr" | "es" | "zh";
  PH: "tl" | "en";
  PL: "pl" | "en";
  PM: "en" | "fr" | "es" | "zh";
  PN: "en" | "fr" | "es" | "zh";
  PT: "pt" | "en";
  PW: "en" | "fr" | "es" | "zh";
  PY: "es" | "en";
  QA: "en" | "fr" | "es" | "zh" | "ar";
  RE: "en" | "fr" | "es" | "zh";
  RO: "ro" | "en";
  RS: "en" | "fr" | "es" | "zh";
  RU: "ru" | "en";
  RW: "fr" | "en" | "es" | "zh";
  SA: "ar" | "en" | "fr" | "es" | "zh";
  SB: "en" | "fr" | "es" | "zh";
  SC: "fr" | "en" | "es" | "zh";
  SE: "sv" | "en";
  SG: "en";
  SH: "en" | "fr" | "es" | "zh";
  SI: "sl" | "en";
  SJ: "en" | "fr" | "es" | "zh";
  SK: "sk" | "en";
  SL: "en" | "fr" | "es" | "zh";
  SM: "en" | "fr" | "es" | "zh";
  SN: "fr" | "en" | "es" | "zh";
  SO: "en" | "fr" | "es" | "zh";
  SR: "en" | "fr" | "es" | "zh";
  ST: "en" | "fr" | "es" | "zh";
  SV: "es" | "en" | "fr" | "zh";
  SZ: "en" | "fr" | "es" | "zh";
  TC: "en" | "fr" | "es" | "zh";
  TD: "fr" | "en" | "es" | "zh";
  TG: "fr" | "en" | "es" | "zh";
  TH: "th" | "en";
  TJ: "en" | "fr" | "es" | "zh";
  TM: "en" | "fr" | "es" | "zh";
  TN: "ar" | "en" | "fr" | "es" | "zh";
  TO: "en";
  TR: "tr" | "en";
  TT: "en" | "fr" | "es" | "zh";
  TV: "en" | "fr" | "es" | "zh";
  TW: "zh_Hant" | "en";
  TZ: "en" | "fr" | "es" | "zh";
  UA: "en" | "ru" | "fr" | "es" | "zh";
  UG: "en" | "fr" | "es" | "zh";
  US: "en" | "fr" | "es" | "zh";
  UY: "es" | "en" | "fr" | "zh";
  VA: "en" | "fr" | "es" | "zh";
  VC: "en" | "fr" | "es" | "zh";
  VE: "es" | "en" | "fr" | "zh";
  VG: "en" | "fr" | "es" | "zh";
  VN: "vi" | "en";
  VU: "en" | "fr" | "es" | "zh";
  WF: "en" | "fr" | "es" | "zh";
  WS: "en";
  YE: "ar" | "en" | "fr" | "es" | "zh";
  YT: "en" | "fr" | "es" | "zh";
  ZA: "en" | "fr" | "es" | "zh";
  ZM: "en" | "fr" | "es" | "zh";
  ZW: "en";
};
type CountryMap = Record<
  keyof typeof COUNTRY,
  ReadonlyArray<typeof LANG[keyof typeof LANG]>
>;
export const COUNTRY_LANGS: CountryMap = {
  AD: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AE: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH, LANG.AR],
  AG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AI: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AL: [LANG.SQ, LANG.EN],
  AM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AN: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AO: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AR: [LANG.ES, LANG.EN],
  AT: [LANG.DE, LANG.EN],
  AU: [LANG.EN],
  AW: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BA: [LANG.EN],
  BB: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BE: [LANG.EN, LANG.NL, LANG.FR],
  BF: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  BG: [LANG.BG, LANG.EN],
  BH: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BI: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  BJ: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  BM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BN: [LANG.MS, LANG.EN],
  BO: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  BR: [LANG.PT, LANG.EN],
  BS: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BT: [LANG.EN],
  BW: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BY: [LANG.EN],
  BZ: [LANG.EN, LANG.ES, LANG.FR, LANG.ZH],
  CA: [LANG.EN, LANG.FR],
  CD: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  CG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  CH: [LANG.DE, LANG.FR, LANG.EN],
  CI: [LANG.FR, LANG.EN],
  CK: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  CL: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  CM: [LANG.FR, LANG.EN],
  CN: [LANG.ZH],
  CO: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  CR: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  CV: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  CY: [LANG.EN],
  CZ: [LANG.CS, LANG.EN],
  DE: [LANG.DE, LANG.EN],
  DJ: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  DK: [LANG.DA, LANG.EN],
  DM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  DO: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  DZ: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  EC: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  EE: [LANG.ET, LANG.EN, LANG.RU],
  EG: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ER: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ES: [LANG.ES, LANG.EN],
  ET: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  FI: [LANG.FI, LANG.EN],
  FJ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  FK: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  FM: [LANG.EN],
  FO: [LANG.DA, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  FR: [LANG.FR, LANG.EN],
  GA: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  GB: [LANG.EN],
  GD: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GE: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GF: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GI: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GL: [LANG.DA, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GN: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  GP: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GR: [LANG.EL, LANG.EN],
  GT: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  GW: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GY: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  HK: [LANG.EN, LANG.ZH_HANT, LANG.ZH],
  HN: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  HR: [LANG.EN],
  HU: [LANG.HU, LANG.EN],
  ID: [LANG.ID, LANG.EN],
  IE: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  IL: [LANG.HE, LANG.EN],
  IN: [LANG.EN],
  IS: [LANG.EN],
  IT: [LANG.IT, LANG.EN],
  JM: [LANG.EN, LANG.ES, LANG.FR, LANG.ZH],
  JO: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  JP: [LANG.JA, LANG.EN],
  KE: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KH: [LANG.EN],
  KI: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KM: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  KN: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KR: [LANG.KO, LANG.EN],
  KW: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KY: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  LA: [LANG.EN],
  LC: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  LI: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  LK: [LANG.SI, LANG.EN],
  LS: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  LT: [LANG.LT, LANG.EN, LANG.RU, LANG.ZH],
  LU: [LANG.EN, LANG.DE, LANG.FR, LANG.ES, LANG.ZH],
  LV: [LANG.LV, LANG.EN, LANG.RU],
  MA: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MC: [LANG.FR, LANG.EN],
  MD: [LANG.EN],
  ME: [LANG.EN],
  MG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MH: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MK: [LANG.EN],
  ML: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  MN: [LANG.EN],
  MQ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MR: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MS: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MT: [LANG.EN],
  MU: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MV: [LANG.EN],
  MW: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MX: [LANG.ES, LANG.EN],
  MY: [LANG.MS, LANG.EN],
  MZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NA: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NC: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NE: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  NF: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NG: [LANG.EN],
  NI: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  NL: [LANG.NL, LANG.EN],
  NO: [LANG.NO, LANG.EN],
  NP: [LANG.EN],
  NR: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NU: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  OM: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PA: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  PE: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  PF: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PH: [LANG.TL, LANG.EN],
  PL: [LANG.PL, LANG.EN],
  PM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PN: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PT: [LANG.PT, LANG.EN],
  PW: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PY: [LANG.ES, LANG.EN],
  QA: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH, LANG.AR],
  RE: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  RO: [LANG.RO, LANG.EN],
  RS: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  RU: [LANG.RU, LANG.EN],
  RW: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  SA: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SB: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SC: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  SE: [LANG.SV, LANG.EN],
  SG: [LANG.EN],
  SH: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SI: [LANG.SL, LANG.EN],
  SJ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SK: [LANG.SK, LANG.EN],
  SL: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SN: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  SO: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SR: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ST: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SV: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  SZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TC: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TD: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  TG: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  TH: [LANG.TH, LANG.EN],
  TJ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TN: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TO: [LANG.EN],
  TR: [LANG.TR, LANG.EN],
  TT: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TV: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TW: [LANG.ZH_HANT, LANG.ZH, LANG.EN],
  TZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  UA: [LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH],
  UG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  US: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  UY: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  VA: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  VC: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  VE: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  VG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  VN: [LANG.VI, LANG.EN],
  VU: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  WF: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  WS: [LANG.EN],
  YE: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  YT: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ZA: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ZM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ZW: [LANG.EN],
} as const;
export type LocaleType = {
  country: typeof COUNTRY[keyof typeof COUNTRY];
  lang: typeof LANG[keyof typeof LANG];
};
