import mapToFields from './mapToFields';
import DefineMap from 'can-define/map/map';
import Field from '../Field';

test('mapToFields', () => {
    const MyMap = DefineMap.extend({
        field1: 'string',
        field2: 'string'
    });

    const ExtendedMyMap = MyMap.extend({
        field3: 'number',
        field4: 'string'
    });

    const tests = [{
        test: mapToFields(MyMap),
        length: 2
    }, {
        test: mapToFields(new MyMap()),
        length: 2
    }, {
        test: mapToFields(ExtendedMyMap),
        length: 4
    }];
    tests.forEach((r) => {
        expect(r.test.length).toEqual(r.length);
        r.test.forEach((f) => {
            expect(f instanceof Field).toBeTruthy();
        });
    });
});