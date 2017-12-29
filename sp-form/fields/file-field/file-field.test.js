import ViewModel from './ViewModel';

// eslint-disable-next-line
let vm;

beforeEach (() => {
    vm = new ViewModel();
});
afterEach (() => {
    vm = null;
});

// TODO: Test the uploadFiles process with fixtures

test('uploadSuccess()', () => {
    vm.uploadSuccess({
        uploads: ['file_1', 'file_2']
    });

    expect(vm.value.length).toEqual(2);
});


// TODO test uploadError with fixtures

// TODO: test removeFile with fixtures

test('removeSuccess(file)', () => {
    vm.value = [{path: 'file_1'}, {path: 'file_2'}];
    vm.removeSuccess(vm.value[0]);
    expect(vm.value.length).toEqual(1);
});

test('removeError(file, response) 404', () => {
    vm.value = [{path: 'file_1'}, {path: 'file_2'}];
    vm.removeError(vm.value[0], {
        status: 404
    });
    expect(vm.value.length).toEqual(1);
});
