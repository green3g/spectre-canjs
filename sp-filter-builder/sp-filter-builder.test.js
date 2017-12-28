/* eslint-env qunit, browser */

import ViewModel from './ViewModel';

import q from 'steal-qunit';
import DefineMap from 'can-define/map/map';
import {Filter} from './Filter';

var vm;

q.module('sp-filter-builder.ViewModel', {
    beforeEach: function () {
        vm = new ViewModel();
    },
    afterEach: function () {
        vm = null;
    }
});


test('nameField get()', (assert) => {
    assert.notOk(vm.nameField.options, 'nameField should not have options when no fieldOptions are available');
    vm.fields = [{
        name: 'one',
        alias: 'One'
    }];
    assert.ok(vm.nameField.options, 'nameField should have options when fieldOptiosn are available');
});

test('fields get()', (assert) => {
    const fields = [{
        name: 'test',
        filter: false
    }, {
        name: 'test2'
    }];
    vm.fields = fields;
    assert.equal(vm.fields.length, 1, 'With filter false, only one field should be retreived from the getter');
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
    const filter = new Filter({
        name: 'test',
        operator: 'equals',
        value: 'test'
    });
    vm.addFilter(null, null, null, filter);
    assert.equal(vm.filters.length, 1, 'filters should been added');
});

test('removeFilter()', (assert) => {
    const filter = new Filter({
        name: 'test',
        operator: 'equals',
        value: 'test'
    });
    vm.addFilter(null, null, null, filter);
    vm.removeFilter(null, null, null, filter);
    assert.equal(vm.filters.length, 0, 'filters should have been removed');
});

test('removeFilters()', (assert) => {
    vm.filters = [new Filter(), new Filter()];
    vm.removeFilters();
    assert.notOk(vm.filters.length, 'filters should be removed');
});
