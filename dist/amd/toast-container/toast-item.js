/*spectre-canjs@0.20.0#toast-container/toast-item*/
define([
    'exports',
    './toast-item.stache',
    'can-component',
    'can-define/map',
    'can-event',
    'object-assign',
    'css!./toast-item.less.css'
], function (exports, _toastItem, _canComponent, _map, _canEvent, _objectAssign) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _toastItem2 = _interopRequireDefault(_toastItem);
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _map2 = _interopRequireDefault(_map);
    var _canEvent2 = _interopRequireDefault(_canEvent);
    var _objectAssign2 = _interopRequireDefault(_objectAssign);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var ViewModel = exports.ViewModel = _map2.default.extend('ToastItem', {
        fade: {
            type: 'boolean',
            value: true
        },
        autoHide: {
            type: 'number',
            value: 5000
        },
        useContentTag: {
            type: 'boolean',
            value: false
        },
        severity: {
            value: 'info',
            type: function type(val) {
                var allowed = [
                        'primary',
                        'info',
                        'success',
                        'warning',
                        'danger'
                    ], isValid = allowed.indexOf(val);
                return isValid ? val : allowed[0];
            }
        },
        dismissable: {
            value: true,
            type: 'boolean'
        },
        iconClass: {
            type: 'string',
            value: 'icon icon-error_outline'
        },
        visible: {
            value: true,
            type: 'boolean'
        },
        body: {
            value: '',
            type: 'string'
        },
        heading: {
            value: '',
            type: 'string'
        },
        fadeTime: {
            type: 'number',
            value: 1000
        },
        hide: function hide() {
            var _this = this;
            if (!this.visible) {
                return;
            }
            this.visible = false;
            if (this.fade) {
                setTimeout(function () {
                    _this.dispatch('hide', [_this]);
                }, this.fadeTime);
            } else {
                this.dispatch('hide', [this]);
            }
        }
    });
    (0, _objectAssign2.default)(ViewModel, _canEvent2.default);
    _canComponent2.default.extend({
        tag: 'toast-item',
        view: _toastItem2.default,
        viewModel: ViewModel,
        events: {
            inserted: function inserted() {
                var vm = this.viewModel;
                if (vm.autoHide) {
                    setTimeout(function () {
                        vm.hide();
                    }, vm.autoHide);
                }
            }
        }
    });
    exports.default = ViewModel;
});