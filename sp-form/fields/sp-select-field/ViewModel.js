
import Field from '../../../util/field/Field';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import debounce from '../../../sp-admin/util/debounce';

/**
 * the select option type - used to display <option> tags values/labels
 * @class SelectOption
 * @memberof sp-select-field
 */
export const SelectOption = DefineMap.extend('SelectOption', {
    /** @lends sp-select-field.SelectOption.prototype */
    /**
     * The value to set when option is selected
     * @type {Any} 
     * @memberof sp-select-field.SelectOption.prototype
     */
    value: 'string',
    /**
     * The label to display to the user. If not provided, `value` is used
     * @type {String} 
     * @memberof sp-select-field.SelectOption.prototype
     */
    label: {
        type: 'string',
        get (label) {
            if (label) {
                return label;
            }
            return this.value;
        }
    }
});

export const SelectOptionList = DefineList.extend('SelectOptionList', {
    '#': SelectOption
});


/**
 * A `<sp-select-field />` component's ViewModel
 * @class ViewModel
 * @memberof sp-select-field
 */
export default Field.extend('SelectField', {
    /** @lends sp-select-field.ViewModel.prototype */
    init () {
        if(this.optionsPromise){
            this.optionsPromise.then((result) => {
                this.options = result;
            });
        }
        this.listenTo('optionsPromise', (event, newPromise) => {
            if (!newPromise) {
                return;
            }
            newPromise.then((result) => { 
                this.options = result; 
            });
        });
    },
    /**
     * The default label when no items are selected
     * @type {String}
     * @memberof sp-select-field.ViewModel.prototype
     */
    defaultLabel: {type: 'string', default: 'Choose a value...'},
    /**
     * The array of options to display in the dropdown
     * @type {Array<sp-select-field.SelectOption>}
     * @memberof sp-select-field.ViewModel.prototype
     */
    options: {        
        Type: SelectOptionList,
        Default: SelectOptionList
    },
    /**
     * A promise that resolves to the array of options. 
     * @type {Promise<Array>}
     * @memberof sp-select-field.ViewModel.prototype
     */
    optionsPromise: {
        get () {
            if (typeof this.getOptions === 'function') {
                const data = this.object ? this.object.get() : {};
                return Promise.resolve(this.getOptions(data));
            }
            return null;
        }
    },
    /**
     * Determines whether a value is the currently selected value
     * @param {String} value The value to check
     * @return {Boolean} whether or not it is selected
     */
    isSelected (value) {
        // coerce check into this value type
        // eslint-disable-next-line eqeqeq
        return value == this.value;
    },
    /**
     * An optional function to return options from a form object...ie cascading dropdowns 
     * @param {Object} formObject the form object
     * @returns {SelectOption[]|Promise<SelectOption[]>} the filtered array of select options
     */
    getOptions: {
        set (getter) {
            if (getter) {
                getter = debounce(this, getter);
            }
            return getter;
        }
    }
});
