
import Field from '../../../util/field/Field';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

/**
 * the select option type - used to display <option> tags values/labels
 */
export const SelectOption = DefineMap.extend('SelectOption', {
    value: 'string',
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

/**
 * list to coerce select options
 */
export const SelectOptionList = DefineList.extend('SelectOptionList', {
    '#': SelectOption
});


/**
 * @constructor sp-form/fields/sp-select-field.ViewModel ViewModel
 * @parent sp-form/fields/sp-select-field
 * @group sp-select-field.ViewModel.props Properties
 *
 * @description A `<sp-select-field />` component's ViewModel
 */
export default Field.extend('SelectField', {
    /**
     * @prototype
     */
    defaultLabel: {type: 'string', value: 'Choose a value...'},
    options: {Type: SelectOptionList, Value: SelectOptionList},

    // a promise that resolves to options
    optionsPromise: {
        set (promise) {
            if (promise) {
                promise.then((options) => {
                    this.options = options;
                });
            }
            return promise;
        }
    },
    /**
     * Determines whether a value is the currently selected value
     * @function isSelected
     * @signature
     * @param {String} value The value to check
     * @return {Boolean} whether or not it is selected
     */
    isSelected (value) {
        // coerce check into this value type
        // eslint-disable-next-line eqeqeq
        return value == this.value;
    }
});
