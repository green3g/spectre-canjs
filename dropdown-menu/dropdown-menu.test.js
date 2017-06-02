/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewModel} from './dropdown-menu';

//eslint-disable-next-line
let vm;

q.module('dropdown-menu.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});

test('toggle()', (assert) => {
    vm.toggle();
    assert.ok(vm.visible, 'state should be visible');

    vm.toggle();
    assert.notOk(vm.visible, 'state should not be visible');
});

test('toggle(null, true)', (assert) => {
    vm.toggle(null, true);
    assert.ok(vm.visible, 'state should be visible when true is passed');
});

test('toggle(null, false)', (assert) => {
    vm.toggle(null, false);
    assert.notOk(vm.visible, 'state should not be visible when false is passed');
});

test('onPrimaryClick(button)', (assert) => {
    const button = {};
    vm.on('primaryclick', function () {
        assert.equal(arguments[arguments.length - 1], button, 'button should be dispatched with the event');
    });
    vm.onPrimaryClick(button);
});

// TODO: test hideAll
