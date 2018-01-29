import ViewModel from './ViewModel';
import '../../demo/full/fixtures';
import 'can-vdom';
let vm;

beforeEach (() => {
    vm = new ViewModel();
});
afterEach (() => {
    vm = null;
});

test('uploadSuccess(file, result)', (done) => {
    vm.on('fieldchange', (args) => {
        // it dispatches the event
        expect(args).toBeTruthy();
        done();
    });
    vm.uploadSuccess({}, {
        id: '123.pdf',
        uri: 'img/png....etcdata stuff'
    });
    expect(vm.value.length).toBe(1);
});

test('uploadSuccess(file, string) it parses a string', () => {
    const str = '{"uri":"data", "id": "1234.pdf"}';
    vm.uploadSuccess({}, str);
    expect(vm.value.length).toBe(1);
});

// TODO: Fix this test
// test('delete(file)', (done) => {
//     vm.url = '/uploads';
//     vm.value.push({
//         id: '123.pdf',
//         uri: 'data/pdf123'
//     });


//     vm.delete(vm.value[0]).then(() => {
//         expect(vm.value.length).toBe(0);
//         done();
//     });
// });
