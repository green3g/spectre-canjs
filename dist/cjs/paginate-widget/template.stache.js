/*spectre-canjs@0.15.5#paginate-widget/template.stache!steal-stache@3.0.3#steal-stache*/
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
        'args': ['paginate-widget']
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
            'ul',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['pagination']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'ul',
            false
        ]
    },
    {
        'tokenType': 'special',
        'args': ['^hideFirst']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'start',
        'args': [
            'li',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'special',
        'args': ['^hasPrevious']
    },
    {
        'tokenType': 'attrValue',
        'args': ['disabled']
    },
    {
        'tokenType': 'special',
        'args': ['/hasPrevious']
    },
    {
        'tokenType': 'attrValue',
        'args': [' page-item']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'li',
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
            'a',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['aria-label']
    },
    {
        'tokenType': 'attrValue',
        'args': ['First']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['aria-label']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['gotoFirst()']
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
        'args': ['\n        ']
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
        'args': ['aria-hidden']
    },
    {
        'tokenType': 'attrValue',
        'args': ['true']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['aria-hidden']
    },
    {
        'tokenType': 'end',
        'args': [
            'span',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['&laquo;&laquo;']
    },
    {
        'tokenType': 'close',
        'args': ['span']
    },
    {
        'tokenType': 'chars',
        'args': ['\n      ']
    },
    {
        'tokenType': 'close',
        'args': ['a']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'special',
        'args': ['/hideFirst']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'special',
        'args': ['^hidePrevious']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'start',
        'args': [
            'li',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'special',
        'args': ['^hasPrevious']
    },
    {
        'tokenType': 'attrValue',
        'args': ['disabled']
    },
    {
        'tokenType': 'special',
        'args': ['/hasPrevious']
    },
    {
        'tokenType': 'attrValue',
        'args': [' page-item']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'li',
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
            'a',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['aria-label']
    },
    {
        'tokenType': 'attrValue',
        'args': ['Previous']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['aria-label']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['gotoPrevious()']
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
        'args': ['\n        ']
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
        'args': ['aria-hidden']
    },
    {
        'tokenType': 'attrValue',
        'args': ['true']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['aria-hidden']
    },
    {
        'tokenType': 'end',
        'args': [
            'span',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['&laquo;']
    },
    {
        'tokenType': 'close',
        'args': ['span']
    },
    {
        'tokenType': 'chars',
        'args': ['\n      ']
    },
    {
        'tokenType': 'close',
        'args': ['a']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'special',
        'args': ['/hidePrevious']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'special',
        'args': ['^hidePages']
    },
    {
        'tokenType': 'special',
        'args': ['#each visiblePages']
    },
    {
        'tokenType': 'chars',
        'args': ['\n      ']
    },
    {
        'tokenType': 'start',
        'args': [
            'li',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'special',
        'args': ['#if isActive(.)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['active']
    },
    {
        'tokenType': 'special',
        'args': ['/if']
    },
    {
        'tokenType': 'attrValue',
        'args': [' page-item']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'li',
            false
        ]
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
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['gotoPage(.)']
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
        'tokenType': 'special',
        'args': ['.']
    },
    {
        'tokenType': 'close',
        'args': ['a']
    },
    {
        'tokenType': 'close',
        'args': ['li']
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
        'tokenType': 'special',
        'args': ['/hidePages']
    },
    {
        'tokenType': 'special',
        'args': ['^hideNext']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'start',
        'args': [
            'li',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'special',
        'args': ['^hasNext']
    },
    {
        'tokenType': 'attrValue',
        'args': ['disabled']
    },
    {
        'tokenType': 'special',
        'args': ['/hasNext']
    },
    {
        'tokenType': 'attrValue',
        'args': [' page-item']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'li',
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
            'a',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['aria-label']
    },
    {
        'tokenType': 'attrValue',
        'args': ['Next']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['aria-label']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['gotoNext']
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
        'args': ['\n        ']
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
        'args': ['aria-hidden']
    },
    {
        'tokenType': 'attrValue',
        'args': ['true']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['aria-hidden']
    },
    {
        'tokenType': 'end',
        'args': [
            'span',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['&raquo;']
    },
    {
        'tokenType': 'close',
        'args': ['span']
    },
    {
        'tokenType': 'chars',
        'args': ['\n      ']
    },
    {
        'tokenType': 'close',
        'args': ['a']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'special',
        'args': ['/hideNext']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'special',
        'args': ['^hideLast']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'start',
        'args': [
            'li',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'special',
        'args': ['^hasNext']
    },
    {
        'tokenType': 'attrValue',
        'args': ['disabled']
    },
    {
        'tokenType': 'special',
        'args': ['/hasNext']
    },
    {
        'tokenType': 'attrValue',
        'args': [' page-item']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'li',
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
            'a',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['aria-label']
    },
    {
        'tokenType': 'attrValue',
        'args': ['Last']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['aria-label']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['gotoLast']
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
        'args': ['\n        ']
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
        'args': ['aria-hidden']
    },
    {
        'tokenType': 'attrValue',
        'args': ['true']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['aria-hidden']
    },
    {
        'tokenType': 'end',
        'args': [
            'span',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['&raquo;&raquo;']
    },
    {
        'tokenType': 'close',
        'args': ['span']
    },
    {
        'tokenType': 'chars',
        'args': ['\n      ']
    },
    {
        'tokenType': 'close',
        'args': ['a']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'special',
        'args': ['/hideLast']
    },
    {
        'tokenType': 'chars',
        'args': ['\n  ']
    },
    {
        'tokenType': 'close',
        'args': ['ul']
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