import DefineMap from 'can-define/map/map';
import Base from 'spectre-canjs/util/field/base/FieldInputMap';
import parseFieldArray from 'spectre-canjs/util/field/parseFieldArray/parseFieldArray';
import mapToFields from 'spectre-canjs/util/field/mapToFields/mapToFields';

/**
 * @constructor sp-form/fields/subform-field.ViewModel ViewModel
 * @parent sp-form/fields/subform-field
 * @group subform-field.ViewModel.props Properties
 *
 * @description A `<subform-field />` component's ViewModel
 */
export default Base.extend('SubformField', {
    /**
     * @prototype
     */
    /**
     * The current value of the field. This is a json serialized value
     * paths.
     * @property {String} subform-field.ViewModel.props.value value
     * @parent subform-field.ViewModel.props
     */
    value: {
        Value: DefineMap,
        set (val) {
            if (this.value !== val) {
                this.dispatch('fieldchange', [{
                    value: val,
                    name: this.properties.name
                }]);
            }
            return val;
        }
    },
    /**
     * The field properties to set up the form fields functionality, this is
     * set up automatically from the `fields` property or the `subobject`
     * if `fields` is not provided.
     * @property {Array<util/field/Field>} subform-field.ViewModel.props.formFields formFields
     * @parent subform-field.ViewModel.props
     */
    formFields: {
        get () {
            if (this.properties.fields && this.properties.fields.length) {
                return parseFieldArray(this.properties.fields);
            }
            return mapToFields(this.properties.ObjectTemplate);
        }
    },
    /**
     * Called whenever a field changes its value to update this form's json
     * string value. Dispatche sthe `change` event with the serialized form object
     * @function saveField
     * @signature
     * @param  {Object} scope The viewmodel of this object
     * @param  {DomElement} dom   The dom element that changed
     * @param  {Event} event The dom event on the input element
     * @param  {Object} props   The change event properties
     */
    saveField ([, props]) {
        this.value.assign(props.dirty.get());
        this.dispatch('fieldchange', [this.value, this.properties]);
    }
});