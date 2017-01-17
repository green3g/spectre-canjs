/*spectre-canjs@0.20.0#toast-container/toast-container.stache!steal-stache@3.0.5#steal-stache*/
var stache = require('can-stache');
var mustacheCore = require('can-stache/src/mustache_core');
require('can-view-import@3.0.4#can-view-import');
require('can-stache-bindings@3.0.6#can-stache-bindings');
var renderer = stache([
    {
        'tokenType': 'chars',
        'args': ['\n']
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
        'args': ['toasts']
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
        'args': ['#each toasts']
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'toast-item',
            true
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['(hide)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['removeToast(.)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['(hide)']
    },
    {
        'tokenType': 'attrStart',
        'args': ['severity']
    },
    {
        'tokenType': 'special',
        'args': ['severity']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['severity']
    },
    {
        'tokenType': 'attrStart',
        'args': ['visible']
    },
    {
        'tokenType': 'special',
        'args': ['visible']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['visible']
    },
    {
        'tokenType': 'attrStart',
        'args': ['heading']
    },
    {
        'tokenType': 'special',
        'args': ['heading']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['heading']
    },
    {
        'tokenType': 'attrStart',
        'args': ['use-content-tag']
    },
    {
        'tokenType': 'attrValue',
        'args': ['false']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['use-content-tag']
    },
    {
        'tokenType': 'attrStart',
        'args': ['auto-hide']
    },
    {
        'tokenType': 'special',
        'args': ['autoHide']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['auto-hide']
    },
    {
        'tokenType': 'attrStart',
        'args': ['body']
    },
    {
        'tokenType': 'special',
        'args': ['body']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['body']
    },
    {
        'tokenType': 'attrStart',
        'args': ['dismissable']
    },
    {
        'tokenType': 'special',
        'args': ['dismissable']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['dismissable']
    },
    {
        'tokenType': 'end',
        'args': [
            'toast-item',
            true
        ]
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
module.exports = function (scope, options, nodeList) {
    var moduleOptions = { module: module };
    if (!(options instanceof mustacheCore.Options)) {
        options = new mustacheCore.Options(options || {});
    }
    return renderer(scope, options.add(moduleOptions), nodeList);
};