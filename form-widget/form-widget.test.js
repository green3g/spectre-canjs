import {ViewModel} from './form-widget';
import q from 'steal-qunit';

import {Connection} from 'test/data/connection';
import {Field} from '../../util/field';

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
    vm.attr({
        connection: Connection,
        objectId: id
    });
    vm.attr('promise').then(function () {
        assert.equal(vm.attr('formObject.id'), id, 'formObject should be retrieved correctly');
        done();
    });
});

test('fields get()', (assert) => {
    vm.attr('fields', ['yes', {excludeForm: true, name: 'no'}]);
    assert.equal(vm.attr('fields').length, 1, 'fields with excludeForm:true should not be included');
});

test('fetchObject(con, id)', (assert) => {
    const id = 6;
    const done = assert.async();
    const promise = vm.fetchObject(Connection, id);
    promise.then(function (item) {
        assert.equal(vm.attr('formObject.id'), id, 'form object should be loaded asynchronously');
        done();
    });
});

test('submitForm()', (assert) => {
    const done = assert.async();
    const object = {test: 'hello'};
    vm.attr('formObject', object);

    vm.on('submit', function (ev, item) {
        assert.deepEqual(item.attr(), object, 'item dispatched from submit event should be the object');
        done();
    });
    vm.submitForm();
});

test('setField(field, domElement, event, value)', (assert) => {
    const object = {test: 'hello'};
    vm.attr('formObject', object);

    vm.setField('test', null, null, 'dummy');
    assert.deepEqual(vm.attr('formObject').attr(), object, 'setting a field value should change the formObject');
});

test('cancelForm()', (assert) => {
    const done = assert.async();

    vm.on('cancel', function () {
        assert.equal(1, 1, 'cancel event should be dispatched');
        done();
    });
    vm.cancelForm();
});

test('getFieldValue(field)', (assert) => {
    const field = new Field({name: 'label'});
    vm.attr('formObject', {
        label: 'test'
    });

    assert.equal(vm.getFieldValue(field), 'test', 'field value should be equal to the property value');
});
