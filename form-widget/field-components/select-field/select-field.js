import CanEvent from 'can-event';
import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import template from './select-field.stache!';
import assign from 'object-assign';

/**
 * @constructor form-widget/field-components/select-field.ViewModel ViewModel
 * @parent form-widget/field-components/select-field
 * @group form-widget/field-components/select-field.ViewModel.props Properties
 *
 * @description A `<select-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('SelectField', {
    /**
     * Properties for the select dropdown. The properties object is similar to that of
     * `util/field.Field` object, except it includes additional properties to define
     * the select dropdown behavior.
     * @parent form-widget/field-components/select-field.ViewModel.props
     * @property {form-widget/field-components/select-field.SelectFieldProperty} form-widget/field-components/select-field.ViewModel.props.SelectFieldProperty properties
     */
    properties: DefineMap,
    errors: '*',
    value: {type: 'string', value: ''},
    inline: 'htmlbool',
    onChange (value) {
        //we could perform some other logic here
        this.dispatch('change', [value]);
    },
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
