/*spectre-canjs@0.15.5#nav-container/nav-container*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = exports.PageList = exports.PageViewModel = undefined;
var _list = require('can-define/list/list');
var _list2 = _interopRequireDefault(_list);
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _canComponent = require('can-component');
var _canComponent2 = _interopRequireDefault(_canComponent);
var _canViewModel = require('can-view-model');
var _canViewModel2 = _interopRequireDefault(_canViewModel);
var _navContainer = require('./nav-container.stache.js');
var _navContainer2 = _interopRequireDefault(_navContainer);
var _navPage = require('./nav-page.stache.js');
var _navPage2 = _interopRequireDefault(_navPage);
require('./nav-container.less.css');
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var pageId = 0;
var PageViewModel = exports.PageViewModel = _map2.default.extend('NavPage', {
    active: {
        type: 'boolean',
        value: false
    },
    label: 'string',
    loading: {
        type: 'htmlbool',
        value: false
    },
    pageId: {
        value: function value() {
            return 'page-' + pageId++;
        }
    },
    parent: '*'
});
var PageList = exports.PageList = _list2.default.extend('NavPageList', { Map: PageViewModel });
var ViewModel = exports.ViewModel = _map2.default.extend('NavContainer', {
    pages: { Value: PageList },
    activePage: {
        get: function get() {
            var _this = this;
            var active = void 0;
            if (!this.pages.length) {
                return null;
            }
            active = this.pages.filter(function (p) {
                return p.pageId === _this.activeId;
            });
            if (active.length) {
                active = active[0];
            } else {
                active = this.pages[0];
            }
            return active;
        }
    },
    activeId: 'string',
    addPage: function addPage(page) {
        this.pages.push(page);
    },
    removePage: function removePage(page) {
        var pages = this.pages;
        pages.splice(pages.indexOf(page), 1);
        if (page === this.active) {
            if (pages.length) {
                this.activeId = pages[0].pageId;
            } else {
                this.activeId = null;
            }
        }
    },
    makeActive: function makeActive(page) {
        if (page === this.activePage) {
            return;
        }
        this.activeId = page.pageId;
    },
    isActive: function isActive(page) {
        if (!page) {
            return false;
        }
        return page === this.activePage;
    }
});
_canComponent2.default.extend({
    tag: 'nav-page',
    view: _navPage2.default,
    viewModel: PageViewModel,
    events: {
        inserted: function inserted() {
            this.viewModel.parent = (0, _canViewModel2.default)(this.element.parentNode);
            if (this.viewModel.parent && this.viewModel.parent.addPage) {
                this.viewModel.parent.addPage(this.viewModel);
            }
        },
        removed: function removed() {
            if (this.viewModel.parent && this.viewModel.parent.removePage) {
                this.viewModel.parent.removePage(this.viewModel);
            }
            this.viewModel.parent = null;
        }
    }
});
exports.default = _canComponent2.default.extend({
    tag: 'nav-container',
    viewModel: ViewModel,
    view: _navContainer2.default,
    leakScope: true
});