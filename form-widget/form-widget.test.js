/* eslint-env qunit, browser */

import ViewModel from './ViewModel';
import q from 'steal-qunit';

import {Connection} from '../test/data/connection';

let vm;

q.module('form-widget.ViewModel', {
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
    vm.set({
        connection: Connection,
        objectId: id
    });
    vm.promise.then(() => {
        assert.equal(vm.formObject.id, id, 'formObject should be retrieved correctly');
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
        assert.equal(vm.formObject.id, id, 'form object should be loaded asynchronously');
        done();
    });
});

test('submitForm()', (assert) => {
    const done = assert.async();
    const object = {test: 'hello'};
    vm.formObject = object;

    vm.on('submit', function (ev, item) {
        assert.deepEqual(item.serialize(), object, 'item dispatched from submit event should be the object');
        done();
    });
    vm.submitForm();
});

test('setField(field, domElement, event, value)', (assert) => {
    const object = {test: 'hello'};
    const expected = {test: 'dummy'};
    vm.formObject = object;

    vm.setField({name: 'test'}, null, null, {value: 'dummy'});
    assert.deepEqual(vm.dirtyObject.serialize(), expected, 'setting a field value should change the dirtyObject');
});

test('cancelForm()', (assert) => {
    const done = assert.async();

    vm.on('cancel', function () {
        assert.equal(1, 1, 'cancel event should be dispatched');
        done();
    });
    vm.cancelForm();
});
