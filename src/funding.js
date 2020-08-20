/* @flow */

export const FUNDING = {
    PAYPAL:         ('paypal' : 'paypal'),
    VENMO:          ('venmo' : 'venmo'),
    ITAU:           ('itau' : 'itau'),
    CREDIT:         ('credit' : 'credit'),
    PAYLATER:       ('paylater' : 'paylater'),
    CARD:           ('card' : 'card'),
    IDEAL:          ('ideal' : 'ideal'),
    SEPA:           ('sepa' : 'sepa'),
    BANCONTACT:     ('bancontact' : 'bancontact'),
    GIROPAY:        ('giropay' : 'giropay'),
    SOFORT:         ('sofort' : 'sofort'),
    EPS:            ('eps' : 'eps'),
    MYBANK:         ('mybank' : 'mybank'),
    P24:            ('p24' : 'p24'),
    VERKKOPANKKI:   ('verkkopankki' : 'verkkopankki'),
    PAYU:           ('payu' : 'payu'),
    BLIK:           ('blik' : 'blik'),
    TRUSTLY:        ('trustly' : 'trustly'),
    ZIMPLER:        ('zimpler' : 'zimpler'),
    MAXIMA:         ('maxima' : 'maxima'),
    OXXO:           ('oxxo' : 'oxxo'),
    BOLETO:         ('boleto' : 'boleto'),
    WECHATPAY:      ('wechatpay' : 'wechatpay'),
    MERCADOPAGO:    ('mercadopago' : 'mercadopago')
};

export const FUNDING_BRAND_LABEL = {
    PAYPAL:         ('PayPal' : 'PayPal'),
    CREDIT:         ('PayPal Credit' : 'PayPal Credit')
};

export const CARD = {
    VISA:        ('visa' : 'visa'),
    MASTERCARD:  ('mastercard' : 'mastercard'),
    AMEX:        ('amex' : 'amex'),
    DISCOVER:    ('discover' : 'discover'),
    HIPER:       ('hiper' : 'hiper'),
    ELO:         ('elo' : 'elo'),
    JCB:         ('jcb' : 'jcb'),
    CUP:         ('cup' : 'cup')
};

export const WALLET_INSTRUMENT = {
    BALANCE: ('balance' : 'balance'),
    CARD:    ('card' : 'card'),
    BANK:    ('bank' : 'bank'),
    CREDIT:  ('credit' : 'credit')
};

export const FUNDING_PRODUCTS = {
    PAY_IN_4: ('payIn4' : 'payIn4'),
    FLEX:     ('flex' : 'flex'),
    CREDIT:   ('credit' : 'credit')
};
