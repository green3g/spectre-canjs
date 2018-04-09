import ViewModel from './ViewModel';

let vm;

beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});
    
test('sp-text-field', () => {
    expect(vm).toBeTruthy();
});

test('clearValue()', () => {
    vm.value = 'hello';
    vm.clearValue();
    expect(vm.value).toBeFalsy();
});
