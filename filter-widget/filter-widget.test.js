/* eslint-env qunit, browser */

import {ViewModel} from './filter-widget';
import {Filter, FilterOptions} from './Filter';

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

test('fieldOptions get() with fields', (assert) => {
    const fields = [{
        name: 'test',
        alias: 'Other'
    }];
    vm.fields = fields;
    assert.equal(vm.fieldOptions.length, fields.length + 1, 'when fields are provided, fieldOptions should be created from the value');
});

test('fieldOptions get() with ObjectTemplate', (assert) => {
    const Template = DefineMap.extend({
        test1: 'string',
        test2: 'string',
        test3: 'string'
    });
    const len = Object.keys((new Template()).serialize()).length + 1;
    vm.ObjectTemplate = Template;
    assert.equal(vm.fieldOptions.length, len, 'when no fieldOptions are provided, but ObjectTemplate is, fieldOptions.length should be length of ObjectTemplate keys');
});

test('addFilter()', (assert) => {
    vm.addFilter(null, null, null, filter);
    assert.equal(vm.filters.length, 1, 'filters should been added');
});

test('removeFilter()', (assert) => {
    vm.addFilter(null, null, null, filter);
    vm.removeFilter(null, null, null, filter);
    assert.equal(vm.filters.length, 0, 'filters should have been removed');
});

q.module('filter-widget.Filter', {
    beforeEach: function () {
        filter = new Filter({
            name: 'test',
            operator: 'equals',
            value: 'test'
        });
    },
    afterEach: function () {
        filter = null;
    }
});

test('name get()', (assert) => {
    assert.equal(filter.name, 'test');

    filter.field = {
        name: 'hello'
    };
    assert.equal(filter.name, 'hello', 'if field is set, the field name should be used');
});

test('operatorField get() no field type', (assert) => {
    assert.equal(filter.operatorField.options.length, FilterOptions.length, 'filter options should be the default length');
});

test('operatorField get() with field type', (assert) => {
    filter.field = {
        name: 'test',
        type: 'date'
    };

    assert.ok(filter.operatorField.options.length < FilterOptions.length, 'filter options should be filtered to date friendly types');
});

test('valueField get() no field set', (assert) => {
    assert.equal(filter.valueField.fieldType, 'text', 'default valueField should be text field');
});

test('valueField get() field is set', (assert) => {
    filter.field = {
        fieldType: 'date',
        name: 'test'
    };

    assert.equal(filter.valueField.fieldType, 'date', 'valueField type should be date when field type is date');
});
