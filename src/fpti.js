/* @flow */

export const FPTI_KEY = {
  BUTTON_LAYOUT: ("button_layout": "button_layout"),
  BUTTON_SESSION_UID: ("button_session_id": "button_session_id"),
  BUTTON_SOURCE: ("button_source": "button_source"),
  BUTTON_TYPE: ("button_type": "button_type"),
  BUTTON_VERSION: ("button_version": "button_version"),
  BUYER_COUNTRY: ("buyer_cntry": "buyer_cntry"),
  CHOSEN_FI_TYPE: ("chosen_fi_type": "chosen_fi_type"),
  CHOSEN_FUNDING: ("selected_payment_method": "selected_payment_method"),
  CLIENT_ID: ("client_id": "client_id"),
  CONTEXT_CORRID: ("context_correlation_id": "context_correlation_id"),
  CONTEXT_ID: ("context_id": "context_id"),
  CONTEXT_TYPE: ("context_type": "context_type"),
  CPL_CHUNK_METRICS: ("cpl_chunk_metrics": "cpl_chunk_metrics"),
  CPL_COMP_METRICS: ("cpl_comp_metrics": "cpl_comp_metrics"),
  CPL_QUERY_METRICS: ("cpl_query_metrics": "cpl_query_metrics"),
  DATA_SOURCE: ("serverside_data_source": "serverside_data_source"),
  DISABLE_CARD: ("disable_card": "disable_card"),
  DISABLE_FUNDING: ("disable_funding": "disable_funding"),
  ERROR_CODE: ("ext_error_code": "ext_error_code"),
  ERROR_DESC: ("ext_error_desc": "ext_error_desc"),
  EVENT_NAME: ("event_name": "event_name"),
  EXPERIMENT_EXPERIENCE:
    ("experimentation_experience": "experimentation_experience"),
  EXPERIMENT_NAME: ("pxp_exp_id": "pxp_exp_id"),
  EXPERIMENT_TREATMENT:
    ("experimentation_treatment": "experimentation_treatment"),
  FEED: ("feed_name": "feed_name"),
  FI_ID: ("fi_id": "fi_id"),
  FI_LIST: ("fi_list": "fi_list"),
  FIELDS_COMPONENT_SESSION_ID:
    ("fields_component_session_id": "fields_component_session_id"),
  FUNDING_COUNT: ("eligible_payment_count": "eligible_payment_count"),
  FUNDING_LIST: ("eligible_payment_methods": "eligible_payment_methods"),
  HOSTED_BUTTON_ID: ("hosted_button_id": "hosted_button_id"),
  INTEGRATION_IDENTIFIER: ("integration_identifier": "integration_identifier"),
  IS_VAULT: ("is_vault": "is_vault"),
  LOCALE: ("locale": "locale"),
  MERCHANT_DOMAIN: ("merchant_domain": "merchant_domain"),
  MOBILE_APP_VERSION: ("mobile_app_version": "mobile_app_version"),
  MOBILE_BUNDLE_IDENTIFIER: ("mapv": "mapv"),
  OPTION_SELECTED: ("optsel": "optsel"),
  PAGE: ("page_name": "page_name"),
  PAGE_LOAD_TIME: ("page_load_time": "page_load_time"),
  PAGE_TYPE: ("pp_placement": "pp_placement"),
  PARTNER_ATTRIBUTION_ID: ("bn_code": "bn_code"),
  PAY_ID: ("pay_id": "pay_id"),
  PAY_NOW: ("pay_now": "pay_now"),
  PAYMENT_FLOW: ("payment_flow": "payment_flow"),
  POTENTIAL_PAYMENT_METHODS:
    ("potential_payment_methods": "potential_payment_methods"),
  PRODUCT: ("product": "product"),
  RECOMMENDED_PAYMENT: ("recommended_payment": "recommended_payment"),
  REFERER: ("referer_url": "referer_url"),
  REFERRER_DOMAIN: ("referrer_domain", "referrer_domain"),
  RESPONSE_DURATION: ("response_duration": "response_duration"),
  SDK_CACHE: ("sdk_cache": "sdk_cache"),
  SDK_ENVIRONMENT: ("sdk_environment": "sdk_environment"),
  SDK_INTEGRATION_SOURCE: ("sdk_integration_source": "sdk_integration_source"),
  SDK_LOAD_TIME: ("sdk_load_time": "sdk_load_time"),
  SDK_NAME: ("sdk_name": "sdk_name"),
  SDK_VERSION: ("sdk_version": "sdk_version"),
  SELECTED_FI:
    ("merchant_selected_funding_source": "merchant_selected_funding_source"),
  SELLER_ID: ("seller_id": "seller_id"),
  SESSION_UID: ("page_session_id": "page_session_id"),
  STATE: ("state_name": "state_name"),
  STICKINESS_ID: ("stickiness_id": "stickiness_id"),
  TIMESTAMP: ("t": "t"),
  TOKEN: ("token": "token"),
  TRANSITION: ("transition_name": "transition_name"),
  TRANSITION_TIME: ("transition_time": "transition_time"),
  TREATMENT_NAME: ("pxp_trtmnt_id": "pxp_trtmnt_id"),
  USER_ACTION: ("user_action": "user_action"),
  USER_AGENT: ("user_agent": "user_agent"),
  USER_IDENTITY_METHOD: ("user_identity_method": "user_identity_method"),
  VERSION: ("checkoutjs_version": "checkoutjs_version"),
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
