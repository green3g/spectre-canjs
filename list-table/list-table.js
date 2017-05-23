import template from './list-table.stache';
import './list-table.less!';
import FieldIteratorMap from '../util/field/FieldIteratorMap';

import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import CanEvent from 'can-event';
import assign from 'object-assign';
import makeArray from 'can-util/js/make-array/make-array';


import '../dropdown-menu/dropdown-menu';

/**
 * @constructor list-table.ViewModel ViewModel
 * @parent list-table
 * @group list-table.ViewModel.props Properties
 *
 * @description A `<list-table />` component's ViewModel. This viewmodel
 * extends the [util/field/ ]'s properties
 */
export const ViewModel = FieldIteratorMap.extend('ListTable', {seal: false}, {
  /**
   * A string referencing a field property that will exclude that field
   * from this classes fields. The default is 'list'.
   * @property {String} list-table.ViewModel.props.excludeFieldKey excludeFieldKey
   * @parent list-table.ViewModel.props
   */
    excludeFieldKey: {
        value: 'list'
    },
  /**
   * @prototype
   */
  /**
   * Optional promise or deferred object that will resolve to an object. Once
   * the promise resolves, the objects list will be replaced with the promise result
   * @parent list-table.ViewModel.props
   * @property {Promise} list-table.ViewModel.props.promise
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
   * objects but may be an javascript object.
   * @parent list-table.ViewModel.props
   * @property {Array<DefineMap>} list-table.ViewModel.props.objects
   */
    objects: {
        Value: DefineList
    },
    /**
     * A virtual property that retrieves this table's first object
     * @parent list-table.ViewModel.props
     * @property {Array<Object>} list-table.ViewModel.props.object
     *
     */
    object: {
        get () {
            return this.objects[0] || {};
        }
    },
  /**
   * Id property name for the rows of objects. The default is `id`. This value
   * is used to determine whether objects are selected or not. For a built in
   * unique ID, `_cid` may be used. _cid is automatically generatted by `can-define`
   * and should be guaranteed to be unique accross all DefineMaps
   * @parent list-table.ViewModel.props
   * @property {String} list-table.ViewModel.props.idProp
   */
    idProp: {
        value: 'id'
    },
  /**
   * A list of the currently selected objects in the table
   * @parent list-table.ViewModel.props
   * @property {Array.<Object>} list-table.ViewModel.props.selectedObjects
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
   * The current sort field
   * @parent list-table.ViewModel.props
   * @property {can.List} list-table.ViewModel.props.currentSort
   */
    currentSort: {
        Type: DefineMap,
        value: function () {
            return {
                field: null,
                type: 'asc'
            };
        }
    },
  /**
   * Dispatches an event with the name of the passed argument. Any additional
   * arguments will be passed to the event handler
   * @function dispatchEvent
   * @signature
   * @param  {String} event The name of the event to dispatch
   */
    dispatchEvent (event) {
        this.dispatch(event, makeArray(arguments));
    },
  /**
   * Helps the template the currentSort value
   * @function setSort
   * @signature
   * @param  {String} field the field to set the sort on
   */
    setSort (field) {
        if (this.currentSort.field !== field) {
            this.currentSort = {
                field: field,
                type: 'asc'
            };
        } else {
            this.currentSort.type = this.currentSort.type === 'asc' ? 'desc' : 'asc';
        }
        this.dispatch('sort', [this.currentSort]);
    },
  /**
   * Toggles a row as selected or not selected
   * @function toggleSelected
   * @signature
   * @param  {Object} obj The row to toggle
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
   * @param  {Object} obj The object to check if is selected
   * @return {Boolean}     Whether or not it is selected
   */
    isSelected (obj) {
        return this.selectedIds.indexOf(obj[this.idProp]) > -1;
    }
});
assign(ViewModel.prototype, CanEvent);

export default Component.extend({
    tag: 'list-table',
    ViewModel: ViewModel,
    view: template
});
