/*spectre-canjs@0.20.0#toast-container/toast-container*/
define([
    'exports',
    'can-define/map',
    'can-define/list',
    'can-component',
    './toast-container.stache',
    './toast-item'
], function (exports, _map, _list, _canComponent, _toastContainer, _toastItem) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _map2 = _interopRequireDefault(_map);
    var _list2 = _interopRequireDefault(_list);
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _toastContainer2 = _interopRequireDefault(_toastContainer);
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
});