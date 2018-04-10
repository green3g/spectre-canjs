import SelectField from 'spectre-canjs/sp-form/fields/sp-select-field/ViewModel';
import DefineList from 'can-define/list/list';


/**
 * The `<sp-multi-check-field />` component viewmodel 
 * @class ViewModel
 * @extends Field
 * @memberof sp-multi-check-field
 */
export default SelectField.extend('CheckboxMulti', {
    /** @lends sp-multi-check-field.ViewModel.prototype */
    
    /**
     * @type {Array<Any>}
     * @memberof sp-multi-check-field.ViewModel.prototype
     * @description The current array values selected
     */
    value: {
        Type: DefineList,
        Default: DefineList
    },
    /**
     * Dispatches the `fieldchange` event
     */
    onChange () {
        this.dispatch('fieldchange', [this]);
    }
});
