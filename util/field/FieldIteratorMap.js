import DefineMap from 'can-define/map/map';
import {parseFieldArray, Field} from '../field/field';
import DefineList from 'can-define/list/list';

/**
 * @constructor util/field/FieldIteratorMap
 * @parent util/field.types
 * @group FieldIteratorMap.props
 * A super class for widgets that need to iterate through a set or subset
 * of fields.
 * ViewModels inheriting this map should define a excludeFieldKey which
 * is a field property that will exclude those fields from this class. For
 * instance, if we are designing an edit widget, an appropriate way to exclude
 * fields from the widget would be to use the key `edit: false` and set
 * `excludeFieldKey: 'edit'` in this class.
 */
export default DefineMap.extend({
  /**
   * A string referencing a field property that will exclude that field
   * from this classes fields.
   * @property {String} FieldIteratorMap.propsexcludeFieldKey excludeFieldKey
   * @parent FieldIteratorMap.props
   */
    excludeFieldKey: 'string',
    /**
     * A property that converts this class's object to an array of
     * fields if fields are not provided.
     * @property {DefineMap} FieldIteratorMap.propsobject object
     * @parent FieldIteratorMap.props
     */
    object: DefineMap,
  /**
   * An array of fields
   * @property {Array<util/field.Field>} FieldIteratorMap.propsfields fields
   * @parent FieldIteratorMap.props
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
