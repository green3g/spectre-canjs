/*spectre-canjs@0.15.5#form-widget/field-components/select-field/select-field*/
define([
    'exports',
    'can-event',
    'can-component',
    'can-define/map',
    './select-field.stache',
    'object-assign'
], function (exports, _canEvent, _canComponent, _map, _selectField, _objectAssign) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _canEvent2 = _interopRequireDefault(_canEvent);
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _map2 = _interopRequireDefault(_map);
    var _selectField2 = _interopRequireDefault(_selectField);
    var _objectAssign2 = _interopRequireDefault(_objectAssign);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var ViewModel = exports.ViewModel = _map2.default.extend('SelectField', {
        properties: _map2.default,
        errors: '*',
        value: {
            type: 'string',
            value: ''
        },
        inline: 'htmlbool',
        onChange: function onChange(value) {
            this.dispatch('change', [value]);
        },
        isSelected: function isSelected(value) {
            return value == this.value;
        }
    });
    (0, _objectAssign2.default)(ViewModel.prototype, _canEvent2.default);
    _canComponent2.default.extend({
        tag: 'select-field',
        view: _selectField2.default,
        ViewModel: ViewModel
    });
});