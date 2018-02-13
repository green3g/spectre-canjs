import Field from '../Field';
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
 * @memberof util/field.methods
 * @signature `mapToFields(defineMap)`
 * @param  {Constructor} defineMap The extended map/constructor to parse
 * @return {Array<util/field/Field>} The array of fields
 */
export default function mapToFields (defineMap) {
    if (!defineMap) {
        
        // !steal-remove-start
        // eslint-disable-next-line
        console.warn('map is undefined, so no fields will be generated');
        // !steal-remove-end
        return [];
    }
    
    const props = (defineMap._define || defineMap.prototype._define).definitions;
    const fields = [];
    for (const key in props) {
        if (key.substr(0, 1) !== '_' && RESERVED.indexOf(key) < 0) {
            
            const fType = typeof props[key].type === 'function' ? props[key].type.name : props[key].type;
            fields.push(new Field(Object.assign({name: key}, props[key], {type: fType})));

        }
    }

    return fields;
}
