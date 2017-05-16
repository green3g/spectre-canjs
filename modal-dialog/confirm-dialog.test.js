/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewModel} from './confirm-dialog';

//eslint-disable-next-line
let vm;

q.module('modal-dialog/confirm-dialog.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});
test('actionPromise get()', (assert) => {
    assert.notOk(vm.actionPromise, 'if not active action promise should not be available');

    vm.active = true;
    const promise = vm.actionPromise;
    promise.then(function (result) {
        assert.ok(result, 'promise should resolve');
    });

    assert.ok(vm.actionPromise, 'if active, action promise should be available');
    vm.onAccept();
});

test('onAccept', (assert) => {
    vm.active = true;
    // eslint-disable-next-line
    const promise = vm.actionPromise;

    vm.on('accept', function (resolved) {
        assert.ok(resolved, 'vm should dispatch accept event');
    });
    vm.onAccept();
    assert.notOk(vm.active, 'vm should not be active after accepting');
});


test('onReject', (assert) => {
    vm.active = true;
    // eslint-disable-next-line
    const promise = vm.actionPromise;

    vm.on('reject', function (resolved) {
        assert.ok(resolved, 'vm should dispatch reject event');
    });
    vm.onReject();
    assert.notOk(vm.active, 'vm should not be active after accepting');
});
