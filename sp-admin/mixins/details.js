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
            if (this.localDetailsObject) {
                return Promise.resolve(this.localDetailsObject);
            } else if (!this.model) {
                return Promise.reject(new Error('No model found'));
            } else if (this.detailsId) {
                return this.getItem(this.detailsId);
            } else {
                return Promise.resolve(null);
            }
        }
    },
    localDetailsObject: {},
    detailsObject: {
        value ({resolve}) {
            if (this.localDetailsObject) {
                resolve(this.localDetailsObject);
            }
            if (this.detailsPromise) {
                this.detailsPromise.then((object) => {
                    resolve(object);
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
    // set `localDetailsObject` first
        this.localDetailsObject = object;
        this.detailsId = this.model.id(object);
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
