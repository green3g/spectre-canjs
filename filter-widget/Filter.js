import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import {Field} from '../util/field/field';
import {makeSentenceCase} from '../util/string/string';
import assign from 'object-assign';
import define from 'can-define';


/**
 * @property filter-widget.FilterOptions FilterOptions
 * @parent filter-widget
 *
 * @description The default filter operator options
 */
export const FilterOptions = [{
    label: 'Does not contain',
    value: 'not_like',
    types: ['string']
}, {
    label: 'Contains',
    value: 'like',
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
 * @parent filter-widget
 * @group filter-widget.Filter.props Properties
 *
 * @description Creates a new filter object
 * @signature `new Filter(properties)`
 */
export const Filter = DefineMap.extend('Filter', {
    /**
     * A value to filter on. Can be any primitive type
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
        }
    },
    /**
     * The operator to filter with. The default is `like`.
     * @property {String} Ffilter-widget.Filter.props.operator operator
     * @parent filter-widget.Filter.props
     */
    operator: {
        type: 'string',
        value: 'like'
    },
    /**
     * A field object that defines the available operator options and properties.
     * This is used to create the dropdown choice for each filter in the filter-widget
     * @property {Object} filter-widget.Filter.props.operatorField operatorField
     * @parent filter-widget.Filter.props
     */
    operatorField: {
        serialize: false,
        get () {
            const field = this.field;
            return new Field({
                name: 'operator',
                alias: 'is',
                inline: true,
                placeholder: 'Choose an operator',
                fieldType: 'select',
                options: field ? FilterOptions.filter((filter) => {
                    return !field.type || field.type === 'observable' || !filter.types || filter.types.indexOf(field.type) > -1;
                }) : FilterOptions
            });
        }
    },
    alias: {
        get () {
            return this.field ? this.field.alias : makeSentenceCase(this.name);
        }
    },
    /**
     * A field object that defines the value field properties.
     * This is used to create the value field for each filter in the filter-widget
     * @property {util/field.Field} filter-widget.Filter.props.valueField valueField
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
     * The field object used to initialize this filter
     * @property {util/field.Field}  filter-widget.Filter.props.field field
     */
    field: {
        Type: Field,
        serialize: false
    },
    /**
     * creates a dummmy form object for use with the field template
     * @property {Object}  filter-widget.Filter.props.formObject formObject
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
     * @param {util/field.Field} field the field object
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
 * @parent filter-widget
 *
 * @description Creates a new filter list
 * @signature `new FilterList([filters])`
 */
export const FilterList = DefineList.extend('FilterList', {
    '#': Filter
});
