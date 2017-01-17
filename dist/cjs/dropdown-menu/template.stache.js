/*spectre-canjs@0.20.0#dropdown-menu/template.stache!steal-stache@3.0.5#steal-stache*/
var stache = require('can-stache');
var mustacheCore = require('can-stache/src/mustache_core');
require('can-view-import@3.0.4#can-view-import');
require('can-stache-bindings@3.0.6#can-stache-bindings');
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
        'args': ['dropdown-wrapper']
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
        'args': ['\r\n    ']
    },
    {
        'tokenType': 'start',
        'args': [
            'a',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['href']
    },
    {
        'tokenType': 'attrValue',
        'args': ['#']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['href']
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['btn btn-link']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'attrStart',
        'args': ['role']
    },
    {
        'tokenType': 'attrValue',
        'args': ['button']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['role']
    },
    {
        'tokenType': 'attrStart',
        'args': ['aria-haspopup']
    },
    {
        'tokenType': 'attrValue',
        'args': ['true']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['aria-haspopup']
    },
    {
        'tokenType': 'attrStart',
        'args': ['aria-expanded']
    },
    {
        'tokenType': 'attrValue',
        'args': ['false']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['aria-expanded']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['toggle(%event)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($click)']
    },
    {
        'tokenType': 'end',
        'args': [
            'a',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\r\n      ']
    },
    {
        'tokenType': 'special',
        'args': ['text']
    },
    {
        'tokenType': 'chars',
        'args': [' ']
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
        'args': ['\r\n    ']
    },
    {
        'tokenType': 'close',
        'args': ['a']
    },
    {
        'tokenType': 'special',
        'args': ['#if visible']
    },
    {
        'tokenType': 'chars',
        'args': ['\r\n        ']
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
        'args': ['dropdown-content']
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
        'args': ['\r\n            ']
    },
    {
        'tokenType': 'start',
        'args': [
            'content',
            true
        ]
    },
    {
        'tokenType': 'end',
        'args': [
            'content',
            true
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\r\n        ']
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
        'args': ['\r\n']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'special',
        'args': ['#if visible']
    },
    {
        'tokenType': 'chars',
        'args': ['\r\n    ']
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
        'args': ['dropdown-underlay']
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
        'args': ['hideAll()']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($click)']
    },
    {
        'tokenType': 'end',
        'args': [
            'div',
            false
        ]
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
        'args': ['\r\n']
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