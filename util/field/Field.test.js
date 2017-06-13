/* eslint-env qunit, browser */

import q from 'steal-qunit';

import Field from './Field';

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
