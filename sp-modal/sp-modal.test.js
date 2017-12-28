/* eslint-env qunit, browser */

import q from 'steal-qunit';
import ViewModel from './ViewModel';

// eslint-disable-next-line
let vm;

q.module('sp-modal.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});
test('show()', (assert) => {
    vm.on('show', function () {
        assert.ok(1, 'show event should be dispatched');
        assert.ok(vm.active, 'vm should be active');
    });
    vm.show();
});

test('hide()', (assert) => {
    vm.active = true;
    vm.on('hide', function () {
        assert.notOk(vm.active, 'vm should not be active and hide event should disaptched');
    });
    vm.hide();
});

test('toggle(true)', (assert) => {
    vm.toggle(true);
    assert.ok(vm.active, 'vm should be visible if visible is true');
});
test('toggle(false)', (assert) => {
    vm.active = true;
    vm.toggle(false);
    assert.notOk(vm.active, 'vm should be visible if visible is true');
});
test('toggle()', (assert) => {
    vm.toggle();
    assert.ok(vm.active, 'vm should be visible if visible is not passed');
    vm.toggle();
    assert.notOk(vm.active, 'vm should not be visible if visible is not passed again');
});
