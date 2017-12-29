import ViewModel from './ViewModel';

let vm;

beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});

test('hasNext get()', () => {
    vm.pages = 10;
    vm.activePageIndex = 0;
    expect(vm.hasNext).toEqual(true);
    vm.activePageIndex = 9;
    expect(vm.hasNext).toEqual(false);
});

test('hasPrevious get()', () => {
    vm.pages = 10;
    vm.activePageIndex = 0;
    expect(vm.hasPrevious).toEqual(false);
    vm.activePageIndex = 9;
    expect(vm.hasPrevious).toEqual(true);
});

test('visiblePages get()', () => {
    vm.update({
        pages: 10,
        activeOffset: 3
    });
    const tests = [{
        index: 0,
        expected: [1, 2, 3, 4]
    }, {
        index: 5,
        expected: [3, 4, 5, 6, 7, 8, 9]
    }, {
        index: 9,
        expected: [7, 8, 9, 10]
    }];

    tests.forEach((test) => {
        vm.activePageIndex = test.index;
        expect(vm.visiblePages).toEqual(test.expected);
    });
});

test('pageArray get()', () => {
    const tests = [{
        pages: 5,
        expected: [1, 2, 3, 4, 5]
    }, {
        pages: 3,
        expected: [1, 2, 3]
    }];
    tests.forEach((test) => {
        vm.pages = test.pages;
        expect(vm.pageArray).toEqual(test.expected);
    });
});

test('gotoNext()', () => {
    const tests = [{
        index: 0,
        expected: 1
    }, {
        index: 5,
        expected: 6
    }, {
        index: 9,
        expected: 9
    }];
    vm.pages = 10;
    tests.forEach((test) => {
        vm.activePageIndex = test.index;
        vm.gotoNext();
        expect(vm.activePageIndex).toEqual(test.expected);
    });
});

test('gotoPrevious()', () => {
    const tests = [{
        index: 0,
        expected: 0
    }, {
        index: 5,
        expected: 4
    }, {
        index: 9,
        expected: 8
    }];
    vm.pages = 10;
    tests.forEach((test) => {
        vm.activePageIndex = test.index;
        vm.gotoPrevious();
        expect(vm.activePageIndex).toEqual(test.expected);
    });
});

test('gotoFirst()', () => {
    vm.activePageIndex = 5;
    vm.gotoFirst();
    expect(vm.activePageIndex).toEqual(0);
});

test('gotoLast()', () => {
    vm.gotoLast();
    expect(vm.activePageIndex).toEqual(vm.pages - 1);
});

test('gotoPage(p)', () => {
    vm.gotoPage(5);
    expect(vm.activePageIndex).toEqual(4);
    vm.gotoPage(15);
    expect(vm.activePageIndex).toEqual(4);
});

test('isActive(p)', () => {
    expect(vm.isActive(1)).toBeTruthy();
});
