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
        expect(viewmodel.visible).toBeFalsy();
        done();
    });
    vm.hide();

    expect(vm.visible).toBeFalsy();
});

test('hide() clears the timer', (done) => {
    vm.visible = true;
    vm.autoHide = Infinity;
    expect(vm.timer).toBeTruthy();

    vm.on('hide', (event, viewmodel) => {
        expect(viewmodel.timer).toBeFalsy();
        done();
    });

    vm.hide();
});