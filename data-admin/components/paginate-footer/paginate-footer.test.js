/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewModel} from './paginate-footer';

//eslint-disable-next-line
let vm;

q.module('data-admin/components/paginate-footer.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});


test('pageNumber get()', (assert) => {
    vm.set({
        total: 100,
        pageIndex: 0
    });

    assert.equal(vm.pageNumber, 1, 'page number should be incremented by 1');
});


test('totalPages get()', (assert) => {
    const cases = [{
        items: 99,
        perPage: 10,
        expected: 10
    }, {
        items: 100,
        perPage: 10,
        expected: 10
    }, {
        items: 101,
        perPage: 10,
        expected: 11
    }];
    cases.forEach((c) => {
        vm.total = c.items;
        vm.perPage = c.perPage;
        assert.equal(vm.totalPages, c.expected, 'totalPages should be calculated correctly');
    });
});


test('showPaginate get()', (assert) => {
    vm.total = 10;
    vm.perPage = 25;
    assert.equal(vm.showPaginate, false, 'pagination should not be shown with one page');

    vm.perPage = 5;
    assert.equal(vm.showPaginate, true, 'pagination should be shown with more than one page');
});


test('perPageOptions get()', (assert) => {
    const tests = [{
        total: 1,
        expected: []
    }, {
        total: 15,
        expected: [10, 20]
    }, {
        total: 50,
        expected: [10, 20, 50]
    }, {
        total: 99,
        expected: [10, 20, 50, 100]
    }];
    tests.forEach((t) => {
        vm.total = t.total;
        assert.deepEqual(vm.perPageOptions.serialize(), t.expected, 'per page options should be filtered correctly');
    });
});
