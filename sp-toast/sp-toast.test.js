import ViewModel from './ViewModel';

let vm;
beforeEach (() => {
    vm = new ViewModel();
});

afterEach(() => {
    vm = null;
});

test('severity type set()', () => {
    vm.severity = 'info';
    expect(vm.severity).toBe('info');

    vm.severity = 'invalid';
    expect(vm.severity).toBe('primary');
});

test('hide()', (done) => {
    vm.visible = true;
    vm.on('hide', (event, viewmodel) => {
        expect(viewmodel).toBeTruthy();
        done();
    });
    vm.hide();

    expect(vm.visible).toBeFalsy();
});