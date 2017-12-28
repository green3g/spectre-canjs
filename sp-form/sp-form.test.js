/* eslint-env qunit, browser */

import ViewModel from './ViewModel';
import q from 'steal-qunit';

import {Connection} from '../test/data/connection';

let vm;

q.module('sp-form.ViewModel', {
    beforeEach: function () {
        vm = new ViewModel({});
    },
    afterEach: function () {
        vm = null;
    }
});

test('objectId set()', (assert) => {
    const done = assert.async();
    const id = 6;
    vm.assign({
        connection: Connection,
        objectId: id
    });
    vm.promise.then(() => {
        assert.equal(vm.object.id, id, 'object should be retrieved correctly');
        done();
    });
});

test('fields get()', (assert) => {
    vm.fields = ['yes', {edit: false, name: 'no'}];
    assert.equal(vm.fields.length, 1, 'fields with edit:false should not be included');
});

test('fetchObject(con, id)', (assert) => {
    const id = 6;
    const done = assert.async();
    const promise = vm.fetchObject(Connection, id);
    promise.then(() => {
        assert.equal(vm.object.id, id, 'form object should be loaded asynchronously');
        done();
    });
});

test('submitForm()', (assert) => {
    const done = assert.async();
    const object = {test: 'hello'};
    vm.object = object;

    vm.on('submit', function (ev, item) {
        assert.deepEqual(item.serialize(), object, 'item dispatched from submit event should be the object');
        done();
    });
    vm.submitForm();
});

test('checkField(field, domElement, event, value)', (assert) => {
    const done = assert.async();
    const object = {test: 'hello'};
    vm.object = object;
    function handle () {
        assert.ok(true, 'fieldchange event is dispatched');
        vm.off('fieldchange', handle);
        done();
    }
    vm.on('fieldchange', handle);
    vm.checkField([{event: 'change'}, 'dummy', {name: 'test'}]);
});

test('dispatchEvent(eventName)', (assert) => {
    const done = assert.async();

    function handle () {
        assert.ok(true, 'cancel event is dispatched');
        vm.off('cancel', handle);
        done();
    }

    vm.on('cancel', handle);

    vm.dispatchEvent('cancel');
});