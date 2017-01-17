/*spectre-canjs@0.20.0#toast-container/toast-container*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = undefined;
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _list = require('can-define/list/list');
var _list2 = _interopRequireDefault(_list);
var _canComponent = require('can-component');
var _canComponent2 = _interopRequireDefault(_canComponent);
var _toastContainer = require('./toast-container.stache.js');
var _toastContainer2 = _interopRequireDefault(_toastContainer);
var _toastItem = require('./toast-item.js');
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ViewModel = exports.ViewModel = _map2.default.extend('ToastContainer', {
    toasts: { Value: _list2.default.extend('ToastList', { '#': _toastItem.ViewModel }) },
    addToast: function addToast(toast) {
        if (!(toast instanceof _toastItem.ViewModel)) {
            toast = new _toastItem.ViewModel(toast);
        }
        this.toasts.push(toast);
    },
    removeToast: function removeToast(toast) {
        var index = this.toasts.indexOf(toast);
        this.toasts.splice(index, 1);
    }
});
_canComponent2.default.extend({
    tag: 'toast-container',
    viewModel: ViewModel,
    view: _toastContainer2.default
});