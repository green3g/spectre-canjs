/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {Connection} from '../test/data/connection';
import ViewModel from './ViewModel';

let vm;

q.module('property-table.ViewModel', {
    beforeEach: () => {
        vm = new ViewModel();
    },
    afterEach: () => {
        vm = null;
    }
});

test('fetchObject(con, id)', (assert) => {
    const done = assert.async();
    vm.fetchObject(Connection, 6).then(() => {

        assert.ok(vm.object, 'the table should have an object after an object is fetched');
        done();

    });
});

test('objectId set(id)', (assert) => {
    const done = assert.async();
    const id = 6;
    vm.connection = Connection;
    assert.notOk(vm.objectPromise, 'objectPromise should not have a value by default');

    vm.objectId = id;
    assert.ok(vm.objectPromise, 'objectPromise should have a value after setting the objectId');

    vm.objectPromise.then(() => {
        assert.equal(vm.object.id, id, 'objects id should match the id that was set');
        done();
    });
});

test('fields get()', (assert) => {
    vm.fields = ['field_1', {
        detail: false,
        name: 'field_2'
    }];

    assert.equal(vm.fields.length, 1, 'fields should be excluded if detail:false');
});
