import parseFieldArray from './parseFieldArray';
let fields;

afterEach(() => {
    fields = null;
});


test('parseFieldArray', () => {
    fields = parseFieldArray(['field1', {
        name: 'field2'
    }]);

    expect(fields.length).toEqual(2);
    fields.forEach((f) => {
        expect(typeof f).toEqual('object');
    });
});
