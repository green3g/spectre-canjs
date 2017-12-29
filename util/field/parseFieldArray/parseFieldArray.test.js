import parseFieldArray from './parseFieldArray';
import Field from '../Field';
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
        expect(f instanceof Field).toBeTruthy();
    });
});
