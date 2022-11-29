/* @flow */

export const TYPES = true;

export type VaultedInstrument = {|
  id: string,
  label: {|
    description: string,
  |},
|};

export type BasicEligibility = {|
  eligible: ?boolean,
  branded: ?boolean,
  recommended?: ?boolean,
|};

export type PayPalEligibility = {|
  eligible: ?boolean,
  branded: ?boolean,
  recommended?: ?boolean,
  vaultable?: ?boolean,
  vaultedInstruments?: $ReadOnlyArray<VaultedInstrument>,
|};

export type FundingProductEligibility = {|
  eligible?: boolean,
  variant?: ?string,
|};

export type PayLaterEligibility = {|
  eligible: ?boolean,
  recommended?: ?boolean,
  products?: {|
    payIn3: FundingProductEligibility,
    payIn4: FundingProductEligibility,
    paylater: FundingProductEligibility,
  |},
|};

export type CardVendorEligibility = {|
  eligible: ?boolean,
  vaultable?: ?boolean,
  vaultedInstruments?: $ReadOnlyArray<VaultedInstrument>,
|};

export type CardVendorsEligibility = {|
  visa?: CardVendorEligibility,
  mastercard?: CardVendorEligibility,
  amex?: CardVendorEligibility,
  discover?: CardVendorEligibility,
  hiper?: CardVendorEligibility,
  elo?: CardVendorEligibility,
  jcb?: CardVendorEligibility,
  cup?: CardVendorEligibility,
|};

export type CardEligibility = {|
  eligible: ?boolean,
  branded: ?boolean,
  recommended?: ?boolean,
  installments?: ?boolean,
  guestEnabled?: ?boolean,
  vendors: CardVendorsEligibility,
|};

export type FundingEligibilityType = {|
  paypal?: PayPalEligibility,
  card?: CardEligibility,
  venmo?: BasicEligibility,
  applepay?: BasicEligibility,
  credit?: BasicEligibility,
  paylater?: PayLaterEligibility,
  sepa?: BasicEligibility,
  bancontact?: BasicEligibility,
  eps?: BasicEligibility,
  giropay?: BasicEligibility,
  ideal?: BasicEligibility,
  mybank?: BasicEligibility,
  p24?: BasicEligibility,
  sofort?: BasicEligibility,
  wechatpay?: BasicEligibility,
  zimpler?: BasicEligibility,
  itau?: BasicEligibility,
  payu?: BasicEligibility,
  verkkopankki?: BasicEligibility,
  blik?: BasicEligibility,
  boleto?: BasicEligibility,
  boletobancario?: BasicEligibility,
  maxima?: BasicEligibility,
  oxxo?: BasicEligibility,
  trustly?: BasicEligibility,
  mercadopago?: BasicEligibility,
  multibanco?: BasicEligibility,
  satispay?: BasicEligibility,
  paidy?: BasicEligibility,
|};
