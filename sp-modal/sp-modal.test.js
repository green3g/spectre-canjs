import ViewModel from './ViewModel';

// eslint-disable-next-line
let vm;

beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});

test('show()', () => {
    vm.on('show', function () {
        expect(1).toBeTruthy();
        expect(vm.active).toBeTruthy();
    });
    vm.show();
});

test('hide()', () => {
    vm.active = true;
    vm.on('hide', function () {
        expect(vm.active).toBeFalsy();
    });
    vm.hide();
});

test('toggle(true)', () => {
    vm.toggle(true);
    expect(vm.active).toBeTruthy();
});
test('toggle(false)', () => {
    vm.active = true;
    vm.toggle(false);
    expect(vm.active).toBeFalsy();
});
test('toggle()', () => {
    vm.toggle();
    expect(vm.active).toBeTruthy();
    vm.toggle();
    expect(vm.active).toBeFalsy();
});
