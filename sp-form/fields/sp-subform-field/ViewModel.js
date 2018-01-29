import DefineMap from 'can-define/map/map';
import Base from 'spectre-canjs/util/field/Field';
import parseFieldArray from 'spectre-canjs/util/field/parseFieldArray/parseFieldArray';
import mapToFields from 'spectre-canjs/util/field/mapToFields/mapToFields';

/** 
 * A <sp-subform-field /> component's ViewModel
 * @class ViewModel
 * @extends Field
 * @memberof sp-subform-field
 *
 */
export default Base.extend('SubformField', {
    /** @lends sp-subform-field.ViewModel.prototype */
    /**
     * The current value of the field. This is a json serialized value
     * paths.
     * @type {String}
     * @memberof sp-subform-field.ViewModel.prototype
     */
    value: {
        Value: DefineMap,
        Type: DefineMap,
        set (val) {
            if (this.value !== val) {
                this.dispatch('fieldchange', [{
                    value: val,
                    name: this.name
                }]);
            }
            return val;
        }
    },
    /**
     * The field properties to set up the form fields functionality, this is
     * set up automatically from the `fields` property or the `subobject`
     * if `fields` is not provided.
     * @type {Array<Field>}
     * @memberof sp-subform-field.ViewModel.prototype
     */
    formFields: {
        get () {
            if (this.fields && this.fields.length) {
                return parseFieldArray(this.fields);
            }
            return mapToFields(this.Type);
        }
    },
    /**
     * Called whenever a field changes its value to update this form's json
     * string value. Dispatche sthe `change` event with the serialized form object
     * @param  {Object} scope The viewmodel of this object
     * @param  {DomElement} dom   The dom element that changed
     * @param  {Event} event The dom event on the input element
     * @param  {Object} props   The change event properties
     */
    saveField () {
        const [, props] = arguments;
        this.value.assign(props.dirty.get());
        this.dispatch('fieldchange', [this]);
    }
});