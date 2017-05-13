/* eslint-env qunit, browser */

import q from 'steal-qunit';

import {ViewModel} from './data-admin';
import {Connection, TaskMap} from '../test/data/connection';
import DefineMap from 'can-define/map/map';
import assign from 'object-assign';
let vm;

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
        localStorage.clear();
    }
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
        disableEdit: true,
        disableDelete: true
    };

    assert.equal(vm.buttons.length, 1, 'buttons should be default buttons');
});

test('_fields get()', (assert) => {
    vm.view.ObjectTemplate = TaskMap;
    assert.equal(vm._fields.length, 3, 'if no fields exist on the view, they should be created from the ObjectTemplate');

    vm.view = {
        fields: ['test1', 'test2', 'test3', 'test4']
    };
    assert.equal(vm._fields.length, 5, 'if fields do exist on the view, they should be created correctly');
});

test('relatedValue, relatedField set()', (assert) => {
    vm = new ViewModel({
        view: {
            fields: ['test']
        },
        relatedField: 'test',
        relatedValue: 'testVal'
    });
    assert.equal(vm.parameters.filters.length, 1, 'should create filters parameter when initialized with related field and value');
});

test('totalItems get()', (assert) => {
    assert.equal(vm.totalItems, 0, 'total Items should be 0 by default');
    vm.view = {
        connection: {
            metadata: {
                total: 10
            }
        }
    };
    assert.equal(vm.totalItems, 10, 'totalItems should be set correctly');
});

test('addFilter(field, value)', (assert) => {
    vm.addFilter({name: 'test'}, 'value');
    assert.equal(vm.parameters.filters.length, 1, 'filter should be added');
});

test('editObject(scope, dom, event, obj)', (assert) => {
    const done = assert.async();
    const id = 11;
    Connection.get({id: id}).then((obj) => {

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
    const done = assert.async(1);

    let id = 6;
    Connection.get({id: id}).then((obj) => {
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
            assert.notOk(obj.id, 'beforecreate function should pass object not yet be saved with id');
            done();
        },
        afterCreate (obj) {
            assert.ok(typeof obj.id === 'number', 'aftercreate function should have object passed with a new id');
            done();
        }
    });

    vm.on('beforecreate', (event, obj) => {
        assert.notOk(obj.id, 'beforecreate event should pass object not yet be saved with id');
        done();
    });

    vm.on('aftercreate', (event, obj) => {
        assert.ok(typeof obj.id === 'number', 'aftercreate event should have object passed with a new id');
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
    const done = assert.async(4);

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

    vm.on('beforedelete', (event, obj) => {
        assert.equal(obj.id, id, 'object should be passed with before delete event');
        done();
    });
    vm.on('afterdelete', (event, obj) => {
        assert.equal(obj.id, id, 'object should be passed with after delete event');
        done();
    });

  //delete the object skip confirm
    vm.deleteObject(new TaskMap({id: id}), true);
});

test('deleteMultiple(objects, true)', (assert) => {
    const done = assert.async();
    vm.selectedObjects = [{
        id: 12
    }, {
        id: 1
    }];
    const promise = vm.deleteMultiple(vm.selectedObjects, true);
    promise.then((r) => {
        assert.ok(r, 'then is resolved');
        done();
    }).catch((r) => {
        assert.ok(r, 'catch is resolved');
        done();
    });
});

test('manageObjects(button) details', (assert) => {

    // check the current counter
    const currentCount = vm.objectsRefreshCount;

    const done = assert.async(1);

    const myButton = {
        onClick (objects) {
            assert.ok(objects.length, 'objects should be passed to the onclick function');
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 500);
            });
        }
    };
    vm.set({
        page: 'details',
        focusObject: {}
    });
    vm.manageObjects(myButton);

    setTimeout(() => {
        assert.equal(vm.objectsRefreshCount, currentCount + 1, 'objectsRefreshCount should be incremented when onclick returns a promise');
        done();
    }, 600);
});

test('manageObjects(button) list', (assert) => {

    // check the current counter
    const currentCount = vm.objectsRefreshCount;

    const done = assert.async(1);

    const myButton = {
        onClick (objects) {
            assert.ok(objects.length, 'objects should be passed to the onclick function');
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 500);
            });
        }
    };
    vm.set({
        selectedObjects: [{}, {}],
        page: 'list'
    });
    vm.manageObjects(myButton);
    setTimeout(() => {
        assert.equal(vm.objectsRefreshCount, currentCount + 1, 'objectsRefreshCount should be incremented when onclick returns a promise');
        done();
    }, 600);
});

test('clearSelection()', (assert) => {
    vm.selectedObjects = [{}];
    vm.clearSelection();
    assert.equal(vm.selectedObjects.length, 0, 'selectedObjects should be empty');
});

test('updateParameters', (assert) => {
    const params = new DefineMap({
        param1: 'hello',
        filters: [{
            value: 'test value',
            operator: 'like',
            name: 'testFilter'
        }]
    });
    vm.updateParameters(params);

    assert.equal(vm.parameters.param1, 'hello', 'param should be set on vm');
    assert.equal(vm.parameters.filters[0].name, 'testFilter', 'filter should be added to array');

    params.param1 = 'goodbye';
    vm.updateParameters(params);

    assert.equal(vm.parameters.param1, 'goodbye', 'param1 should be updated');
    assert.equal(vm.parameters.filters.length, 2, 'filter should be pushed into filters array');
});
