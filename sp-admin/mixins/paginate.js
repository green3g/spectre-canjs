import get from 'can-util/js/get/get';

export default {
    total: {
        get () {
            return get(this, 'model.connection.metadata.total') || 0;
        }
    },
    pageIndex: {
        set (num) {
            this.params.assign({
                $skip: this.perPage * num
            });
            return num;
        }
    },
    perPage: {
        set (count) {
            this.params.assign({
                $limit: count
            });
            return count;
        }
    }
};
