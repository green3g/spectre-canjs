import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import canEvent from 'can-event';
import assign from 'can-util/js/assign/assign';
import template from './template.stache';
import CheckboxProperty from './CheckboxFieldProperty';

/**
 * @constructor form-widget/field-components/checkbox-field.ViewModel ViewModel
 * @parent form-widget/field-components/checkbox-field
 * @group checkbox-field.ViewModel.props Properties
 *
 * @description A `<checkbox-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('CheckboxField', {
    /**
     * The properties for this checkbox
     * @property {form-widget/field-components/checkbox-field.CheckboxProperties} checkbox-field.ViewModel.props.properties properties
     * @parent checkbox-field.ViewModel.props
     */
    properties: {Value: CheckboxProperty},
    /**
     * The form errors object
     * @property {Object} checkbox-field.ViewModel.props
     */
    errors: '*',
    /**
     * The current field value
     * @property {Object} checkbox-field.ViewModel.props.value value
     * @parent checkbox-field.ViewModel.props
     */
    value: {
        type: 'boolean',
        value: false,
        set (checked) {
            this.dispatch('fieldchange', [{
                value: checked,
                name: this.properties.name
            }]);
            return checked;
        }
    }
});

assign(ViewModel.prototype, canEvent);

export default Component.extend({
    tag: 'checkbox-field',
    ViewModel: ViewModel,
    view: template
});
