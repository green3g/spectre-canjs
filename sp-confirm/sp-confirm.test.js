import ViewModel from './ViewModel';

// eslint-disable-next-line
let vm;

beforeEach (() => {
    vm = new ViewModel();
});
afterEach (() => {
    vm = null;
});
test('actionPromise get()', () => {
    expect(vm.actionPromise).toBeFalsy();

    vm.active = true;
    const promise = vm.actionPromise;
    promise.then(function (result) {
        expect(result).toBeTruthy();
    });

    expect(vm.actionPromise).toBeTruthy();
    vm.onAccept();
});

test('onAccept', () => {
    vm.active = true;
    // eslint-disable-next-line
    const promise = vm.actionPromise;

    vm.on('accept', function (resolved) {
        expect(resolved).toBeTruthy();
    });
    vm.onAccept();
    expect(vm.active).toBeFalsy();
});


test('onReject', () => {
    vm.active = true;
    // eslint-disable-next-line
    const promise = vm.actionPromise;

    vm.on('reject', function (resolved) {
        expect(resolved).toBeTruthy();
    });
    vm.onReject();
    expect(vm.active).toBeFalsy();
});
