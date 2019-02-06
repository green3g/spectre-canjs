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
            return new Promise((resolve, reject) => {
                if (this.localDetailsObject) {
                    resolve(this.localDetailsObject);
                } else if (!this.model) {
                    reject(new Error('No model found'));
                } else if (this.detailsId) {
                    this.getItem(this.detailsId).then(resolve);
                } else {
                    resolve(null);
                }
            });
        }
    },
    localDetailsObject: {
        set (obj) {
            debugger;
            return obj;
        }
    },
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
