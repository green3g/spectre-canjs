import dev from 'can-util/js/dev/dev';
import debounce from '../util/debounce';

// a details page view mixin
export default {
    detailsId: {type: 'number'},
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
                this.getItem = debounce(this.model.get, 200);
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
                    dev.warn(e);
                });
            }
        }
    },
    showDetails (object) {
        this.assign({
            detailsId: this.model.connection.id(object),
            setDetailsObject: object
        });
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
