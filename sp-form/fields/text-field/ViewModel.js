import $ from 'can-jquery';
import canEvent from 'can-event';
import Base from 'spectre-canjs/util/field/base/FieldInputMap';

/**
 * @constructor sp-form/fields/text-field.ViewModel ViewModel
 * @parent sp-form/text-field
 * @group text-field.ViewModel.props Properties
 *
 * @description A `<text-field />` component's ViewModel
 */
export default Base.extend('TextField', {
    /**
     * Checks for the enter keypress and triggers a change event on the input
     * The enter key press triggers a submit event on the form, but before the
     * submit event, we need to trigger a change on the field value
     * @function beforeSubmit
     * @signature
     * @param  {domElement} element The form input element
     * @param  {KeyDownEvent} event The form submit event
     * @return {Boolean}
     */
    beforeSubmit (element, event) {
        if (event.keyCode === 13) {
            canEvent.trigger(element, 'change');
        }
        return true;
    },
    initElementUI (element) {
        const props = this.properties;
        $(element)[props.ui](props.uiOptions);
    }
});