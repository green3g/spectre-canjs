import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

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
     * @property {*} Filter.value
     */
    value: {
        type: '*'
    },
    /**
     * The name of the field to filter on
     * @property {String} Filter.name
     * @parent Filter.props
     */
    name: {
        type: 'string',
        value: ''
    },
    /**
     * The operator to filter with. The default is `like`.
     *
     * @property {String} Filter.operator
     * @parent Filter.props
     */
    operator: {
        type: 'string',
        value: 'like'
    },
    /**
     * A field object that defines the available operator options and properties.
     * This is used to create the dropdown choice for each filter in the filter-widget
     * @property {Object} Filter.operatorField
     * @parent Filter.props
     */
    operatorField: {
        serialize: false
    },
    /**
     * A field object that defines the value field properties.
     * This is used to create the value field for each filter in the filter-widget
     * @property {Object} Filter.valueField
     * @parent Filter.props
     */
    valueField: {
        serialize: false
    }
});

export const FilterList = DefineList.extend('FilterList', {
    '#': Filter
});

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
