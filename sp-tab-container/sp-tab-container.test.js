import ViewModel from './ViewModel';
import PageViewModel from '../sp-tab-page/ViewModel';

let vm;

beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});

test('activePage get()', () => {
    expect(vm.activePage).toBeFalsy();
});

test('addPage(page)', () => {
    const page = new PageViewModel();
    vm.addPage(page);

    expect(vm.pages.length).toEqual(1);
    expect(vm.activePage).toEqual(page);
});

test('removepage(page)', () => {
    const page = new PageViewModel();
    vm.addPage(page);
    vm.removePage(page);

    expect(vm.pages.length).toEqual(0);
});

test('removePage(activePage)', () => {
    const active = new PageViewModel();
    const other = new PageViewModel();
    vm.pages = [active, other];
    vm.makeActive(active);

    vm.removePage(active);

    expect(vm.isActive(other)).toBeTruthy();
});

test('activate(page)', () => {
    const page1 = new PageViewModel();
    const page2 = new PageViewModel();
    vm.addPage(page1);
    vm.addPage(page2);
    vm.makeActive(page2);

    expect(vm.activePage).toEqual(page2);
});

test('isActive(page)', () => {
    expect(vm.isActive(null)).toBeFalsy();
    const active = new PageViewModel();
    vm.pages = [active];
    expect(vm.isActive(active)).toBeTruthy();
});

test('toggle(page)', () => {
    const active = new PageViewModel();
    const other = new PageViewModel();
    vm.pages = [active, other];

    vm.toggle(active);
    expect(vm.isActive(active)).toBeFalsy();
});
