import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import {Field} from '../util/field';

import editTemplate from './templates/edit.stache!';
import listTemplate from './templates/list.stache!';
import detailsTemplate from './templates/details.stache!';
import addTemplate from './templates/add.stache!';

/**
 * @typedef {object} spectre.types.relatedView RelatedView
 * related view objects that describe the relationship between a parent and child view.
 * //TODO this seems wrong, the foreignKey should probably be switched to the child
 * @option {String} foreignKey - The property to lookup a value for on the parent view's selected object
 * @option {String} referenceKey - The property on child view's objects to filter on
 * @option {spectre.types.viewMap} view - The view object to pass to the related data-admin
 */

/**
 * @module {Object} spectre.types.viewMap ViewMap
 * @parent spectre.types
 * A view object that controls the display and management of data in the
 * data-admin and other data components.
 */
export const ViewMap = DefineMap.extend('ViewMap', {
    /**
     * A can-connect object that utilizes a miniumum of the base and constructor behaviors.
     * This includes the can-connect.SuperMap, which consists of many different behaviors.
     * In addition, a custom set of behaviors may be used as long as they include
     * the constructor.
     *
     * This connection property can also contain a special metadata object. This object
     * may include more properties in the future but currently it supports a `total`
     * property which allows the template to display how many items there are in total.
     * The path to this property should be `connection.metadata.total`.
     *
     * @link https://connect.canjs.com/doc/index.html can-connect
     * @link https://connect.canjs.com/doc/can-connect|constructor.html constructor
     * @property {can-connect} connection
     */
    connection: '*',
    parameters: {Type: DefineMap, Value: DefineMap},
    /**
     * A template for creating new objects. This should be an constructor of can.Map
     * created using can.Map.extend. This object defines the default properties, types,
     * and can be used to implement custom serialization on objects before they are saved.
     *
     * CanJS includes a powerful define plugin which can implement very powerful
     * behavior with `serialize`, `value`, getters, and setters.
     *
     * This is usually the same object that is passed to can-connect `Map` property
     * and can reused here also: `connection.Map`.
     *
     * @link https://canjs.com/docs/can.Map.prototype.define.html Define Plugin
     * @signature `ObjectTemplate: can.Map.extend({prop: 'value'})`
     * @property {Constructor<can.Map>} ObjectTemplate
     */
    ObjectTemplate: {
        get (obj) {
            if (!obj) {
                return this.connection.Map;
            }
            return obj;
        }
    },
    /**
     * An array of field definitions which controls the display and editing
     * of each property of the objects being displayed and edited
     * @property {Array<util/field.Field>} fields
     */
    fields: DefineList,
  /**
   * The message to display when an object is updated
   * @property {String} saveSuccessMessage
   */
    saveSuccessMessage: {value: 'Object saved.'},
  /**
   * The message to display when an object fails to save
   * @property {String} saveFailMessage
   */
    saveFailMessage: {value: 'Object could not be saved.'},
  /**
   * The message to display when an object is deleted
   * @property {String} deleteSuccessMessage
   */
    deleteSuccessMessage: {value: 'Object removed.'},
  /**
   * The message to display when an object fails to be deleted
   * @property {String} deleteFailMessage
   */
    deleteFailMessage: {value: 'Object could not be removed.'},
    /**
     * The message to display when adding new items is disabled
     * @property {String} deleteFailMessage
     */
    addDisabledMessage: {value: 'You do not have permission to add this data.'},
  /**
   * The message to display when a user does not have permissions to edit
   * @property {String} editDisabledMessage
   */
    editDisabledMessage: {value: 'You do not have permission to edit this data.'},
    /**
     * The message to display when no data is found in the list
     * @property {String} noDataMessage
     */
    noDataMessage: {value: 'No rows found.'},
  /**
   * A flag to disable editing existing objects
   * @property {Boolean} disableEdit
   */
    disableEdit: {value: false},
  /**
   * A flag to disable deleting existing objects
   * @property {Boolean} disableDelete
   */
    disableDelete: {value: false},
  /**
   * A flag to disable creating new objects
   * @property {Boolean} disableAdd
   */
    disableAdd: {value: false},
  /**
   * The title of the view to display in the heading or tab container button in related views
   * @property {String} title
   */
    title: {value: ''},
  /**
   * Views related to the current view. If related views are provided, the
   * spectre manager will display items related to selected items on the detail page.
   * The spectre manager will automatically have filters created to only show items
   * with a value that matches the related views foreign key.
   * @property {Array<spectre.types.relatedView>} relatedViews
   */
    relatedViews: {value: undefined},
  /**
   * A method to call before a new object in this view is created
   * @property {funtion} beforeCreate
   */
    beforeCreate: {value: undefined},
  /**
   * A method to call after a new object in this view is created
   * @property {funtion} beforeCreate
   */
    afterCreate: {value: undefined},
  /**
   * A method to call before an object in this view is saved
   * @property {funtion} beforeCreate
   */
    beforeSave: {value: undefined},
  /**
   * A method to call after an object in this view is saved
   * @property {funtion} afterSave
   */
    afterSave: {value: undefined},
  /**
   * A method to call before an object in this view is deleted
   * @property {funtion} beforeDelete
   */
    beforeDelete: {value: undefined},
  /**
   * A method to call after an object in this view is deleted
   * @property {funtion} afterDelete
   */
    afterDelete: {value: undefined},
  /**
   * Additional buttons to display when items are checked in the table. Buttotns
   * can have an icon, text an an on click event handler
   * @property {Array<ManageButton>}
   *   ```
   *   manageButtons: [{
       iconClass: 'fa fa-files-o',
       text: 'New Workorder',
       onClick(items){
         batchWorkorder('water_pipe', items);
       }
     }],
     ```
   */
    manageButtons: {value: undefined},
    /**
     * The template to render when editing and has permissions
     * @property {Renderer} editTemplate
     */
    editTemplate: {
        get (template) {
            if (!template) {
                template = editTemplate;
            }
            return template;
        }
    },
    /**
     * The template to render when editing and has permissions
     * @property {Renderer} listTemplate
     */
    listTemplate: {
        get (template) {
            if (!template) {
                template = listTemplate;
            }
            return template;
        }
    },
      /**
       * The template to render when editing and has permissions
       * @property {Renderer} addTemplate
       */
    addTemplate: {
        get (template) {
            if (!template) {
                template = addTemplate;
            }
            return template;
        }
    },
      /**
       * The template to render when editing and has permissions
       * @property {Renderer} editTemplate
       */
    detailsTemplate: {
        get (template) {
            if (!template) {
                template = detailsTemplate;
            }
            return template;
        }
    }
});
