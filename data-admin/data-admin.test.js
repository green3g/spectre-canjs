import q from 'steal-qunit';

import {ViewModel} from './data-admin';
import {Connection, TaskMap} from '../../test/data/connection';
import {TOPICS} from './data-admin';
import PubSub from 'pubsub-js';
import assign from 'object-assign';
let vm;

import DefineList from 'can-define/list/list';

q.config.testTimeout = 10000;

q.module('data-admin.ViewModel', {
    beforeEach: () => {
        localStorage.clear();
        vm = new ViewModel({
            view: {
                connection: Connection
            }
        });
    },
    afterEach: () => {
        vm = null;
        PubSub.clearAllSubscriptions();
        localStorage.clear();
    }
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
        vm.view.connection.metadata.total = c.items;
        vm.view.parameters.perPage = c.perPage;
        assert.equal(vm.totalPages, c.expected, 'totalPages should be calculated correctly');
    });
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
        vm.view.connection.metadata.total = t.total;
        assert.deepEqual(vm.perPageOptions.serialize(), t.expected, 'per page options should be filtered correctly');
    });

});

test('showPaginate get()', (assert) => {
    vm.view.connection.metadata.total = 10;
    vm.parameters.perPage = 25;
    assert.equal(vm.showPaginate, false, 'pagination should not be shown with one page');

    vm.parameters.perPage = 5;
    assert.equal(vm.showPaginate, true, 'pagination should be shown with more than one page');
});

test('objects get()', (assert) => {
    const done = assert.async();
    vm.view = {connection: Connection};
    vm.objectsPromise.then((data) => {
        assert.ok(data.length, 'data should be retrieved correctly');
        done();
    });
});

test('focusObject get()', (assert) => {
    const done = assert.async();
    vm.viewId = 11;
    vm.focusObjectPromise.then((data) => {
        assert.equal(data.id, 11, 'data should be retrieved correctly');
        done();
    });

});

test('buttons get()', (assert) => {
    assert.equal(vm.buttons.length, 3, 'buttons should be edit buttons');
    vm.view = {
        disableEdit: true
    };

    assert.equal(vm.buttons.length, 1, 'buttons should be default buttons');
});

test('_fields get()', (assert) => {
    vm.view.ObjectTemplate = TaskMap;
    assert.equal(vm._fields.length, 2, 'if no fields exist on the view, they should be created from the ObjectTemplate');

    vm.view = {
        fields: ['test1', 'test2', 'test3', 'test4']
    };
    assert.equal(vm._fields.length, 4, 'if fields do exist on the view, they should be created correctly');
});

test('init() with parameters', (assert) => {
    vm = new ViewModel({
        view: {
            parameters: {test: 'text'},
            connection: Connection
        }
    });
    assert.equal(vm.parameters.test, 'text', 'parameters should be mixed in');

    vm = new ViewModel({
        relatedField: 'test',
        relatedValue: 'testVal'
    });
    assert.equal(vm.parameters.filters.length, 1, 'should create filters parameter when initialized with related field and value');
});

test('editObject(scope, dom, event, obj)', (assert) => {
    const done = assert.async();
    const id = 11;
    const obj = Connection.get({id: id}).then((obj) => {

        vm.editObject(null, null, null, obj);
        assert.equal(vm.viewId, 11, 'viewId should be set correctly');
        assert.equal(vm.page, 'edit', 'edit page should be displayed');
        done();
    });
});

test('viewObject(scope, dom, event, obj)', (assert) => {
    const done = assert.async();
    const id = 11;
    const def = Connection.get({id: id});
    def.then((obj) => {
        vm.viewObject(null, null, null, obj);
        assert.equal(vm.viewId, 11, 'viewId should be set correctly');
        assert.equal(vm.page, 'details', 'details page should be displayed');
        done();
    });
});

test('saveObject(obj) success', (assert) => {
    const done = assert.async(3);
    const token = PubSub.subscribe(TOPICS.ADD_MESSAGE, (name, message) => {
        assert.ok(message.message, 'message should be published');
        done();
    });

    let id = 6;
    const obj = Connection.get({id: id}).then((obj) => {
        const def = vm.saveObject(obj);
        def.then((result) => {
            assert.ok(result, 'deferred should be resolved');
            done();
        });
    });

    id = 999;

    const def = vm.saveObject(new TaskMap({title: 'title'}));
    def.catch((result) => {
        assert.ok(result, 'deferred should be caught');
        done();
    });
});

test('beforeCreate and afterCreate events', (assert) => {
    const done = assert.async(4);
    const myMap = new TaskMap({name: 'do stuff'});

    assign(vm.view, {
        beforeCreate (obj) {
            assert.notOk(obj.id, 'event should pass object not yet be saved with id');
            done();
        },
        afterCreate (obj) {
            assert.ok(typeof obj.id === 'number', 'event should have object passed with a new id');
            done();
        }
    });

    vm.on('beforeCreate', (event, obj) => {
        assert.notOk(obj.id, 'event should pass object not yet be saved with id');
        done();
    });

    vm.on('afterCreate', (event, obj) => {
        assert.ok(typeof obj.id === 'number', 'event should have object passed with a new id');
        done();
    });

    vm.setPage('add');
    vm.saveObject(myMap);
});

test('setPage(page)', (assert) => {
    const done = assert.async();
    assign(vm, {
        page: 'edit',
        viewId: 999
    });

    vm.setPage('list');
    setTimeout(() => {
        assert.equal(vm.page, 'list', 'page should be set correctly');
        assert.notOk(vm.viewId, 'viewId should be reset');
        done();
    }, 500);
});

test('getNewObject()', (assert) => {
    vm.view.ObjectTemplate = TaskMap;
    assert.deepEqual(vm.getNewObject().serialize(), new TaskMap().serialize(), 'new object should be created');
});


test('deleteObject(obj, skipConfirm) ', (assert) => {
    const id = 11;
    const done = assert.async(5);
    const token = PubSub.subscribe(TOPICS.ADD_MESSAGE, (name, message) => {
        assert.ok(message.message, 'message should be published');
        done();
    });

    assign(vm.view, {
        beforeDelete (obj) {
            assert.equal(obj.id, id, 'object should be passed with before delete event');
            done();
        },
        afterDelete (obj) {
            assert.equal(obj.id, id, 'object should be passed with after delete event');
            done();
        }
    });

    vm.on('beforeDelete', (event, obj) => {
        assert.equal(obj.id, id, 'object should be passed with before delete event');
        done();
    });
    vm.on('afterDelete', (event, obj) => {
        assert.equal(obj.id, id, 'object should be passed with after delete event');
        done();
    });

  //delete the object skip confirm
    vm.deleteObject(new TaskMap({id: id}), true);
});

test('deleteMmultiple()', (assert) => {
    const done = assert.async(4);
    const view = {
        connection: Connection
    };
    const token = PubSub.subscribe(TOPICS.ADD_MESSAGE, (name, message) => {
        assert.ok(message.message, 'message should be published');
        done();
    });

    const id = 11;
    vm.selectedObjects = new DefineList([new TaskMap({
        id: 11
    }), new TaskMap({
        id: 1
    })]);
    const defs = vm.deleteMultiple(true);
    defs.forEach((def) => {
        def.then((r) => {
            assert.ok(r, 'then is resolved');
            done();
        }).catch((r) => {
            assert.ok(r, 'catch is resolved');
            done();
        });
    });
});

test('toggle(prop, val)', (assert) => {
    vm.toggle('filterVisible');
    assert.ok(vm.filterVisible, 'filter should be visible after toggling');

    vm.toggle('filterVisible');
    assert.notOk(vm.filterVisible, 'filter should not be visible after toggling again');

    vm.toggle('filterVisible', false);
    assert.notOk(vm.filterVisible, 'filter should not be visible after toggling to false');
});

test('getRelatedValue(foreignKey, focusObject)', (assert) => {
    const map = new TaskMap({
        test: 'testValue'
    });
    assert.equal(vm.getRelatedValue('test', map), 'testValue', 'related value should be returned');
});
