import debounce from '../util/debounce';
// a details page view mixin
export default {
    detailsId: {},
    getItem: {},
    detailsPromise: {
        get () {
            if (!this.getItem) {
                this.getItem = debounce(this.model, this.model.get, 200);
            }

            if (!this.detailsId) {
                return Promise.resolve(null);
            }

            if (this.localDetailsObject && this.model.id(this.localDetailsObject) === this.detailsId) {
                return Promise.resolve(this.localDetailsObject);
            }

            if (!this.model) {
                return Promise.reject('Connection to server not configured.');
            }

            if (this.detailsId) {
                return this.getItem(this.detailsId);
            }

            return Promise.resolve(null);
        }
    },
    localDetailsObject: {},
    detailsObject: {
        get (val, resolve) {
            const promise = this.detailsPromise;
            if (!promise) {
                return;
            }
            promise.then((obj) => {
                resolve(obj);
            });
        }
    },
    showDetails (object) {
        this.assign({
            detailsId: this.model.id(object),
            localDetailsObject: object
        });
    },
    showDetailsFromEvent (args) {
        const [, object] = args;
        this.showDetails(object);
    },
    clearDetails () {
        this.assign({
            detailsId: null,
            localDetailsObject: null
        });
    }
};
