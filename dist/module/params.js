export var SDK_PATH = '/sdk/js';
export var SDK_SETTINGS = {
  NAMESPACE: 'data-namespace',
  CLIENT_TOKEN: 'data-client-token',
  MERCHANT_ID: 'data-merchant-id',
  PARTNER_ATTRIBUTION_ID: 'data-partner-attribution-id',
  STAGE_HOST: 'data-stage-host',
  API_STAGE_HOST: 'data-api-stage-host',
  CSP_NONCE: 'data-csp-nonce',
  ENABLE_3DS: 'data-enable-3ds',
  SDK_INTEGRATION_SOURCE: 'data-sdk-integration-source',
  USER_ID_TOKEN: 'data-user-id-token',
  AMOUNT: 'data-amount',
  CLIENT_METADATA_ID: 'data-client-metadata-id',
  PAGE_TYPE: 'data-page-type'
};
export var SDK_QUERY_KEYS = {
  COMPONENTS: 'components',
  ENV: 'env',
  DEBUG: 'debug',
  CACHEBUST: 'cachebust',
  CLIENT_ID: 'client-id',
  MERCHANT_ID: 'merchant-id',
  LOCALE: 'locale',
  CURRENCY: 'currency',
  INTENT: 'intent',
  COMMIT: 'commit',
  VAULT: 'vault',
  BUYER_COUNTRY: 'buyer-country',
  ENABLE_FUNDING: 'enable-funding',
  DISABLE_FUNDING: 'disable-funding',
  DISABLE_CARD: 'disable-card',
  INTEGRATION_DATE: 'integration-date',
  STAGE_HOST: 'stage-host'
};
export var COMPONENTS = {
  BUTTONS: 'buttons',
  HOSTED_FIELDS: 'hosted-fields'
};
export var DEBUG = {
  TRUE: true,
  FALSE: false
};
export var QUERY_BOOL = {
  TRUE: 'true',
  FALSE: 'false'
};
export var UNKNOWN = 'unknown';
export var PROTOCOL = {
  HTTP: 'http',
  HTTPS: 'https'
};
export var PAGE_TYPES = {
  HOME: 'home',
  PRODUCT: 'product',
  CART: 'cart',
  CHECKOUT: 'checkout'
};
export var MERCHANT_ID_MAX = 10;