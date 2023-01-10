/* @flow */
import { ZalgoPromise } from "@krakenjs/zalgo-promise/src";

export const ACTION_TYPES = {
  CHECKOUT: ("checkout": "checkout"),
  SUBSCRIBE: ("subscribe": "subscribe"),
  SAVE: ("save": "save"),
  DELETE: ("delete": "delete"),
};

export type CheckoutAction = {|
  type: typeof ACTION_TYPES.CHECKOUT,
  run: (args: Object) => ZalgoPromise<void>,
|};

export type SubscribeAction = {|
  type: typeof ACTION_TYPES.SUBSCRIBE,
  run: (args: Object) => ZalgoPromise<void>,
|};

export type SaveAction = {|
  type: typeof ACTION_TYPES.SAVE,
  run: (args: Object) => ZalgoPromise<void>,
|};

export type DeleteAction = {|
  type: typeof ACTION_TYPES.DELETE,
  run: (args: Object) => ZalgoPromise<void>,
|};

export type Actions =
  | CheckoutAction
  | SubscribeAction
  | SaveAction
  | DeleteAction;
