import details from './details';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import connect from 'can-connect';
import constructor from 'can-connect/constructor/constructor';
import map from 'can-connect/can/map/map';

// mixin model property
const ViewModel = DefineMap.extend(Object.assign({model: '*'}, details));

// a basic can-connect implementation
const MyMap = DefineMap.extend({id: 'number'});
const List = DefineList.extend({'#': MyMap});
const model = connect([constructor, map], {
    getList () {
        return [];
    },
    getData () {
        return [];
    },
    get (id) {
        return id ? {id} : null;
    },
    Map: MyMap,
    List
});

let vm, obj;
beforeEach (() => {
    vm = new ViewModel({
        model: model
    });
    obj = new DefineMap({
        id: 1
    });
});
afterEach (() => {
    vm = null;
});

test('detailsPromise get() localDetailsObject', () => {
    expect.assertions(1);
    
    vm.showDetails(obj);
    return expect(vm.detailsPromise).resolves.toEqual(obj);
});

// test('detailsPromise get() detailsId', () => {

//     vm.detailsId = 1;
//     return vm.detailsPromise.then((data) => {
//         expect(data.id).toEqual(1);
//         return data;
//     });
// });

test('showDetails(obj)', () => {
    vm.showDetails(obj);
    expect(vm.detailsId).toEqual(1);
});

test('showDetailsFromEvent(args)', () => {
    vm.showDetailsFromEvent([{}, obj]);
    expect(vm.detailsId).toEqual(1);
});

test('clearDetails()', () => {

    vm.showDetails(obj);
    vm.clearDetails();

    expect(vm.detailsId).toEqual(null);
    expect(vm.detailsPromise).resolves.toEqual(null);
});