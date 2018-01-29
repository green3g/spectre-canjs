
import ViewModel from './ViewModel';

let vm;

beforeEach (() => {
    vm = new ViewModel();
});
afterEach (() => {
    vm = null;
});

test('addToast(message)', () => {
    vm.addToast({
        body: 'alert!'
    });
    expect(vm.toasts.length).toEqual(1);
});

test('removeToast(message)', () => {
    const m = {
        message: 'alert!'
    };
    vm.addToast(m);
    vm.removeToast(vm.toasts[0]);
    expect(vm.toasts.length).toEqual(0);
});
