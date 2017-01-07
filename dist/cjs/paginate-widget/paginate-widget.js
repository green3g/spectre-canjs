/*spectre-canjs@0.15.5#paginate-widget/paginate-widget*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = undefined;
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _canComponent = require('can-component');
var _canComponent2 = _interopRequireDefault(_canComponent);
var _template = require('./template.stache.js');
var _template2 = _interopRequireDefault(_template);
require('./paginate-widget.less.css');
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ViewModel = exports.ViewModel = _map2.default.extend('PaginateWidget', {
    pages: {
        type: 'number',
        value: 10
    },
    activePageIndex: {
        value: 0,
        type: 'number'
    },
    activeOffset: {
        value: 3,
        type: 'number'
    },
    hasNext: {
        get: function get() {
            return this.activePageIndex < this.pages - 1;
        }
    },
    hasPrevious: {
        get: function get() {
            return this.activePageIndex > 0;
        }
    },
    visiblePages: {
        get: function get() {
            var pages = this.pages;
            var active = this.activePageIndex + 1;
            var arr = this.pageArray.filter(function (p) {
                return p <= active + 3 && p >= active - 3 && p > 0 && p <= pages;
            });
            return arr;
        }
    },
    pageArray: {
        get: function get() {
            var arr = [];
            for (var i = 1; i <= this.pages; i++) {
                arr.push(i);
            }
            return arr;
        }
    },
    hideFirst: {
        type: 'htmlbool',
        value: false
    },
    hideLast: {
        type: 'htmlbool',
        value: false
    },
    hidePrevious: {
        type: 'htmlbool',
        value: false
    },
    hideNext: {
        type: 'htmlbool',
        value: false
    },
    hidePages: {
        type: 'htmlbool',
        value: false
    },
    gotoNext: function gotoNext() {
        if (this.hasNext) {
            this.activePageIndex++;
        }
        return false;
    },
    gotoPrevious: function gotoPrevious() {
        if (this.hasPrevious) {
            this.activePageIndex--;
        }
        return false;
    },
    gotoFirst: function gotoFirst() {
        this.activePageIndex = 0;
        return false;
    },
    gotoLast: function gotoLast() {
        this.activePageIndex = this.pages - 1;
        return false;
    },
    gotoPage: function gotoPage(p) {
        if (p > 0 && p <= this.pages) {
            this.activePageIndex = p - 1;
        }
        return false;
    },
    isActive: function isActive(p) {
        return this.activePageIndex === p - 1;
    }
});
_canComponent2.default.extend({
    tag: 'paginate-widget',
    ViewModel: ViewModel,
    view: _template2.default
});