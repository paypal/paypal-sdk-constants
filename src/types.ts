export const TYPES = true;
export type VaultedInstrument = {
  id: string;
  label: {
    description: string;
  };
};
export type BasicEligibility = {
  eligible: boolean | null | undefined;
  branded: boolean | null | undefined;
  recommended?: boolean | null | undefined;
};
export type PayPalEligibility = {
  eligible: boolean | null | undefined;
  branded: boolean | null | undefined;
  recommended?: boolean | null | undefined;
  vaultable?: boolean | null | undefined;
  vaultedInstruments?: ReadonlyArray<VaultedInstrument>;
};
export type FundingProductEligibility = {
  eligible?: boolean;
  variant?: string | null | undefined;
};
export type PayLaterEligibility = {
  eligible: boolean | null | undefined;
  recommended?: boolean | null | undefined;
  products?: {
    payIn3: FundingProductEligibility;
    payIn4: FundingProductEligibility;
    paylater: FundingProductEligibility;
  };
};
export type CardVendorEligibility = {
  eligible: boolean | null | undefined;
  vaultable?: boolean | null | undefined;
  vaultedInstruments?: ReadonlyArray<VaultedInstrument>;
};
export type CardVendorsEligibility = {
  visa?: CardVendorEligibility;
  mastercard?: CardVendorEligibility;
  amex?: CardVendorEligibility;
  discover?: CardVendorEligibility;
  hiper?: CardVendorEligibility;
  elo?: CardVendorEligibility;
  jcb?: CardVendorEligibility;
  cup?: CardVendorEligibility;
};
export type CardEligibility = {
  eligible: boolean | null | undefined;
  branded: boolean | null | undefined;
  recommended?: boolean | null | undefined;
  installments?: boolean | null | undefined;
  vendors: CardVendorsEligibility;
};
export type FundingEligibilityType = {
  paypal?: PayPalEligibility;
  card?: CardEligibility;
  venmo?: BasicEligibility;
  applepay?: BasicEligibility;
  credit?: BasicEligibility;
  paylater?: PayLaterEligibility;
  sepa?: BasicEligibility;
  bancontact?: BasicEligibility;
  eps?: BasicEligibility;
  giropay?: BasicEligibility;
  ideal?: BasicEligibility;
  mybank?: BasicEligibility;
  p24?: BasicEligibility;
  sofort?: BasicEligibility;
  wechatpay?: BasicEligibility;
  zimpler?: BasicEligibility;
  itau?: BasicEligibility;
  payu?: BasicEligibility;
  verkkopankki?: BasicEligibility;
  blik?: BasicEligibility;
  boleto?: BasicEligibility;
  boletobancario?: BasicEligibility;
  maxima?: BasicEligibility;
  oxxo?: BasicEligibility;
  trustly?: BasicEligibility;
  mercadopago?: BasicEligibility;
  multibanco?: BasicEligibility;
  satispay?: BasicEligibility,
};
