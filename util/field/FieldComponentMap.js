import DefineMap from 'can-define/map/map';
import {parseFieldArray, Field} from '../field/field';
import DefineList from 'can-define/list/list';

/**
 * @module util/field.FieldComponentMap
 * @parent util/field
 * @group util/field.FieldComponentMap.props
 * A super class for widgets utilizing a fields property that needs
 * to be filtered.
 */
export default DefineMap.extend({
  /**
   * A string referencing a field property that will exclude that field
   * from this classes fields.
   * @property {String} util/field.FieldComponentMap.props.excludeFieldKey
   * @parent util/field.FieldComponentMap.props
   */
    excludeFieldKey: 'string',
  /**
   * An array of fields
   * @parent util/field.FieldComponentMap.props
   * @property {Array<util/field.Field>} util/field.FieldComponentMap.props.fields
   */
    fields: {
        Value: DefineList,
        Type: DefineList,
        get (fields) {
            if (fields.length && !(fields[0] instanceof Field)) {
                fields = parseFieldArray(fields);
            }
            if (!fields.length && this.objects.length) {
                return parseFieldArray(Object.keys(this.objects[0]));
            }
            return fields.filter((f) => {
                return f[this.excludeFieldKey] !== false;
            });
        }
    }
});
