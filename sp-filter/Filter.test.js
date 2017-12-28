/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {Filter, FilterOptions} from './Filter';

//eslint-disable-next-line
let filter;

q.module('filter-widget/Filter', {
    beforeEach () {
        filter = new Filter({
            name: 'test',
            operator: 'equals',
            value: 'test'
        });
    },
    afterEach () {
        filter = null;
    }
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
        name: 'test'
    };

    assert.equal(filter.valueField.fieldType, 'date', 'valueField type should be date when field type is date');
});

test('alias get()', (assert) => {
    assert.equal(filter.alias, 'Name', 'the alias should be formatted by default');
    filter.field = {
        alias: 'Test Alias'
    };

    assert.equal(filter.alias, 'Test Alias', 'alias should be correctly retrieved');
});

test('formObject get()', (assert) => {
    assert.equal(filter.formObject.test, 'test', 'formObject should consist of a property with the correct value');
});

test('setField(field, dom, scope, val)', (assert) => {
    filter.setField(null, null, null, {value: 'hello'});
    assert.equal(filter.value, 'hello');
});
