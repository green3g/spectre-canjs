/*spectre-canjs@0.15.5#data-admin/templates/add.stache!steal-stache@3.0.3#steal-stache*/
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
            'args': ['#if view.disableAdd']
        },
        {
            'tokenType': 'chars',
            'args': ['    ']
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
            'tokenType': 'special',
            'args': ['view.addDisabledMessage']
        },
        {
            'tokenType': 'close',
            'args': ['p']
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
            'args': ['getNewObject()']
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
            'tokenType': 'end',
            'args': [
                'form-widget',
                true
            ]
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