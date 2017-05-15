/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewModel} from './manage-toolbar';

//eslint-disable-next-line
let vm;

q.module('data-admin/components/manage-toolbar.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});
test('dispatchEvent(button)', (assert) => {
    const button = {};
    vm.on('buttonclick', function () {
        assert.equal(arguments[arguments.length - 1], button, 'button should be the last argument');
    });
    vm.dispatchEvent(button);
});
