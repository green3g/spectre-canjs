import DefineMap from 'can-define/map/map';
import FieldIteratorMap from '../util/field/base/FieldIteratorMap';

/**
 *  A `<sp-property-table />` component's ViewModel. This viewmodel
 * extends the [util/field/ ]'s properties
 * @class ViewModel
 * @memberof sp-property-table
 *
 */
export default FieldIteratorMap.extend('PropertyTable', {
    /** @lends sp-property-table.ViewModel.prototype */
    /**
    * A string referencing a field property that will exclude that field
    * from this classes fields. The default is 'detail'.
    * @type {String}
    * @memberof sp-property-table.ViewModel.prototype
    */
    excludeFieldKey: {
        default: 'details'
    },
    /**
     * A flag to allow editing (Not yet implemented)
     * TODO: implement editing
     * @type {Boolean}
     * @memberof sp-property-table.ViewModel.prototype
     */
    edit: {
        type: 'boolean',
        default: true
    },
    /**
     * A flag to allow deleting (Not yet implemented)
     * TODO: implement deleting
     * @type {Boolean}
     * @memberof sp-property-table.ViewModel.prototype
     */
    delete: {
        type: 'boolean',
        default: true
    },
    /**
     * The ID value of the object that should be retrieved. This value along with the connection object will be used to retrieve an object from a RESTful service
     * @type {Number}
     * @memberof sp-property-table.ViewModel.prototype
     */
    objectId: {
        type: 'number',
        set (id) {
            this.fetchObject(this.connection, id);
            return id;
        }
    },
    /**
     * The connection object that should be used to retrieve an object. This
     * value along with the objectId value will be used to retrieve an object
     * from a RESTful service
     * @link http://canjs.com/doc/can-connect.html can-connect
     * @type {can-connect}
     * @memberof sp-property-table.ViewModel.prototype
     */
    connection: {
        set (con) {
            this.fetchObject(con, this.objectId);
            return con;
        }
    },
    /**
     * A generic object to display in a tabular format. This can be used instead
     * of providing a connection and objectId property
     * @type {Object}
     * @memberof sp-property-table.ViewModel.prototype
     */
    object: DefineMap,
    /**
     * A promise that resolves to the object. Used to determine state of current fetching operations
     * @type {Promise}
     * @memberof sp-property-table.ViewModel.prototype
     */
    objectPromise: {},
    /**
     * Asynchronously fetches an object using a can-connect model and an id
     * @see [can-connect](https://connect.canjs.com/) for futher information
     * @param  {can-connect} con The connection object to an api resource. The model must have a `get(id)` method.
     * @param  {Number} id  The id number of the object to retrieve
     * @return {Promise}     A promise that is resolved once the object is retreived
     */
    fetchObject (con, id) {
        if (!con || !id) {
            return null;
        }
        const def = con.get({
            id: id
        });
        def.then((obj) => {
            this.object = obj;
        });

        this.objectPromise = def;
        return def;
    }
});