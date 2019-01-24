import debounce from '../util/debounce';

// a details page view mixin
export default {
    detailsId: {},
    getItem: {},
    detailsPromise: {
        get () {
            if (this.setDetailsObject) {
                return Promise.resolve(this.setDetailsObject);
            }
            if (!this.model) {
                return Promise.reject(new Error('No model found'));
            }
            if (!this.getItem) {
                this.getItem = debounce(this.model, this.model.get, 200);
            }
            if (this.detailsId) {
                return this.getItem(this.detailsId);
            }
            return null;
        }
    },
    setDetailsObject: {},
    detailsObject: {
        get (val, set) {
            if (this.detailsPromise) {
                this.detailsPromise.then((object) => {
                    set(object);
                }).catch((e) => {
                    if (process.env.NODE_ENV !== 'production') {
                        // eslint-disable-next-line
                        console.warn(e);
                    }
                });
            }
        }
    },
    showDetails (object) {
    // set `setDetailsObject` first
        this.setDetailsObject = object;
        this.detailsId = this.model.id(object);
    },
    showDetailsFromEvent (args) {
        const [, object] = args;
        this.showDetails(object);
    },
    clearDetails () {
        this.assign({
            detailsId: null,
            setDetailsObject: null
        });
    }
};
