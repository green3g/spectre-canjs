import DefineMap from 'can-define/map/map';
import parseFieldArray from '../parseFieldArray/parseFieldArray';
import mapToFields from '../mapToFields/mapToFields';
import Field from '../Field';
import DefineList from 'can-define/list/list';

/**
 * @constructor util/field/base/FieldIteratorMap FieldIteratorMap
 * @parent util/field.types
 * @group FieldIteratorMap.props
 * A base class for widgets that need to iterate through a set or subset
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
   * @property {String} FieldIteratorMap.props.excludeFieldKey excludeFieldKey
   * @parent FieldIteratorMap.props
   */
    excludeFieldKey: 'string',
    /**
   * An array of fields
   * @property {Array<util/field/Field>} FieldIteratorMap.props.fields fields
   * @parent FieldIteratorMap.props
   */
    fields: {
        Value: DefineList,
        Type: DefineList,
        get (fields) {
            fields = fields || [];

            // if user provides fields, use those
            if (fields.length && !(fields[0] instanceof Field)) {
                fields = parseFieldArray(fields);
            }
            
            // otherwise try to get 'defined' fields from define map properties
            if (!fields.length && this.object instanceof DefineMap) {
                fields = mapToFields(this.object);
            }

            // if this fails, serialize the object and use keys of object
            if (!fields.length && this.object) {
                const obj = this.object.get ? this.object.get() : this.object;
                fields = parseFieldArray(Object.keys(obj));
            }
            return fields.filter((f) => {
                return f[this.excludeFieldKey] !== false;
            });
        }
    }
});
