import q from 'steal-qunit';
import can from 'can';

import {ViewModel} from './';

let vm;

q.module('.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});
test('buttonClick', (assert) => {
    assert.equal(1, 1, 'one should equal one');
});
