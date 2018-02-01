
import ViewModel from './ViewModel';

let vm;

beforeEach (() => {
    vm = new ViewModel();
});
afterEach (() => {
    vm = null;
});

test('addToast(message)', () => {
    const length = vm.toasts.length;
    vm.addToast({
        body: 'alert!'
    });
    expect(vm.toasts.length).toEqual(length + 1);
});

test('removeToast(message)', () => {
    const m = {
        message: 'alert!'
    };
    vm.addToast(m);
    vm.removeToast(vm.toasts[0]);
    expect(vm.toasts.length).toEqual(0);
});
