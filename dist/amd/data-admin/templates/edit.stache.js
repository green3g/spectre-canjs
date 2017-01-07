/*spectre-canjs@0.15.5#data-admin/templates/edit.stache!steal-stache@3.0.3#steal-stache*/
define([
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.0.3#can-view-import',
    'can-stache-bindings@3.0.5#can-stache-bindings'
], function (module, stache, mustacheCore) {
    var renderer = stache([
        {
            'tokenType': 'special',
            'args': ['#if focusObject']
        },
        {
            'tokenType': 'chars',
            'args': ['    ']
        },
        {
            'tokenType': 'start',
            'args': [
                'form-widget',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['{form-object}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['focusObject']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{form-object}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['show-saving']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['show-saving']
        },
        {
            'tokenType': 'attrStart',
            'args': ['(submit)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['saveObject']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['(submit)']
        },
        {
            'tokenType': 'attrStart',
            'args': ['{fields}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['_fields']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{fields}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['(cancel)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['setPage(\'list\')']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['(cancel)']
        },
        {
            'tokenType': 'end',
            'args': [
                'form-widget',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['    ']
        },
        {
            'tokenType': 'special',
            'args': ['else']
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'start',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'p',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Please click the ']
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
            'args': ['fa fa-pencil']
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
            'args': [' Edit button on the list page to edit a row.']
        },
        {
            'tokenType': 'close',
            'args': ['p']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
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