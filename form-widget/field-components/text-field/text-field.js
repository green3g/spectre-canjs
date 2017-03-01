import canEvent from 'can-event';
import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import template from './text-field.stache!';
import assign from 'can-util/js/assign/assign';
/**
 * @constructor form-widget/field-components/text-field.ViewModel ViewModel
 * @parent form-widget/text-field
 * @group form-widget/field-components/text-field.ViewModel.props Properties
 *
 * @description A `<text-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('TextField', {
    properties: {Value: DefineMap},
    value: {
        type: 'string',
        value: ''
    },
    errors: '*',
    inline: 'htmlbool',
    /**
     * Checks for the enter keypress and triggers a change event on the input
     * The enter key press triggers a submit event on the form, but before the
     * submit event, we need to trigger a change on the field value
     * @function beforeSubmit
     * @param  {domElement} element The form input element
     * @param  {KeyDownEvent} event The form submit event
     * @return {Boolean}
     */
    beforeSubmit (element, event) {
        if (event.keyCode === 13) {
            canEvent.trigger(element, 'change');
            return true;
        }
        return false;
    }
});
assign(ViewModel.prototype, canEvent);

Component.extend({
    tag: 'text-field',
    view: template,
    ViewModel: ViewModel,
    events: {
        '{viewModel} value' (viewModel, event, newValue) {
            viewModel.dispatch('fieldchange', [{
                value: newValue,
                name: this.viewModel.properties.name
            }]);
        }
    }
});
