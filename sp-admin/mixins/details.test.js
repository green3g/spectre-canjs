import details from './details';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import connect from 'can-connect';
import constructor from 'can-connect/constructor/constructor';
import map from 'can-connect/can/map/map';

// mixin model property
const ViewModel = DefineMap.extend(Object.assign({model: '*'}, details));

// a basic can-connect implementation
const MyModel = DefineMap.extend({id: 'number'});
const List = DefineList.extend({'#': Map});
MyModel.connection = connect([constructor, map], {
    getList () {
        return [];
    },
    get (id) {
        return {id};
    },
    Map,
    List
});

let vm, obj;
beforeEach (() => {
    vm = new ViewModel({
        model: MyModel
    });
    obj = new DefineMap({
        id: 1
    });
});
afterEach (() => {
    vm = null;
});

test('detailsPromise get() setDetailsObject', () => {
    expect.assertions(1);

    vm.setDetailsObject = obj;
    return expect(vm.detailsPromise).resolves.toEqual(obj);
});

test('detailsPromise get() detailsId', () => {
    expect.assertions(1);

    vm.detailsId = 1;
    return vm.detailsPromise.then((data) => expect(data.id).toEqual(1));
});

test('showDetails(obj)', () => {
    vm.showDetails(obj);
    expect(vm.detailsId).toEqual(1);
});

test('showDetailsFromEvent(args)', () => {
    vm.showDetailsFromEvent([{}, obj]);
    expect(vm.detailsId).toEqual(1);
});

test('clearDetails()', () => {
    expect.assertions(2);

    vm.showDetails(obj);
    vm.clearDetails();

    expect(vm.detailsId.toEqual(null));
    return expect(vm.detailsPromise).resolves.toEqual(null);
});