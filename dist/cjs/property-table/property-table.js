/*spectre-canjs@0.15.5#property-table/property-table*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = undefined;
var _propertyTable = require('./property-table.stache.js');
var _propertyTable2 = _interopRequireDefault(_propertyTable);
var _list = require('can-define/list/list');
var _list2 = _interopRequireDefault(_list);
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _canComponent = require('can-component');
var _canComponent2 = _interopRequireDefault(_canComponent);
var _canEvent = require('can-event');
var _canEvent2 = _interopRequireDefault(_canEvent);
var _field = require('../util/field.js');
var _objectAssign = require('object-assign');
var _objectAssign2 = _interopRequireDefault(_objectAssign);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ViewModel = exports.ViewModel = _map2.default.extend('PropertyTable', {
    edit: {
        type: 'boolean',
        value: true
    },
    delete: {
        type: 'boolean',
        value: true
    },
    objectId: {
        type: 'number',
        set: function set(id) {
            this.fetchObject(this.connection, id);
            return id;
        }
    },
    connection: {
        set: function set(con) {
            this.fetchObject(con, this.objectId);
            return con;
        }
    },
    object: _map2.default,
    objectPromise: {},
    fieldProperties: { value: null },
    fields: {
        Value: _list2.default,
        get: function get(fields) {
            if (fields.length && !(fields[0] instanceof _field.Field)) {
                fields = (0, _field.parseFieldArray)(fields);
            }
            if (!fields.length && this.object) {
                return (0, _field.parseFieldArray)(Object.keys(this.object));
            }
            return fields.filter(function (f) {
                return !f.excludePropertyTable;
            });
        }
    },
    fetchObject: function fetchObject(con, id) {
        var _this = this;
        if (!con || !id) {
            return null;
        }
        var def = con.get({ id: id });
        def.then(function (obj) {
            _this.object = obj;
        });
        this.objectPromise = def;
        return def;
    },
    getValue: function getValue(field) {
        return field.getFormattedValue(this.object);
    }
});
(0, _objectAssign2.default)(ViewModel.prototype, _canEvent2.default);
exports.default = _canComponent2.default.extend({
    tag: 'property-table',
    ViewModel: ViewModel,
    view: _propertyTable2.default
});