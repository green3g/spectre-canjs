/*spectre-canjs@0.15.5#data-admin/template.stache!steal-stache@3.0.3#steal-stache*/
var stache = require('can-stache');
var mustacheCore = require('can-stache/src/mustache_core');
require('can-view-import@3.0.3#can-view-import');
require('can-stache-bindings@3.0.5#can-stache-bindings');
var renderer = stache([
    {
        'tokenType': 'start',
        'args': [
            'nav-container',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['{(active-id)}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['page']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{(active-id)}']
    },
    {
        'tokenType': 'end',
        'args': [
            'nav-container',
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
            'nav-page',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['label']
    },
    {
        'tokenType': 'attrValue',
        'args': ['List']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['label']
    },
    {
        'tokenType': 'attrStart',
        'args': ['page-id']
    },
    {
        'tokenType': 'attrValue',
        'args': ['list']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['page-id']
    },
    {
        'tokenType': 'special',
        'args': ['#if objectsPromise.isPending']
    },
    {
        'tokenType': 'attrStart',
        'args': ['loading']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['loading']
    },
    {
        'tokenType': 'special',
        'args': ['/if']
    },
    {
        'tokenType': 'end',
        'args': [
            'nav-page',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'special',
        'args': ['>view.listTemplate']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'close',
        'args': ['nav-page']
    },
    {
        'tokenType': 'special',
        'args': ['#unless view.disableCreate']
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'nav-page',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['label']
    },
    {
        'tokenType': 'attrValue',
        'args': ['Create']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['label']
    },
    {
        'tokenType': 'attrStart',
        'args': ['page-id']
    },
    {
        'tokenType': 'attrValue',
        'args': ['add']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['page-id']
    },
    {
        'tokenType': 'end',
        'args': [
            'nav-page',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
    },
    {
        'tokenType': 'special',
        'args': ['>view.addTemplate']
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'close',
        'args': ['nav-page']
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
            'nav-page',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['label']
    },
    {
        'tokenType': 'attrValue',
        'args': ['Details']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['label']
    },
    {
        'tokenType': 'attrStart',
        'args': ['page-id']
    },
    {
        'tokenType': 'attrValue',
        'args': ['details']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['page-id']
    },
    {
        'tokenType': 'special',
        'args': ['#if focusObjectPromise.isPending']
    },
    {
        'tokenType': 'attrStart',
        'args': ['loading']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['loading']
    },
    {
        'tokenType': 'special',
        'args': ['/if']
    },
    {
        'tokenType': 'end',
        'args': [
            'nav-page',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'special',
        'args': ['>view.detailsTemplate']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'close',
        'args': ['nav-page']
    },
    {
        'tokenType': 'special',
        'args': ['#unless view.disableEdit']
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'nav-page',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['label']
    },
    {
        'tokenType': 'attrValue',
        'args': ['Edit']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['label']
    },
    {
        'tokenType': 'attrStart',
        'args': ['page-id']
    },
    {
        'tokenType': 'attrValue',
        'args': ['edit']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['page-id']
    },
    {
        'tokenType': 'end',
        'args': [
            'nav-page',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                ']
    },
    {
        'tokenType': 'special',
        'args': ['>view.editTemplate']
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'close',
        'args': ['nav-page']
    },
    {
        'tokenType': 'special',
        'args': ['/unless']
    },
    {
        'tokenType': 'chars',
        'args': ['\n']
    },
    {
        'tokenType': 'close',
        'args': ['nav-container']
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