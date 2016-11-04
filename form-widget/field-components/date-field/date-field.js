import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import CanEvent from 'can-event';

// import 'date-selector/less/datepicker.less!';
// import dateSelector from 'date-selector';

import template from './date-field.stache!';
import './date-field.less!';

/**
 * @constructor form-widget/field-components/date-field.ViewModel ViewModel
 * @parent form-widget/field-components/date-field
 * @group form-widget/field-components/date-field.ViewModel.props Properties
 *
 * @description A `<date-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('DateField', {
    properties: DefineMap,
    value: 'date',
  /**
   * Checks for the enter keypress and triggers a change event on the input
   * The enter key press triggers a submit event on the form, but before the
   * submit event, we need to trigger a change on the field value
   * @param  {domElement} element The form input element
   * @param  {KeyDownEvent} event
   */
    beforeSubmit (element, event) {
        if (event.keyCode === 13) {
            CanEvent.trigger(element, 'change');
        }
    },
    onBlur (element) {
        CanEvent.trigger(element, 'change');
    }
});

Component.extend({
    tag: 'date-field',
    view: template,
    ViewModel: ViewModel,
    events: {
        inserted () {
            // dateSelector();
        },
        '{ViewModel} value' (viewModel, event, newValue) {
            viewModel.dispatch('change', [newValue]);
        }
    }
});
