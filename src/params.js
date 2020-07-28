/* @flow */

export const SDK_PATH = '/sdk/js';

export const SDK_SETTINGS = {
    NAMESPACE:              ('data-namespace' : 'data-namespace'),
    CLIENT_TOKEN:           ('data-client-token' : 'data-client-token'),
    MERCHANT_ID:            ('data-merchant-id' : 'data-merchant-id'),
    PARTNER_ATTRIBUTION_ID: ('data-partner-attribution-id' : 'data-partner-attribution-id'),
    STAGE_HOST:             ('data-stage-host' : 'data-stage-host'),
    API_STAGE_HOST:         ('data-api-stage-host' : 'data-api-stage-host'),
    CSP_NONCE:              ('data-csp-nonce' : 'data-csp-nonce'),
    ENABLE_3DS:             ('data-enable-3ds' : 'data-enable-3ds'),
    SDK_INTEGRATION_SOURCE: ('data-sdk-integration-source' : 'data-sdk-integration-source'),
    USER_ID_TOKEN:          ('data-user-id-token' : 'data-user-id-token'),
    AMOUNT:                 ('data-amount' : 'data-amount'),
    CLIENT_METADATA_ID:     ('data-client-metadata-id' : 'data-client-metadata-id'),
    PAGE_TYPE:              ('data-page-type' : 'data-page-type')
};

export const SDK_QUERY_KEYS = {
    COMPONENTS: ('components' : 'components'),

    ENV:       ('env' : 'env'),
    DEBUG:     ('debug' : 'debug'),
    CACHEBUST: ('cachebust' : 'cachebust'),

    CLIENT_ID:   ('client-id' : 'client-id'),
    MERCHANT_ID: ('merchant-id' : 'merchant-id'),

    LOCALE: ('locale' : 'locale'),

    CURRENCY: ('currency' : 'currency'),
    INTENT:   ('intent' : 'intent'),
    COMMIT:   ('commit' : 'commit'),
    VAULT:    ('vault' : 'vault'),

    BUYER_COUNTRY: ('buyer-country' : 'buyer-country'),

    ENABLE_FUNDING:  ('enable-funding' : 'enable-funding'),
    DISABLE_FUNDING: ('disable-funding' : 'disable-funding'),
    DISABLE_CARD:    ('disable-card' : 'disable-card'),

    INTEGRATION_DATE: ('integration-date' : 'integration-date'),
    STAGE_HOST:       ('stage-host' : 'stage-host')
};

export const COMPONENTS = {
    BUTTONS:       ('buttons' : 'buttons'),
    HOSTED_FIELDS: ('hosted-fields' : 'hosted-fields')
};

export const DEBUG = {
    TRUE:  (true : true),
    FALSE: (false : false)
};

export const QUERY_BOOL = {
    TRUE:  ('true' : 'true'),
    FALSE: ('false' : 'false')
};

export const UNKNOWN = ('unknown' : 'unknown');

export const PROTOCOL = {
    HTTP:  ('http' : 'http'),
    HTTPS: ('https' : 'https')
};

export const PAGE_TYPES = {
    HOME:       ('home' : 'home'),
    PRODUCT:    ('product' : 'product'),
    CART:       ('cart' : 'cart'),
    CHECKOUT:   ('checkout' : 'checkout')
};

export const MERCHANT_ID_MAX = 10;
