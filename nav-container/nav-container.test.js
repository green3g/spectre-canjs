/* eslint-env qunit, browser */

import q from 'steal-qunit';

import {ViewModel, PageViewModel} from './nav-container';
let vm;

q.module('tab-container.ViewModel', {
    beforeEach: () => {
        vm = new ViewModel();
    },
    afterEach: () => {
        vm = null;
    }
});
test('addPanel(panel)', (assert) => {
    const panel = new PageViewModel();
    vm.addPanel(panel);

    assert.equal(vm.attr('panels').length, 1, 'tab-container should have added one panel');
    assert.equal(vm.attr('active'), panel, 'the added panel should be activated by default');
});

test('removePanel(panel)', (assert) => {
    const panel = new PageViewModel();
    vm.addPanel(panel);
    vm.removePanel(panel);

    assert.equal(vm.attr('panels').length, 0, 'there should not be any panels in the tab-container after remove');
});

test('activate(panel)', (assert) => {
    const panel1 = new PageViewModel();
    const panel2 = new PageViewModel();
    vm.addPanel(panel1);
    vm.addPanel(panel2);
    vm.activate(panel2);

    assert.equal(vm.attr('active'), panel2, 'the active panel should be panel2');
});
