/* eslint-env qunit, browser */

import q from 'steal-qunit';

import Field from '../Field';
import mapToFields from './mapToFields';
import DefineMap from 'can-define/map/map';

q.module('util/field/field', {
    beforeEach: () => {
    },
    afterEach: () => {
    }
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
