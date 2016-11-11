import q from 'steal-qunit';
import can 

import {Field} from './field';

const cases = [{
    name: 'one'
}, {
    name: 'two',
    fieldType: 'date'
}, {
    name: 'three',
    alias: 'Custom'
}, {
    name: 'four',
    formatter (val, other) {
        return val + other.attr('two');
    }
}];
let fields;

q.module('.ViewModel', {
    beforeEach: () => {
        const fields = cases.map((c) => {
            return new Field(c);
        });
    },
    afterEach: () => {
        field = null;
    }
});

test('Field.alias default', (assert) => {

});
