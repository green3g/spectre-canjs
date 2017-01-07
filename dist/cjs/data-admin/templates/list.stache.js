/*spectre-canjs@0.15.5#data-admin/templates/list.stache!steal-stache@3.0.3#steal-stache*/
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
        'args': ['object-metadata']
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
        'args': ['\n    ']
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
        'args': ['text-bold']
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
        'args': ['view.title']
    },
    {
        'tokenType': 'close',
        'args': ['span']
    },
    {
        'tokenType': 'chars',
        'args': [':\n    ']
    },
    {
        'tokenType': 'special',
        'args': ['#if view.connection.metadata.total']
    },
    {
        'tokenType': 'special',
        'args': ['view.connection.metadata.total']
    },
    {
        'tokenType': 'chars',
        'args': [' rows found. Page ']
    },
    {
        'tokenType': 'special',
        'args': ['pageNumber']
    },
    {
        'tokenType': 'chars',
        'args': [' of ']
    },
    {
        'tokenType': 'special',
        'args': ['totalPages']
    },
    {
        'tokenType': 'special',
        'args': ['/if']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\n    ']
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
        'args': ['inline-block']
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
        'args': ['btn-group  btn-group-block']
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
        'args': ['btn btn-primary badge']
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
        'args': ['toggle(\'filterVisible\')']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($click)']
    },
    {
        'tokenType': 'special',
        'args': ['#if parameters.filters.length']
    },
    {
        'tokenType': 'attrStart',
        'args': ['data-badge']
    },
    {
        'tokenType': 'special',
        'args': ['parameters.filters.length']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['data-badge']
    },
    {
        'tokenType': 'special',
        'args': ['/if']
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
        'args': ['fa fa-search']
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
        'args': [' Search']
    },
    {
        'tokenType': 'close',
        'args': ['button']
    },
    {
        'tokenType': 'special',
        'args': ['#filterVisible']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                ']
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
        'args': ['rel filter-div']
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
        'args': ['\n                    ']
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
        'args': ['menu abs block']
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
        'args': ['\n                        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'filter-widget',
            true
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['{(filters)}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['parameters.filters']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{(filters)}']
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
        'args': ['{object-template}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['view.ObjectTemplate']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{object-template}']
    },
    {
        'tokenType': 'end',
        'args': [
            'filter-widget',
            true
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n                    ']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                ']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'special',
        'args': ['/filterVisible']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
    },
    {
        'tokenType': 'special',
        'args': ['#if selectedObjects.length']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                ']
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
        'args': ['btn btn-primary dropdown inline-block']
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
        'args': ['\n                    ']
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
        'args': ['btn-primary dropdown-toggle badge']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'attrStart',
        'args': ['data-badge']
    },
    {
        'tokenType': 'special',
        'args': ['selectedObjects.length']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['data-badge']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['noop(%event)']
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
        'args': ['\n                        With Selected...\n                    ']
    },
    {
        'tokenType': 'close',
        'args': ['a']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                    ']
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
        'args': ['menu dropdown-menu']
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
        'args': ['#if view.manageButtons.length']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                            ']
    },
    {
        'tokenType': 'comment',
        'args': [' menu header ']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                            ']
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
        'tokenType': 'attrValue',
        'args': ['menu-header']
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
        'args': ['\n                                ']
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
        'args': ['menu-header-text']
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
        'tokenType': 'chars',
        'args': ['\n                          Tasks\n                      ']
    },
    {
        'tokenType': 'close',
        'args': ['span']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                            ']
    },
    {
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'special',
        'args': ['#each view.manageButtons']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                                ']
    },
    {
        'tokenType': 'special',
        'args': ['#unless disabled']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                                    ']
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
        'tokenType': 'attrValue',
        'args': ['menu-item']
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
        'args': ['\n                                        ']
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
        'args': ['onClick(selectedObjects)']
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
            'span',
            false
        ]
    },
    {
        'tokenType': 'close',
        'args': ['span']
    },
    {
        'tokenType': 'special',
        'args': ['text']
    },
    {
        'tokenType': 'close',
        'args': ['a']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                                    ']
    },
    {
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'special',
        'args': ['/unless']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                            ']
    },
    {
        'tokenType': 'special',
        'args': ['/each']
    },
    {
        'tokenType': 'special',
        'args': ['/if']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
    },
    {
        'tokenType': 'comment',
        'args': [' menu divider ']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
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
        'tokenType': 'attrValue',
        'args': ['divider']
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
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
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
        'tokenType': 'attrValue',
        'args': ['menu-header']
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
        'args': ['\n                            ']
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
        'args': ['menu-header-text']
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
        'tokenType': 'chars',
        'args': ['\n                  Modify\n              ']
    },
    {
        'tokenType': 'close',
        'args': ['span']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
    },
    {
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
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
        'tokenType': 'attrValue',
        'args': ['menu-item']
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
        'args': ['\n                            ']
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
        'args': ['deleteMultiple(false)']
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
        'args': ['\n                                ']
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
        'args': ['icon icon-link']
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
        'tokenType': 'close',
        'args': ['span']
    },
    {
        'tokenType': 'chars',
        'args': [' Delete\n                            ']
    },
    {
        'tokenType': 'close',
        'args': ['a']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                        ']
    },
    {
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                    ']
    },
    {
        'tokenType': 'close',
        'args': ['ul']
    },
    {
        'tokenType': 'special',
        'args': ['/if']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
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
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['btn btn-primary']
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
        'args': ['setPage(\'list\')']
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
        'tokenType': 'start',
        'args': [
            'i',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['title']
    },
    {
        'tokenType': 'attrValue',
        'args': ['Refresh Data']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['title']
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['fa fa-refresh']
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
        'tokenType': 'close',
        'args': ['a']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
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
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\n    ']
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
        'args': ['clearfix']
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
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'special',
        'args': ['#if objects.length']
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'list-table',
            true
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['{objects}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['objects']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{objects}']
    },
    {
        'tokenType': 'attrStart',
        'args': ['{buttons}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['buttons']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{buttons}']
    },
    {
        'tokenType': 'attrStart',
        'args': ['id-prop']
    },
    {
        'tokenType': 'special',
        'args': ['view.connection.idProp']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['id-prop']
    },
    {
        'tokenType': 'attrStart',
        'args': ['{(selected-objects)}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['selectedObjects']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{(selected-objects)}']
    },
    {
        'tokenType': 'attrStart',
        'args': ['(edit)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['editObject']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['(edit)']
    },
    {
        'tokenType': 'attrStart',
        'args': ['(delete)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['deleteObject']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['(delete)']
    },
    {
        'tokenType': 'attrStart',
        'args': ['(view)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['viewObject']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['(view)']
    },
    {
        'tokenType': 'attrStart',
        'args': ['{(current-sort)}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['parameters.sort']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{(current-sort)}']
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
            'list-table',
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
        'args': ['\n        ']
    },
    {
        'tokenType': 'special',
        'args': ['#unless objectsPromise.isPending']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
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
        'args': ['view.noDataMessage']
    },
    {
        'tokenType': 'close',
        'args': ['p']
    },
    {
        'tokenType': 'special',
        'args': ['/unless']
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
        'args': ['\n\n    ']
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
        'args': ['hidden-print']
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
        'args': ['#if showPaginate']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
    },
    {
        'tokenType': 'start',
        'args': [
            'paginate-widget',
            true
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['{(active-page-index)}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['parameters.page']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{(active-page-index)}']
    },
    {
        'tokenType': 'attrStart',
        'args': ['{pages}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['totalPages']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{pages}']
    },
    {
        'tokenType': 'end',
        'args': [
            'paginate-widget',
            true
        ]
    },
    {
        'tokenType': 'special',
        'args': ['/if']
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'special',
        'args': ['#if perPageOptions.length']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
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
        'args': ['per-page-form']
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
        'args': ['\n                ']
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
        'args': ['form-group']
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
        'args': ['\n                    ']
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
        'args': ['form-label perPageSelect']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'label',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['Items per page:']
    },
    {
        'tokenType': 'close',
        'args': ['label']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                    ']
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
        'args': ['{($value)}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['parameters.perPage']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{($value)}']
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
        'tokenType': 'end',
        'args': [
            'select',
            false
        ]
    },
    {
        'tokenType': 'special',
        'args': ['#each perPageOptions']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                            ']
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
        'args': ['.']
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
        'args': ['.']
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
        'args': ['\n                    ']
    },
    {
        'tokenType': 'close',
        'args': ['select']
    },
    {
        'tokenType': 'chars',
        'args': ['\n                ']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'chars',
        'args': ['\n            ']
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
        'tokenType': 'close',
        'args': ['div']
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