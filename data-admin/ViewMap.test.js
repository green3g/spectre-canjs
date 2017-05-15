/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewMap} from './ViewMap';
import DefineMap from 'can-define/map/map';

import editTemplate from './templates/edit.stache!';
import listTemplate from './templates/list.stache!';
import detailsTemplate from './templates/details.stache!';
import addTemplate from './templates/add.stache!';
import stache from 'can-stache';

//eslint-disable-next-line
let vm;

q.module('data-admin/ViewMap', {
    beforeEach () {
        vm = new ViewMap();
    },
    afterEach () {
        vm = null;
    }
});


test('ObjectTemplate get()', (assert) => {
    const map = DefineMap.extend({});
    vm.ObjectTemplate = map;
    assert.equal(vm.ObjectTemplate, map, 'if set, vm should return ObjectTemplate');
});
test('ObjectTemplate get()', (assert) => {
    const map = DefineMap.extend({});
    vm.connection = {Map: map};
    assert.equal(vm.ObjectTemplate, map, 'if not, vm should return connection.Map');
});

test('titleProp get()', (assert) => {
    vm.titleProp = 'name';
    assert.equal(vm.titleProp, 'name', 'if set vm should return titleProp');
});
test('titleProp get()', (assert) => {
    vm.connection = {idProp: 'id'};
    assert.equal(vm.titleProp, 'id', 'if not set vm should return connection.idProp');
});

test('editTemplate value()', (assert) => {
    const templ = vm.editTemplate = stache('<p></p>');
    assert.equal(vm.editTemplate, templ, 'if set vm should return default');
});
test('editTemplate value()', (assert) => {
    assert.equal(vm.editTemplate, editTemplate, 'if not set vm should return default');
});

test('listTemplate value()', (assert) => {
    const templ = vm.listTemplate = stache('<p></p>');
    assert.equal(vm.listTemplate, templ, 'if set vm should return default');
});
test('listTemplate value()', (assert) => {
    assert.equal(vm.listTemplate, listTemplate, 'if not set vm should return default');
});

test('detailsTemplate value()', (assert) => {
    const templ = vm.detailsTemplate = stache('<p></p>');
    assert.equal(vm.detailsTemplate, templ, 'if set vm should return default');
});
test('detailsTemplate value()', (assert) => {
    assert.equal(vm.detailsTemplate, detailsTemplate, 'if not set vm should return default');
});
