import {Connection} from '../test/data/connection';
import ViewModel from './ViewModel';

let vm;

beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});

test('fetchObject(con, id)', (done) => {
    vm.fetchObject(Connection, 6).then(() => {

        expect(vm.object).toBeTruthy();
        done();

    });
});

test('objectId set(id)', (done) => {
    const id = 6;
    vm.connection = Connection;
    expect(vm.objectPromise).toBeFalsy();

    vm.objectId = id;
    expect(vm.objectPromise).toBeTruthy();

    vm.objectPromise.then(() => {
        expect(vm.object.id).toEqual(id);
        done();
    });
});

test('fields get()', () => {
    vm.fields = ['field_1', {
        details: false,
        name: 'field_2'
    }];

    expect(vm.fields.length).toEqual(1);
});
