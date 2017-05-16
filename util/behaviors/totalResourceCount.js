import DefineMap from 'can-define/map/map';
import connect from 'can-connect';
import get from 'can-util/js/get/get';

/**
 * @constructor util/behaviors/totalResourceCount.MetadataMap MetadataMap
 * @parent util/behaviors/totalResourceCount.types
 */
export const MetadataMap = DefineMap.extend('Metadata', {
    total: {
        type: 'number',
        value: 0
    }
});

/**
 * Add the total count of objects available to the connection's metadata
 * @module {Behavior} util/behaviors/totalResourceCount totalResourceCount
 * @description Adds a total resource count property to an observable
 * `connection.metadata` object on `getListData` requests. This total
 * property reflects the total number of objects available
 * given the current filters. The total property allows spectre-canjs
 * to calculate a total number of pages available.
 * @parent util/behaviors
 * @group totalResourceCount.props Properties
 * @group totalResourceCount.types Types
 */
export default connect.behavior('totalResourceCount', function (base) {
    return {
        /**
         * The name of the property to lookup in the get request. The default
         * is `'total'`. Values may be nested, and use the dot operator, for example,
         * total values could be in a nested object and accessed like `metadata.total`
         * @property {String} totalResourceCount.props.totalProperty totalProperty
         */
        totalProperty: 'total',

        init () {
            this.metadata = new MetadataMap();
            base.init.apply(this, arguments);
        },
        getListData () {
            const promise = base.getListData.apply(this, arguments);
            promise.then((result) => {
                this.metadata.total = get(result, this.totalProperty);
            });
            return promise;
        }
    };
});
