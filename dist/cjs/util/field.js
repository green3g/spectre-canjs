/*spectre-canjs@0.15.5#util/field*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Field = exports.RESERVED = exports.TEMPLATES = undefined;
exports.parseFieldArray = parseFieldArray;
exports.mapToFields = mapToFields;
var _string = require('./string.js');
var _canStache = require('can-stache');
var _canStache2 = _interopRequireDefault(_canStache);
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _objectAssign = require('object-assign');
var _objectAssign2 = _interopRequireDefault(_objectAssign);
var _dev = require('can-util/js/dev/dev');
var _dev2 = _interopRequireDefault(_dev);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var TEMPLATES = {
    text: '<text-field {properties}="." (change)="setField" value="{{getFieldValue(.)}}" {errors}="validationErrors" />',
    select: '<select-field {properties}="." (change)="setField" value="{{getFieldValue(.)}}" {errors}="validationErrors" />',
    file: '<file-field {properties}="." (change)="setField" value="{{getFieldValue(.)}}" {errors}="validationErrors" />',
    json: '<json-field {properties}="." (change)="setField" {value}="getFieldValue(.)" {errors}="validationErrors" />'
};
for (var type in TEMPLATES) {
    if (TEMPLATES.hasOwnProperty(type)) {
        TEMPLATES[type] = (0, _canStache2.default)(TEMPLATES[type]);
    }
}
exports.TEMPLATES = TEMPLATES;
var RESERVED = exports.RESERVED = [
    'get',
    'set',
    'serialize'
];
var Field = exports.Field = _map2.default.extend('Field', {
    name: 'string',
    alias: {
        type: 'string',
        get: function get(alias) {
            if (alias) {
                return alias;
            }
            return (0, _string.makeSentenceCase)(this.name);
        }
    },
    type: {
        type: 'string',
        value: 'string'
    },
    fieldType: {
        type: 'string',
        value: 'text'
    },
    formTemplate: {
        get: function get(template) {
            if (template) {
                return template;
            }
            var fType = this.fieldType;
            if (!TEMPLATES.hasOwnProperty(fType)) {
                _dev2.default.warn('No template for the given field type', fType);
                return TEMPLATES.text;
            }
            return TEMPLATES[fType];
        }
    },
    excludeListTable: { value: false },
    excludePropertyTable: { value: false },
    excludeForm: { value: false },
    formatter: { value: null },
    validate: { value: null },
    getFormattedValue: function getFormattedValue(obj) {
        return this.formatter ? this.formatter(obj[this.name], obj) : obj[this.name];
    }
});
function parseFieldArray(fields) {
    return fields.map(function (f) {
        if (typeof f === 'string') {
            f = { name: f };
        }
        return new Field(f);
    }).filter(function (f) {
        return f.name.indexOf('__') === -1;
    });
}
function mapToFields(defineMap) {
    if (!defineMap) {
        _dev2.default.warn('map is undefined, so no fields will be generated');
        return [];
    }
    var define = (0, _objectAssign2.default)({}, (defineMap._define || defineMap.prototype._define).definitions);
    var fields = [];
    for (var prop in define) {
        if (define.hasOwnProperty(prop)) {
            (function () {
                var fType = typeof define[prop].type === 'function' ? define[prop].type.name : define[prop].type;
                var clone = (0, _objectAssign2.default)({}, define[prop]);
                RESERVED.forEach(function (r) {
                    delete clone[r];
                });
                fields.push((0, _objectAssign2.default)({}, {
                    name: prop,
                    type: 'string',
                    fieldType: 'text'
                }, clone, { type: fType }));
            }());
        }
    }
    return parseFieldArray(fields);
}