/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewModel} from './text-field';

//eslint-disable-next-line
let vm;

q.module('admin-form/field-text-field.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});
test('text-field', (assert) => {
    assert.ok(true, 'nothing to test');
});
