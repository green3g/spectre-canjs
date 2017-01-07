/*spectre-canjs@0.15.5#list-table/list-table*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = undefined;
var _listTable = require('./list-table.stache.js');
var _listTable2 = _interopRequireDefault(_listTable);
require('./list-table.less.css');
var _field = require('../util/field.js');
var _canComponent = require('can-component');
var _canComponent2 = _interopRequireDefault(_canComponent);
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _list = require('can-define/list/list');
var _list2 = _interopRequireDefault(_list);
var _canEvent = require('can-event');
var _canEvent2 = _interopRequireDefault(_canEvent);
var _batch = require('can-event/batch/batch');
var _batch2 = _interopRequireDefault(_batch);
var _objectAssign = require('object-assign');
var _objectAssign2 = _interopRequireDefault(_objectAssign);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ViewModel = exports.ViewModel = _map2.default.extend('ListTable', {
    promise: {
        set: function set(newVal) {
            var _this = this;
            newVal.then(function (objects) {
                _this.objects.replace(objects);
            });
            return newVal;
        }
    },
    objects: { Value: _list2.default },
    idProp: { value: 'id' },
    selectedObjects: {
        Type: _list2.default,
        Value: _list2.default
    },
    selectedIds: {
        get: function get() {
            var _this2 = this;
            return this.selectedObjects.map(function (obj) {
                return obj[_this2.idProp];
            });
        }
    },
    _allSelected: {
        type: 'boolean',
        get: function get() {
            return this.selectedObjects.length === this.objects.length;
        }
    },
    buttons: _list2.default,
    fields: {
        Value: _list2.default,
        Type: _list2.default,
        get: function get(fields) {
            if (fields.length && !(fields[0] instanceof _field.Field)) {
                fields = (0, _field.parseFieldArray)(fields);
            }
            if (!fields.length && this.objects.length) {
                return (0, _field.parseFieldArray)(Object.keys(this.objects[0]));
            }
            return fields.filter(function (f) {
                return !f.excludeListTable;
            });
        }
    },
    currentSort: {
        Type: _map2.default,
        value: function value() {
            return {
                fieldName: null,
                type: 'asc'
            };
        }
    },
    buttonClick: function buttonClick(eventName, object) {
        this.dispatch(eventName, [object]);
    },
    setSort: function setSort(field) {
        _batch2.default.start();
        if (this.currentSort.fieldName !== field) {
            this.currentSort = {
                fieldName: field,
                type: 'asc'
            };
        } else {
            this.currentSort.type = this.currentSort.type === 'asc' ? 'desc' : 'asc';
        }
        _batch2.default.stop();
        this.dispatch('sort', [this.currentSort]);
    },
    toggleSelected: function toggleSelected(obj) {
        var index = this.selectedObjects.indexOf(obj);
        if (index > -1) {
            this.selectedObjects.splice(index, 1);
        } else {
            this.selectedObjects.push(obj);
        }
    },
    toggleSelectAll: function toggleSelectAll() {
        if (this.selectedObjects.length < this.objects.length) {
            this.selectedObjects.replace(this.objects);
        } else {
            this.selectedObjects.replace([]);
        }
    },
    isSelected: function isSelected(obj) {
        return this.selectedIds.indexOf(obj[this.idProp]) > -1;
    },
    getFieldValue: function getFieldValue(field, obj) {
        return field.getFormattedValue(obj);
    }
});
(0, _objectAssign2.default)(ViewModel.prototype, _canEvent2.default);
exports.default = _canComponent2.default.extend({
    tag: 'list-table',
    ViewModel: ViewModel,
    view: _listTable2.default
});