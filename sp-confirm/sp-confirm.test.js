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

    vm.on('accept', function (resolved) {
        expect(resolved).toBeTruthy();
    });
    vm.onAccept();
    expect(vm.active).toBeFalsy();
});


test('onReject', () => {
    vm.active = true;

    vm.on('reject', function (resolved) {
        expect(resolved).toBeTruthy();
    });
    vm.onReject();
    expect(vm.active).toBeFalsy();
});
