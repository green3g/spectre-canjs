/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewModel} from './search-control';
import {Field} from '../../../../util/Field';

//eslint-disable-next-line
let vm;

q.module('.ViewModel', {
    beforeEach () {
        vm = new ViewModel({
            filters: [],
            fields: new Field({
                name: 'test'
            })
        });
    },
    afterEach () {
        vm = null;
    }
});


test('toggleQuickFilter(field, value)', (assert) => {
    vm.toggleQuickFilter('test', 'value');
    assert.equal(vm.filters.length, 1, 'filter should be added');

    vm.toggleQuickFilter('test', 'different');
    assert.equal(vm.filters.length, 1, 'filters length should not have changed');
    assert.equal(vm.filters[0].value, 'different', 'filter value should be updated');


    vm.toggleQuickFilter('test', 'different');
    assert.notOk(vm.filters.length, 'filter should be removed');
});

test('getQuickFilter(field, value)', (assert) => {
    assert.notOk(vm.getQuickFilter('test', 'value'), 'quick filter should not be active');

    vm.toggleQuickFilter('test', 'different');
    assert.notOk(vm.getQuickFilter('test', 'value'), 'quick filter should not be active');
    assert.ok(vm.getQuickFilter('test', 'different'), 'quick filter should be active');
});
