import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Component from 'can-component';
import dev from 'can-util/js/dev/dev';
import template from './template.stache!';
import isPromiseLike from 'can-util/js/is-promise-like/is-promise-like';
import './widget.less!';

import '../dropdown-menu/';
import '../list-table/';
import '../property-table/';
import '../form-widget/';
import '../filter-widget/';
import '../paginate-widget/';
import '../nav-container/nav-container';

import {VIEW_BUTTON, EDIT_BUTTON, DELETE_BUTTON} from './buttons';
import {FilterList} from '../filter-widget/Filter';
import {parseFieldArray, mapToFields} from '../util/field';
import {ViewMap} from './ViewMap';

/**
 * @constructor data-admin.SortMap SortMap
 * @parent data-admin
 * @group data-admin.SortMap.props Properties
 *
 * @description A special map for handling sorting parameter serialization
 */
export const SortMap = DefineMap.extend('SortMap', {
    /**
     * The fieldname to sort on.
     * @property {String}
     */
    fieldName: 'string',
    /**
     * The type of sorting to apply to the field, valid values are `asc` or `desc`
     * @property {String}
     */
    type: {value: 'asc', type: 'string'}
});

/**
 * @constructor data-admin.ParameterMap ParameterMap
 * @parent data-admin
 * @group data-admin.ParameterMap.props Properties
 *
 * @description A special map for handling paramter serialization
 */
export const ParameterMap = DefineMap.extend('ParameterMap', {
    seal: false
}, {
    /**
     * An array of filter parameters
     * @property {Array<filter-widget.Filter>}
     */
    filters: {
        Type: FilterList,
        Value: FilterList
    },
    /**
     * The number of items to show per per page. The default is 10.
     * @property {Number}
     */
    perPage: {
        type: 'number',
        value: 10
    },
    /**
     * The current page index to show. The default is 0.
     * This value is 0 indexed so if you want the 3rd page, you would use
     * index of 2.
     * @property {Object}
     */
    page: {
        type: 'number',
        value: 0
    },
    /**
     * Properties defining the sorting of the list table view.
     * @property {data-admin.SortMap}
     */
    sort: {
        Type: SortMap,
        Value: SortMap
    }
});
/**
 * @module data-admin
 */

/**
 * @constructor data-admin.ViewModel ViewModel
 * @parent data-admin
 * @group data-admin.ViewModel.props Properties
 *
 * @description A `<data-admin />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('DataAdmin', {
    /**
     * @prototype
     */
    /**
     * The view object that controls the entire setup of the data-admin.
     * Properties on the view control how each field is formatted, default values,
     * interactions, etc. Read the documentation on the ViewMap for details on the
     * view properties.
     * @property {data-admin/ViewMap} data-admin.ViewModel.props.view
     * @parent data-admin.ViewModel.props
     */
    view: {
        Type: ViewMap,
        set (view) {
            if (view) {
                this.updateParameters(view.parameters);
            }
            return view;
        }
    },
    /**
     * The current page to display in this view. Options include:
     * * `list`: The list table page that displays all records
     * * `details`: The individual view page that shows one detailed record
     * * `edit`: The editing view that allows editing of an individual record using a form
     * * `add`: The add new page, allows users to create new records.
     * @property {String} data-admin.ViewModel.props.page
     * @parent data-admin.ViewModel.props
     */
    page: {
        value: 'list',
        type: 'string'
    },
    /**
     * A total items number representing a count of the available items. This
     * is a virtual property that is retrieved from the `view.connection`metadata.total`
     * property if it exists. If the `view.connection.metadata` does not exist,
     * this property may be set on the `data-admin` viewModel.
     * @property {Number} data-admin.ViewModel.props.totalItems totalItems
     * @parent data-admin.ViewModel.props
     */
    totalItems: {
        get (total) {
            total = this.view.connection.metadata ? this.view.connection.metadata.total : total;
            if (!total) {
                return 0;
            }
            return total;
        }
    },
    /**
     * A virtual property that calculates the number of total pages to show
     * on the list page. This controls the paginator widget. It uses the `totalItems` property
     * and the `parameters.perPage` value to calculate a number of pages to display.
     * @property {Number} data-admin.ViewModel.props.totalPages
     * @parent data-admin.ViewModel.props
     */
    totalPages: {
        get () {
            //round up to the nearest integer
            const totalPages = Math.ceil(this.totalItems /
                this.parameters.perPage);
            return totalPages ? totalPages : 1;
        }
    },
    /**
     * The array of per page counts to display in the per page switcher. This
     * list is automatically filtered to include options provided where one
     * step below is less than the total count. Example, if there are
     * 30 total items, the default list returned will be 10, 20, and 50.
     * If no options are returned the per page switcher is hidden.
     * @property {Array<Number>} data-admin.ViewModel.props.perPageOptions perPageOptions
     * @parent data-admin.ViewModel.props
     */
    perPageOptions: {
        Value () {
            return [10, 20, 50, 100];
        },
        get (counts) {
            return counts.filter((c, index) => {
                return counts[index ? index - 1 : index] < this.totalItems;
            });
        }
    },
    /**
     * A helper to show or hide the paginate-widget. If totalPages is less than
     * 2, the paginate widget will not be shown.
     * @property {Boolean} data-admin.ViewModel.props.showPaginate showPaginate
     * @parent data-admin.ViewModel.props
     */
    showPaginate: {
        type: 'boolean',
        get () {
            return this.totalPages > 1;
        }
    },
    /**
     * @description
     * The internal parameters object. This is prepopulated when view is set.
     * For example, parameters can be passed to the view using the following:
     * ```javascript
     * view.parameters.filters = [{
     *    name: 'fieldName',
     *    operator: 'equals',
     *    value: 'field value'
     *  }]
     *  ```
     * @property {Object} data-admin.ViewModel.props.parameters parameters
     * @parent data-admin.ViewModel.props
     */
    parameters: {
        Value: ParameterMap,
        Type: ParameterMap
    },
    /**
     * A simple counter that forces a refresh on the promise when set. Used
     * to manually refresh the data list
     * @property {Number} data-admin.ViewModel.props.objectsRefreshCount
     * @parent data-admin.ViewModel.props
     */
    objectsRefreshCount: {
        value: 0,
        type: 'number'
    },
    /**
     * A promise that resolves to the objects retrieved from a can-connect.getListData call
     * @property {Promise} data-admin.ViewModel.props.objectsPromise objectsPromise
     * @parent data-admin.ViewModel.props
     */
    objectsPromise: {
        get () {
            this.get('objectsRefreshCount');
            const params = this.parameters ? this.parameters.serialize() : {};
            const promise = this.view.connection.getList(params);

            return promise;
        }
    },
    /**
     * The array of objects currently retrieved and in the list view. This is set
     * once the `objectsPromise` completes
     * @property {Array<Object>} data-admin.ViewModel.props.objects objects
     * @parent data-admin.ViewModel.props
     */
    objects: {
        Value: DefineList,
        get (val, setAttr) {

            const promise = this.objectsPromise;

            // handle promise.catch for local-storage deferreds...
            promise.catch((err) => {
                dev.warn('unable to complete objects request', err);
            });

            // update the list data
            promise.then((data) => {
                setAttr(data);
            });
        }
    },
    /**
     * A promise that resolves to the object retreived from a `can-connect.get` call
     * @property {Promise} data-admin.ViewModel.props.focusObjectPromise focusObjectPromise
     * @parent data-admin.ViewModel.props
     */
    focusObjectPromise: {
        get () {
            if (this.viewId) {
                const params = {};
                params[this.view.connection.idProp] = this.viewId;
                const promise = this.view.connection.get(params);

                promise.catch((err) => {
                    dev.warn('unable to complete focusObject request', err);
                });

                return promise;
            }
            return null;
        }
    },
    /**
     * An object that is currently being displayed in the details or edit view.
     * This object is set once the focusObjectPromise completes
     * @property {Object} data-admin.ViewModel.props.focusObject focusObject
     * @parent data-admin.ViewModel.props
     */
    focusObject: {
        // async getter
        // eslint-disable-next-line consistent-return
        get (val, setAttr) {
            if (!this.focusObjectPromise) {
                return null;
            }
            this.focusObjectPromise.then((data) => {
                setAttr(data);
            });
        }
    },
    /**
     * Buttons to use for the list table actions. If `view.disableEdit` and `view.disableDelete` is falsey
     * the buttons will include an edit and delete button, respectively. Otherwise, it will be
     * a simple view details button.
     * @property {Array<list-table.TableButtonObject>} data-admin.ViewModel.props.buttons buttons
     * @parent data-admin.ViewModel.props
     */
    buttons: {
        get () {
            let buttons = [VIEW_BUTTON];
            if (!this.view.disableEdit) {
                buttons.push(EDIT_BUTTON);
            }
            if (!this.view.disableDelete) {
                buttons.push(DELETE_BUTTON);
            }
            if (this.view.manageButtons && this.view.manageButtons.length) {
                buttons = buttons.concat(this.view.manageButtons.serialize());
            }

            return buttons;
        }
    },
    primaryButtons: {
        value () {
            return [{
                text: 'View',
                eventName: 'view'
            }];
        }
    },
    /**
     * The page number, this is calculated by incrementing the queryPage by one.
     * @property {Number}  data-admin.ViewModel.props.pageNumber
     * @parent data-admin.ViewModel.props
     */
    pageNumber: {
        get () {
            return this.parameters.page + 1;
        }
    },
    /**
     * The current id number of the object that is being viewed in the property
     * table or edited in the form widget.
     * @property {Number}  data-admin.ViewModel.props.viewId viewId
     * @parent data-admin.ViewModel.props
     */
    viewId: {
        type: 'number',
        value: 0
    },
    /**
     * Current loading progress. NOT IMPLEMENTED
     * TODO: implement loading progress on lengthy processes like multi delete
     * @property {Number}  data-admin.ViewModel.props.progress progress
     * @parent data-admin.ViewModel.props
     */
    progress: {
        type: 'number',
        value: 100
    },
    /**
     * Whether or not the filter popup is visible
     * @property {Boolean} data-admin.ViewModel.props.filterVisible filterVisible
     * @parent data-admin.ViewModel.props
     */
    filterVisible: {
        type: 'boolean',
        value: false
    },
    /**
     * whether or not the select menu is currently visible
     * @property {Boolean} data-admin.ViewModel.props.selectMenu
     * @parent data-admin.ViewModel.props
     */
    selectMenu: {
        type: 'boolean',
        value: false
    },
    /**
     * The internal field array that define the display of data and field types
     * for editing and filtering
     * @property {Array<util/field.Field>} data-admin.ViewModel.props._fields
     * @parent data-admin.ViewModel.props
     */
    _fields: {
        get () {

            //try a fields propety first
            if (this.view.fields) {
                return parseFieldArray(this.view.fields);
            }

            //if that doesn't exist, use the ObjectTemplate or Map to create fields
            const Template = this.view.ObjectTemplate || this.view.connection.Map;
            return mapToFields(Template);
        }
    },
    /**
     * An array of currently selected objects in the list-table
     * @property {Array<DefineMap>} data-admin.ViewModel.props.selectedObjects
     * @parent data-admin.ViewModel.props
     */
    selectedObjects: DefineList,
    /**
     * A field that is related to a parent data-admin. The field's name should
     * be passed to this property, and the viewModel automatically looks up
     * the relevent field object
     * @property {util/field.Field} data-admin.ViewModel.props.relatedField
     * @parent data-admin.ViewModel.props
     */
    relatedField: {
        set (field) {
            const fieldList = this._fields.filter((f) => {
                return f.name === field;
            });
            this.addFilter(fieldList[0], this.relatedValue);
            return fieldList[0];
        }
    },
    /**
     * A value that is related to a parent data-admin. The value is converted
     * to the `relatedField.type` if necessary.
     * @property {any} data-admin.ViewModel.props.relatedValue
     * @parent data-admin.ViewModel.props
     */
    relatedValue: {
        set (val) {
            if (!val) {
                return val;
            }
            if (this.relatedField) {
                const type = this.relatedField.type;
                if (type === 'number') {
                    val = parseFloat(val);
                }
                if (type === 'date') {
                    val = new Date(val);
                }
            }
            this.addFilter(this.relatedField, val);
            return val;
        }
    },
    /**
     * Adds a new filter that relates this data-admin to a parent data-admin
     * viewmodel
     *  The operator used will be `'equals'`
     * @function addFilter
     * @signature
     * @param {util/Field.Field} field The field to filter on (the child key)
     * @param {any} value The value to use in the filter
     */
    addFilter (field, value) {
        if (field && value) {
            this.parameters.filters.push({
                name: field.name,
                value: value,
                operator: 'equals'
            });
        }
    },
    /**
     * A helper for toggling quick filter dropdowns from the template,
     * this accepts simplified parameters, similar to the addFilter function.
     * Depending on the arguments several outcomes may occur:
     *  - If a filter does not exist with the given field name, it will be created
     *  - If a filter does exist with the field name, but the value is different,
     *  the filter will be updated with the new value
     *  - If the filter does exist with the current value, the filter will be removed
     *  The operator used will be `'equals'`
     *  @function toggleQuickFilter
     *  @signature
     *  @param {String} fieldName The field name to filter on
     *  @param {Any} value The value to filter on
     *  @param {Event} event The dom click event to cancel
     *  @return {Boolean} Returns false to prevent page navigation
     */
    toggleQuickFilter (fieldName, value, event) {
        if (event) {
            event.preventDefault();
        }
        let filter = this.parameters.filters.filter((f) => {
            return f.name === fieldName;
        });
        if (filter.length) {
            filter = filter[0];

            // if the filter exists but the values are the same, remove the filter
            if (filter.value === value) {
                const index = this.parameters.filters.indexOf(filter);
                this.parameters.filters.splice(index, 1);
                return false;
            }

            // otherwise update the value
            filter.value = value;
            return false;
        }

        // if no filter exists create it
        this.parameters.filters.push({
            name: fieldName,
            value: value,
            operator: 'equals'
        });
        return false;
    },
    getQuickFilter (fieldName, value) {
        const filter = this.parameters.filters.filter((f) => {
            return f.name === fieldName && f.value === value;
        });
        return filter[0];
    },
    /**
     * Changes the page and resets the viewId to 0
     * @function setPage
     * @signature
     * @param {String} page The name of the page to switch to
     */
    setPage (page) {
        if (page === 'list') {
            this.objectsRefreshCount++;
        }
        this.set({
            viewId: null,
            page: page
        });
    },
    /**
     * Sets the current viewId to the object's id and sets the page to edit
     * to start editing the object provided.
     * @function editObject
     * @signature
     * @param  {DefineMap} scope The stache scope (not used)
     * @param  {domNode} dom   The domNode that triggered the event (not used)
     * @param  {Event} event The event that was triggered (not used)
     * @param  {DefineMap} obj   The object to start editing
     */
    editObject () {
        let obj;
        //accept 4 params from the template or just one
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
    /**
     * Sets the current viewId to the object's id and sets the page to details
     * to display a detailed view of the object provided.
     * @function viewObject
     * @signature
     * @param  {DefineMap} scope The stache scope (not used)
     * @param  {domNode} dom   The domNode that triggered the event (not used)
     * @param  {Event} event The event that was triggered (not used)
     * @param  {DefineMap} obj   The object to view

     */
    viewObject () {
        let obj;
        //accept 4 params from the template or just one
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
    /**
     * @description
     * Saves the provided object and sets the current viewId to the object's
     * id once it is returned. We then switch the page to the detail view to
     * display the created or updated object.
     *
     * This action occurs after any validation in the form has passed. Before
     * the object is saved, `view.beforeCreate` or `view.beforeSave` is called
     * if it exists. This function may return a `falsey` value which will prevent
     * the actual save action from occuring. The function can also return the
     * modified object. In addition, the viewModel dispatches
     * the `beforeCreate` or `beforeSave` events.
     *
     * If any errors occur after the save, the `view.errorSave` method is called
     * if it exists and the `errorSave` event is dispatched.
     *
     * @function saveObject
     *
     * @signature `saveObject(obj)`
     *
     * @signature `saveObject(scope, dom, event, obj)`
     * @param  {DefineMap} scope The stache scope (optional)
     * @param  {domNode} dom   The domNode that triggered the event (optional)
     * @param  {Event} event The event that was triggered (optional)
     * @param  {DefineMap} obj   The object to save
     * @return {Promise}
     */
    saveObject () {
        let obj;
        //accept 4 params from the template or just one
        if (arguments.length === 4) {
            obj = arguments[3];
        } else {
            obj = arguments[0];
        }
        const isNew = obj.isNew();

        // trigger events beforeCreate/beforeSave depending on if we're adding or
        // updating an object
        let val;
        if (isNew) {
            val = this.onEvent(obj, 'beforeCreate');
        } else {
            val = this.onEvent(obj, 'beforeSave');
        }

        // halt save or create if the value returned is falsey
        if (!val) {
            return null;
        }

        // if the value returned is a promise, return a promise
        // and wait to save the object
        if (isPromiseLike(val)) {
            return new Promise((resolve, reject) => {
                val.then(() => {
                    this._saveObject(obj, isNew).then(resolve);
                }).catch(reject);
            });
        }

        return this._saveObject(obj);
    },
    _saveObject (obj, isNew) {
      //save the object
        var deferred = this.view.connection.save(obj);
        deferred.then((result) => {

          // if event handlers
            if (isNew) {
                this.onEvent(obj, 'afterCreate');
            } else {
                this.onEvent(obj, 'afterSave');
            }

          //update the view id
          //set page to the details view by default
            this.set({
                viewId: this.view.connection.id(result),
                page: 'details',
                objectsRefreshCount: this.objectsRefreshCount + 1
            });


        }).catch((e) => {
            this.set({
                viewId: null,
                page: 'list',
                objectsRefreshCount: this.objectsRefreshCount + 1
            });
            this.onEvent({
                obj: obj,
                error: e
            }, 'errorSave');
            dev.warn(e);
        });
        return deferred;
    },
    /**
     * Creates and returns a new object from the view's ObjectTemplate
     * @function getNewObject
     * @signature
     * @return {DefineMap} A new object created from the `view.ObjectTemplate`
     */
    getNewObject () {
        //create a new empty object with the defaults provided
        //from the ObjectTemplate property which is a map
        const props = {};
        if (this.relatedField) {
            props[this.relatedField.name] = this.relatedValue;
        }
        return new(this.view.ObjectTemplate)(props);
    },
    /**
     * @description
     * Displays a confirm dialog box and if confirmed, attempts to delete
     * the object provided.
     *
     * Before the delete occurs, the `view.beforeDelete` method is called
     * and the viewmodel dispatches the `beforeDelete` event. After the delete
     * occurs, the `view.afterDelete` method is called and the `afterDelete` event
     * is dispatched.
     *
     * If any errors occur during the delete, the `view.errorDelete` method is
     * called if it exists and the viewmodel dispatches the `errorDelete` event.
     *
     * @function deleteObject
     * @signature `deleteObject(obj, skipConfirm)`
     * @signature `deleteObject( scope, dom, event, obj, skipConfirm )`
     * @param  {DefineMap} scope The stache scope (optional)
     * @param  {domNode} dom   The domNode that triggered the event (optional)
     * @param  {Event} event The event that was triggered (optional)
     * @param  {DefineMap} obj   The object to delete
     * @param {Boolean} skipConfirm If true, the method will not display a confirm dialog
     * and will immediately attempt to remove the object
     * @return {Promise}
     */
    deleteObject () {
        let obj, skipConfirm;
        //arguments can be ( scope, dom, event, obj, skipConfirm )
        //OR (obj, skipConfirm)
        if (arguments.length > 2) {
            obj = arguments[3];
            skipConfirm = arguments[4];
        } else {
            obj = arguments[0];
            skipConfirm = arguments[1];
        }
        // eslint-disable-next-line
        if (obj && (skipConfirm || window.confirm('Are you sure you want to delete this record?'))) {

            // beforeDelete handler
            // if return value is falsey, stop execution and don't delete
            const val = this.onEvent(obj, 'beforeDelete');
            if (!val) {
                return null;
            }

            // if the val returned is a promise, return a new promise,
            // and delete when the promise resolves
            if (isPromiseLike(val)) {
                return new Promise((resolve, reject) => {
                    val.then(() => {
                        this._deleteObject(obj).then(resolve);
                    }).catch(reject);
                });
            }

            return this._deleteObject(obj);


        }
        return null;
    },
    _deleteObject (obj) {
      //destroy the object using the connection
        const deferred = this.view.connection.destroy(obj);
        deferred.then(() => {

            this.set({
                viewId: null,
                page: 'list',
                objectsRefreshCount: this.objectsRefreshCount + 1
            });

          //afterDelete handler
            this.onEvent(obj, 'afterDelete');

            this.objectsRefreshCount++;
        });

        deferred.catch((result) => {

            this.set({
                viewId: null,
                page: 'list',
                objectsRefreshCount: this.objectsRefreshCount + 1
            });

          //add a message
            this.onEvent(result, 'errorDelete');
            dev.warn(result);
        });
        return deferred;
    },
    /**
     * @description
     * Iterates through the objects in the `selectedObjects` array
     * and deletes each one individually.
     *
     * TODO: implement batch deleting to avoid many ajax calls
     *
     * @function deleteMultiple
     * @signature
     * @param {Boolean} skipConfirm If true, the method will not display a confirm dialog
     * and will immediately attempt to remove the selected objects
     * @return {Array<Promise>}
     */
    deleteMultiple (skipConfirm) {
        const selected = this.selectedObjects;
        const defs = [];
        //eslint-disable-next-line
        if (skipConfirm || confirm(`Are you sure you want to delete the ${selected.length} selected records?`)) {
            selected.forEach((obj) => {
                defs.push(this.deleteObject(null, null, null, obj, true));
            });
            selected.replace([]);
        }
        return defs;
    },
    /**
     * Empties the currently selected objects array
     * @function clearSelection
     * @signature `clearSelection()`
     */
    clearSelection () {
        this.selectedObjects.replace([]);
    },
    /**
     * Passes an array of objects to the on click handler of a manageButton.
     * The array will only contain one item, the object to "manage"
     * @function manageObject
     * @signature
     * @param  {object} obj A single object
     * @param  {Function} button  The button object with an `onclick` property
     */
    manageObject (obj, button) {
        this.manageObjects([obj], button);
    },
    /**
     * Passes an array of objects to the on click handler of a manageButton.
     * The array will contain an array of objects to "manage"
     * @function manageObjects
     * @signature
     * @param  {object} objects     A single object
     * @param  {Function} button The button object with an `onclick` property
     */
    manageObjects (objects, button) {
        const defs = button.onClick(objects);
        if (defs) {
            Promise.all(defs).then(() => {
                this.objectsRefreshCount++;
            });
        }
    },
    /**
     * Toggles the display of menus. Used to hide and show various items in the
     * `data-admin` component
     * @function toggle
     * @signature
     * @param {String} val The value to toggle
     * @param  {Boolean} visible (Optional) whether or not to display the dialog
     * @param {Event} e (optional) the event to toggle
     * @return {Boolean} always returns false to prevent event from changing page
     */
    toggle (val, visible, e) {
        this.noop(e);
        if (typeof visible !== 'undefined') {
            this[val] = Boolean(visible);
        } else {
            this[val] = !this[val];
        }
        return false;
    },
    /**
     * An empty function with no real side effects other than preventing
     * default events from bubbling
     * @function noop
     * @param {Event} event The event to prevent and stop from triggering
     * @return {Boolean} always returns false
     */
    noop (event) {
        if (event) {
            event.preventDefault();
        }
        return false;
    },
    /**
     * A helper function to trigger beforeSave, afterSave, etc events.
     * @function onEvent
     * @signature
     * @param  {DefineMap} obj The object to dispatch with the event
     * @param  {String} eventName The name of the event to dispatch
     * @return {Boolean|Object}
     */
    onEvent (obj, eventName) {

        //get the view method
        const prop = this.view[eventName];

        //if it is a function, call it passing the object
        let returnVal = true;
        if (typeof prop === 'function') {
            returnVal = prop(obj);

            // Only return falsey value if a value is returned.
            // Otherwise the execution of the event will be halted unintentionally
            if (typeof returnVal === 'undefined') {
                returnVal = true;
            }
        }

        //dispatch an event
        this.dispatch(eventName, [obj]);

        return returnVal;
    },
    /**
     * Updates the parameters by mixing in properties and concating filter objects
     * @function updateParameters
     * @signature
     * @param {DefineMap} params the params to mixin
     */
    updateParameters (params) {
        // mixin view parameters
        if (params) {
            params.forEach((param, key) => {
                // deep copy filters
                if (key === 'filters') {
                    const filters = param.filter((filter) => {
                        return this.parameters.filters && this.parameters.filters.indexOf(filter) < 0;
                    });
                    this.parameters.set('filters',
                        (this.parameters.filters ? this.parameters.filters.concat(filters) : filters)
                    );
                } else {
                    this.parameters.set(key, param);
                }
            });
        }
    }
});

export default Component.extend({
    tag: 'data-admin',
    viewModel: ViewModel,
    view: template,
    events: {
        '{viewModel.parameters.filters} length': function () {
            this.viewModel.parameters.page = 0;
        },
        '{viewModel.parameters} perPage': function () {
            this.viewModel.parameters.page = 0;
        }
    }
});
