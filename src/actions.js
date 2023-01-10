/* @flow */
import { ZalgoPromise } from "@krakenjs/zalgo-promise/src";

export const ActionType = {
  CHECKOUT: ("checkout": "checkout"),
  SUBSCRIBE: ("subscribe": "subscribe"),
  SAVE: ("save": "save"),
  DELETE: ("delete": "delete"),
};

export type CheckoutAction = {|
  type: ActionType.SAVE,
  run: (args: Object) => ZalgoPromise<void>,
|};

export type SubscribeAction = {|
  type: ActionType.SAVE,
  run: (args: Object) => ZalgoPromise<void>,
|};

export type SaveAction = {|
  type: ActionType.SAVE,
  run: (args: Object) => ZalgoPromise<void>,
|};

export type DeleteAction = {|
  type: ActionType.DELETE,
  run: (args: Object) => ZalgoPromise<void>,
|};

export type Actions =
  | CheckoutAction
  | SubscribeAction
  | SaveAction
  | DeleteAction;
