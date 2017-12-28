/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewModel} from './file-field';

//eslint-disable-next-line
let vm;

q.module('file-field.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});

test('currentFiles get()', (assert) => {
    vm.value = 'file_1,file_2,file_3';
    assert.equal(vm.currentFiles.length, 3, 'the field should have files');
});

// TODO: Test the uploadFiles process with fixtures

test('uploadSuccess()', (assert) => {
    vm.uploadSuccess({
        uploads: ['file_1', 'file_2']
    });

    assert.equal(vm.currentFiles.length, 2, 'the field should have files');
});

test('updateValue()', (assert) => {
    vm.currentFiles = [{path: 'file_1'}, {path: 'file_2'}];
    vm.updateValue();
    assert.equal(vm.value, 'file_1,file_2', 'the value should be updated');

    vm.currentFiles = [];
    vm.updateValue();
    assert.equal(vm.value, '', 'the value should be empty');
});

// TODO test uploadError with fixtures

// TODO: test removeFile with fixtures

test('removeSuccess(file)', (assert) => {
    vm.currentFiles = [{path: 'file_1'}, {path: 'file_2'}];
    vm.removeSuccess('file_1');
    assert.equal(vm.currentFiles.length, 1, 'file should be removed from currentFiles');
});

test('removeError(file, response) 404', (assert) => {
    vm.currentFiles = [{path: 'file_1'}, {path: 'file_2'}];
    vm.removeError('file_1', {
        status: 404
    });
    assert.equal(vm.currentFiles.length, 1, 'file should be removed from currentFiles');
});
