/*spectre-canjs@0.20.0#nav-list/nav-list*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = exports.NavPage = undefined;
var _canComponent = require('can-component');
var _canComponent2 = _interopRequireDefault(_canComponent);
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _list = require('can-define/list/list');
var _list2 = _interopRequireDefault(_list);
var _navList = require('./nav-list.stache.js');
var _navList2 = _interopRequireDefault(_navList);
require('./nav-list.less.css');
var _constants = require('./constants.js');
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var NavPage = exports.NavPage = _map2.default.extend('NavPage', {
    href: 'string',
    active: 'boolean',
    label: 'string'
});
var ViewModel = exports.ViewModel = _map2.default.extend('NavList', {
    init: function init() {
        var _this = this;
        this.pages.forEach(function (item) {
            if (item.active) {
                _this.activate(item);
            }
        });
    },
    pages: _list2.default.extend('NavItemList', { Map: NavPage }),
    type: {
        type: 'string',
        set: function set(type) {
            return _constants.TYPES.indexOf(type) > 0 ? type : _constants.TYPES[0];
        },
        value: _constants.TYPES[0]
    },
    active: _map2.default,
    activate: function activate(item) {
        if (item === this.active) {
            return;
        }
        this.active = item;
    }
});
_canComponent2.default.extend({
    tag: 'nav-list',
    ViewModel: ViewModel,
    view: _navList2.default
});