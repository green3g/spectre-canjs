import assign from 'object-assign';
import dev from 'can-util/js/dev/dev';
import parseFieldArray from '../parseFieldArray/parseFieldArray';
const RESERVED = [
    'get',
    'set',
    'serialize'
];

// eslint-disable-next-line
/**
 * Converts a DefineMap to an array of Field objects using the property definitions
 * property or the keys
 * @function util/field/mapToFields/mapToFields mapToFields
 * @parent util/field.methods
 * @signature `mapToFields(defineMap)`
 * @param  {Constructor} defineMap The extended map/constructor to parse
 * @return {Array<util/field/Field>} The array of fields
 */
export default function mapToFields (defineMap) {
    if (!defineMap) {
        dev.warn('map is undefined, so no fields will be generated');
        return [];
    }
    const define = (defineMap._define || defineMap.prototype._define).definitions;
    const fields = Object.keys(define).map((prop) => {
        const fType = typeof define[prop].type === 'function' ? define[prop].type.name : define[prop].type;

        // remove reserved properties if any
        const clone = assign({}, define[prop]);
        RESERVED.forEach((r) => {
            delete clone[r];
        });

        return assign({}, {
            name: prop,
            type: 'string',
            fieldType: 'text'
        }, clone, {
            type: fType
        });
    });
    return parseFieldArray(fields);
}
