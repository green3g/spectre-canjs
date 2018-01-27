import {makeSentenceCase} from '../string/string';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';


/**
 * @constructor util/field/Field Field
 * @parent util/field
 * @group util/field/Field.props Properties
 * @description Constructs a new field
 */
export const Field = DefineMap.extend('Field', {

    // allow extra properties on this type
    seal: false
}, {
    /**
     * @prototype
     */
    /**
     * The name of the property on the object, this field's name
     * @property {String} util/field/Field.props.name name
     * @parent util/field/Field.props
     */
    name: 'string',
    /**
     * A friendly name for the field used to display to the user
     * The default is to capitalize the name and remove underscores
     * @property {String} util/field/Field.props.alias alias
     * @parent util/field/Field.props
     */
    alias: {
        type: 'string',
        get (alias) {
            if (alias) {
                return alias;
            }
            return makeSentenceCase(this.name);
        }
    },
    properties: {
        set (props) {
            this.assign(props);
            return;
        }
    },
    /**
     * The field error string
     * @property {String} FieldInputMap.props.error error
     * @parent FieldInputMap.props
     */
    error: 'string',
    /**
     * The current field value
     * @property {Object} FieldInputMap.props.value value
     * @parent FieldInputMap.props
     */
    value: {
        value: '',
        type: '*',
        set (val) {
            if (this.value !== val) {
                this.dispatch('fieldchange', [this]);
            }
            return val;
        }
    },
    /**
     * Includes this field in the list view in the data-admin
     * @property {Boolean} util/field/Field.props.list list
     * @parent util/field/Field.props
     */
    list: {
        type: 'boolean',
        value: true
    },
    /**
     * Includes this field in the details view in the data-admin
     * @property {Boolean} util/field/Field.props.detail detail
     * @parent util/field/Field.props
     */
    detail: {
        type: 'boolean',
        value: true
    },
    /**
     * Includes this field in the edit view in the data-admin
     * @property {Boolean} util/field/Field.props.edit edit
     * @parent util/field/Field.props
     */
    edit: {
        type: 'boolean',
        value: true
    },
    /**
     * Includes this field in the filter widget's fields.
     * @property {Boolean} util/field/Field.props.filter filter
     * @parent util/field/Field.props
     */
    filter: {
        type: 'boolean',
        value: true
    },
    /**
     * Includes this field in the sorting capability
     * @property {Boolean} util/field/Field.props.sort sort
     * @parent util/field/Field.props
     */
    sort: {
        type: 'boolean',
        value: true
    },
    /**
     * Validates a property and returns a string if the field is invalid
     * @property {Function} util/field/Field.props.validate validate
     * @signature `validate(props)`
     * @param {util/field.ValidationObject} props A special object consisting of information about the current value and dirty state of the form object
     * @return {String|falsey} a string error message if the value is not valid or undefined if there is no error message
     * @parent util/field/Field.props
     */
    validate: {
        value: null
    },
    /**
     * A boolean flag to display form field inline with others and hide labels
     * @property {Boolean} util/field/Field.props.inline inline
     * @parent util/field/Field.props
     */
    inline: 'boolean',
    /**
     * Text to display when the field is empty (like a textbox). Doesn't apply to
     * some fields, like select or date fields.
     * @property {String} util/field/Field.props.placeholder placeholder
     * @parent util/field/Field.props
     */
    placeholder: 'string',
    /**
     * Adds css classes to the table cells and headings. Selectors should use
     * `th.classname` and `td.classname`
     * @property {String} util/field/Field.props.classes classes
     * @parent util/field/Field.props
     */
    classes: 'string',

    // placeholder props to overwrite the display template of edit or table components
    editComponent: {},
    displayComponent: {}
    /**
     * If field component implements this method, it will be called 
     * when the component is inserted, with the input element
     * It can be used to customize the input, like adding a date picker
     * 
     */
    // onInsert (element) {flatpicker(element);}
});


export const FieldList = DefineList.extend('FieldList', {
    '#': Field
});

export default Field;
