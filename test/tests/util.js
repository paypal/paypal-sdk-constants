/* @flow */

import { once } from '../../src';

describe('util cases', () => {

    it('should create a one time function', () => {

        let counter = 0;

        let add = once(() => {
            counter += 1;
        });

        add();
        add();
        add();
        add();
        add();

        if (counter !== 1) {
            throw new Error(`Expected counter to be 1, got ${ counter }`);
        }
    });
});
