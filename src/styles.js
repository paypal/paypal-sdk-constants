/* @flow */
import { FUNDING } from './funding';

type Enum<T> = {
    [string] : T
};

export type ButtonLayoutType = Enum<'horizontal' | 'vertical'>;
export type ButtonShapeType = Enum<'horizontal' | 'vertical'>;
export type ButtonColorType = Enum<'gold' | 'blue' | 'silver' | 'black' | 'darkblue' | 'transparent' | 'white'>;
export type ButtonLabelType = Enum<'paypal' | 'checkout' | 'pay' | 'credit' |
    'card' | 'buynow' | 'installment' | 'venmo' | 'itau' | 'ideal' | 'elv' | 'bancontact' | 'giropay' | 'sofort' | 'eps' | 'mybank' | 'p24' | 'payu' | 'verkkopankki' | 'blik' | 'trustly' | 'maxima' | 'boleto'>;

export type ButtonStyleType = {|
    color : ButtonColorType,
    layout : ButtonLayoutType,
    shape : ButtonShapeType,
    label : ButtonLabelType,
    tagline : boolean
|};
