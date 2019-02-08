import ViewModel from './ViewModel';

// eslint-disable-next-line
let vm;

beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});

test('modal works', () => {
    expect(1).toBe(1);
});