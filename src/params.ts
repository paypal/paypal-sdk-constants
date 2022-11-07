export const SDK_PATH = "/sdk/js";
export const SDK_SETTINGS = {
  NAMESPACE: "data-namespace" as const,
  CLIENT_TOKEN: "data-client-token" as const,
  MERCHANT_ID: "data-merchant-id" as const,
  PARTNER_ATTRIBUTION_ID: "data-partner-attribution-id" as const,
  STAGE_HOST: "data-stage-host" as const,
  API_STAGE_HOST: "data-api-stage-host" as const,
  CSP_NONCE: "data-csp-nonce" as const,
  ENABLE_3DS: "data-enable-3ds" as const,
  SDK_INTEGRATION_SOURCE: "data-sdk-integration-source" as const,
  USER_ID_TOKEN: "data-user-id-token" as const,
  AMOUNT: "data-amount" as const,
  CLIENT_METADATA_ID: "data-client-metadata-id" as const,
  PAGE_TYPE: "data-page-type" as const,
  USER_EXPERIENCE_FLOW: "data-user-experience-flow" as const,
  POPUPS_DISABLED: "data-popups-disabled" as const,
};
export const SDK_QUERY_KEYS = {
  COMPONENTS: "components" as const,
  ENV: "env" as const,
  DEBUG: "debug" as const,
  CACHEBUST: "cachebust" as const,
  CLIENT_ID: "client-id" as const,
  MERCHANT_ID: "merchant-id" as const,
  LOCALE: "locale" as const,
  CURRENCY: "currency" as const,
  INTENT: "intent" as const,
  COMMIT: "commit" as const,
  VAULT: "vault" as const,
  BUYER_COUNTRY: "buyer-country" as const,
  ENABLE_FUNDING: "enable-funding" as const,
  DISABLE_FUNDING: "disable-funding" as const,
  DISABLE_CARD: "disable-card" as const,
  INTEGRATION_DATE: "integration-date" as const,
  STAGE_HOST: "stage-host" as const,
  STAGE_ALIAS: "stage-alias" as const,
  CDN_REGISTRY: "cdn-registry" as const,
  VERSION: "version" as const,
};
export const COMPONENTS = {
  BUTTONS: "buttons" as const,
  HOSTED_FIELDS: "hosted-fields" as const,
};
export const DEBUG = {
  TRUE: true as const,
  FALSE: false as const,
};
export const QUERY_BOOL = {
  TRUE: "true" as const,
  FALSE: "false" as const,
};
export const UNKNOWN = "unknown" as const;
export const PROTOCOL = {
  HTTP: "http" as const,
  HTTPS: "https" as const,
};
export const PAGE_TYPES = {
  HOME: "home" as const,
  PRODUCT: "product" as const,
  CART: "cart" as const,
  CHECKOUT: "checkout" as const,
  PRODUCT_LISTING: "product-listing" as const,
  SEARCH_RESULTS: "search-results" as const,
  PRODUCT_DETAILS: "product-details" as const,
  MINI_CART: "mini-cart" as const,
};
export const MERCHANT_ID_MAX = 10;
