/*spectre-canjs@0.15.5#form-widget/form-widget*/
define([
    'exports',
    'can-component',
    'can-define/map',
    'can-define/list',
    './template.stache',
    '../util/field',
    'css!./widget.less.css'
], function (exports, _canComponent, _map, _list, _template, _field) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _map2 = _interopRequireDefault(_map);
    var _list2 = _interopRequireDefault(_list);
    var _template2 = _interopRequireDefault(_template);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var ViewModel = exports.ViewModel = _map2.default.extend('FormWidget', {
        showButtons: {
            type: 'boolean',
            value: true
        },
        inline: {
            type: 'boolean',
            value: false
        },
        connection: { value: null },
        objectId: {
            type: 'number',
            set: function set(id) {
                var promise = this.fetchObject(this.connection, id);
                this.promise = promise;
                return id;
            }
        },
        promise: { value: null },
        formObject: _map2.default,
        fields: {
            Value: _list2.default,
            get: function get(fields) {
                if (fields.length && !(fields[0] instanceof _field.Field)) {
                    fields = (0, _field.parseFieldArray)(fields);
                }
                if (!fields.length && this.formObject) {
                    return (0, _field.parseFieldArray)(Object.keys(this.formObject));
                }
                return fields.filter(function (f) {
                    return !f.excludeForm;
                });
            }
        },
        showSaving: {
            type: 'htmlbool',
            value: false
        },
        validationErrors: {
            get: function get(val) {
                if (val) {
                    return val;
                }
                var define = {};
                this.fields.forEach(function (f) {
                    define[f.name] = '*';
                });
                var Validation = _map2.default.extend(define);
                return new Validation();
            }
        },
        isValid: {
            get: function get() {
                var _this = this;
                var isValid = true;
                this.fields.forEach(function (f) {
                    if (!_this.validate(f, _this.formObject[f.name])) {
                        isValid = false;
                    }
                });
                return isValid;
            }
        },
        isSaving: {
            value: false,
            type: 'boolean'
        },
        fetchObject: function fetchObject(con, id) {
            var _this2 = this;
            if (!con || !id) {
                return null;
            }
            var promise = con.get({ id: id });
            promise.then(function (obj) {
                _this2.formObject = obj;
            });
            return promise;
        },
        submitForm: function submitForm(vm, form, event) {
            if (event) {
                event.preventDefault();
            }
            if (!this.isValid) {
                this.dispatch('submit-fail', [
                    this.formObject,
                    this.validationErrors
                ]);
                return false;
            }
            if (this.showSaving) {
                this.isSaving = true;
            }
            var formObject = this.formObject;
            this.dispatch('submit', [formObject]);
            return false;
        },
        setField: function setField(field, domElement, event, value) {
            if (!this.validate(field, value)) {
                return;
            }
            this.formObject[field.name] = value;
            this.dispatch('field-change', [this.formObject]);
        },
        validate: function validate(field, value) {
            if (!field.validate) {
                return true;
            }
            this.validationErrors[field.name] = field.validate(value, this.formObject);
            return !this.validationErrors[field.name];
        },
        cancelForm: function cancelForm() {
            this.dispatch('cancel');
        },
        getFieldValue: function getFieldValue(field) {
            return this.formObject[field.name];
        }
    });
    _canComponent2.default.extend({
        tag: 'form-widget',
        ViewModel: ViewModel,
        view: _template2.default,
        leakScope: true
    });
});