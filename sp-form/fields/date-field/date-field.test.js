/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewModel} from './date-field';

// eslint-disable-next-line
let vm;

q.module('date-field.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});

test('value set(date)', (assert) => {
    vm.value = '10/10/2010';
    assert.equal(vm.day, 10, 'day should be set correctly');
    assert.equal(vm.month, 9, 'month should be set correctly');
    assert.equal(vm.year, 2010, 'year should be set correctly');
});

test('value set() invalid date', (assert) => {
    vm.value = '0/0/0';
    assert.equal(vm.day, undefined, 'day should not be defined');
    assert.equal(vm.month, undefined, 'month should not be defined');
    assert.equal(vm.year, undefined, 'year should not be defined');
});

test('value get()', (assert) => {
    vm.value = new Date();
    assert.equal(vm.value.getDate(), new Date().getDate(), 'day should be today');
    assert.equal(vm.value.getMonth(), new Date().getMonth(), 'month should be today');
    assert.equal(vm.value.getFullYear(), new Date().getFullYear(), 'year should be today');
});

test('value get() invalid date', (assert) => {
    vm.day = 0;
    assert.equal(vm.value, null, 'day should be default null');
});

test('dayProperties get()', (assert) => {
    vm.assign({
        month: 0,
        day: 1,
        year: 1900
    });
    assert.equal(vm.dayProperties.options.length, 31, 'january should have 31 day options');
});

test('getDaysInMonth()', (assert) => {
    assert.equal(vm.getDaysInMonth(new Date('2/1/2016')), 29, 'february should have 29 days in a leap year');
    assert.equal(vm.getDaysInMonth(new Date('2/1/2015')), 28, 'february should have 28 days in a regular year');
    assert.equal(vm.getDaysInMonth(new Date('6/30/2015')), 30, 'june should have 30 days');
    assert.equal(vm.getDaysInMonth(new Date('5/1/2015')), 31, 'may should have 31 days');
});

test('onChange()', (assert) => {
    vm.on('fieldchange', () => {
        assert.ok(true, 'onChange should trigger event');
    });
    vm.value = '1/1/2017';
});

test('isValidDate()', (assert) => {
    assert.notOk(vm.isValidDate('0/1/2015'));
    assert.notOk(vm.isValidDate('1/41/2015'));

    assert.ok('1/1/2016');
    assert.ok('1/31/2016');
    assert.ok('2/29/2016');
});
