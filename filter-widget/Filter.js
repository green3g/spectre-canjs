import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

export const Filter = DefineMap.extend('Filter', {
    value: {
        type: '*'
    },
    name: {
        type: 'string',
        value: ''
    },
    operator: {
        type: 'string',
        value: 'like'
    },
    opField: {
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
    types: ['string'],
    filterFactory (filter) {
        filter.value = ['%', filter.value, '%'].join('');
        return filter;
    }
}, {
    label: 'Starts with',
    value: 'starts_with',
    types: ['string'],
    filterFactory (filter) {
        filter.value = [filter.value, '%'].join('');
        return filter;
    }
}, {
    label: 'Ends with',
    value: 'ends_with',
    types: ['string'],
    filterFactory (filter) {
        filter.value = ['%', filter.value].join('');
        return filter;
    }
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
    types: ['number'],
    filterFactory (filter) {
        filter.value = parseFloat(filter.value);
        return filter;
    }
}, {
    label: 'Less Than',
    value: 'less_than',
    types: ['number'],
    filterFactory (filter) {
        filter.value = parseFloat(filter.value);
        return filter;
    }
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
