/* @flow */

export const ActionType = {
  CHECKOUT: ("checkout": "checkout"),
  SUBSCRIBE: ("subscribe": "subscribe"),
  SAVE: ("save": "save"),
  DELETE: ("delete": "delete"),
};

export type CheckoutAction = {|
  type: ActionType.SAVE,
  run: (args: object) => ZalgoPromise<void>,
|};

export type SubscribeAction = {|
  type: ActionType.SAVE,
  run: (args: object) => ZalgoPromise<void>,
|};

export type SaveAction = {|
  type: ActionType.SAVE,
  run: (args: object) => ZalgoPromise<void>,
|};

export type DeleteAction = {|
  type: ActionType.DELETE,
  run: (args: object) => ZalgoPromise<void>,
|};

export type Actions =
  | CheckoutAction
  | SubscribeAction
  | SaveAction
  | DeleteAction;
