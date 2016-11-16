
import CanEvent from 'can-event';
import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import template from './select-field.stache!';

/**
 * @constructor form-widget/field-components/select-field.ViewModel ViewModel
 * @parent form-widget/field-components/select-field
 * @group form-widget/field-components/select-field.ViewModel.props Properties
 *
 * @description A `<select-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('SelectField', {
    properties: DefineMap,
    errors: '*',
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
Object.assign(ViewModel.prototype, CanEvent);

Component.extend({
    tag: 'select-field',
    view: template,
    ViewModel: ViewModel
});
