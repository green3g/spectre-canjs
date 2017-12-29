import ViewModel from './ViewModel';

// eslint-disable-next-line
let vm;

beforeEach (() => {
    vm = new ViewModel();
});
afterEach (() => {
    vm = null;
});

test('toggle()', () => {
    vm.toggle();
    expect(vm.visible).toBeTruthy();

    vm.toggle();
    expect(vm.visible).toBeFalsy();
});

test('toggle(null, true)', () => {
    vm.toggle(null, true);
    expect(vm.visible).toBeTruthy();
});

test('toggle(null, false)', () => {
    vm.toggle(null, false);
    expect(vm.visible).toBeFalsy();
});

test('onPrimaryClick(button)', () => {
    const button = {};
    vm.on('primaryclick', function () {
        expect(arguments[arguments.length - 1]).toEqual(button);
    });
    vm.onPrimaryClick(button);
});

// TODO: test hideAll
