import DefineMap from 'can-define/map/map';
import CanEvent from 'can-event';
import FieldIteratorMap from '~/util/field/base/FieldIteratorMap';
import assign from 'object-assign';

/**
 * @constructor sp-property-table.ViewModel ViewModel
 * @parent sp-property-table
 * @group sp-property-table.ViewModel.props Properties
 * @description A `<sp-property-table />` component's ViewModel. This viewmodel
 * extends the [util/field/ ]'s properties
 *
 */
const ViewModel = FieldIteratorMap.extend('PropertyTable', {
    /**
     * @prototype
     */
    /**
    * A string referencing a field property that will exclude that field
    * from this classes fields. The default is 'detail'.
    * @property {String} sp-property-table.ViewModel.props.excludeFieldKey excludeFieldKey
    * @parent sp-property-table.ViewModel.props
    */
    excludeFieldKey: {
        value: 'details'
    },
    /**
     * A flag to allow editing (Not yet implemented)
     * TODO: implement editing
     * @property {Boolean} sp-property-table.ViewModel.props.edit
     * @parent sp-property-table.ViewModel.props
     */
    edit: {
        type: 'boolean',
        value: true
    },
    /**
     * A flag to allow deleting (Not yet implemented)
     * TODO: implement deleting
     * @property {Boolean} sp-property-table.ViewModel.props.delete
     * @parent sp-property-table.ViewModel.props
     */
    delete: {
        type: 'boolean',
        value: true
    },
    /**
     * The ID value of the object that should be retrieved. This value along with the connection object will be used to retrieve an object from a RESTful service
     * @property {Number} sp-property-table.ViewModel.props.objectId
     * @parent sp-property-table.ViewModel.props
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
     * @property {can-connect} sp-property-table.ViewModel.props.connection
     * @parent sp-property-table.ViewModel.props
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
     * @property {Object} sp-property-table.ViewModel.props.object
     * @parent sp-property-table.ViewModel.props
     */
    object: DefineMap,
    /**
     * A promise that resolves to the object. Used to determine state of current fetching operations
     * @property {Promise}  sp-property-table.ViewModel.props.objectPromise
     * @parent sp-property-table.ViewModel.props
     */
    objectPromise: {},
    /**
     * Asynchronously fetches an object using a can-connect model and an id
     * @function fetchObject
     * @signature
     * @param  {can-connect.model} con The connection object to an api resource
     * @param  {Number} id  The id number of the object to retrieve
     * @return {Promise}     A promise that is resolved once the object is retreived
     * @link https://connect.canjs.com/ can-connect
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

assign(ViewModel.prototype, CanEvent);
export default ViewModel;
