/* @flow */

export const SDK_SETTINGS = {
    CLIENT_TOKEN:           ('data-client-token' : 'data-client-token'),
    PARTNER_ATTRIBUTION_ID: ('data-partner-attribution-id' : 'data-partner-attribution-id'),
    STAGE_HOST:             ('data-stage-host' : 'data-stage-host'),
    API_STAGE_HOST:         ('data-api-stage-host' : 'data-api-stage-host')
};

export const SDK_QUERY_KEYS = {
    COMPONENTS: ('components' : 'components'),

    ENV:       ('env' : 'env'),
    DEBUG:     ('debug' : 'debug'),
    CACHEBUST: ('cachebust' : 'cachebust'),

    CLIENT_ID:   ('client-id' : 'client-id'),
    MERCHANT_ID: ('merchant-id' : 'merchant-id'),

    LOCALE_COUNTRY: ('locale-country' : 'locale-country'),
    LOCALE_LANG:    ('locale-lang' : 'locale-lang'),

    ORDER_CURRENCY: ('order-currency' : 'order-currency'),
    ORDER_INTENT:   ('order-intent' : 'order-intent'),
    ORDER_COMMIT:   ('order-commit' : 'order-commit'),
    ORDER_VAULT:    ('order-vault' : 'order-vault'),

    DISABLE_FUNDING: ('disable-funding' : 'disable-funding'),
    DISABLE_CARD:    ('disable-card' : 'disable-card')
};

export const COMPONENTS = {
    BUTTONS:       ('buttons' : 'buttons'),
    HOSTED_FIELDS: ('hosted-fields' : 'hosted-fields')
};

export const DEBUG = {
    TRUE:  (true : true),
    FALSE: (false : false)
};
