// define properties mixin for listing data
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import debounce from '../util/debounce';
import swal from 'sweetalert2';
import Params from 'spectre-canjs/sp-admin/util/Params';

export default {
    // required!
    model: '*',

    getList: {},

    // options
    title: {
        type: 'string',
        get (val) {
            return val || this.model.name || 'Data';
        }
    },
    listFields: {
        default () {
            return [];
        }
    },
    // params to serialize to the server, this can
    // be overridden with a different map
    // to change parameter names
    params: {Default: Params, Type: Params},

    // internal
    requestCount: {default: 0, type: 'number'},
    objectsPromise: {
        get () {
            this.get('requestCount');
            if (!this.model) {
                return Promise.reject(new Error('No model was found'));
            }
            if (!this.getList) {
                this.getList = debounce(this.model, this.model.getList, 200);
            }
            return this.getList(this.params ? this.params.serialize() : {});
        }
    },
    objects: {
        Default: DefineList,
        get (val) {
            const promise = this.objectsPromise;
            promise.then((data) => {
                val.replace(data);
            }).catch((err) => {
                if (process.env.NODE_ENV !== 'production') {
                    // eslint-disable-next-line
                    console.log(err);
                }
                if (err.message) {
                    swal({
                        type: 'error',
                        toast: true,
                        timer: 5000,
                        title: 'Error',
                        text: err.message
                    });
                }
            });

            return val;
        }
    },
    selected: DefineList,
    refresh () {
        this.requestCount++;
    },
    setSort (args) {
        const sort = args[0];
        const symbol = sort.type === 'desc' ? '-' : '';
        this.params.sort = symbol + sort.field;
    },
    noop () {}
};
