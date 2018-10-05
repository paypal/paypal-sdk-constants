/* @flow */

export const FPTI_KEY = {
    FEED:                   ('feed_name' : 'feed_name'),
    STATE:                  ('state_name' : 'state_name'),
    TRANSITION:             ('transition_name' : 'transition_name'),
    BUTTON_TYPE:            ('button_type' : 'button_type'),
    SESSION_UID:            ('page_session_id' : 'page_session_id'),
    BUTTON_SESSION_UID:     ('button_session_id' : 'button_session_id'),
    TOKEN:                  ('token' : 'token'),
    CONTEXT_ID:             ('context_id' : 'context_id'),
    CONTEXT_TYPE:           ('context_type' : 'context_type'),
    REFERER:                ('referer_url' : 'referer_url'),
    PAY_ID:                 ('pay_id' : 'pay_id'),
    SELLER_ID:              ('seller_id' : 'seller_id'),
    CLIENT_ID:              ('client_id' : 'client_id'),
    DATA_SOURCE:            ('serverside_data_source' : 'serverside_data_source'),
    BUTTON_SOURCE:          ('button_source' : 'button_source'),
    ERROR_CODE:             ('ext_error_code' : 'ext_error_code'),
    ERROR_DESC:             ('ext_error_desc' : 'ext_error_desc'),
    PAGE_LOAD_TIME:         ('page_load_time' : 'page_load_time'),
    EXPERIMENT_NAME:        ('pxp_exp_id' : 'pxp_exp_id'),
    TREATMENT_NAME:         ('pxp_trtmnt_id' : 'pxp_trtmnt_id'),
    TRANSITION_TIME:        ('transition_time' : 'transition_time'),
    FUNDING_LIST:           ('eligible_payment_methods' : 'eligible_payment_methods'),
    FUNDING_COUNT:          ('eligible_payment_count' : 'eligible_payment_count'),
    CHOSEN_FUNDING:         ('selected_payment_method' : 'selected_payment_method'),
    BUTTON_LAYOUT:          ('button_layout' : 'button_layout'),
    VERSION:                ('checkoutjs_version' : 'checkoutjs_version'),
    LOCALE:                 ('locale' : 'locale'),
    BUYER_COUNTRY:          ('buyer_cntry' : 'buyer_cntry'),
    INTEGRATION_IDENTIFIER: ('integration_identifier' : 'integration_identifier'),
    PARTNER_ATTRIBUTION_ID: ('bn_code' : 'bn_code'),
    SDK_NAME:               ('sdk_name' : 'sdk_name'),
    SDK_VERSION:            ('sdk_version' : 'sdk_version'),
    USER_AGENT:             ('user_agent' : 'user_agent'),
    USER_ACTION:            ('user_action' : 'user_action')
};

export const FPTI_USER_ACTION = {
    COMMIT:   ('commit' : 'commit'),
    CONTINUE: ('continue' : 'continue')
};


export const FPTI_DATA_SOURCE = {
    PAYMENTS_SDK: ('payments_sdk' : 'payments_sdk')
};

export const FPTI_FEED = {
    PAYMENTS_SDK: ('payments_sdk' : 'payments_sdk')
};

export const FPTI_SDK_NAME = {
    PAYMENTS_SDK: ('payments_sdk' : 'payments_sdk')
};
