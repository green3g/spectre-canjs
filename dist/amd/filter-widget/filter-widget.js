/*spectre-canjs@0.15.5#filter-widget/filter-widget*/
define([
    'exports',
    'can-define/map',
    'can-define/list',
    'can-component',
    'can-util/js/deep-assign',
    '../util/string',
    './template.stache',
    '../util/field',
    './Filter',
    'css!./filter-widget.less.css',
    '../list-table/list-table',
    '../form-widget/form-widget',
    '../form-widget/field-components/text-field/text-field',
    '../form-widget/field-components/select-field/select-field'
], function (exports, _map, _list, _canComponent, _deepAssign, _string, _template, _field, _Filter) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _map2 = _interopRequireDefault(_map);
    var _list2 = _interopRequireDefault(_list);
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _template2 = _interopRequireDefault(_template);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    var ViewModel = exports.ViewModel = _map2.default.extend('FilterWidget', {
        disableAdd: 'htmlbool',
        fields: {
            Value: _list2.default,
            get: function get(fields) {
                if (fields.length) {
                    return fields.filter(function (f) {
                        return !f.excludeFilter;
                    });
                }
                return [];
            }
        },
        ObjectTemplate: {
            get: function get(t) {
                if (t) {
                    return t;
                }
                return this.connection ? this.connection.Map : null;
            }
        },
        filters: { Value: _Filter.FilterList },
        buttons: {
            value: [{
                    iconClass: 'fa fa-times',
                    eventName: 'delete',
                    title: 'Remove Filter'
                }]
        },
        formFields: {
            get: function get() {
                return (0, _field.parseFieldArray)([
                    this.nameField,
                    this.operatorField,
                    this.valueField
                ]);
            }
        },
        nameField: {
            get: function get() {
                return this.fieldOptions.length > 1 ? {
                    formatter: _string.makeSentenceCase,
                    name: 'name',
                    alias: 'Field Name',
                    fieldType: 'select',
                    options: this.fieldOptions
                } : {
                    name: 'name',
                    alias: 'Field Name',
                    placeholder: 'Enter fieldname'
                };
            }
        },
        operatorField: {
            Type: _map2.default,
            get: function get() {
                return {
                    name: 'operator',
                    alias: 'is',
                    placeholder: 'Choose an operator',
                    fieldType: 'select',
                    formatter: function formatter(op) {
                        return _Filter.FilterOptions.filter(function (f) {
                            return f.value === op;
                        })[0].label;
                    },
                    options: this.filterOptions
                };
            }
        },
        valueField: {
            get: function get() {
                var defaultField = {
                    name: 'value',
                    alias: 'Value',
                    fieldType: 'text',
                    placeholder: 'Enter a filter value'
                };
                return defaultField;
            }
        },
        filterOptions: {
            get: function get() {
                var _this = this;
                if (this.fields && this.fields.length) {
                    var _ret = function () {
                        var field = _this.fields.filter(function (f) {
                            return f.name === _this.fieldValue;
                        })[0];
                        if (field && field.type) {
                            return {
                                v: _Filter.FilterOptions.filter(function (f) {
                                    return !f.types || f.types.indexOf(field.type) !== -1;
                                })
                            };
                        }
                    }();
                    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === 'object')
                        return _ret.v;
                }
                if (!this.ObjecTemplate) {
                    return _Filter.FilterOptions;
                }
                var define = (this.ObjectTemplate._define || this.ObjectTemplate.prototype._define).definitions;
                if (!define) {
                    return _Filter.FilterOptions;
                }
                if (!define[name] || !define[name].type) {
                    return _Filter.FilterOptions;
                }
                var type = define[name].type;
                return _Filter.FilterOptions.filter(function (f) {
                    return f.types.indexOf(type) !== -1;
                });
            }
        },
        fieldOptions: {
            get: function get() {
                var fields = [{
                        value: '',
                        label: 'Add a filter'
                    }];
                if (this.fields.length) {
                    return fields.concat(this.fields.serialize().map(function (f) {
                        return {
                            value: f.name,
                            label: f.alias
                        };
                    }));
                }
                return this.ObjectTemplate ? fields.concat(Object.keys(new this.ObjectTemplate()).map(function (key) {
                    return {
                        value: key,
                        label: (0, _string.makeSentenceCase)(key)
                    };
                })) : [];
            }
        },
        fieldValue: 'string',
        removeFilter: function removeFilter(obj) {
            var index = this.filters.indexOf(obj);
            this.filters.splice(index, 1);
        },
        removeFilters: function removeFilters() {
            this.filters.replace([]);
        },
        addFilter: function addFilter() {
            var name = arguments.length === 4 ? arguments[3] : arguments[0];
            if (!name) {
                return false;
            }
            var filterObj = new _Filter.Filter({
                name: name,
                operatorField: (0, _deepAssign2.default)({}, this.operatorField),
                valueField: (0, _deepAssign2.default)({}, this.valueField)
            });
            this.fieldValue = '';
            this.filters.push(filterObj);
            return false;
        },
        noOp: function noOp(vm, form, event) {
            event.preventDefault();
            return false;
        }
    });
    _canComponent2.default.extend({
        tag: 'filter-widget',
        ViewModel: ViewModel,
        view: _template2.default
    });
});