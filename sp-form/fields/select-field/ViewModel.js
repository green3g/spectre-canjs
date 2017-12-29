
import Base from 'spectre-canjs/util/field/base/FieldInputMap';
import dev from 'can-util/js/dev/dev';

const DEFAULT_OPTION = {label: 'Choose a value...', value: ''};
/**
 * @constructor sp-form/fields/select-field.ViewModel ViewModel
 * @parent sp-form/fields/select-field
 * @group select-field.ViewModel.props Properties
 *
 * @description A `<select-field />` component's ViewModel
 */
export default Base.extend('SelectField', {
    /**
     * @prototype
     */
    /**
     * Properties for the select dropdown. The properties object is similar to that of
     * `util/field/Field` object, except it includes additional properties to define
     * the select dropdown behavior.
     * @parent select-field.ViewModel.props
     * @property {select-field.types.SelectFieldProperty} sp-form/fields/select-field.ViewModel.properties properties
     */
    properties: {
        value: {
            options: [DEFAULT_OPTION]
        }
    },
    options: {
        get (val, set) {
            const props = this.properties;
            if (props.optionsPromise) {
                props.optionsPromise.then((options) => {
                    set([DEFAULT_OPTION].concat(options.get ? options.get() : options));
                });
            } else if (props.options && props.options.length) {
                set([DEFAULT_OPTION].concat(props.options.get ? props.options.get() : props.options));
            } else {
                dev.warn('select-field::no options passed');
            }
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
