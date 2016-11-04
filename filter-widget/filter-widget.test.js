import {ViewModel} from './filter-widget';
import {Filter} from './Filter';

import q from 'steal-qunit';
import DefineMap from 'can-define/map/map';

var vm, filter;

q.module('filter-widget.ViewModel', {
    beforeEach: function () {
        vm = new ViewModel();
        filter = new Filter({
            name: 'test',
            operator: 'equals',
            value: 'test'
        });
    },
    afterEach: function () {
        filter = null;
        vm = null;
    }
});

test('fields get()', (assert) => {
    const fields = [{
        name: 'test',
        excludeFilter: true
    }, {
        name: 'test2'
    }];
    vm.fields = fields;
    assert.equal(vm.fields.length, 1, 'With excludeFilter true, only one field should be retreived from the getter');
});

test('formObject get()', (assert) => {
    vm.fields = [{name: 'test', label: 'alias'}];
    assert.equal(vm.formObject.name, 'test', 'formobject should default to the first fields name');
});

test('formFields get()', (assert) => {
    assert.equal(vm.formFields[0].fieldType, 'text', 'name field fieldType should be text by default');

    const field = {
        name: 'test',
        alias: 'Test'
    };
    vm.fields = [field];
    assert.equal(vm.formFields[0].fieldType, 'select', 'name field fieldType should be select when there are fieldOptions');
});

test('valueField get()', (assert) => {
    assert.equal(vm.valueField.fieldType, 'text', 'default valueField fieldType should be text');

    const obj = vm.formObject;
    obj.operator = 'after';
    vm.formObject = obj;
    assert.equal(vm.valueField.fieldType, 'date', 'when using a date operator, valueField fieldType should be date');
});

test('filterOptions get()', (assert) => {
    const obj = vm.formObject;
    obj.name = 'test';
    vm.formObject = obj;

    vm.fields = [{name: 'test', label: 'test', type: 'date'}];
    vm.filterOptions.forEach((f) => {
        assert.ok(f.types.indexOf('date') !== -1, 'each filter should have fieldType date');
    });


});

test('fieldOptions get() with fields', (assert) => {
    const fields = [{
        name: 'test',
        alias: 'Other'
    }];
    vm.fields = fields;
    assert.equal(vm.fieldOptions.length, fields.length, 'when fields are provided, fieldOptions should be created from the value');
});

test('fieldOptions get() with ObjectTemplate', (assert) => {
    const template = DefineMap.extend({
        test1: null,
        test2: null,
        test3: null
    });
    const len = Object.keys((new template()).serialize()).length;
    vm.ObjectTemplate = template;
    assert.equal(vm.fieldOptions.length, len, 'when no fieldOptions are provided, but ObjectTemplate is, fieldOptions.length should be length of ObjectTemplate keys');
});

test('addFilter()', (assert) => {
    vm.addFilter(null, null, null, filter);
    assert.equal(vm.filters.length, 1, 'filters should been added');
});

test('addFilter() with replaceExisting', (assert) => {
    vm.addFilter(null, null, null, filter);
    vm.addFilter(null, null, null, filter);
    assert.equal(vm.filters.length, 2, 'filters should been added');

    vm.replaceExisting = true;
    vm.addFilter(null, null, null, filter);
    assert.equal(vm.filters.length, 1, 'filters should been replaced');
});

test('addFilter() with filterFactory', (assert) => {
    vm.fields, [{
        name: 'test',
        filterFactory (filter) {
            return [new Filter({
                name: 'test',
                op: 'equals',
                val: 'test'
            }), new Filter({
                name: 'test',
                op: 'equals',
                val: 'test'
            })];
        }
    }];
    vm.addFilter(null, null, null, filter);
    assert.equal(vm.filters.length, 2, 'factoryFunction should be called and two filters should be created');
});

test('removeFilter()', (assert) => {
    vm.addFilter(null, null, null, filter);
    vm.removeFilter(null, null, null, filter);
    assert.equal(vm.filters.length, 0, 'filters should have been removed');
});

q.module('filter-widget.Filter', {
    beforeEach: function () {
        filter = new Filter({});
    },
    afterEach: function () {
        filter = null;
    }
});

// test('val set()', assert => {
//   assert.equal(filter.attr('op'), 'like', 'default operator should be like');
//
//   let value = 'test';
//   filter.attr('val', value);
//   assert.equal(filter.attr('val'), '%' + value + '%', 'after setting value when op is like, the value should be %value%');
//
//   filter.attr('op', 'equals');
//   filter.attr('val', value);
//   assert.equal(filter.attr('val'), value, 'after setting value when op is not like, value should be value');
//
//   value = '2.5';
//   filter.attr('op', 'greater_than');
//   filter.attr('val', value);
//   assert.equal(typeof filter.attr('val'), 'number', 'after setting value when op is number comparator, value should be a number');
// });
