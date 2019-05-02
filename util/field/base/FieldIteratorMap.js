import DefineMap from 'can-define/map/map';
import parseFieldArray from '../parseFieldArray/parseFieldArray';
import mapToFields from '../mapToFields/mapToFields';
import Field from '../Field';
import DefineList from 'can-define/list/list';

/**
 * A base class for widgets that need to iterate through a set or subset
 * of fields.
 * ViewModels inheriting this map should define a excludeFieldKey which
 * is a field property that will exclude those fields from this class. For
 * instance, if we are designing an edit widget, an appropriate way to exclude
 * fields from the widget would be to use the key `edit: false` and set
 * `excludeFieldKey: 'edit'` in this class.
 * @class FieldIteratorMap
 */
export default DefineMap.extend({
    /** @lends FieldIteratorMap.prototype */
    /**
   * A string referencing a field property that will exclude that field
   * from this classes fields.
   * @type {String}
   * @memberof FieldIteratorMap.prototype
   */
    excludeFieldKey: 'string',
    /**
   * A getter for an array of fields
   * @type {Array<Field>}
   * @memberof FieldIteratorMap.prototype
   */
    fields: {
        Default: DefineList,
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
    },
    /**
     * This object's fields mapped to key:value pairs. The key will be 
     * set to the field name, and the object will be the field.
     * @type {Object}
     */
    fieldsMap: {
        get () {
            const fields = this.fields;
            if (!fields) {
                return {};
            }
            const map = {};
            for (let i = 0; i < fields.length; i ++) {
                map[fields[i].name] = fields[i];
            }

            return map;
        }
    }
});
