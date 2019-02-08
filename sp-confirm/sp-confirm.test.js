import ViewModel from './ViewModel';

// eslint-disable-next-line
let vm;

beforeEach (() => {
    vm = new ViewModel();
});
afterEach (() => {
    vm = null;
});

test('onAccept', () => {
    vm.active = true;

    vm.accept();
    expect(vm.promise).resolves.toBeFalsy();
});


test('reject', () => {
    vm.active = true;

    vm.reject();
    expect(vm.promise).resolves.toBeFalsy();
});