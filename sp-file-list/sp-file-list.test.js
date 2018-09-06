import ViewModel, {FileMap} from './ViewModel';
let vm, file;


beforeEach (() => {
    vm = new ViewModel();
    file = new FileMap();
});
afterEach (() => {
    vm = null;
    file = null;
});

test('file.isImage()', () => {
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
        file.id = img;
        expect(file.isImage()).toBe(true);
    });
    notImages.forEach((img) => {
        file.id = img;
        expect(file.isImage()).toBe(false);
    });
});