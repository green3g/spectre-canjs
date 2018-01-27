import DefineMap from 'can-define/map/map';
import FieldIteratorMap from 'spectre-canjs/util/field/base/FieldIteratorMap';
import {getEditComponent} from '../util/field/fieldComponents';


/**
 * @constructor sp-form.ViewModel ViewModel
 * @parent sp-form
 * @group sp-form.ViewModel.props Properties
 * @group sp-form.ViewModel.events Events
 *
 * @description A `<sp-form />` component's ViewModel. This viewmodel
 * extends the [util/field/ ]'s properties
 */
const ViewModel = FieldIteratorMap.extend('FormWidget', {
    /**
     * @prototype
     */
    /**
    * A string referencing a field property that will exclude that field
    * from this classes fields. The default is `'edit'`.
    * @property {String} sp-form.ViewModel.props.excludeFieldKey excludeFieldKey
    * @parent sp-form.ViewModel.props
    */
    excludeFieldKey: {
        value: 'edit'
    },
    /**
     * Whether or not to show the saving icon when the submit button is clickered.
     * @property {HTMLBoolean} sp-form.ViewModel.props.object object 
     * @parent sp-form.ViewModel.props
     */
    showSaving: {type: 'htmlbool', value: true},
    /**
     * Whether or not this form should be an inline (horizontal) form
     * @property {Boolean} sp-form.ViewModel.props.inline
     * @parent sp-form.ViewModel.props
     */
    inline: {
        type: 'boolean',
        value: false
    },
    /**
     * The connection info for this form's data. If this is provided, the
     * object will be fetched using the objectId property
     * @property {can-connect} sp-form.ViewModel.props.connection
     * @link https://canjs.com/doc/can-connect.html can-connect
     * @parent sp-form.ViewModel.props
     */
    connection: {
        value: null
    },
    /**
     * The object id of the item to retrieve. If this and [sp-form.ViewModel.props.connection] is provided, a request
     * will be made to the connection object with the specified id.
     * @property {Number} sp-form.ViewModel.props.objectId
     * @parent sp-form.ViewModel.props
     */
    objectId: {
        type: 'number',
        set: function (id) {
            this.promise = this.fetchObject(this.connection, id);
            return id;
        }
    },
    /**
     * The pending promise if the object is being retrieved or null
     * @property {Promise}  sp-form.ViewModel.props.promise
     * @parent sp-form.ViewModel.props
     */
    promise: {
        value: null
    },
    /**
     * An object representing the current state of the values passed to the form.
     * If the fields have changed, this object will be updated when the submit
     * button is pressed and the validations have passed. To capture current
     * state of the form, use [sp-form.ViewModel.props.dirtyObject].
     * @property {DefineMap} sp-form.ViewModel.props.object
     * @parent sp-form.ViewModel.props
     */
    object: {
        Type: DefineMap,
        set (obj) {
            if (!obj) {
                return obj;
            }
            const Constructor = obj.constructor ? obj.constructor : DefineMap;
            this.dirtyObject = new Constructor(obj.get());
            return obj;
        }
    },
    /**
     * An object set with current form values
     * @property {DefineMap} sp-form.ViewModel.props.dirtyObject dirtyObject
     * @parent sp-form.ViewModel.props
     */
    dirtyObject: DefineMap,
    /**
     * An object consisting of validation error strings
     * ```javascript
     *{
     *    field: 'error message',
     *    otherfield: 'another error message'
     *}
     * ```
     * @property {Object} sp-form.ViewModel.props.validationErrors
     * @parent sp-form.ViewModel.props
     */
    validationErrors: {
        get (val) {
            if (val) {
                return val;
            }
            var props = {};
            this.fields.forEach((f) => {
                props[f.name] = null;
            });
            return new DefineMap(props);
        }
    },
    /**
     * Whether or not this form is valid and can be submitted. If this is
     * false, the form will not dispatch the `submit` event when it is submitted.
     * Instead, it will dispatch a `submit-fail` event
     * @property {Boolean} sp-form.ViewModel.props.isValid isValid
     * @parent sp-form.ViewModel.props
     */
    isValid: {
        get () {
            if (!this.dirtyObject || !this.object) {
                return true;
            }
            let isValid = true;
            for (let i = 0; i < this.fields.length; i++) {
                const field = this.fields[i];
                const name = field.name;
                const currentValue = this.dirtyObject[name];
                if (this.validationErrors[name]) {
                    isValid = false;
                } else {
                    const error = this.validationErrors[name] = this.getValidationError(field, currentValue);
                    if (error) {
                        isValid = false;
                    }
                }
            }
            return isValid;
        }
    },
    /**
     * This property is set to true when the save button is clicked.
     * It sets the save button to a loading state
     * @property {Boolean} sp-form.ViewModel.props.isSaving
     * @parent sp-form.ViewModel.props
     */
    isSaving: {
        value: false,
        type: 'boolean'
    },
    /**
     * Fetches and replaces the object with a new object
     * @function fetchObject
     * @signature
     * @param  {connection} con The supermap connection to the api service
     * @param  {Number} id  The id number of the object to fetch
     * @return {Promise} A promise resolved when the object is fetched from can-connect
     */
    fetchObject (con, id) {
        if (!con || !id) {
            return null;
        }
        var promise = con.get({
            id: id
        });
        promise.then((obj) => {
            this.object = obj;
        });
        return promise;
    },
    /**
     * Called when the form is submitted. The object is updated by calling
     * it's `save` method. The event `submit` is dispatched.
     * @function submitForm
     * @signature
     * @param {Object} vm The scope of the form (this view model)
     * @param {Form} form the dom form
     * @param {Event} event the dom form event
     * @return {Boolean} returns false to prevent form submissions
     */
    submitForm () {

        // we're currently saving
        if (this.isSaving) {
            return false;
        }

        // we're not valid yet
        if (!this.isValid) {
            this.dispatch('submitfail', [this.object, this.validationErrors]);
            return false;
        }

        // show a saving indicator
        if (this.showSaving) {
            this.isSaving = true;
        }

        this.object.assign(this.dirtyObject);
        this.dispatch('submit', [this.object]);
        return false;
    },
    dispatchEvent (eventName) {
        if (eventName === 'submit') {
            this.submitForm();
        } else {
            this.dispatch(eventName, [this.object]);
        }
    },
    /**
     * Runs the field validation and updates the validation object.
     * If the validation succeeds (returns no validation error) then a fieldchange event is dispatched
     * @function checkField
     * @signature
     * @param {Array} arguments an array with 3 arguments, event, value (field value) and field<Field> object
     */
    checkField ([, field]) {

        // check for valid field value and don't update if it's not
        this.validationErrors[field.name] = this.getValidationError(field, field.value);

        // update and dispatch field change event
        // if the value is different
        this.dispatch('fieldchange', [{
            name: field.name,
            value: field.value,
            dirty: this.dirtyObject,
            current: this.object
        }]);
    },
    /**
     * Validates a field with a value if the field has a [util/field/Field.props.validate] property
     * @function getValidationError
     * @param  {Object} field The field object to validate
     * @param  {value} value The value of the field to validate
     * @return {String} The validation error or null
     */
    getValidationError (field, value) {
        return (field.validate ? field.validate({
            name: field.name,
            value: value,
            dirty: this.dirtyObject,
            current: this.object
        }) : '') || '';
    },
    getEditComponent (scope, options) {
        const field = scope._context.value;
        const helpers = scope.templateContext.helpers;
        // use edit component if its a renderer
        if (typeof field.editComponent === 'function') {
            return field.editComponent;
        }

        return getEditComponent(field)(scope, helpers, options.nodeList);
    }
});

export default ViewModel;
