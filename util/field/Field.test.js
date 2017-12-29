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

test('Field.editComponent', () => {
    let field = new Field();
    expect(typeof field.editComponent === 'function').toBeTruthy();

    field = new Field({
        editComponent: '<p></p>'
    });
    expect(typeof field.editComponent === 'function').toBeTruthy();

    function renderer () {}
    field = new Field({
        editComponent: renderer
    });
    expect(field.editComponent).toEqual(renderer);

    field = new Field({
        fieldType: 'select'
    });
    expect(typeof field.editComponent === 'function').toBeTruthy();
});
