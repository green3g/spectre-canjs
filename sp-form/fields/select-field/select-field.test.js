/* eslint-env qunit, browser */

import q from 'steal-qunit';
import ViewModel from './ViewModel';

//eslint-disable-next-line
let vm;

q.module('select-field.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});
test('isSelected(values)', (assert) => {
    vm.value = '1';

    assert.ok(vm.isSelected(1), 'value should be coerced');
    assert.ok(vm.isSelected('1'), 'value should be identified as selected');
});
