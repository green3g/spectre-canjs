/*spectre-canjs@0.15.5#form-widget/field-components/select-field/select-field.stache!steal-stache@3.0.3#steal-stache*/
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
            'args': ['form-group ']
        },
        {
            'tokenType': 'special',
            'args': ['#if errors[properties.name]']
        },
        {
            'tokenType': 'attrValue',
            'args': ['has-danger']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
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
            'tokenType': 'special',
            'args': ['#if inline']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'select',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['($change)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['onChange(%element.value)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($change)']
        },
        {
            'tokenType': 'attrStart',
            'args': ['{($value)}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['value']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{($value)}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['id']
        },
        {
            'tokenType': 'special',
            'args': ['properties.name']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['form-select form-control']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['name']
        },
        {
            'tokenType': 'special',
            'args': ['name']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['name']
        },
        {
            'tokenType': 'end',
            'args': [
                'select',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#each properties.options']
        },
        {
            'tokenType': 'chars',
            'args': ['\n                ']
        },
        {
            'tokenType': 'start',
            'args': [
                'option',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['value']
        },
        {
            'tokenType': 'special',
            'args': ['value']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['value']
        },
        {
            'tokenType': 'end',
            'args': [
                'option',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['label']
        },
        {
            'tokenType': 'close',
            'args': ['option']
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
            'args': ['select']
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
            'args': ['\n        ']
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
            'args': ['col-4']
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
            'args': ['\n            ']
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
            'args': ['form-label']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['for']
        },
        {
            'tokenType': 'special',
            'args': ['properties.name']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['for']
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['properties.alias']
        },
        {
            'tokenType': 'close',
            'args': ['label']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
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
            'args': ['col-8']
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
            'args': ['\n            ']
        },
        {
            'tokenType': 'start',
            'args': [
                'select',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['($change)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['onChange(%element.value)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($change)']
        },
        {
            'tokenType': 'attrStart',
            'args': ['{($value)}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['value']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{($value)}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['id']
        },
        {
            'tokenType': 'special',
            'args': ['properties.name']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['form-select form-control']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['name']
        },
        {
            'tokenType': 'special',
            'args': ['name']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['name']
        },
        {
            'tokenType': 'end',
            'args': [
                'select',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#each properties.options']
        },
        {
            'tokenType': 'chars',
            'args': ['\n                    ']
        },
        {
            'tokenType': 'start',
            'args': [
                'option',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['value']
        },
        {
            'tokenType': 'special',
            'args': ['value']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['value']
        },
        {
            'tokenType': 'end',
            'args': [
                'option',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['label']
        },
        {
            'tokenType': 'close',
            'args': ['option']
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
            'args': ['select']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'special',
            'args': ['#if errors[properties.name]']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['form-input-hint']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': [' errors[properties.name]']
        },
        {
            'tokenType': 'close',
            'args': ['span']
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