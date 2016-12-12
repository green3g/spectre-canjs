import template from './list-table.stache';
import './list-table.less!';
import {
    Field,
    parseFieldArray
} from '../util/field';

import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import CanEvent from 'can-event';
import CanBatch from 'can-event/batch/batch';
import assign from 'object-assign';

/**
 * @constructor list-table.ViewModel ViewModel
 * @parent list-table
 * @group list-table.ViewModel.props Properties
 *
 * @description A `<list-table />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('ListTable', {
    /**
     * @prototype
     */
    /**
     * Optional promise or deferred object that will resolve to an object. Once
     * the promise resolves, the objects list will be replaced with the promise result
     * @parent list-table.ViewModel.props
     * @property {can.Deferred | Promise} list-table.ViewModel.props.promise
     */
    promise: {
        set (newVal) {
            newVal.then((objects) => {
                this.objects.replace(objects);
            });
            return newVal;
        }
    },
    /**
     * A list of objects to display. These objects should generally be can.Model
     * objects but may be any can.Map or javascript object.
     * @parent list-table.ViewModel.props
     * @property {Array.<can.Model | can.Map | Object>} list-table.ViewModel.props.objects
     */
    objects: {
        Value: DefineList
    },
    /**
     * Id property name for the rows of objects. The default is `id`. This value
     * is used to determine whether objects are selected or not.
     * @parent list-table.ViewModel.props
     * @property {String} list-table.ViewModel.props.idProp
     */
    idProp: {
        value: 'id'
    },
    /**
     * A list of the currently selected objects in the table
     * @parent list-table.ViewModel.props
     * @property {Array.<can.Map>} list-table.ViewModel.props.selectedObjects
     */
    selectedObjects: {
        Type: DefineList,
        Value: DefineList
    },
    /**
     * An array of ids for the selected objects. This is a virtual property
     * and cannot be set.
     * @parent list-table.ViewModel.props
     * @property {Array<Number>} list-table.ViewModel.props.selectedIds
     */
    selectedIds: {
        get () {
            return this.selectedObjects.map((obj) => {
                return obj[this.idProp];
            });
        }
    },
    /**
     * A virtual property that helps the template determine whether all objects are selected
     * @parent list-table.ViewModel.props
     * @property {Boolean} list-table.ViewModel.props._allSelected
     */
    _allSelected: {
        type: 'boolean',
        get () {
            return this.selectedObjects.length === this.objects.length;
        }
    },
    /**
     * An array of buttonObjects
     * @parent list-table.ViewModel.props
     * @property {Array.<spectre.types.TableButtonObject>} list-table.ViewModel.props.buttons
     */
    buttons: DefineList,
    /**
     * An array of fields
     * @parent list-table.ViewModel.props
     * @property {can.List} list-table.ViewModel.props.fields
     */
    fields: {
        Value: DefineList,
        Type: DefineList,
        get (fields) {
            if (fields.length && !(fields[0] instanceof Field)) {
                fields = parseFieldArray(fields);
            }
            if (!fields.length && this.objects.length) {
                return parseFieldArray(Object.keys(this.objects[0]));
            }
            return fields.filter((f) => {
                return !f.excludeListTable;
            });
        }
    },
    /**
     * The current sort field
     * @parent list-table.ViewModel.props
     * @property {can.List} list-table.ViewModel.props.currentSort
     */
    currentSort: {
        Type: DefineMap,
        value: function () {
            return {
                fieldName: null,
                type: 'asc'
            };
        }
    },
    /**
     * Called when a button is clicked. This dispatches the buttons event.
     * @function buttonClick
     * @signature
     * @param  {String} eventName The name of the event to dispatch
     * @param  {can.Map} object  The row data
     */
    buttonClick (eventName, object) {
        this.dispatch(eventName, [object]);
    },
    /**
     * Helps the template the currentSort value
     * @function setSort
     * @signature
     * @param  {String} field the field to set the sort on
     */
    setSort (field) {
        CanBatch.start();
        if (this.currentSort.fieldName !== field) {
            this.currentSort = {
                fieldName: field,
                type: 'asc'
            };
        } else {
            this.currentSort.type = this.currentSort.type === 'asc' ? 'desc' : 'asc';
        }
        CanBatch.stop();
        this.dispatch('sort', [this.currentSort]);
    },
    /**
     * Toggles a row as selected or not selected
     * @function toggleSelected
     * @signature
     * @param  {can.Map} obj The row to toggle
     */
    toggleSelected (obj) {
        const index = this.selectedObjects.indexOf(obj);
        if (index > -1) {
            this.selectedObjects.splice(index, 1);
        } else {
            this.selectedObjects.push(obj);
        }
    },
    /**
     * Selects or unselects all of the objects in the table
     * @function toggleSelectAll
     * @signature
     */
    toggleSelectAll () {
        if (this.selectedObjects.length < this.objects.length) {
            this.selectedObjects.replace(this.objects);
        } else {
            this.selectedObjects.replace([]);
        }
    },
    /**
     * Determines whether or not the provided object is selected by comparing
     * it to the list of currently selected objects
     * @function isSelected
     * @signature
     * @param  {can.Map | Object} obj The object to check if is selected
     * @return {Boolean}     Whether or not it is selected
     */
    isSelected (obj) {
        return this.selectedIds.indexOf(obj[this.idProp]) > -1;
    },
    /**
     * Returns an objects formatted value for the template
     * Returns an objects formatted value for the template
     * @signature
     * @param  {field} field The field object. This field object has a property
     * called  `getFormattedValue` which formats and returns a string
     * @param  {can.Map} obj   The object to retrieve the property from
     * @return {String}       The formatted value
     */
    getFieldValue (field, obj) {
        return field.getFormattedValue(obj);
    }
});
assign(ViewModel.prototype, CanEvent);

export default Component.extend({
    tag: 'list-table',
    ViewModel: ViewModel,
    view: template
});
