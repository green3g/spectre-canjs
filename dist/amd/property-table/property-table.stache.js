/*spectre-canjs@0.15.5#property-table/property-table.stache!steal-stache@3.0.3#steal-stache*/
define([
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.0.3#can-view-import',
    'can-stache-bindings@3.0.5#can-stache-bindings'
], function (module, stache, mustacheCore) {
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
            'args': ['property-table']
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
            'args': ['\n  ']
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
            'args': ['\n    ']
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
            'args': ['\n      ']
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
            'args': ['\n        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'th',
                false
            ]
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
            'args': ['Field']
        },
        {
            'tokenType': 'close',
            'args': ['th']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'th',
                false
            ]
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
            'args': ['Value']
        },
        {
            'tokenType': 'close',
            'args': ['th']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'close',
            'args': ['tr']
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'close',
            'args': ['thead']
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
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
            'args': ['#each fields']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
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
            'args': ['\n          ']
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
            'args': ['alias']
        },
        {
            'tokenType': 'close',
            'args': ['td']
        },
        {
            'tokenType': 'chars',
            'args': ['\n          ']
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
            'args': ['{getValue(.)']
        },
        {
            'tokenType': 'close',
            'args': ['td']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
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
            'args': ['\n    ']
        },
        {
            'tokenType': 'close',
            'args': ['tbody']
        },
        {
            'tokenType': 'chars',
            'args': ['\n  ']
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
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});