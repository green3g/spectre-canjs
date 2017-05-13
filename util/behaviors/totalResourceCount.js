import DefineMap from 'can-define/map/map';
import connect from 'can-connect';
import get from 'can-util/js/get/get';

export const MetadataMap = DefineMap.extend('Metadata', {
    total: {
        type: 'number',
        value: 0
    }
});

/**
 * A behavior to add the total count of objects available to the connection's metadata
 * @type {Behavior}
 */
export default connect.behavior('totalResourceCount', function (base) {
    return {
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
