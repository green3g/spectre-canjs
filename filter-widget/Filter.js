import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Field from '../util/field/Field';
import {makeSentenceCase} from '../util/string/string';
import assign from 'object-assign';
import define from 'can-define';


/**
 * @property filter-widget.FilterOptions FilterOptions
 * @parent filter-widget.types
 *
 * @description The default filter operator options
 */
export const FilterOptions = [{
    label: 'Contains',
    value: 'like',
    types: ['string']
}, {
    label: 'Does not contain',
    value: 'not_like',
    types: ['string']
}, {
    label: 'Starts with',
    value: 'starts_with',
    types: ['string']
}, {
    label: 'Ends with',
    value: 'ends_with',
    types: ['string']
}, {
    label: 'Exactly equal to',
    value: 'equals'
}, {
    label: 'Not exactly equal to',
    operator: 'not_equal_to',
    value: 'not_equal_to'
}, {
    label: 'Greater Than',
    value: 'greater_than',
    types: ['number']
}, {
    label: 'Less Than',
    value: 'less_than',
    types: ['number']
}, {
    label: 'Before',
    value: 'before',
    types: ['date'],
    valueField: {
        name: 'value',
        alias: 'Value',
        fieldType: 'date',
        properties: {
            placeholder: 'Select a date'
        }
    }
}, {
    label: 'After',
    value: 'after',
    types: ['date'],
    valueField: {
        name: 'value',
        alias: 'Value',
        fieldType: 'date',
        properties: {
            placeholder: 'Select a date'
        }
    }
}];

/**
 * @constructor filter-widget.Filter Filter
 * @parent filter-widget.types
 * @group filter-widget.Filter.props Properties
 *
 * @description Creates a new filter object
 * @signature `new Filter(properties)`
 */
export const Filter = DefineMap.extend('Filter', {
    /**
     * @prototype
     */
    /**
     * A value to filter on. Can be any primitive type. If the
     * [filter-widget.Filter.props.field `field`] property
     * is set, the `field.type` property will be used to coerce the value.
     * @property {*} filter-widget.Filter.props.value value
     * @parent filter-widget.Filter.props
     */
    value: {
        type (newVal) {
            const type = this.valueField && this.valueField.type ? this.valueField.type : '*';
            return define.types[type](newVal);
        }
    },
    /**
     * The name of the field to filter on
     * @property {String} filter-widget.Filter.props.name name
     * @parent filter-widget.Filter.props
     */
    name: {
        type: 'string',
        get (name) {
            return this.field ? this.field.name : name;
        },
        serialize (name) {
            return name;
        }
    },
    /**
     * The operator to filter with. The default is `like`.
     * @property {String} Ffilter-widget.Filter.props.operator operator
     * @parent filter-widget.Filter.props
     */
    operator: {
        type: 'string',
        get (val) {
            return typeof val === 'undefined' ? this.operatorField.value : val;
        },
        serialize (val) {
            return val;
        }
    },
    /**
     * A field object that defines the available operator options and properties.
     * This is used to create the dropdown choice for each filter in the filter-widget.
     * This field is generated automatically. If the
     * [filter-widget.Filter.props.field `field`] property is set,
     * the `field.type` property will be used to filter the operator options.
     * @property {Object} filter-widget.Filter.props.operatorField operatorField
     * @parent filter-widget.Filter.props
     */
    operatorField: {
        serialize: false,
        get () {
            const field = this.field;
            const options = field ? FilterOptions.filter((filter) => {
                return !field.type || field.type === 'observable' || !filter.types || filter.types.indexOf(field.type) > -1;
            }) : FilterOptions;
            return new Field({
                name: 'operator',
                value: options[0].value,
                alias: 'is',
                inline: true,
                placeholder: 'Choose an operator',
                fieldType: 'select',
                options: options
            });
        }
    },
    /**
     * A property to show or hide this filter in the picker. The default is `true`
     * @property {Boolean} filter-widget.Filter.props.visible visible
     * @parent filter-widget.Filter.props
     */
    visible: {
        type: 'boolean',
        value: true,
        serialize: false,
        set (val) {
            return val;
        }
    },
    /**
     * A property to disable this filter's remove button. This filter will not
     * be removable. In addition, the operator field will be fixed. The default
     * is `false`.
     * @property {Boolean} filter-widget.Filter.props.pinned
     * @parent filter-widget.Filter.props
     */
    pinned: {
        type: 'boolean',
        value: false,
        serialize: false
    },
    /**
     * A virtual property to provide the field alias. If the
     * [filter-widget.Filter.props.field `field`] property is set, this alias
     * will match the `field.alias`
     * @property {String} filter-widget.Filter.props.alias alias
     * @parent filter-widget.Filter.props
     *
     */
    alias: {
        get () {
            return this.field ? this.field.alias : makeSentenceCase(this.name);
        },
        serialize: false
    },
    /**
     * A field object that defines the value field properties.
     * This is used to create the value field for each filter in the filter-widget.
     * If the [filter-widget.Filter.props.field `field`] property is set, the
     * valueField will be a customized field based off of the set field.
     * @property {util/field/Field} filter-widget.Filter.props.valueField valueField
     * @parent filter-widget.Filter.props
     */
    valueField: {
        serialize: false,
        get () {
            const fieldProps = this.field ? assign(this.field.serialize(), {inline: true, textarea: false}) : {
                inline: true,
                name: this.name,
                alias: 'Value',
                fieldType: 'text',
                placeholder: 'Enter a filter value'
            };
            return new Field(fieldProps);
        }
    },
    /**
     * The field object used to initialize this filter. When this value is
     * provided, the custom field will be used in place of the regular
     * text field. This allows the user to interract with a different
     * type of field, like a checkbox when setting filters.
     * @property {util/field/Field}  filter-widget.Filter.props.field field
     * @parent filter-widget.Filter.props
     */
    field: {
        Type: Field,
        serialize: false
    },
    /**
     * A virtual property that creates a dummmy form object for use with the
     * field template
     * @property {Object}  filter-widget.Filter.props.formObject formObject
     * @parent filter-widget.Filter.props
     */
    formObject: {
        serialize: false,
        get () {
            const obj = {};
            obj[this.name] = this.value;
            return obj;
        }
    },
    /**
     * a setter for the value field for use with the field template
     * @function setField
     * @signature
     * @param {util/field/Field} field the field object
     * @param {domElement} dom the input element
     * @param {Object} scope the view model scope
     * @param {*} props the object with the value set on the form
     */
    setField (field, dom, scope, props) {
        this.value = props.value;
    }
});

/**
 * @constructor filter-widget.FilterList FilterList
 * @parent filter-widget.types
 *
 * @description Creates a new filter list
 * @signature `new FilterList([filters])`
 */
export const FilterList = DefineList.extend('FilterList', {
    '#': Filter
});
