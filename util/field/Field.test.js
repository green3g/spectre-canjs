/* eslint-env qunit, browser */

import q from 'steal-qunit';

import {Field, parseFieldArray, mapToFields} from './field';
import DefineMap from 'can-define/map/map';

let fields;
q.module('util/field/field', {
    beforeEach: () => {
    },
    afterEach: () => {
        fields = null;
    }
});

test('Field.alias', (assert) => {

    fields = [{
        name: 'test',
        expected: 'Test'
    }, {
        name: 'other',
        alias: 'Hey',
        expected: 'Hey'
    }];


    fields.forEach((f) => {
        f = new Field(f);
        assert.equal(f.alias, f.expected, 'field alias should be correct');
    });
});

test('Field.formTemplate', (assert) => {
    let field = new Field();
    assert.ok(typeof field.formTemplate === 'function', 'formTemplate should be a renderer function');

    field = new Field({
        formTemplate: '<p></p>'
    });
    assert.ok(typeof field.formTemplate === 'function', 'formTemplate should be converted to a renderer function');

    function renderer () {}
    field = new Field({
        formTemplate: renderer
    });
    assert.equal(field.formTemplate, renderer, 'if fieldtemplate is a renderer function, it should be returned');

    field = new Field({
        fieldType: 'select'
    });
    assert.ok(typeof field.formTemplate === 'function', 'formTemplate should be a function if passed a correct fieldType');
});

test('parseFieldArray', (assert) => {
    fields = parseFieldArray(['field1', {
        name: 'field2'
    }]);

    assert.equal(fields.length, 2, 'fields should be created');
    fields.forEach((f) => {
        assert.ok(f instanceof Field, 'field should be type Field');
    });
});

test('mapToFields', (assert) => {
    const MyMap = DefineMap.extend({
        field1: 'string',
        field2: 'string'
    });

    const ExtendedMyMap = MyMap.extend({
        field1: 'number'
    });

    const results = [
        mapToFields(MyMap),
        mapToFields(new MyMap()),
        mapToFields(ExtendedMyMap)
    ];
    results.forEach((r) => {
        assert.equal(r.length, 2, 'fields should be created');
        r.forEach((f) => {
            assert.ok(f instanceof Field, 'field should be type Field');
        });
    });
});
