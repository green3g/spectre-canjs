import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import CanEvent from 'can-event';
import template from './json-field.stache!';
import {mapToFields, parseFieldArray} from '../../../../util/field';
import assign from 'can-util/js/assign/assign';
import dev from 'can-util/js/dev/dev';

/**
 * @constructor form-widget/field-components/json-field.ViewModel ViewModel
 * @parent form-widget/field-components/json-field
 * @group form-widget/field-components/json-field.ViewModel.props Properties
 *
 * @description A `<json-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('JSONField', {
    /**
     * @prototype
     */
    /**
     * Form field properties that define this fields behavior
     * @property {json-field.JSONFieldProperties} json-field.ViewModel.props.properties properties
     * @parent json-field.ViewModel.props
     */
    properties: {
        Value: DefineMap,
        set (props) {
            const Template = props.ObjectTemplate;
            let obj;
            if (Template) {
                obj = new Template();
            } else {
                dev.warn('json-field needs an ObjectTemplate defined in its field properties');
                obj = new DefineMap();
            }

            this.jsonFormObject = obj;
            return props;
        }
    },
    /**
     * The current value of the field. This is a json serialized value
     * paths.
     * @property {String} json-field.ViewModel.props.value value
     * @parent json-field.ViewModel.props
     */
    value: {
        type: 'string',
        set (val) {
            if (val) {
                try {
                    const obj = JSON.parse(val);
                    this.jsonFormObject.set(obj);
                } catch (e) {
                    dev.warn('error parsing json, value set on json-field was ' + val);
                    dev.warn(e);
                }
            }
            return val;
        }
    },
    /**
     * A list of validation errors
     * This is a placeholder for future functionality. Not yet implemented.
     * @property {Array<String>} json-field.ViewModel.props.errors errors
     * @parent json-field.ViewModel.props
     */
    errors: '*',
    /**
     * The current object being edited in this field's json form, this
     * is created automatically from the `ObjectTemplate` property.
     * It is initialized with default values by using `JSON.parse` on the `value`
     * property
     * @property {Object} json-field.ViewModel.props.jsonFormObject jsonFormObject
     * @parent json-field.ViewModel.props
     */
    jsonFormObject: {
        Value: DefineMap
    },
    /**
     * The field properties to set up the form fields functionality, this is
     * set up automatically from the `fields` property or the `jsonFormObject`
     * if `fields` is not provided.
     * @property {Array<util/field.Field>} json-field.ViewModel.props.formFields formFields
     * @parent json-field.ViewModel.props
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
        this.jsonFormObject.set(props.name, props.value);
        const json = JSON.stringify(this.jsonFormObject.serialize());
        this.value = json;
        this.dispatch('fieldchange', [{
            value: json,
            name: this.properties.name
        }]);
    }
});
assign(ViewModel.prototype, CanEvent);

Component.extend({
    tag: 'json-field',
    view: template,
    ViewModel: ViewModel
});
