/* eslint-env qunit, browser */

import q from 'steal-qunit';

import {ViewModel} from './list-table';

import {Connection} from '../../test/data/connection';
import {Field} from '../../util/field';

let vm;
const objects = [{
    name: 'one',
    label: 'label1'
}, {
    name: 'two',
    label: 'label2'
}];

q.module('list-table.ViewModel', {
    beforeEach: () => {
        vm = new ViewModel({
            idProp: 'name',
            objects: objects
        });
    },
    afterEach: () => {
        vm = null;
    }
});

test('promise set()', (assert) => {
    const done = assert.async();
    vm.promise = Connection.getList({});
    vm.promise.then(() => {
        assert.ok(vm.objects.length > 3, 'objects should be retrieved and replaced');
        done();
    });
});

test('_allSelected get()', (assert) => {
    vm.objects.forEach((o) => {
        vm.toggleSelected(o);
    });
    assert.ok(vm._allSelected, 'all items should be selected');
});

test('fields get()', (assert) => {
    vm.fields = ['yes', {
        name: 'no',
        list: false
    }];
    assert.equal(vm.fields.length, 1, 'fields with list:false should not be included');
});

test('setSort(field)', (assert) => {
    const fieldName = 'name';
    const otherField = 'label';
    vm.setSort(fieldName);
    assert.deepEqual(vm.currentSort.serialize(), {
        type: 'asc',
        fieldName: fieldName
    }, 'Current sort should be ascending and set to field');

    vm.setSort(fieldName);
    assert.deepEqual(vm.currentSort.serialize(), {
        type: 'desc',
        fieldName: fieldName
    }, 'Current sort should be descending and set to field');

    vm.setSort(otherField);
    assert.deepEqual(vm.currentSort.serialize(), {
        type: 'asc',
        fieldName: otherField
    }, 'Current sort should be ascending and set to field');
});

test('dispatchButtonEvent(eventName, object)', (assert) => {
    const eventName = 'my-event';
    const myObj = {
        myObj: 'myObj'
    };
    const done = assert.async();
    vm.on(eventName, (event, obj) => {
        assert.deepEqual(obj, myObj, 'event should emit the correct object');
        assert.equal(event.type, eventName, 'event should be the correct name');
        done();
    });
    vm.dispatchButtonEvent({eventName: eventName}, myObj);
});

test('dispatchPrimaryButtonEvent(args, object)', (assert) => {
    const eventName = 'my-event';
    const myObj = {
        myObj: 'myObj'
    };
    const done = assert.async();
    vm.on(eventName, (event, obj) => {
        assert.deepEqual(obj, myObj, 'event should emit the correct object');
        assert.equal(event.type, eventName, 'event should be the correct name');
        done();
    });
    vm.dispatchPrimaryButtonEvent([{}, {eventName: eventName}], myObj);
});

test('toggleSelected(obj), isSelected(obj)', (assert) => {
    vm.toggleSelected(vm.objects[0]);
    assert.ok(vm.isSelected(vm.objects[0]), 'object should be selected');
});

test('toggleSelectAll(), _allSelected', (assert) => {
    vm.toggleSelectAll();
    vm.objects.forEach((obj) => {
        assert.ok(vm.isSelected(obj), 'each object should be selected');
    });
    assert.ok(vm._allSelected, '_allSelected should be truthy');
});
