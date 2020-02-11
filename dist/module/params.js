export var SDK_PATH = '/sdk/js';

export var SDK_SETTINGS = {
    NAMESPACE: 'data-namespace',
    CLIENT_TOKEN: 'data-client-token',
    PARTNER_ATTRIBUTION_ID: 'data-partner-attribution-id',
    STAGE_HOST: 'data-stage-host',
    API_STAGE_HOST: 'data-api-stage-host',
    CSP_NONCE: 'data-csp-nonce',
    ENABLE_3DS: 'data-enable-3ds',
    SDK_INTEGRATION_SOURCE: 'data-sdk-integration-source'
};

export var SDK_QUERY_KEYS = {
    COMPONENTS: 'components',

    ENV: 'env',
    DEBUG: 'debug',
    CACHEBUST: 'cachebust',

    CLIENT_ID: 'client-id',
    MERCHANT_ID: 'merchant-id',
    MERCHANT_EMAIL_HASH: 'merchant-email-hash',

    LOCALE: 'locale',

    CURRENCY: 'currency',
    INTENT: 'intent',
    COMMIT: 'commit',
    VAULT: 'vault',

    BUYER_COUNTRY: 'buyer-country',

    DISABLE_FUNDING: 'disable-funding',
    DISABLE_CARD: 'disable-card',

    LOCALE_COUNTRY: 'locale-country',
    LOCALE_LANG: 'locale-lang',

    FRAMEWORK: 'framework',

    INTEGRATION_DATE: 'integration-date',

    ORDER_CURRENCY: 'order-currency',
    ORDER_INTENT: 'order-intent',
    ORDER_COMMIT: 'order-commit',
    ORDER_VAULT: 'order-vault',

    STAGE_HOST: 'stage-host',

    USER_ACCESS_TOKEN: 'user-access-token',
    USER_ACCESS_CODE: 'user-access-code'
};

export var COMPONENTS = {
    BUTTONS: 'buttons',
    HOSTED_FIELDS: 'hosted-fields'
};

export var FRAMEWORK = {
    ANGULARJS: 'angularjs',
    ANGULAR: 'angular',
    REACT: 'react',
    VUE: 'vue'
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