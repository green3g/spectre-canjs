/*spectre-canjs@0.15.5#list-table/list-table.stache!steal-stache@3.0.3#steal-stache*/
var stache = require('can-stache');
var mustacheCore = require('can-stache/src/mustache_core');
require('can-view-import@3.0.3#can-view-import');
require('can-stache-bindings@3.0.5#can-stache-bindings');
var renderer = stache([
    {
        'tokenType': 'start',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['query-table']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'start',
        'args': [
            'table',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['table table-striped table-condensed']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'table',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'thead',
            false
        ]
    },
    {
        'tokenType': 'end',
        'args': [
            'thead',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
    },
    {
        'tokenType': 'start',
        'args': [
            'tr',
            false
        ]
    },
    {
        'tokenType': 'end',
        'args': [
            'tr',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                ']
    },
    {
        'tokenType': 'start',
        'args': [
            'th',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['tool-buttons']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'th',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                    ']
    },
    {
        'tokenType': 'start',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['form-group']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'label',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['form-checkbox']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'label',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                            ']
    },
    {
        'tokenType': 'start',
        'args': [
            'input',
            true
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['type']
    },
    {
        'tokenType': 'attrValue',
        'args': ['checkbox']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['type']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($change)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['toggleSelectAll']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($change)']
    },
    {
        'tokenType': 'attrStart',
        'args': ['{($checked)}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['_allSelected']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{($checked)}']
    },
    {
        'tokenType': 'end',
        'args': [
            'input',
            true
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                            ']
    },
    {
        'tokenType': 'start',
        'args': [
            'i',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['form-icon']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'i',
            false
        ]
    },
    {
        'tokenType': 'close',
        'args': ['i']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
    },
    {
        'tokenType': 'close',
        'args': ['label']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                    ']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                ']
    },
    {
        'tokenType': 'close',
        'args': ['th']
    },
    {
        'tokenType': 'special',
        'args': ['#each fields']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                    ']
    },
    {
        'tokenType': 'start',
        'args': [
            'th',
            false
        ]
    },
    {
        'tokenType': 'special',
        'args': ['#is name currentSort.fieldName']
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['text-bold']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'special',
        'args': ['/is']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['setSort(name)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($click)']
    },
    {
        'tokenType': 'end',
        'args': [
            'th',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['                        ']
    },
    {
        'tokenType': 'special',
        'args': ['alias']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
    },
    {
        'tokenType': 'special',
        'args': ['#is name currentSort.fieldName']
    },
    {
        'tokenType': 'start',
        'args': [
            'i',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['sort-icon fa fa-sort-']
    },
    {
        'tokenType': 'special',
        'args': ['#is currentSort.type \'desc\'']
    },
    {
        'tokenType': 'attrValue',
        'args': ['desc']
    },
    {
        'tokenType': 'special',
        'args': ['else']
    },
    {
        'tokenType': 'attrValue',
        'args': ['asc']
    },
    {
        'tokenType': 'special',
        'args': ['/is']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'i',
            false
        ]
    },
    {
        'tokenType': 'close',
        'args': ['i']
    },
    {
        'tokenType': 'special',
        'args': ['/is']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                    ']
    },
    {
        'tokenType': 'close',
        'args': ['th']
    },
    {
        'tokenType': 'special',
        'args': ['/each']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
    },
    {
        'tokenType': 'close',
        'args': ['tr']
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'close',
        'args': ['thead']
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'tbody',
            false
        ]
    },
    {
        'tokenType': 'end',
        'args': [
            'tbody',
            false
        ]
    },
    {
        'tokenType': 'special',
        'args': ['#each objects as row']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                ']
    },
    {
        'tokenType': 'start',
        'args': [
            'tr',
            false
        ]
    },
    {
        'tokenType': 'special',
        'args': ['#if isSelected(row)']
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['warning']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'special',
        'args': ['/if']
    },
    {
        'tokenType': 'end',
        'args': [
            'tr',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                    ']
    },
    {
        'tokenType': 'start',
        'args': [
            'td',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['tool-buttons']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'td',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['form-group inline-block']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                            ']
    },
    {
        'tokenType': 'start',
        'args': [
            'label',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['form-checkbox']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'label',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                                ']
    },
    {
        'tokenType': 'start',
        'args': [
            'input',
            true
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['type']
    },
    {
        'tokenType': 'attrValue',
        'args': ['checkbox']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['type']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($change)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['toggleSelected(row)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($change)']
    },
    {
        'tokenType': 'attrStart',
        'args': ['{($checked)}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['isSelected(row)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{($checked)}']
    },
    {
        'tokenType': 'end',
        'args': [
            'input',
            true
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                                ']
    },
    {
        'tokenType': 'start',
        'args': [
            'i',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['form-icon']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'i',
            false
        ]
    },
    {
        'tokenType': 'close',
        'args': ['i']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                            ']
    },
    {
        'tokenType': 'close',
        'args': ['label']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'special',
        'args': ['#each buttons']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                            ']
    },
    {
        'tokenType': 'start',
        'args': [
            'i',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'special',
        'args': ['iconClass']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['buttonClick(eventName, row)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($click)']
    },
    {
        'tokenType': 'end',
        'args': [
            'i',
            false
        ]
    },
    {
        'tokenType': 'close',
        'args': ['i']
    },
    {
        'tokenType': 'chars',
        'args': ['&nbsp;&nbsp;']
    },
    {
        'tokenType': 'special',
        'args': ['/each']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                    ']
    },
    {
        'tokenType': 'close',
        'args': ['td']
    },
    {
        'tokenType': 'special',
        'args': ['#each fields as field']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
    },
    {
        'tokenType': 'special',
        'args': ['! this passes the field name and the current object to getFieldValue ']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'td',
            false
        ]
    },
    {
        'tokenType': 'end',
        'args': [
            'td',
            false
        ]
    },
    {
        'tokenType': 'special',
        'args': ['{getFieldValue(field, row)']
    },
    {
        'tokenType': 'close',
        'args': ['td']
    },
    {
        'tokenType': 'special',
        'args': ['/each']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                ']
    },
    {
        'tokenType': 'close',
        'args': ['tr']
    },
    {
        'tokenType': 'special',
        'args': ['/each']
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'close',
        'args': ['tbody']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'close',
        'args': ['table']
    },
    {
        'tokenType': 'chars',
        'args': ['\n']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'chars',
        'args': ['\n']
    },
    {
        'tokenType': 'done',
        'args': []
    }
]);
module.exports = function (scope, options, nodeList) {
    var moduleOptions = { module: module };
    if (!(options instanceof mustacheCore.Options)) {
        options = new mustacheCore.Options(options || {});
    }
    return renderer(scope, options.add(moduleOptions), nodeList);
};