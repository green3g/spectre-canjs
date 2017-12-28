import DefineMap from 'can-define/map/map';
import FieldIteratorMap from 'spectre-canjs/util/field/base/FieldIteratorMap';

/**
 * @constructor admin-form.ViewModel ViewModel
 * @parent admin-form
 * @group admin-form.ViewModel.props Properties
 * @group admin-form.ViewModel.events Events
 *
 * @description A `<admin-form />` component's ViewModel. This viewmodel
 * extends the [util/field/ ]'s properties
 */
const ViewModel = FieldIteratorMap.extend('FormWidget', {
    /**
     * @prototype
     */
    /**
    * A string referencing a field property that will exclude that field
    * from this classes fields. The default is `'edit'`.
    * @property {String} admin-form.ViewModel.props.excludeFieldKey excludeFieldKey
    * @parent admin-form.ViewModel.props
    */
    excludeFieldKey: {
        value: 'edit'
    },
    /**
     * Whether or not to show the saving icon when the submit button is clickered.
     * @property {HTMLBoolean} admin-form.ViewModel.props.object object 
     * @parent admin-form.ViewModel.props
     */
    showSaving: {type: 'htmlbool', value: true},
    /**
     * Whether or not this form should be an inline (horizontal) form
     * @property {Boolean} admin-form.ViewModel.props.inline
     * @parent admin-form.ViewModel.props
     */
    inline: {
        type: 'boolean',
        value: false
    },
    /**
     * The connection info for this form's data. If this is provided, the
     * object will be fetched using the objectId property
     * @property {can-connect} admin-form.ViewModel.props.connection
     * @link https://canjs.com/doc/can-connect.html can-connect
     * @parent admin-form.ViewModel.props
     */
    connection: {
        value: null
    },
    /**
     * The object id of the item to retrieve. If this and [admin-form.ViewModel.props.connection] is provided, a request
     * will be made to the connection object with the specified id.
     * @property {Number} admin-form.ViewModel.props.objectId
     * @parent admin-form.ViewModel.props
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
     * @property {Promise}  admin-form.ViewModel.props.promise
     * @parent admin-form.ViewModel.props
     */
    promise: {
        value: null
    },
    /**
     * An object representing the current state of the values passed to the form.
     * If the fields have changed, this object will be updated when the submit
     * button is pressed and the validations have passed. To capture current
     * state of the form, use [admin-form.ViewModel.props.dirtyObject].
     * @property {DefineMap} admin-form.ViewModel.props.object
     * @parent admin-form.ViewModel.props
     */
    object: {
        Type: DefineMap,
        set (obj) {
            const Constructor = obj.constructor ? obj.constructor : DefineMap;
            this.dirtyObject = new Constructor(obj);
            return obj;
        }
    },
    /**
     * An object set with current form values
     * @property {DefineMap} admin-form.ViewModel.props.dirtyObject dirtyObject
     * @parent admin-form.ViewModel.props
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
     * @property {Object} admin-form.ViewModel.props.validationErrors
     * @parent admin-form.ViewModel.props
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
     * @property {Boolean} admin-form.ViewModel.props.isValid isValid
     * @parent admin-form.ViewModel.props
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
     * @property {Boolean} admin-form.ViewModel.props.isSaving
     * @parent admin-form.ViewModel.props
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

        this.object.assign(this.dirtyObject.serialize());
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
     * Sets the object value when a field changes. This will allow for future
     * functionality where the form is much more responsive to values changing, like
     * cascading dropdowns. Dispatches the `fieldchange` event when a field changes.
     * This updates the [admin-form.ViewModel.props.dirtyObject] and calls the
     * validation method on the field.
     * @function setField
     * @signature
     * @param  {util/field/Field} field  The field object properties
     * @param  {domElement} domElement The form element that dispatched the event
     * @param  {Event} event  The event object and type
     * @param  {FieldChangeEventObject} props  The value that was passed from the field component
     */
    setField (field, domElement, event, props) {
        const value = props.value;

        // check for valid field value and don't update if it's not
        const error = this.validationErrors[field.name] = this.getValidationError(field, value);
        if (error) {
            return;
        }

        // update and dispatch field change event
        // if the value is different
        if (this.object[field.name] !== value) {
            this.dispatch('fieldchange', [{
                name: field.name,
                value: value,
                dirty: this.dirtyObject,
                current: this.object
            }]);
        }
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
    }
});

export default ViewModel;
