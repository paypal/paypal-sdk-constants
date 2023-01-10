/* @flow */

export const ActionType = {
  CHECKOUT: ("checkout": "checkout"),
  SUBSCRIBE: ("subscribe": "subscribe"),
  SAVE: ("save": "save"),
  DELETE: ("delete": "delete"),
};

export type CheckoutAction = {|
  type: ActionType.SAVE,
  run: function,
|};

export type SubscribeAction = {|
  type: ActionType.SAVE,
  run: function,
|};

export type SaveAction = {|
  type: ActionType.SAVE,
  run: function,
|};

export type DeleteAction = {|
  type: ActionType.DELETE,
  run: function,
|};

export type Actions =
  | CheckoutAction
  | SubscribeAction
  | SaveAction
  | DeleteAction;
