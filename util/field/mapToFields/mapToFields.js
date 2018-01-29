import dev from 'can-util/js/dev/dev';
import parseFieldArray from '../parseFieldArray/parseFieldArray';
const RESERVED = [
    'get',
    'set',
    'serialize'
];

export function getDefinedProps (defineMap) {
    return (defineMap._define || defineMap.prototype._define).definitions;
}


// eslint-disable-next-line
/**
 * Converts a DefineMap to an array of Field objects using the property definitions
 * property or the keys
 * @function util/field/mapToFields/mapToFields mapToFields
 * @memberof util/field.methods
 * @signature `mapToFields(defineMap)`
 * @param  {Constructor} defineMap The extended map/constructor to parse
 * @return {Array<util/field/Field>} The array of fields
 */
export default function mapToFields (defineMap) {
    if (!defineMap) {
        dev.warn('map is undefined, so no fields will be generated');
        return [];
    }
    const props = getDefinedProps(defineMap);
    const fields = Object.keys(props).map((prop) => {
        const fType = typeof props[prop].type === 'function' ? props[prop].type.name : props[prop].type;

        // remove reserved properties if any
        const clone = Object.assign({}, props[prop]);
        RESERVED.forEach((r) => {
            delete clone[r];
        });

        return Object.assign({}, {
            name: prop,
            type: 'string'
        }, clone, {
            type: fType
        });
    });
    return parseFieldArray(fields);
}
