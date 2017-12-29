import ViewModel from './ViewModel';
import DefineMap from 'can-define/map/map';
import {Connection} from '../test/data/connection';

let vm;
const objects = [{
    name: 'one',
    label: 'label1'
}, {
    name: 'two',
    label: 'label2'
}];

beforeEach(() => {
    vm = new ViewModel({
        idProp: 'name',
        objects: objects
    });
});
afterEach(() => {
    vm = null;
});

test('promise set()', (done) => {
    vm.promise = Connection.getList({});
    vm.promise.then(() => {
        expect(vm.objects.length > 3).toBeTruthy();
        done();
    });
});

test('_allSelected get()', () => {
    vm.objects.forEach((o) => {
        vm.toggleSelected(o);
    });
    expect(vm._allSelected).toBeTruthy();
});

test('fields get()', () => {
    vm.fields = ['yes', {
        name: 'no',
        list: false
    }];
    expect(vm.fields.length).toEqual(1);
});

test('fields get() without providing fields', () => {
    vm.objects = [new DefineMap({
        field1: 'val1',
        field2: 'val2'
    })];

    expect(vm.fields.length).toEqual(2);
});

test('setSort(field)', () => {
    const field = 'name';
    const otherField = 'label';
    vm.setSort(field);
    expect(vm.currentSort.serialize()).toEqual({
        type: 'desc',
        field: field
    });

    vm.setSort(field);
    expect(vm.currentSort.serialize()).toEqual({
        type: 'asc',
        field: field
    });

    vm.setSort(otherField);
    expect(vm.currentSort.serialize()).toEqual({
        type: 'desc',
        field: otherField
    });
});

test('toggleSelected(obj), isSelected(obj)', () => {
    vm.toggleSelected(vm.objects[0]);
    expect(vm.isSelected(vm.objects[0])).toBeTruthy();

    vm.toggleSelected(vm.objects[0]);
    expect(vm.isSelected(vm.objects[0])).toBeFalsy();
});

test('toggleSelectAll(), _allSelected', () => {
    vm.toggleSelectAll();
    vm.objects.forEach((obj) => {
        expect(vm.isSelected(obj)).toBeTruthy();
    });
    expect(vm._allSelected).toBeTruthy();

    vm.toggleSelectAll();
    vm.objects.forEach((obj) => {
        expect(vm.isSelected(obj)).toBeFalsy();
    });

});

test('dispatchEvent("my")', () => {
    const obj = new DefineMap();
    vm.on('my', (viewModel, ev, objectMap) => {
        expect(objectMap).toEqual(obj);
    });
    vm.dispatchEvent('my', obj);
});