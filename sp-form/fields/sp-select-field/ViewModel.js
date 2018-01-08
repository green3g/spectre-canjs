
import Base from 'spectre-canjs/util/field/base/FieldInputMap';
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
 * select field properties
 */
export const SelectProperties = DefineMap.extend('SelectProperties', {seal: false}, {
    defaultLabel: {type: 'string', value: 'Choose a value...'},
    options: {Type: SelectOptionList, Value: SelectOptionList},
    optionsPromise: {
        set (promise) {
            if (promise) {
                promise.then((options) => {
                    this.options = options;
                });
            }
            return promise;
        }
    }
});

/**
 * @constructor sp-form/fields/sp-select-field.ViewModel ViewModel
 * @parent sp-form/fields/sp-select-field
 * @group sp-select-field.ViewModel.props Properties
 *
 * @description A `<sp-select-field />` component's ViewModel
 */
export default Base.extend('SelectField', {
    /**
     * @prototype
     */
    /**
     * Properties for the select dropdown. The properties object is similar to that of
     * `util/field/Field` object, except it includes additional properties to define
     * the select dropdown behavior.
     * @parent sp-select-field.ViewModel.props
     * @property {sp-select-field.types.SelectFieldProperty} sp-form/fields/sp-select-field.ViewModel.properties properties
     */
    properties: {Type: SelectProperties, Value: SelectProperties},
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
