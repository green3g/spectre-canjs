import {makeSentenceCase} from '../string/string';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import {getEditComponent} from './fieldComponents';

/**
 * @typedef ValidationObject
 * @name ValidationObject
 * @property {Object} object the form object that was set on the form
 * @property {Object} dirty the updated object currently set by the user in the form
 * @property {*} value the current field's value (dirty). Same as `dirty[field.name]` but provided for easy access
 */

/**
 * @class Field
 * @description Constructs a new field
 */
export const Field = DefineMap.extend('Field', {

    // allow extra properties on this type
    seal: false
}, {
    /** @lends Field.prototype */
    /**
     * The name of the type on the object, this field's name
     * @type {String} 
     * @memberof Field.prototype
     */
    name: {
        type: 'string',
        set (name) {
            if (!this.alias && name) {
                this.alias = makeSentenceCase(name);
            }
            return name;
        }
    },
    /**
     * A friendly name for the field used to display to the user
     * The default is to capitalize the name and remove underscores
     * @type {String} Field.prototype.alias alias
     * @memberof Field.prototype
     */
    alias: {
        type: 'string'
    },
    properties: {
        set (props) {
            this.assign(props);
            return;
        }
    },
    /**
     * The field error string
     * @type {String}
     * @memberof Field.prototype
     */
    error: 'string',
    /**
     * The form object. Passed to fields so they can use it in cascading dropdowns...etc 
     * @type {Object}
     * @memberof Field.prototype
     */
    object: DefineMap,
    /**
     * The current field value
     * @type {Object}
     * @memberof Field.prototype
     */
    value: {
        default: '',
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
     * @type {Boolean} Field.prototype.list list
     * @memberof Field.prototype
     */
    list: {
        type: 'boolean',
        default: true
    },
    /**
     * Includes this field in the details view in the data-admin
     * @type {Boolean} Field.prototype.detail detail
     * @memberof Field.prototype
     */
    detail: {
        type: 'boolean',
        default: true
    },
    /**
     * Includes this field in the edit view in the data-admin
     * @type {Boolean} Field.prototype.edit edit
     * @memberof Field.prototype
     */
    edit: {
        type: 'boolean',
        default: true
    },
    /**
     * Includes this field in the filter widget's fields.
     * @type {Boolean} Field.prototype.filter filter
     * @memberof Field.prototype
     */
    filter: {
        type: 'boolean',
        default: true
    },
    /**
     * Includes this field in the sorting capability
     * @type {Boolean} Field.prototype.sort sort
     * @memberof Field.prototype
     */
    sort: {
        type: 'boolean',
        default: true
    },
    /**
     * A boolean flag to display form field inline with others and hide labels
     * @type {Boolean} Field.prototype.inline inline
     * @memberof Field.prototype
     */
    inline: 'boolean',
    /**
     * Text to display when the field is empty (like a textbox). Doesn't apply to
     * some fields, like select or date fields.
     * @type {String} Field.prototype.placeholder placeholder
     * @memberof Field.prototype
     */
    placeholder: 'string',
    /**
     * Adds css classes to the table cells and headings. Selectors should use
     * `th.classname` and `td.classname`
     * @type {String} Field.prototype.classes classes
     * @memberof Field.prototype
     */
    classes: 'string',

    // placeholder props to overwrite the display template of edit or table components
    editTag: {
        default: 'sp-text-field', 
        type: 'string'
    },
    editComponent: {
        get (comp) {
            
            if (typeof comp === 'function') {
                return comp;
            }
            return getEditComponent(this);
        }
    },
    displayComponent: {},
    /**
     * If field component implements this method, it will be called 
     * when the component is inserted, with the input element
     * It can be used to customize the input, like adding a date picker
     * 
     */
    // onInsert (element) {flatpicker(element);}
    /**
     * Validates a type and returns a string if the field is invalid
     * @param {ValidationObject} props A special object consisting of information about the current value and dirty state of the form object
     * @return {String|falsey} a string error message if the value is not valid or undefined if there is no error message
     */
    validate: {
        default: null
    }
});


export const FieldList = DefineList.extend('FieldList', {
    '#': Field
});

export default Field;
