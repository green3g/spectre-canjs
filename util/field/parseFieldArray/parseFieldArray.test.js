/* eslint-env qunit, browser */

import q from 'steal-qunit';

import parseFieldArray from './parseFieldArray';
import Field from '../Field';
let fields;
q.module('util/field/parseFieldArray', {
    beforeEach: () => {
    },
    afterEach: () => {
        fields = null;
    }
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
