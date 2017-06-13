import Component from 'can-component';
import Base from '~/util/field/base/FieldInputMap';
import template from './select-field.stache';
import selectInput from './templates/selectInput.stache';
import DefineMap from 'can-define/map/map';

/**
 * @constructor form-widget/field-components/select-field.ViewModel ViewModel
 * @parent form-widget/field-components/select-field
 * @group select-field.ViewModel.props Properties
 *
 * @description A `<select-field />` component's ViewModel
 */
export const ViewModel = Base.extend('SelectField', {
    /**
     * @prototype
     */
    /**
     * Properties for the select dropdown. The properties object is similar to that of
     * `util/field.Field` object, except it includes additional properties to define
     * the select dropdown behavior.
     * @parent select-field.ViewModel.props
     * @property {select-field.SelectFieldProperty} form-widget/field-components/select-field.ViewModel.properties properties
     */
    properties: {
        Value: DefineMap,
        set (props) {
            if (props.optionsPromise) {
                props.optionsPromise.then((options) => {
                    props.set('options', options);
                });
            }
            return props;
        }
    },
    /**
     * Whether or not to display this field inline with other fields
     * @property {HTMLBoolean} select-field.ViewModel.props.inline inline
     * @parent select-field.ViewModel.props
     */
    inline: 'htmlbool',
    /**
     * The select input renderer - stache template. Used as a partial in the template.
     * The default is a basic html select input.
     * @property {Renderer} select-field.ViewModel.props.selectInput selectInput
     * @parent select-field.ViewModel.props
     */
    selectInput: {
        value () {
            return selectInput;
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

export default Component.extend({
    tag: 'select-field',
    view: template,
    ViewModel: ViewModel
});
