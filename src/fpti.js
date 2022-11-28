/* @flow */

export const FPTI_KEY = {
  FEED: ("feed_name": "feed_name"),
  STATE: ("state_name": "state_name"),
  EVENT_NAME: ("event_name": "event_name"),
  TRANSITION: ("transition_name": "transition_name"),
  PAGE: ("page_name": "page_name"),
  BUTTON_TYPE: ("button_type": "button_type"),
  SESSION_UID: ("page_session_id": "page_session_id"),
  BUTTON_SESSION_UID: ("button_session_id": "button_session_id"),
  TOKEN: ("token": "token"),
  CONTEXT_ID: ("context_id": "context_id"),
  CONTEXT_TYPE: ("context_type": "context_type"),
  REFERER: ("referer_url": "referer_url"),
  MERCHANT_DOMAIN: ("merchant_domain": "merchant_domain"),
  PAY_ID: ("pay_id": "pay_id"),
  SELLER_ID: ("seller_id": "seller_id"),
  CLIENT_ID: ("client_id": "client_id"),
  DATA_SOURCE: ("serverside_data_source": "serverside_data_source"),
  BUTTON_SOURCE: ("button_source": "button_source"),
  ERROR_CODE: ("ext_error_code": "ext_error_code"),
  ERROR_DESC: ("ext_error_desc": "ext_error_desc"),
  PAGE_LOAD_TIME: ("page_load_time": "page_load_time"),
  EXPERIMENT_NAME: ("pxp_exp_id": "pxp_exp_id"),
  TREATMENT_NAME: ("pxp_trtmnt_id": "pxp_trtmnt_id"),
  TRANSITION_TIME: ("transition_time": "transition_time"),
  FUNDING_LIST: ("eligible_payment_methods": "eligible_payment_methods"),
  FUNDING_COUNT: ("eligible_payment_count": "eligible_payment_count"),
  CHOSEN_FUNDING: ("selected_payment_method": "selected_payment_method"),
  BUTTON_LAYOUT: ("button_layout": "button_layout"),
  VERSION: ("checkoutjs_version": "checkoutjs_version"),
  LOCALE: ("locale": "locale"),
  BUYER_COUNTRY: ("buyer_cntry": "buyer_cntry"),
  INTEGRATION_IDENTIFIER: ("integration_identifier": "integration_identifier"),
  PARTNER_ATTRIBUTION_ID: ("bn_code": "bn_code"),
  PAGE_TYPE: ("pp_placement": "pp_placement"),
  SDK_NAME: ("sdk_name": "sdk_name"),
  SDK_VERSION: ("sdk_version": "sdk_version"),
  SDK_ENVIRONMENT: ("sdk_environment": "sdk_environment"),
  MOBILE_APP_VERSION: ("mobile_app_version": "mobile_app_version"),
  MOBILE_BUNDLE_IDENTIFIER: ("mapv": "mapv"),
  USER_AGENT: ("user_agent": "user_agent"),
  USER_ACTION: ("user_action": "user_action"),
  CONTEXT_CORRID: ("context_correlation_id": "context_correlation_id"),
  SDK_CACHE: ("sdk_cache": "sdk_cache"),
  SDK_LOAD_TIME: ("sdk_load_time": "sdk_load_time"),
  IS_VAULT: ("is_vault": "is_vault"),
  DISABLE_FUNDING: ("disable_funding": "disable_funding"),
  DISABLE_CARD: ("disable_card": "disable_card"),
  RESPONSE_DURATION: ("response_duration": "response_duration"),
  SDK_INTEGRATION_SOURCE: ("sdk_integration_source": "sdk_integration_source"),
  PAYMENT_FLOW: ("payment_flow": "payment_flow"),
  BUTTON_VERSION: ("button_version": "button_version"),
  FI_LIST: ("fi_list": "fi_list"),
  FI_ID: ("fi_id": "fi_id"),
  PRODUCT: ("product": "product"),
  CHOSEN_FI_TYPE: ("chosen_fi_type": "chosen_fi_type"),
  SELECTED_FI:
    ("merchant_selected_funding_source": "merchant_selected_funding_source"),
  POTENTIAL_PAYMENT_METHODS:
    ("potential_payment_methods": "potential_payment_methods"),
  PAY_NOW: ("pay_now": "pay_now"),
  STICKINESS_ID: ("stickiness_id": "stickiness_id"),
  TIMESTAMP: ("t": "t"),
  OPTION_SELECTED: ("optsel": "optsel"),
  USER_IDENTITY_METHOD: ("user_identity_method": "user_identity_method"),
  FIELDS_COMPONENT_SESSION_ID:
    ("fields_component_session_id": "fields_component_session_id"),
  CPL_COMP_METRICS: ("cpl_comp_metrics": "cpl_comp_metrics"),
  CPL_CHUNK_METRICS: ("cpl_chunk_metrics": "cpl_chunk_metrics"),
  CPL_QUERY_METRICS: ("cpl_query_metrics": "cpl_query_metrics"),
};

export const FPTI_USER_ACTION = {
  COMMIT: ("commit": "commit"),
  CONTINUE: ("continue": "continue"),
};

export const FPTI_DATA_SOURCE = {
  PAYMENTS_SDK: ("checkout": "checkout"),
};

export const FPTI_FEED = {
  PAYMENTS_SDK: ("payments_sdk": "payments_sdk"),
};

export const FPTI_SDK_NAME = {
  PAYMENTS_SDK: ("payments_sdk": "payments_sdk"),
};
