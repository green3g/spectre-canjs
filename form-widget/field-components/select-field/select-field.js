import CanEvent from 'can-event';
import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import template from './select-field.stache!';
import assign from 'object-assign';

/**
 * @constructor form-widget/field-components/select-field.ViewModel ViewModel
 * @parent form-widget/field-components/select-field
 * @group select-field.ViewModel.props Properties
 *
 * @description A `<select-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('SelectField', {
  /**
   * @prototype
   */
    /**
     * Properties for the select dropdown. The properties object is similar to that of
     * `util/field.Field` object, except it includes additional properties to define
     * the select dropdown behavior.
     * @parent select-field.ViewModel.props
     * @property {select-field.SelectFieldProperty} select-field.ViewModel.props.properties properties
     */
    properties: {Value: DefineMap},
    /**
     * A list of validation errors
     * @property {Array<String>} select-field.ViewModel.props.errors errors
     * @parent select-field.ViewModel.props
     */
    errors: '*',
    /**
     * The current value selected
     * @property {String} select-field.ViewModel.props.value value
     * @parent select-field.ViewModel.props
     */
    value: {type: 'string', value: ''},
    /**
     * Whether or not to display this field inline with other fields
     * @property {HTMLBoolean} select-field.ViewModel.props.inline inline
     * @parent select-field.ViewModel.props
     */
    inline: 'htmlbool',
    /**
     * Called whenever a field is changed, dispatches the change event
     * @function onChange
     * @signature
     * @param {String} value The currently selected value
     */
    onChange (value) {
        //we could perform some other logic here
        this.dispatch('fieldchange', [{
            value: value,
            name: this.properties.name
        }]);
    },
    /**
     * Determines whether a value is the currently selected value
     * @function isSelected
     * @signature
     * @param {String} value The value to check
     * @return {Boolean} whether or not it is selected
     */
    isSelected (value) {
        //coerce check into this value type
        //eslint-disable-next-line eqeqeq
        return value == this.value;
    }
});
assign(ViewModel.prototype, CanEvent);

Component.extend({
    tag: 'select-field',
    view: template,
    ViewModel: ViewModel
});
