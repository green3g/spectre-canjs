import ViewModel from './ViewModel';

import {Connection} from '../test/data/connection';

let vm;

beforeEach(() => {
    vm = new ViewModel({});
});
afterEach(() => {
    vm = null;
});

test('objectId set()', (done) => {
    const id = 6;
    vm.assign({
        connection: Connection,
        objectId: id
    });
    vm.promise.then(() => {
        expect(vm.object.id).toEqual(id);
        done();
    });
});

test('fields get()', () => {
    vm.fields = ['yes', {edit: false, name: 'no'}];
    expect(vm.fields.length).toEqual(1);
});

test('fetchObject(con, id)', (done) => {
    const id = 6;
    const promise = vm.fetchObject(Connection, id);
    promise.then(() => {
        expect(vm.object.id).toEqual(id);
        done();
    });
});

test('submitForm()', (done) => {
    const object = {test: 'hello'};
    vm.object = object;

    vm.on('submit', function (ev, item) {
        expect(item.serialize()).toEqual(object);
        done();
    });
    vm.submitForm();
});

test('checkField(field, domElement, event, value)', (done) => {
    const object = {test: 'hello'};
    vm.object = object;
    function handle () {
        expect(true).toBeTruthy();
        vm.off('fieldchange', handle);
        done();
    }
    vm.on('fieldchange', handle);
    vm.checkField([{event: 'change'}, 'dummy', {name: 'test'}]);
});

test('dispatchEvent(eventName)', (done) => {

    function handle () {
        expect(true).toBeTruthy();
        vm.off('cancel', handle);
        done();
    }

    vm.on('cancel', handle);

    vm.dispatchEvent('cancel');
});