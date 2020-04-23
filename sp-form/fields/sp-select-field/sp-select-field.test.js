import ViewModel from './ViewModel';

let vm;

const options = {
    0: [{value: 'zero'}],
    1: [{value: 'one'}]
};

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

test('optionsPromise get() with getOptions(obj)', () => {
    vm.getOptions = function (obj) {
        return options[obj.val];
    };

    vm.object = {val: 0};
    expect(vm.optionsPromise).resolves.toMatchObject(options[0]);

    vm.object.val = 1;
    expect(vm.optionsPromise).resolves.toMatchObject(options[1]);
});