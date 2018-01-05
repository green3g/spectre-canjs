import ViewModel from './ViewModel';


let vm;

beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});
test('isSelected(values)', () => {
    vm.value = '1';

    expect(vm.isSelected(1)).toBeTruthy();
    expect(vm.isSelected('1')).toBeTruthy();
});
