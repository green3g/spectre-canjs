import Field from './Field';

let fields;

afterEach (() => {
    fields = null;
});

test('Field.alias', () => {

    fields = [{
        name: 'test',
        expected: 'Test'
    }, {
        name: 'other',
        alias: 'Hey',
        expected: 'Hey'
    }];


    fields.forEach((f) => {
        f = new Field(f);
        expect(f.alias).toEqual(f.expected);
    });
});