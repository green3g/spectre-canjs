import ViewModel from './ViewModel';
let vm;

beforeEach (() => {
    vm = new ViewModel();
});
afterEach (() => {
    vm = null;
});

test('it works', () => {
    expect(vm).toBeTruthy();
});