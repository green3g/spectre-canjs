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
     * @property {*} filter-widget.Filter.props.value value
     * @parent filter-widget.Filter.props
     */
    value: {
        type: '*'
    },
    /**
     * The name of the field to filter on
     * @property {String} filter-widget.Filter.props.name name
     * @parent filter-widget.Filter.props
     */
    name: {
        type: 'string',
        value: ''
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
        serialize: false
    },
    /**
     * A field object that defines the value field properties.
     * This is used to create the value field for each filter in the filter-widget
     * @property {Object} filter-widget.Filter.props.valueField valueField
     * @parent filter-widget.Filter.props
     */
    valueField: {
        serialize: false
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
