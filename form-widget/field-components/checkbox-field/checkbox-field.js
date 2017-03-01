import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import canEvent from 'can-event';
import assign from 'can-util/js/assign/assign';
import template from './template.stache';

/**
 * @constructor form-widget/field-components/checkbox-field.CheckboxProperties CheckboxProperties
 * @parent form-widget/checkbox-field
 * @group form-widget/field-components/checkboxField.props Properties
 *
 * @description A properties object for the checkbox-field
 */
export const CheckboxProperties = DefineMap.extend({
    /**
     * The checkbox style. Spectre.css supports two styles out of the box,
     * the `checkbox` style which displays as a regular checkbox and the
     * `switch` style which appears as a switch that toggles.
     * The default is `switch`
     * @property {String} CheckboxProperties.props.style style
     * @parent CheckboxProperties.props
     */
    style: {
        type: 'string',
        value: 'checkbox'
    }
});

/**
 * @constructor form-widget/field-components/checkbox-field.ViewModel ViewModel
 * @parent form-widget/checkbox-field
 * @group form-widget/field-components/checkbox-field.ViewModel.props Properties
 *
 * @description A `<checkbox-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('CheckboxField', {
    /**
     * The properties for this checkbox
     * @property {form-widget/field-components/checkbox-field.CheckboxProperties} checkbox-field.ViewModel.properties properties
     * @parent checkbox-field.ViewModel.props
     */
    properties: {Value: CheckboxProperties},
    errors: '*',
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

Component.extend({
    tag: 'checkbox-field',
    viewModel: ViewModel,
    view: template
});
