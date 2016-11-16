import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import template from './template.stache!';
import {Field, parseFieldArray} from '../util/field';
import './widget.less!';

/**
 * @constructor form-widget.ViewModel ViewModel
 * @parent form-widget
 * @group form-widget.ViewModel.props Properties
 * @group form-widget.ViewModel.events Events
 *
 * @description A `<form-widget />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('FormWidget', {
  /**
   * @prototype
   */
  /**
   * Whether or not to show the submit/cancel buttons
   * @property {Boolean} form-widget.ViewModel.props.showButtons
   * @parent form-widget.ViewModel.props
   */
    showButtons: {
        type: 'boolean',
        value: true
    },
  /**
   * Whether or not this form should be a bootstrap inline form
   * @property {Boolean} form-widget.ViewModel.props.inline
   * @parent form-widget.ViewModel.props
   */
    inline: {
        type: 'boolean',
        value: false
    },
  /**
   * The connection info for this form's data. If this is provided, the object will be fetched using the objectId property
   * @property {connectInfoObject} form-widget.ViewModel.props.connection
   * @parent form-widget.ViewModel.props
   */
    connection: {
        value: null
    },
  /**
   * The object id of the item to retrieve. If this is provided, a request will be made to the connection object with the specified id.
   * @property {Number} form-widget.ViewModel.props.objectId
   * @parent form-widget.ViewModel.props
   */
    objectId: {
        type: 'number',
        set: function (id) {
            const promise = this.fetchObject(this.connection, id);
            this.promise = promise;
            return id;
        }
    },
  /**
   * The pending promise if the object is being retrieved or null
   * @property {Promise}  form-widget.ViewModel.props.promise
   * @parent form-widget.ViewModel.props
   */
    promise: {
        value: null
    },
  /**
   * An object representing a can.Map or similar object. This object should have
   * a `save` method like a `can.Model` or `can-connect.superMap`. This object is
   * updated and its `save` method is called when the form is submitted.
   * @property {can.Map} form-widget.ViewModel.props.formObject
   * @parent form-widget.ViewModel.props
   */
    formObject: DefineMap,
  /**
   * The list of form fields properties. These can be specified as strings representing the field names or the object properties described in the FormFieldObject
   * @property {Array<String|spectre.types.FormFieldObject>} form-widget.ViewModel.props.fields
   * @parent form-widget.ViewModel.props
   */
    fields: {
        Value: DefineList,
        get (fields) {
            if (fields.length && !(fields[0] instanceof Field)) {
                fields = parseFieldArray(fields);
            }
            if (!fields.length && this.formObject) {
                return parseFieldArray(Object.keys(this.formObject));
            }
            return fields.filter((f) => {
                return !f.excludeForm;
            });
        }
    },
    /**
     * If set to true, the form will go into a saving/loading state
     * when the submit button is clicked
     * @property {Boolean} form-widget.ViewModel.props.showSaving
     * @parent form-widget.ViewModel.props
     */
    showSaving: {
        type: 'htmlbool',
        value: false
    },
    /**
     * This property is set to true when the save button is clicked.
     * It sets the save button to a loading state
     * @property {Boolean} form-widget.ViewModel.props.isSaving
     * @parent form-widget.ViewModel.props
     */
    isSaving: {value: false, type: 'boolean'},
  /**
   * @function fetchObject
   * Fetches and replaces the formObject with a new formObject
   * @signature
   * @param  {superMap} con The supermap connection to the api service
   * @param  {Number} id  The id number of the object to fetch
   * @returns {Promise}
   */
    fetchObject (con, id) {
        if (!con || !id) {
            return null;
        }
        var promise = con.get({
            id: id
        });
        promise.then((obj) => {
            this.formObject = obj;
        });
        return promise;
    },
  /**
   * @function submitForm
   * Called when the form is submitted. The object is updated by calling it's `save` method. The event `submit` is dispatched.
   * @signature
   */
    submitForm (vm, form, event) {
        event.preventDefault();
        if (this.showSaving) {
            this.isSaving = true;
        }
        const formObject = this.formObject;
        this.dispatch('submit', [formObject]);
        return false;
    },
  /**
   * @function setField
   * Sets the formObject value when a field changes. This will allow for future
   * functionality where the form is much more responsive to values changing, like
   * cascading dropdowns.
   * @signature
   * @param  {formFieldObject} field  The field object properties
   * @param  {domElement} domElement The form element that dispatched the event
   * @param  {Event} event  The event object and type
   * @param  {Object | Number | String} value  The value that was passed from the field component
   */
    setField (field, domElement, event, value) {
        var obj = this.formObject;
        obj[field.name] = value;
        this.dispatch('field-change', [obj]);
    },
  /**
   * @typedef {can.Event} form-widget.events.formCancel cancel
   * @parent form-widget.events
   * An event dispatched when the cancel button is clicked. No arguments are passed.
   */
  /**
   * @function cancelForm
   * Called when the form cancel button is clicked. Dispatches the `cancel` event.
   * @signature
   */
    cancelForm () {
        this.dispatch('cancel');
    },
  /**
   * @function getFieldValue
   * Fetches a value from the formObject
   * @signature
   * @param  {String} fieldName The name of the field to return
   * @return {*} The value of the object's property
   */
    getFieldValue (field) {
        return this.formObject[field.name];
    }
});

Component.extend({
    tag: 'form-widget',
    ViewModel: ViewModel,
    view: template,
    leakScope: true
});
