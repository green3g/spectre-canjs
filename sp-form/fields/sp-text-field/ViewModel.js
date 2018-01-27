import canEvent from 'can-event';
import Field from 'spectre-canjs/util/field/Field';

/**
 * @constructor sp-form/fields/sp-text-field.ViewModel ViewModel
 * @parent sp-form/sp-text-field
 * @group sp-text-field.ViewModel.props Properties
 *
 * @description A `<sp-text-field />` component's ViewModel
 */
export default Field.extend('TextField', {
    /**
     * The type of input to create, for example input type="number".
     * The default is 'text'
     */
    textType: {value: 'text', type: 'string'},
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
    }
});