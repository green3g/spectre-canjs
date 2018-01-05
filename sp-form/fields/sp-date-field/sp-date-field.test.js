import ViewModel from './ViewModel';

// eslint-disable-next-line
let vm;
beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});
test('value set(date)', () => {
    vm.value = '10/10/2010';
    expect(vm.day).toEqual(10);
    expect(vm.month).toEqual(9);
    expect(vm.year).toEqual(2010);
});

test('value set() invalid date', () => {
    vm.value = '0/0/0';
    expect(vm.day).toEqual(undefined);
    expect(vm.month).toEqual(undefined);
    expect(vm.year).toEqual(undefined);
});

test('value get()', () => {
    vm.value = new Date();
    expect(vm.value.getDate()).toEqual(new Date().getDate());
    expect(vm.value.getMonth()).toEqual(new Date().getMonth());
    expect(vm.value.getFullYear()).toEqual(new Date().getFullYear());
});

test('value get() invalid date', () => {
    vm.day = 0;
    expect(vm.value).toBeFalsy();
});

test('dayProperties get()', () => {
    vm.assign({
        month: 0,
        day: 1,
        year: 1900
    });
    expect(vm.dayProperties.options.length).toEqual(31);
});

test('getDaysInMonth()', () => {
    expect(vm.getDaysInMonth(new Date('2/1/2016'))).toEqual(29);
    expect(vm.getDaysInMonth(new Date('2/1/2015'))).toEqual(28);
    expect(vm.getDaysInMonth(new Date('6/30/2015'))).toEqual(30);
    expect(vm.getDaysInMonth(new Date('5/1/2015'))).toEqual(31);
});

test('onChange()', () => {
    vm.on('fieldchange', () => {
        expect(true).toBeTruthy();
    });
    vm.value = '1/1/2017';
});

test('isValidDate()', () => {
    expect(vm.isValidDate('0/1/2015')).toBeFalsy();
    expect(vm.isValidDate('1/41/2015')).toBeFalsy();

    expect(vm.isValidDate('1/1/2016')).toBeTruthy();
    expect(vm.isValidDate('1/31/2016')).toBeTruthy();
    expect(vm.isValidDate('2/29/2016')).toBeTruthy();
});
