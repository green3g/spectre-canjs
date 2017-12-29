import ViewModel from './ViewModel';

let vm;

beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});
    
test('text-field', () => {
    expect(vm).toBeTruthy();
});
