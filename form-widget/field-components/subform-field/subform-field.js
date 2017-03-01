import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import CanEvent from 'can-event';
import template from './subform-field.stache!';
import './subform-field.less';
import {mapToFields, parseFieldArray} from '../../../../util/field';
import assign from 'can-util/js/assign/assign';
import dev from 'can-util/js/dev/dev';

/**
 * @constructor form-widget/field-components/subform-field.ViewModel ViewModel
 * @parent form-widget/field-components/subform-field
 * @group form-widget/field-components/subform-field.ViewModel.props Properties
 *
 * @description A `<subform-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('SubformField', {
    /**
     * @prototype
     */
    /**
     * Form field properties that define this fields behavior
     * @property {subform-field.JSONFieldProperties} subform-field.ViewModel.props.properties properties
     * @parent subform-field.ViewModel.props
     */
    properties: {
        Value: DefineMap,
        set (props) {
            const Template = props.ObjectTemplate;
            let obj;
            if (Template) {
                obj = new Template();
            } else {
                dev.warn('subform-field needs an ObjectTemplate defined in its field properties');
                obj = new DefineMap();
            }

            this.subFormObject = obj;
            return props;
        }
    },
    /**
     * The current value of the field. This is a json serialized value
     * paths.
     * @property {String} subform-field.ViewModel.props.value value
     * @parent subform-field.ViewModel.props
     */
    value: {
        set (val) {
            if (typeof val === 'object') {
                this.subFormObject.set(val.serialize ? val.serialize() : val);
            } else {
                dev.warn('typeof subform value needs to be object. Type is ' + typeof val, val);
            }
            return val;
        }
    },
    /**
     * A list of validation errors
     * This is a placeholder for future functionality. Not yet implemented.
     * @property {Array<String>} subform-field.ViewModel.props.errors errors
     * @parent subform-field.ViewModel.props
     */
    errors: '*',
    /**
     * The current object being edited in this field's json form, this
     * is created automatically from the `ObjectTemplate` property.
     * It is initialized with default values by using `JSON.parse` on the `value`
     * property
     * @property {Object} subform-field.ViewModel.props.subFormObject subFormObject
     * @parent subform-field.ViewModel.props
     */
    subFormObject: {
        Value: DefineMap
    },
    /**
     * The field properties to set up the form fields functionality, this is
     * set up automatically from the `fields` property or the `subFormObject`
     * if `fields` is not provided.
     * @property {Array<util/field.Field>} subform-field.ViewModel.props.formFields formFields
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
    saveField (scope, dom, event, props) {
        this.subFormObject.set(props.dirty);
        this.dispatch('fieldchange', [{
            value: this.subFormObject.serialize(),
            name: this.properties.name
        }]);
    }
});
assign(ViewModel.prototype, CanEvent);

Component.extend({
    tag: 'subform-field',
    view: template,
    ViewModel: ViewModel
});
