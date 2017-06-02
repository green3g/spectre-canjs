/* eslint-env qunit, browser */

import q from 'steal-qunit';

import {ViewModel} from './list-table';
import DefineMap from 'can-define/map/map';
import {Connection} from '../test/data/connection';

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

test('fields get() without providing fields', (assert) => {
    vm.objects = [new DefineMap({
        field1: 'val1',
        field2: 'val2'
    })];

    assert.equal(vm.fields.length, 2, 'fields should be automatically created form object if no fields are provided');
});

test('setSort(field)', (assert) => {
    const field = 'name';
    const otherField = 'label';
    vm.setSort(field);
    assert.deepEqual(vm.currentSort.serialize(), {
        type: 'desc',
        field: field
    }, 'Current sort should be desc by default');

    vm.setSort(field);
    assert.deepEqual(vm.currentSort.serialize(), {
        type: 'asc',
        field: field
    }, 'Current sort should be asc after setting again');

    vm.setSort(otherField);
    assert.deepEqual(vm.currentSort.serialize(), {
        type: 'desc',
        field: otherField
    }, 'Current sort should be desc by default');
});

test('toggleSelected(obj), isSelected(obj)', (assert) => {
    vm.toggleSelected(vm.objects[0]);
    assert.ok(vm.isSelected(vm.objects[0]), 'object should be selected');

    vm.toggleSelected(vm.objects[0]);
    assert.notOk(vm.isSelected(vm.objects[0]), 'object should not be selected');
});

test('toggleSelectAll(), _allSelected', (assert) => {
    vm.toggleSelectAll();
    vm.objects.forEach((obj) => {
        assert.ok(vm.isSelected(obj), 'each object should be selected');
    });
    assert.ok(vm._allSelected, '_allSelected should be truthy');

    vm.toggleSelectAll();
    vm.objects.forEach((obj) => {
        assert.notOk(vm.isSelected(obj), 'each object should be selected');
    });

});
