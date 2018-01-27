import mapToFields from './mapToFields';
import DefineMap from 'can-define/map/map';


test('mapToFields', () => {
    const MyMap = DefineMap.extend({
        field1: 'string',
        field2: 'string'
    });

    const ExtendedMyMap = MyMap.extend({
        field1: 'number',
        field2: 'string'
    });

    const results = [
        mapToFields(MyMap),
        mapToFields(new MyMap()),
        mapToFields(ExtendedMyMap)
    ];
    results.forEach((r) => {
        expect(r.length).toEqual(2);
        r.forEach((f) => {
            expect(typeof f).toEqual('object');
        });
    });
});
