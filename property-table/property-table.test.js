import q from 'steal-qunit';
import can from 'can';
import {Connection} from 'test/data/connection';
import {ViewModel} from './property-table';
import CanMap from 'can/map/';
import {Field} from '../../util/field';

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
    const def = vm.fetchObject(Connection, 6).then((data) => {

        assert.ok(vm.attr('object'), 'the table should have an object after an object is fetched');
        done();

    });
});

test('objectId set(id)', (assert) => {
    const done = assert.async();
    const id = 6;
    vm.attr('connection', Connection);
    assert.notOk(vm.attr('objectPromise'), 'objectPromise should not have a value by default');

    vm.attr('objectId', id);
    assert.ok(vm.attr('objectPromise'), 'objectPromise should have a value after setting the objectId');

    vm.attr('objectPromise').then((object) => {
        assert.equal(vm.attr('object.id'), id, 'objects id should match the id that was set');
        done();
    });
});

test('getValue(field)', (assert) => {
    const field = new Field({name: 'test'});
    const obj = new CanMap({test: 'value'});

    vm.attr('object', obj);
    assert.equal(vm.getValue(field), 'value', 'result should match the value of the object');
});
