/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewModel} from './dropdown-menu';

//eslint-disable-next-line
let vm;

q.module('.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});

test('toggle()', (assert) => {
    vm.toggle();
    assert.ok(vm.toggled, 'state should be toggled');

    vm.toggle();
    assert.notOk(vm.toggled, 'state should not be toggled');
});

test('toggle(null, true)', (assert) => {
    vm.toggle(null, true);
    assert.ok(vm.toggled, 'state should be toggled when true is passed');
});

test('toggle(null, false)', (assert) => {
    vm.toggle(null, false);
    assert.notOk(vm.toggled, 'state should not be toggled when false is passed');
});

//TODO: test hideAll
