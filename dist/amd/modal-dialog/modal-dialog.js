/*spectre-canjs@0.15.5#modal-dialog/modal-dialog*/
define([
    'exports',
    'can-component',
    'can-define/map',
    './modal-dialog.stache'
], function (exports, _canComponent, _map, _modalDialog) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _map2 = _interopRequireDefault(_map);
    var _modalDialog2 = _interopRequireDefault(_modalDialog);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var ViewModel = exports.ViewModel = _map2.default.extend('ModalDialog', {
        active: {
            value: false,
            type: 'htmlbool'
        },
        customBody: {
            value: false,
            type: 'htmlbool'
        },
        small: {
            value: false,
            type: 'htmlbool'
        },
        show: function show() {
            this.active = true;
        },
        hide: function hide() {
            this.active = false;
        },
        toggle: function toggle(visible) {
            if (typeof visible !== 'undefined') {
                this.active = Boolean(visible);
            } else {
                this.active = !this.active;
            }
        }
    });
    _canComponent2.default.extend({
        viewModel: ViewModel,
        view: _modalDialog2.default,
        tag: 'modal-dialog'
    });
});