import get from 'can-util/js/get/get';

export default {
    total: {
        get () {
            return get(this, 'model.metadata.total') || 0;
        }
    },
    pageIndex: {
        set (num) {
            this.params.page.assign({
                start: num * this.perPage,
                end: (num + 1) * this.perPage,
            });
            return num;
        }
    },
    perPage: {
        set (count) {
            this.params.page.assign({
                start: this.pageIndex * count,
                end: (this.pageIndex + 1) * count,
            });
            return count;
        }
    }
};
