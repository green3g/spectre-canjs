/* eslint-env qunit, browser */

import q from 'steal-qunit';

import ViewModel from './ViewModel';
import PageViewModel from '../sp-tab-page/ViewModel';

let vm;

q.module('tab-container.ViewModel', {
    beforeEach: () => {
        vm = new ViewModel();
    },
    afterEach: () => {
        vm = null;
    }
});

test('activePage get()', (assert) => {
    assert.notOk(vm.activePage, 'if no pages are present, activePage should be null');
});

test('addPage(page)', (assert) => {
    const page = new PageViewModel();
    vm.addPage(page);

    assert.equal(vm.pages.length, 1, 'tab-container should have added one page');
    assert.equal(vm.activePage, page, 'the added page should be activated by default');
});

test('removepage(page)', (assert) => {
    const page = new PageViewModel();
    vm.addPage(page);
    vm.removePage(page);

    assert.equal(vm.pages.length, 0, 'there should not be any pages in the tab-container after remove');
});

test('removePage(activePage)', (assert) => {
    const active = new PageViewModel();
    const other = new PageViewModel();
    vm.pages = [active, other];
    vm.makeActive(active);

    vm.removePage(active);

    assert.ok(vm.isActive(other), 'other page should be made active if active is removed');
});

test('activate(page)', (assert) => {
    const page1 = new PageViewModel();
    const page2 = new PageViewModel();
    vm.addPage(page1);
    vm.addPage(page2);
    vm.makeActive(page2);

    assert.equal(vm.activePage, page2, 'the active page should be page2');
});

test('isActive(page)', (assert) => {
    assert.notOk(vm.isActive(null), 'a null page should not be active');
    const active = new PageViewModel();
    vm.pages = [active];
    assert.ok(vm.isActive(active), 'the first page should be active');
});
