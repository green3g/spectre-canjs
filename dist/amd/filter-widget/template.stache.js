/*spectre-canjs@0.15.5#filter-widget/template.stache!steal-stache@3.0.3#steal-stache*/
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
            'args': ['filter-widget container-fluid']
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
            'args': ['#unless disableAdd']
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'start',
            'args': [
                'select-field',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['{properties}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['nameField']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{properties}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['(change)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['addFilter']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['(change)']
        },
        {
            'tokenType': 'attrStart',
            'args': ['({$value})']
        },
        {
            'tokenType': 'attrValue',
            'args': ['fieldValue']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['({$value})']
        },
        {
            'tokenType': 'attrStart',
            'args': ['inline']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['inline']
        },
        {
            'tokenType': 'end',
            'args': [
                'select-field',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n        ']
        },
        {
            'tokenType': 'comment',
            'args': [' <form-widget inline="true" {fields}="formFields" {(form-object)}="formObject" (submit)="addFilter(formObject)" /> ']
        },
        {
            'tokenType': 'special',
            'args': ['/unless']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n    ']
        },
        {
            'tokenType': 'start',
            'args': [
                'br',
                true
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'br',
                true
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#each filters']
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
            'args': ['clearfix pt-10']
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
                'form',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['form']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['($submit)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['noOp']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($submit)']
        },
        {
            'tokenType': 'end',
            'args': [
                'form',
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
                'button',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['type']
        },
        {
            'tokenType': 'attrValue',
            'args': ['button']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['type']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['btn block float-left']
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
            'args': ['removeFilter(this)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($click)']
        },
        {
            'tokenType': 'end',
            'args': [
                'button',
                false
            ]
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
            'args': ['fa fa-trash']
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
            'args': [' ']
        },
        {
            'tokenType': 'special',
            'args': ['name']
        },
        {
            'tokenType': 'close',
            'args': ['button']
        },
        {
            'tokenType': 'chars',
            'args': ['\n                ']
        },
        {
            'tokenType': 'start',
            'args': [
                'select-field',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['pl-10 block float-left']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['{properties}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['operatorField']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{properties}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['{(value)}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['operator']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{(value)}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['inline']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['inline']
        },
        {
            'tokenType': 'end',
            'args': [
                'select-field',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n                ']
        },
        {
            'tokenType': 'start',
            'args': [
                'text-field',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['pl-10 block float-left']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['{(value)}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['value']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{(value)}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['{properties}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['valueField']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{properties}']
        },
        {
            'tokenType': 'attrStart',
            'args': ['inline']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['inline']
        },
        {
            'tokenType': 'end',
            'args': [
                'text-field',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n            ']
        },
        {
            'tokenType': 'close',
            'args': ['form']
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
            'args': ['/each']
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