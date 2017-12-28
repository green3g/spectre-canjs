/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewModel} from './file-field';

// eslint-disable-next-line
let vm;

q.module('file-field.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});

// TODO: Test the uploadFiles process with fixtures

test('uploadSuccess()', (assert) => {
    vm.uploadSuccess({
        uploads: ['file_1', 'file_2']
    });

    assert.equal(vm.value.length, 2, 'the field should have files');
});


// TODO test uploadError with fixtures

// TODO: test removeFile with fixtures

test('removeSuccess(file)', (assert) => {
    vm.value = [{path: 'file_1'}, {path: 'file_2'}];
    vm.removeSuccess(vm.value[0]);
    assert.equal(vm.value.length, 1, 'file should be removed from currentFiles');
});

test('removeError(file, response) 404', (assert) => {
    vm.value = [{path: 'file_1'}, {path: 'file_2'}];
    vm.removeError(vm.value[0], {
        status: 404
    });
    assert.equal(vm.value.length, 1, 'file should be removed from currentFiles');
});
