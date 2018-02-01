import {ViewModel} from './ViewModel';
let vm;


beforeEach (() => {
    vm = new ViewModel();
});
afterEach (() => {
    vm = null;
});

test('isImage(filename)', () => {
    const images = [
        'file.jpg',
        'file.JPG',
        'file.JPEG',
        'file.Gif',
        'file.PnG'
    ];

    const notImages = [
        'file.docx',
        'file.pdf',
        'file.PDF'
    ];

    images.forEach((img) => {
        dev.log('testing', img);
        expect(vm.isImage({id: img})).toBe(true);
    });
    notImages.forEach((img) => {
        dev.log('testing', img);
        expect(vm.isImage({id: img})).toBe(false);
    });
});