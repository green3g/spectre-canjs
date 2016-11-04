import canEvent from 'can-event';
import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import template from './text-field.stache!';
/**
 * @constructor form-widget/field-components/text-field.ViewModel ViewModel
 * @parent form-widget/text-date-field
 * @group form-widget/field-components/text-field.ViewModel.props Properties
 *
 * @description A `<text-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('TextField', {
    properties: DefineMap,
    value: 'string',
  /**
   * Checks for the enter keypress and triggers a change event on the input
   * The enter key press triggers a submit event on the form, but before the
   * submit event, we need to trigger a change on the field value
   * @param  {domElement} element The form input element
   * @param  {KeyDownEvent} event
   */
    beforeSubmit (element, event) {
        if (event.keyCode === 13) {
            canEvent.trigger(element, 'change');
            return true;
        }
    }
});
Object.assign(ViewModel.prototype, canEvent);

Component.extend({
    tag: 'text-field',
    view: template,
    ViewModel: ViewModel,
    events: {
        '{viewModel} value' (viewModel, event, newValue) {
            viewModel.dispatch('change', [newValue]);
        }
    }
});
