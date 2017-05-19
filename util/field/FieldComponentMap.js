import DefineMap from 'can-define/map/map';
import {parseFieldArray, Field} from '../field/field';
import DefineList from 'can-define/list/list';

/**
 * @constructor util/field/FieldComponentMap FieldComponentMap
 * @parent util/field.types
 * @group FieldComponentMap.props
 * A super class for widgets utilizing a fields property that needs
 * to be filtered.
 */
export default DefineMap.extend({
  /**
   * A string referencing a field property that will exclude that field
   * from this classes fields.
   * @property {String} FieldComponentMap.props.excludeFieldKey excludeFieldKey
   * @parent FieldComponentMap.props
   */
    excludeFieldKey: 'string',
    /**
     * A property that converts this class's object to an array of
     * fields if fields are not provided.
     * @property {DefineMap} FieldComponentMap.props.object object
     * @parent FieldComponentMap.props
     */
    object: DefineMap,
  /**
   * An array of fields
   * @property {Array<util/field.Field>} FieldComponentMap.props.fields fields
   * @parent FieldComponentMap.props
   */
    fields: {
        Value: DefineList,
        Type: DefineList,
        get (fields) {
            if (fields.length && !(fields[0] instanceof Field)) {
                fields = parseFieldArray(fields);
            }
            if (!fields.length && this.object) {
                const obj = this.object.serialize ? this.object.serialize() : this.object;
                return parseFieldArray(Object.keys(obj));
            }
            return fields.filter((f) => {
                return f[this.excludeFieldKey] !== false;
            });
        }
    }
});
