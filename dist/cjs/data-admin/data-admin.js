/*spectre-canjs@0.15.5#data-admin/data-admin*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = exports.ParameterMap = exports.SortMap = undefined;
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _list = require('can-define/list/list');
var _list2 = _interopRequireDefault(_list);
var _canComponent = require('can-component');
var _canComponent2 = _interopRequireDefault(_canComponent);
var _dev = require('can-util/js/dev/dev');
var _dev2 = _interopRequireDefault(_dev);
var _template = require('./template.stache.js');
var _template2 = _interopRequireDefault(_template);
require('./widget.less.css');
require('../dropdown-menu/dropdown-menu.js');
require('../list-table/list-table.js');
require('../property-table/property-table.js');
require('../form-widget/form-widget.js');
require('../filter-widget/filter-widget.js');
require('../paginate-widget/paginate-widget.js');
require('../nav-container/nav-container.js');
var _buttons = require('./buttons.js');
var _Filter = require('../filter-widget/Filter.js');
var _field = require('../util/field.js');
var _ViewMap = require('./ViewMap.js');
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var SortMap = exports.SortMap = _map2.default.extend('SortMap', {
    fieldName: null,
    type: 'asc'
});
var ParameterMap = exports.ParameterMap = _map2.default.extend('ParameterMap', { seal: false }, {
    filters: {
        Type: _Filter.FilterList,
        Value: _Filter.FilterList
    },
    perPage: {
        type: 'number',
        value: 10
    },
    page: {
        type: 'number',
        value: 0
    },
    sort: {
        Type: SortMap,
        Value: SortMap
    }
});
var ViewModel = exports.ViewModel = _map2.default.extend('DataAdmin', {
    view: { Type: _ViewMap.ViewMap },
    page: {
        value: 'list',
        type: 'string'
    },
    totalItems: {
        get: function get(total) {
            total = this.view.connection.metadata ? this.view.connection.metadata.total : total;
            if (!total) {
                return 0;
            }
            return total;
        }
    },
    totalPages: {
        get: function get() {
            return Math.ceil(this.totalItems / this.parameters.perPage);
        }
    },
    perPageOptions: {
        Value: function Value() {
            return [
                10,
                20,
                50,
                100
            ];
        },
        get: function get(counts) {
            var _this = this;
            return counts.filter(function (c, index) {
                return counts[index ? index - 1 : index] < _this.totalItems;
            });
        }
    },
    showPaginate: {
        type: 'boolean',
        get: function get() {
            return this.totalPages > 1;
        }
    },
    parameters: {
        Value: ParameterMap,
        Type: ParameterMap,
        get: function get(params) {
            if (this.view && this.view.parameters) {
                this.view.parameters.forEach(function (p, key) {
                    if (key === 'filters') {
                        p.forEach(function (f) {
                            if (params.filters.indexOf(f) < 0) {
                                params.filters.push(f);
                            }
                        });
                    } else {
                        params[key] = p;
                    }
                });
            }
            return params;
        }
    },
    objectsRefreshCount: {
        value: 0,
        type: 'number'
    },
    objectsPromise: {
        get: function get() {
            this.get('objectsRefreshCount');
            var params = this.parameters ? this.parameters.serialize() : {};
            var promise = this.view.connection.getList(params);
            return promise;
        }
    },
    objects: {
        Value: _list2.default,
        get: function get(val, setAttr) {
            var promise = this.objectsPromise;
            promise.catch(function (err) {
                _dev2.default.warn('unable to complete objects request', err);
            });
            promise.then(function (data) {
                setAttr(data);
            });
        }
    },
    focusObjectPromise: {
        get: function get() {
            if (this.viewId) {
                var params = {};
                params[this.view.connection.idProp] = this.viewId;
                var promise = this.view.connection.get(params);
                promise.catch(function (err) {
                    _dev2.default.error('unable to complete focusObject request', err);
                });
                return promise;
            }
            return null;
        }
    },
    focusObject: {
        get: function get(val, setAttr) {
            if (!this.focusObjectPromise) {
                return null;
            }
            this.focusObjectPromise.then(function (data) {
                setAttr(data);
            });
        }
    },
    buttons: {
        type: '*',
        get: function get(buttons) {
            if (buttons && buttons.length) {
                return buttons;
            }
            buttons = [_buttons.VIEW_BUTTON];
            if (!this.view.disableEdit) {
                buttons.push(_buttons.EDIT_BUTTON);
            }
            if (!this.view.disableDelete) {
                buttons.push(_buttons.DELETE_BUTTON);
            }
            return buttons;
        }
    },
    pageNumber: {
        get: function get() {
            return this.parameters.page + 1;
        }
    },
    viewId: {
        type: 'number',
        value: 0
    },
    progress: {
        type: 'number',
        value: 100
    },
    filterVisible: {
        type: 'boolean',
        value: false
    },
    selectMenu: {
        type: 'boolean',
        value: false
    },
    _fields: {
        get: function get() {
            if (this.view.fields) {
                return (0, _field.parseFieldArray)(this.view.fields);
            }
            var Template = this.view.ObjectTemplate || this.view.connection.Map;
            return (0, _field.mapToFields)(Template);
        }
    },
    selectedObjects: _list2.default,
    init: function init() {
        if (this.relatedField) {
            var val = parseFloat(this.relatedValue);
            if (!val) {
                val = this.relatedValue;
            }
            this.parameters.filters.push({
                name: this.relatedField,
                operator: 'equals',
                value: val
            });
        }
    },
    setPage: function setPage(page) {
        if (page === 'list') {
            this.objectsRefreshCount++;
        }
        this.set({
            viewId: null,
            page: page
        });
    },
    editObject: function editObject() {
        var obj = void 0;
        if (arguments.length === 4) {
            obj = arguments[3];
        } else {
            obj = arguments[0];
        }
        this.set({
            viewId: this.view.connection.id(obj),
            page: 'edit'
        });
    },
    viewObject: function viewObject() {
        var obj = void 0;
        if (arguments.length === 4) {
            obj = arguments[3];
        } else {
            obj = arguments[0];
        }
        this.set({
            viewId: this.view.connection.id(obj),
            page: 'details'
        });
    },
    saveObject: function saveObject() {
        var _this2 = this;
        var obj = void 0;
        if (arguments.length === 4) {
            obj = arguments[3];
        } else {
            obj = arguments[0];
        }
        var isNew = obj.isNew();
        var val = void 0;
        if (isNew) {
            val = this.onEvent(obj, 'beforeCreate');
        } else {
            val = this.onEvent(obj, 'beforeSave');
        }
        if (!val) {
            return null;
        }
        var deferred = this.view.connection.save(obj);
        deferred.then(function (result) {
            if (isNew) {
                _this2.onEvent(obj, 'afterCreate');
            } else {
                _this2.onEvent(obj, 'afterSave');
            }
            _this2.set({
                viewId: _this2.view.connection.id(result),
                page: 'details',
                objectsRefreshCount: _this2.objectsRefreshCount + 1
            });
        }).catch(function (e) {
            _this2.set({
                viewId: null,
                page: 'list',
                objectsRefreshCount: _this2.objectsRefreshCount + 1
            });
            _this2.onEvent({
                obj: obj,
                error: e
            }, 'errorSave');
            _dev2.default.error(e);
        });
        return deferred;
    },
    getNewObject: function getNewObject() {
        var props = {};
        if (this.relatedField) {
            props[this.relatedField] = this.relatedValue;
        }
        return new this.view.ObjectTemplate(props);
    },
    deleteObject: function deleteObject() {
        var _this3 = this;
        var obj = void 0, skipConfirm = void 0;
        if (arguments.length > 2) {
            obj = arguments[3];
            skipConfirm = arguments[4];
        } else {
            obj = arguments[0];
            skipConfirm = arguments[1];
        }
        if (obj && (skipConfirm || window.confirm('Are you sure you want to delete this record?'))) {
            if (!this.onEvent(obj, 'beforeDelete')) {
                return null;
            }
            var deferred = this.view.connection.destroy(obj);
            deferred.then(function () {
                _this3.onEvent(obj, 'afterDelete');
                _this3.objectsRefreshCount++;
            });
            deferred.catch(function (result) {
                _this3.onEvent(result, 'errorDelete');
                _dev2.default.warn(result);
            });
            return deferred;
        }
        return null;
    },
    deleteMultiple: function deleteMultiple(skipConfirm) {
        var _this4 = this;
        var selected = this.selectedObjects;
        var defs = [];
        if (skipConfirm || confirm('Are you sure you want to delete the ' + selected.length + ' selected records?')) {
            selected.forEach(function (obj) {
                defs.push(_this4.deleteObject(null, null, null, obj, true));
            });
            selected.replace([]);
        }
        return defs;
    },
    clearSelection: function clearSelection() {
        this.selectedObjects.replace([]);
    },
    manageObject: function manageObject(obj, button) {
        this.manageObjects([obj], button);
    },
    manageObjects: function manageObjects(objects, button) {
        var _this5 = this;
        var defs = button.onClick(objects);
        if (defs) {
            Promise.all(defs).then(function () {
                _this5.objectsRefreshCount++;
            });
        }
    },
    toggle: function toggle(val, visible, e) {
        this.noop(e);
        if (typeof visible !== 'undefined') {
            this[val] = Boolean(visible);
        } else {
            this[val] = !this[val];
        }
        return false;
    },
    noop: function noop(event) {
        if (event) {
            event.preventDefault();
        }
        return false;
    },
    onEvent: function onEvent(obj, eventName) {
        var prop = this.view[eventName];
        var returnVal = true;
        if (typeof prop === 'function') {
            returnVal = prop(obj);
            if (typeof returnVal === 'undefined') {
                returnVal = true;
            }
        }
        this.dispatch(eventName, [obj]);
        return returnVal;
    }
});
_canComponent2.default.extend({
    tag: 'data-admin',
    ViewModel: ViewModel,
    view: _template2.default,
    events: {
        '{ViewModel.parameters} filters': function ViewModelParametersFilters() {
            this.viewModel.parameters.page = 0;
        },
        '{ViewModel.parameters} perPage': function ViewModelParametersPerPage() {
            this.viewModel.parameters.page = 0;
        }
    }
});