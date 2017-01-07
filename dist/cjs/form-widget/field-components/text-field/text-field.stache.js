/*spectre-canjs@0.15.5#form-widget/field-components/text-field/text-field.stache!steal-stache@3.0.3#steal-stache*/
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
        'tokenType': 'special',
        'args': ['#if properties.textarea']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
    },
    {
        'tokenType': 'start',
        'args': [
            'textarea',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['($keydown)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['beforeSubmit(%element, %event)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($keydown)']
    },
    {
        'tokenType': 'attrStart',
        'args': ['placeholder']
    },
    {
        'tokenType': 'special',
        'args': ['properties.placeholder']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['placeholder']
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
        'args': ['form-control form-input']
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
        'args': ['properties.name']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['name']
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
        'tokenType': 'end',
        'args': [
            'textarea',
            false
        ]
    },
    {
        'tokenType': 'close',
        'args': ['textarea']
    },
    {
        'tokenType': 'chars',
        'args': ['        ']
    },
    {
        'tokenType': 'special',
        'args': ['else']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
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
        'args': ['($keydown)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['beforeSubmit(%element, %event)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($keydown)']
    },
    {
        'tokenType': 'attrStart',
        'args': ['placeholder']
    },
    {
        'tokenType': 'special',
        'args': ['properties.placeholder']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['placeholder']
    },
    {
        'tokenType': 'attrStart',
        'args': ['type']
    },
    {
        'tokenType': 'special',
        'args': ['#if properties.textType']
    },
    {
        'tokenType': 'special',
        'args': ['properties.textType']
    },
    {
        'tokenType': 'special',
        'args': ['else']
    },
    {
        'tokenType': 'attrValue',
        'args': ['text']
    },
    {
        'tokenType': 'special',
        'args': ['/if']
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
        'args': ['form-control form-input']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'attrStart',
        'args': ['id']
    },
    {
        'tokenType': 'special',
        'args': ['name']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['id']
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
        'tokenType': 'end',
        'args': [
            'input',
            true
        ]
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
        'args': ['else']
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
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
        'args': ['name']
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
        'tokenType': 'special',
        'args': ['#if properties.textarea']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
    },
    {
        'tokenType': 'start',
        'args': [
            'textarea',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['($keydown)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['beforeSubmit(%element, %event)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($keydown)']
    },
    {
        'tokenType': 'attrStart',
        'args': ['placeholder']
    },
    {
        'tokenType': 'special',
        'args': ['properties.placeholder']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['placeholder']
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
        'args': ['form-control form-input']
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
        'tokenType': 'end',
        'args': [
            'textarea',
            false
        ]
    },
    {
        'tokenType': 'close',
        'args': ['textarea']
    },
    {
        'tokenType': 'chars',
        'args': ['        ']
    },
    {
        'tokenType': 'special',
        'args': ['else']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
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
        'args': ['($keydown)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['beforeSubmit(%element, %event)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($keydown)']
    },
    {
        'tokenType': 'attrStart',
        'args': ['placeholder']
    },
    {
        'tokenType': 'special',
        'args': ['properties.placeholder']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['placeholder']
    },
    {
        'tokenType': 'attrStart',
        'args': ['type']
    },
    {
        'tokenType': 'special',
        'args': ['#if properties.textType']
    },
    {
        'tokenType': 'special',
        'args': ['properties.textType']
    },
    {
        'tokenType': 'special',
        'args': ['else']
    },
    {
        'tokenType': 'attrValue',
        'args': ['text']
    },
    {
        'tokenType': 'special',
        'args': ['/if']
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
        'args': ['form-control form-input ']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'attrStart',
        'args': ['id']
    },
    {
        'tokenType': 'special',
        'args': ['name']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['id']
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
        'tokenType': 'end',
        'args': [
            'input',
            true
        ]
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
module.exports = function (scope, options, nodeList) {
    var moduleOptions = { module: module };
    if (!(options instanceof mustacheCore.Options)) {
        options = new mustacheCore.Options(options || {});
    }
    return renderer(scope, options.add(moduleOptions), nodeList);
};