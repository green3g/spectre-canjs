import q from 'steal-qunit';
import can from 'can';

import {
  ViewModel
} from './list-table';

import {Connection} from '../../test/data/connection';
import {Field} from '../../util/field';

let vm,
    objects = [{
        name: 'one',
        label: 'label1'
    }, {
        name: 'two',
        label: 'label2'
    }];

q.module('list-table.ViewModel', {
    beforeEach: () => {
        vm = new ViewModel({
            objects: objects
        });
    },
    afterEach: () => {
        vm = null;
    }
});

test('promise set()', (assert) => {
    const done = assert.async();
    vm.attr('promise', Connection.getList({}));
    vm.attr('promise').then((data) => {
        assert.ok(vm.attr('objects').length > 3, 'objects should be retrieved and replaced');
        done();
    });
});

test('_allSelected get()', (assert) => {
    vm.attr('objects').forEach((o) => {
        vm.toggleSelected(o);
    });
    assert.ok(vm.attr('_allSelected'), 'all items should be selected');
});

test('fields get()', (assert) => {
    vm.attr('fields', ['yes', {
        name: 'no',
        excludeListTable: true
    }]);
    assert.equal(vm.attr('fields').length, 1, 'fields with excludeListTable should not be included');
});

test('setSort(field)', (assert) => {
    const fieldName = 'name';
    const otherField = 'label';
    vm.setSort(fieldName);
    assert.deepEqual(vm.attr('currentSort').attr(), {
        type: 'asc',
        fieldName: fieldName
    }, 'Current sort should be ascending and set to field');

    vm.setSort(fieldName);
    assert.deepEqual(vm.attr('currentSort').attr(), {
        type: 'desc',
        fieldName: fieldName
    }, 'Current sort should be descending and set to field');

    vm.setSort(otherField);
    assert.deepEqual(vm.attr('currentSort').attr(), {
        type: 'asc',
        fieldName: otherField
    }, 'Current sort should be ascending and set to field');
});

test('buttonClick(eventName, object)', (assert) => {
    const eventName = 'my-event';
    const myObj = {
        myObj: 'myObj'
    };
    const done = assert.async();
    vm.on(eventName, (event, obj) => {
        assert.deepEqual(obj, myObj, 'event should emit the correct object');
        assert.deepEqual(event, {
            type: eventName
        }, 'event should be the correct name');
        done();
    });
    vm.buttonClick(eventName, myObj);
});

test('toggleSelected(obj), isSelected(obj)', (assert) => {
    vm.toggleSelected(vm.attr('objects')[0]);
    assert.ok(vm.isSelected(vm.attr('objects')[0]), 'object should be selected');
});

test('toggleSelectAll(), _allSelected', (assert) => {
    vm.toggleSelectAll();
    vm.attr('objects').forEach((obj) => {
        assert.ok(vm.isSelected(obj), 'each object should be selected');
    });
    assert.ok(vm.attr('_allSelected'), '_allSelected should be truthy');
});

test('getFieldValue(field, obj)', (assert) => {
    const field = new Field({name: 'label'});
    const obj = vm.attr('objects')[0];

    assert.equal(vm.getFieldValue(field, obj), 'label1', 'field value should be equal to the property value');
});
