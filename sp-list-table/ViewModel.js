import FieldIteratorMap from '../util/field/base/FieldIteratorMap';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

/**
 * A `<sp-list-table />` component's ViewModel.
 * 
 * @class ViewModel
 * @memberof sp-list-table
 */
export default FieldIteratorMap.extend('ListTable', {seal: false}, {
    /** @lends sp-list-table.ViewModel.prototype */
    /**
     * A string referencing a field type that will exclude that field
     * from this classes fields. The default is 'list'.
     * @type {String} 
     * @instance
     * @memberof sp-list-table.ViewModel
     */
    excludeFieldKey: {
        value: 'list'
    },
    /**
     * Optional promise or deferred object that will resolve to an object. Once
     * the promise resolves, the objects list will be replaced with the promise result
     * @memberof sp-list-table.ViewModel
     * @type {Promise} 
     * @instance
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
     * @memberof sp-list-table.ViewModel
     * @type {Array<DefineMap>} 
     * @instance
     */
    objects: {
        Value: DefineList
    },
    /**
     * A virtual type that retrieves this table's first object
     * @memberof sp-list-table.ViewModel
     * @type {Array<Object>} 
     * @instance
     *
     */
    object: {
        get () {
            // if length changes, update this getter
            this.objects.get('length');

            // return the first object
            return this.objects[0] || {};
        }
    },
    /**
     * Id type name for the rows of objects. The default is `id`. This value
     * is used to determine whether objects are selected or not. For a built in
     * unique ID, `_cid` may be used. _cid is automatically generatted by `can-define`
     * and should be guaranteed to be unique accross all DefineMaps
     * @memberof sp-list-table.ViewModel
     * @type {String} 
     * @instance
     */
    idProp: {
        value: 'id'
    },
    /**
     * Whether rows can be selectable using a checkbox
     * @memberof sp-list-table.ViewModel
     * @type {Boolean} 
     * @instance
     */
    selectable: {
        type: 'boolean',
        value: true
    },
    /**
     * A list of the currently selected objects in the table
     * @memberof sp-list-table.ViewModel
     * @type {Array.<Object>} 
     * @instance
     */
    selectedObjects: {
        Type: DefineList,
        Value: DefineList
    },
    /**
     * An array of ids for the selected objects. This is a virtual type
     * and cannot be set.
     * @memberof sp-list-table.ViewModel
     * @type {Array<Number>} 
     * @instance
     */
    selectedIds: {
        get () {
            return this.selectedObjects.map((obj) => {
                return obj[this.idProp];
            });
        }
    },
    /**
     * A virtual type that helps the template determine whether all objects are selected
     * @memberof sp-list-table.ViewModel
     * @type {Boolean} 
     * @instance
     */
    _allSelected: {
        type: 'boolean',
        get () {
            return this.selectedObjects.length === this.objects.length;
        }
    },
    /**
     * The current sort field
     * @memberof sp-list-table.ViewModel
     * @instance
     * @type {can.List} 
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
     * @memberof sp-list-table.ViewModel
     * @instance
     * @param  {String} event The name of the event to dispatch
     */
    dispatchEvent (event) {
        this.dispatch(event, Array.from(arguments));
    },
    /**
     * Helps the template the currentSort value
     * @memberof sp-list-table.ViewModel
     * @instance
     * @param  {String} field the field to set the sort on
     * @param {Event} event the event to cancel
     */
    setSort (field, event) {
        if (!field) {
            if (event) {
                event.stopPropagation();
            }
            this.currentSort = {};
            return;
        }
        if (this.currentSort.field !== field) {
            this.currentSort = {
                field: field,
                type: 'desc'
            };
        } else {
            this.currentSort.type = this.currentSort.type === 'asc' ? 'desc' : 'asc';
        }
        this.sort(this.currentSort);
        this.dispatch('sort', [this.currentSort]);
    },
    /**
     * Toggles a row as selected or not selected
     * @memberof sp-list-table.ViewModel
     * @instance
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
     * @memberof sp-list-table.ViewModel
     * @instance
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
     * @memberof sp-list-table.ViewModel
     * @instance
     * @param  {Object} obj The object to check if is selected
     * @return {Boolean}     Whether or not it is selected
     */
    isSelected (obj) {
        return this.selectedIds.indexOf(obj[this.idProp]) > -1;
    },
    /**
     * A function that sorts the list. It is called with the scope of the
     * view model.
     * @memberof sp-list-table.ViewModel
     * @instance
     * @param  {Object} sortInfo The sorting object which contains `field` and `type`
     */
    sort (sortInfo) {
        const field = sortInfo.field;
        this.objects.sort((a, b) => {
            return sortInfo.type === 'asc'

                // if ascending
                ? (a[field] === b[field] ? 0
                    : a[field] > b[field] ? 1 : -1)

                // if descending
                : (a[field] === b[field] ? 0
                    : a[field] > b[field] ? -1 : 1);
        });
    }
});