/*spectre-canjs@0.15.5#data-admin/ViewMap*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewMap = undefined;
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _list = require('can-define/list/list');
var _list2 = _interopRequireDefault(_list);
var _edit = require('./templates/edit.stache.js');
var _edit2 = _interopRequireDefault(_edit);
var _list3 = require('./templates/list.stache.js');
var _list4 = _interopRequireDefault(_list3);
var _details = require('./templates/details.stache.js');
var _details2 = _interopRequireDefault(_details);
var _add = require('./templates/add.stache.js');
var _add2 = _interopRequireDefault(_add);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ViewMap = exports.ViewMap = _map2.default.extend('ViewMap', { seal: false }, {
    connection: '*',
    parameters: {
        Type: _map2.default,
        Value: _map2.default
    },
    ObjectTemplate: {
        get: function get(obj) {
            if (!obj) {
                return this.connection.Map;
            }
            return obj;
        }
    },
    fields: _list2.default,
    addDisabledMessage: { value: 'You do not have permission to add this data.' },
    editDisabledMessage: { value: 'You do not have permission to edit this data.' },
    noDataMessage: { value: 'No rows found.' },
    disableEdit: { value: false },
    disableDelete: { value: false },
    disableAdd: { value: false },
    title: { value: '' },
    relatedViews: { value: undefined },
    beforeCreate: { value: undefined },
    afterCreate: { value: undefined },
    beforeSave: { value: undefined },
    afterSave: { value: undefined },
    beforeDelete: { value: undefined },
    afterDelete: { value: undefined },
    errorDelete: { value: undefined },
    errorSave: { value: undefined },
    manageButtons: { value: undefined },
    editTemplate: {
        get: function get(template) {
            if (!template) {
                template = _edit2.default;
            }
            return template;
        }
    },
    listTemplate: {
        get: function get(template) {
            if (!template) {
                template = _list4.default;
            }
            return template;
        }
    },
    addTemplate: {
        get: function get(template) {
            if (!template) {
                template = _add2.default;
            }
            return template;
        }
    },
    detailsTemplate: {
        get: function get(template) {
            if (!template) {
                template = _details2.default;
            }
            return template;
        }
    }
});