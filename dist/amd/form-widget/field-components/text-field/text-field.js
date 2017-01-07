/*spectre-canjs@0.15.5#form-widget/field-components/text-field/text-field*/
define([
    'exports',
    'can-event',
    'can-define/map',
    'can-component',
    './text-field.stache',
    'object-assign'
], function (exports, _canEvent, _map, _canComponent, _textField, _objectAssign) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _canEvent2 = _interopRequireDefault(_canEvent);
    var _map2 = _interopRequireDefault(_map);
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _textField2 = _interopRequireDefault(_textField);
    var _objectAssign2 = _interopRequireDefault(_objectAssign);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var ViewModel = exports.ViewModel = _map2.default.extend('TextField', {
        properties: _map2.default,
        value: {
            type: 'string',
            value: ''
        },
        errors: '*',
        inline: 'htmlbool',
        beforeSubmit: function beforeSubmit(element, event) {
            if (event.keyCode === 13) {
                _canEvent2.default.trigger(element, 'change');
                return true;
            }
            return false;
        }
    });
    (0, _objectAssign2.default)(ViewModel.prototype, _canEvent2.default);
    _canComponent2.default.extend({
        tag: 'text-field',
        view: _textField2.default,
        ViewModel: ViewModel,
        events: {
            '{viewModel} value': function viewModelValue(viewModel, event, newValue) {
                viewModel.dispatch('change', [newValue]);
            }
        }
    });
});