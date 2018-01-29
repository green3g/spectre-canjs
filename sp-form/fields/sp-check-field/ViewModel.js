
import Field from 'spectre-canjs/util/field/Field';

/**
 * A `<sp-check-field />` component's ViewModel
 * 
 * @class ViewModel
 * @extends Field
 * @memberof sp-check-field
 */
export default Field.extend('CheckboxField', {
    /** @lends ViewModel.prototype */
    /**
     * The current value of the checkbox field
     * @type {Boolean}
     * @memberof sp-check-field.ViewModel.prototype
     */
    value: {
        type: 'boolean',
        set (val) {
            if (val !== this.value) { 
                this.dispatch('fieldchange', [this]); 
            }
            return val;
        }
    }
});