import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

import editTemplate from './templates/edit.stache!';
import listTemplate from './templates/list.stache!';
import detailsTemplate from './templates/details.stache!';
import addTemplate from './templates/add.stache!';

/**
 * @typedef {object} data-admin.relatedView RelatedView
 * related view objects that describe the relationship between a parent and child view.
 * @parent data-admin.types
 * //TODO this seems wrong, the foreignKey should probably be switched to the child
 * @option {String} foreignKey - The property to lookup a value for on the parent view's selected object
 * @option {String} referenceKey - The property on child view's objects to filter on
 * @option {spectre.types.viewMap} view - The view object to pass to the related data-admin
 */

/**
 * @module {Object} data-admin/ViewMap ViewMap
 * @group data-admin/ViewMap.template View Templates
 * @group data-admin/ViewMap.event Event Functions
 * @group data-admin/ViewMap.props Properties
 * @parent data-admin.types
 * A view object that controls the display and management of data in the
 * data-admin and other data components.
 */
export const ViewMap = DefineMap.extend('ViewMap', {seal: false}, {
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
     * @property {can-connect} data-admin/ViewMap.props.connection connection
     * @parent data-admin/ViewMap.props
     */
    connection: '*',
    /**
     * rest parameters that are serialized during a getList request. These
     * parameters are typically mixed in with default parameters
     * @property {Object} data-admin/ViewMap.props.parameters parameters
     * @parent data-admin/ViewMap.props
     */
    parameters: {Type: DefineMap, Value: DefineMap},
    /**
     * A template for creating new objects. This should be an constructor of can.Map
     * created using DefineMap.extend. This object defines the default properties, types,
     * and can be used to implement custom serialization on objects before they are saved.
     *
     * CanJS includes a powerful define plugin which can implement very powerful
     * behavior with `serialize`, `value`, getters, and setters.
     *
     * This is usually the same object that is passed to can-connect `Map` property
     * and can reused here also: `connection.Map`.
     *
     * @link https://canjs.com/docs/can.Map.prototype.define.html Define Plugin
     * @signature `ObjectTemplate: DefineMap.extend({prop: 'value'})`
     * @property {Constructor<can.Map>} data-admin/ViewMap.props.ObjectTemplate ObjectTemplate
     * @parent data-admin/ViewMap.props
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
     * @property {Array<util/field.Field>} data-admin/ViewMap.props.fields fields
     * @parent data-admin/ViewMap.props
     */
    fields: DefineList,
    /**
     * The message to display when adding new items is disabled
     * @property {String} data-admin/ViewMap.props.addDisabledMessage addDisabledMessage
     * @parent data-admin/ViewMap.props
     */
    addDisabledMessage: {value: 'You do not have permission to add this data.'},
    /**
     * The message to display when a user does not have permissions to edit
     * @property {String} data-admin/ViewMap.props.editDisabledMessage editDisabledMessage
     * @parent data-admin/ViewMap.props
     */
    editDisabledMessage: {value: 'You do not have permission to edit this data.'},
    /**
     * The message to display when no data is found in the list
     * @property {String} data-admin/ViewMap.props.noDataMessage noDataMessage
     * @parent data-admin/ViewMap.props
     */
    noDataMessage: {value: 'No rows found.'},
    /**
     * A flag to disable editing existing objects
     * @property {Boolean} data-admin/ViewMap.props.disableEdit disableEdit
     * @parent data-admin/ViewMap.props
     */
    disableEdit: {value: false},
    /**
     * A flag to disable deleting existing objects
     * @property {Boolean} data-admin/ViewMap.props.disableDelete disableDelete
     * @parent data-admin/ViewMap.props
     */
    disableDelete: {value: false},
    /**
     * A flag to disable creating new objects
     * @property {Boolean} data-admin/ViewMap.props.disableCreate disableCreate
     * @parent data-admin/ViewMap.props
     */
    disableCreate: {value: false},
    /**
     * The title of the view to display in the heading or tab container button in related views
     * @property {String} data-admin/ViewMap.props.title title
     * @parent data-admin/ViewMap.props
     */
    title: {value: ''},
    /**
     * The name of the property to use as the title in the view. This property
     * value is displayed on the details view.
     * view.title : object[view.titleProp]
     * @property {String} data-admin/ViewMap.props.titleProp titleProp
     * @parent data-admin/ViewMap.props
     */
    titleProp: {
        type: 'string',
        get (prop) {
            if (prop) {
                return prop;
            }
            return this.connection ? this.connection.idProp : 'id';
        }
    },
    /**
     * Views related to the current view. If related views are provided, the
     * spectre manager will display items related to selected items on the detail page.
     * The data-admin will automatically create a filter to only show items
     * with a value that matches the related views foreign key.
     * Each related view object may have the following properties:
     *  - `view` - The view property for the related view
     *  - `foreignKey` - the foreign key on the parent view
     *  - `referenceKey` - the reference key on the related child view
     *  - `title` - An optional title to override the `view.title` property
     * @property {Array<Object>} data-admin/ViewMap.props.relatedViews relatedViews
     * @parent data-admin/ViewMap.props
     */
    relatedViews: {value: undefined},
    /**
     * Additional buttons to display when items are checked in the table. Buttons
     * can have an icon, text an an on click event handler
     * @property {Array<ManageButton>} data-admin/ViewMap.props.actions actions
     * @parent data-admin/ViewMap.props
     *   ```
     *   actions: [{
         iconClass: 'fa fa-files-o',
         text: 'New Workorder',
         onClick(items){
           doSomething(items);
         }
       }],
       ```
     */
    actions: {value: undefined},
    /**
     * Additional tabs to display in this view's navigation pane. Each tab
     * can have a
     *  - `label` - Displayed to the user
     *  - `id` - Used in the url
     *  - `template` - Renders the content in the tab
     * @property {Object} data-admin/ViewMap.props.tabs tabs
     * @parent data-admin/ViewMap.props
     */
    tabs: '*',
    /**
     * Dropdown values that quickly allow a user to filter a list without
     * choosing a field and entering a value. Functionality is similar to the
     * github filter dropdowns available for issues/pull requests.
     * Syntax is similar to [form-widget/field-components/select-field.SelectOption].
     * <span class="label label-danger">Experimental</span>
     * @property {Array<Object>} data-admin/ViewMap.props.quickFilters quickFilters
     * @parent data-admin/ViewMap.props
     *
        quickFilters: [{
           text: 'Text to display',
           options: [{
              field: 'fieldName',
              label: 'text to display',
              value: 'value to filter on'
            }]
         }]

     *
     */
    quickFilters: {value: undefined},
    /**
     * The template to render when editing and has permissions.  The scope of the template
     * is the `data-admin` view model.
     * @property {Renderer} data-admin/ViewMap.template.editTemplate editTemplate
     * @parent data-admin/ViewMap.template
     */
    editTemplate: {
        value () {
            return editTemplate;
        }
    },
    /**
     * The template to render when editing and has permissions. The scope of the template
     * is the `data-admin` view model.
     * @property {Renderer} data-admin/ViewMap.template.listTemplate listTemplate
     * @parent data-admin/ViewMap.template
     */
    listTemplate: {
        value () {
            return listTemplate;
        }
    },
    /**
     * The template to render when editing and has permissions. The scope of the template
     * is the `data-admin` view model.
     * @property {Renderer} data-admin/ViewMap.template.addTemplate addTemplate
     * @parent data-admin/ViewMap.template
     */
    addTemplate: {
        value () {
            return addTemplate;
        }
    },
    /**
     * The template to render when viewing details of an object. The scope of the template
     * is the `data-admin` view model.
     * @property {Renderer} data-admin/ViewMap.template.detailsTemplate detailsTemplate
     * @parent data-admin/ViewMap.template
     */
    detailsTemplate: {
        value () {
            return detailsTemplate;
        }
    },
    /**
     * A method to call before a new object in this view is created
     * @property {funtion} data-admin/ViewMap.event.beforeCreate beforeCreate
     * @parent data-admin/ViewMap.event
     */
    beforeCreate: {value: undefined},
    /**
     * A method to call after a new object in this view is created
     * @property {funtion} data-admin/ViewMap.event.afterCreate afterCreate
     * @parent data-admin/ViewMap.event
     */
    afterCreate: {value: undefined},
    /**
     * A method to call before an object in this view is saved
     * @property {funtion} data-admin/ViewMap.event.beforeSave beforeSave
     * @parent data-admin/ViewMap.event
     */
    beforeSave: {value: undefined},
    /**
     * A method to call after an object in this view is saved
     * @property {funtion} data-admin/ViewMap.event.afterSave afterSave
     * @parent data-admin/ViewMap.event
     */
    afterSave: {value: undefined},
    /**
     * A method to call before an object in this view is deleted
     * @property {funtion} data-admin/ViewMap.event.beforeDelete
     * @parent data-admin/ViewMap.event
     */
    beforeDelete: {value: undefined},
    /**
     * A method to call after an object in this view is deleted
     * @property {funtion} data-admin/ViewMap.event.afterDelete afterDelete
     * @parent data-admin/ViewMap.event
     */
    afterDelete: {value: undefined},
    /**
     * called when an error occurs on delete
     * @property {function} data-admin/ViewMap.eventerrorDelete errorDelete
     * @parent data-admin/ViewMap.event
     */
    errorDelete: {value: undefined},
    /**
     * called when an errror occurs on saved
     * @property {function} data-admin/ViewMap.event.errorSave errorSave
     */
    errorSave: {value: undefined}
});
