/*spectre-canjs@0.15.5#filter-widget/Filter*/
define([
    'exports',
    'can-define/map',
    'can-define/list'
], function (exports, _map, _list) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.FilterOptions = exports.FilterList = exports.Filter = undefined;
    var _map2 = _interopRequireDefault(_map);
    var _list2 = _interopRequireDefault(_list);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var Filter = exports.Filter = _map2.default.extend('Filter', {
        value: { type: '*' },
        name: {
            type: 'string',
            value: ''
        },
        operator: {
            type: 'string',
            value: 'like'
        },
        operatorField: { serialize: false },
        valueField: { serialize: false }
    });
    var FilterList = exports.FilterList = _list2.default.extend('FilterList', { '#': Filter });
    var FilterOptions = exports.FilterOptions = [
        {
            label: 'Does not contain',
            value: 'not_like',
            types: ['string']
        },
        {
            label: 'Contains',
            value: 'like',
            types: ['string']
        },
        {
            label: 'Starts with',
            value: 'starts_with',
            types: ['string']
        },
        {
            label: 'Ends with',
            value: 'ends_with',
            types: ['string']
        },
        {
            label: 'Exactly equal to',
            value: 'equals'
        },
        {
            label: 'Not exactly equal to',
            operator: 'not_equal_to',
            value: 'not_equal_to'
        },
        {
            label: 'Greater Than',
            value: 'greater_than',
            types: ['number']
        },
        {
            label: 'Less Than',
            value: 'less_than',
            types: ['number']
        },
        {
            label: 'Before',
            value: 'before',
            types: ['date'],
            valueField: {
                name: 'value',
                alias: 'Value',
                fieldType: 'date',
                properties: { placeholder: 'Select a date' }
            }
        },
        {
            label: 'After',
            value: 'after',
            types: ['date'],
            valueField: {
                name: 'value',
                alias: 'Value',
                fieldType: 'date',
                properties: { placeholder: 'Select a date' }
            }
        }
    ];
});