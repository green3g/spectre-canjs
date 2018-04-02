import ViewModel from './ViewModel';

let vm;

beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});
test('isSelected(values)', () => {
    vm.value = '1';

    expect(vm.isSelected(1)).toBeTruthy();
    expect(vm.isSelected('1')).toBeTruthy();
});

test('options get() with getOptions(obj)', () => {
    vm.assign({
        object: {val: 0},
        getOptions: function (obj) {
            const options = {
                0: [{value: 'zero'}],
                1: [{value: 'one'}]
            };
            return options[obj.val];
        }
    });

    expect(vm.options[0].value).toEqual('zero');

    vm.object.val = 1;
    expect(vm.options[0].value).toEqual('one');
});