// an editing mixin for the admin component
import swal from 'sweetalert2/dist/sweetalert2';
export default {
    // internal
    editActive: {
        default: false,
        type: 'boolean'
    },
    saveCount: {default: 0, type: 'number'},
    error: 'string',
    editId: {type: 'number'},
    editPromise: '*',
    isSaving: {},
    editObject: '*',
    isDeleting: {},
    addNew () {
        this.assign({
            editActive: true,
            // eslint-disable-next-line
      editObject: new this.model()
        });
    },
    showEdit (object) {
        this.assign({
            editActive: true,
            editObject: object
        });
        this.resetScroll();
    },
    hideEdit () {
        this.assign({
            editActive: false,
            editObject: null
        });
    },
    showEditFromEvent (args) {
        const [, object] = args;
        this.showEdit(object);
    },
    resetScroll () {
        setTimeout(() => {
            const modal = document.querySelector('.modal-body');
            if (modal) {
 modal.scrollTop = 0; 
}
        }, 200);
    },
    save (object) {
        this.error = null;
        return object.save().then((result) => {
            this.assign({
                editObject: null,
                saveCount: this.saveCount + 1,
                requestCount: this.requestCount + 1,
                isSaving: false,
                editActive: false,
                editId: null
            });

            swal({
                toast: true,
                timer: 2000,
                type: 'success',
                title: 'Success!',
                text: 'Item was created/updated'
            });

            return result;
        }).catch((e) => {
            if (typeof e.message === 'string') {
                swal({
                    type: 'error',
                    title: 'Error!',
                    text: e.message,
                    toast: true,
                    timer: 10000
                });
            }
            this.resetScroll();
            this.isSaving = false;
        });
    },
    delete (selected) {
        return swal({
            type: 'warning',
            text: `Are you sure you want to delete ${selected.length} ${this.title}(s)?`,
            title: 'Delete?',
            showCancelButton: true
        }).then((args) => {
            if (args && args.dismiss) {
                return args.dismiss;
            }
            const pending = [];
            selected.forEach((item) => {
                pending.push(item.destroy());
            });

            if (selected.replace) {
                selected.replace([]);
            }
            this.isDeleting = Promise.all(pending).then(() => {
                this.requestCount++;
            });

            this.isDeleting.then(() => {
                swal({
                    toast: true,
                    timer: 5000,
                    type: 'success',
                    text: 'Item(s) were deleted'
                });
            }).catch((e) => {
                swal({
                    toast: true,
                    timer: 10000,
                    type: 'error',
                    text: e.message || 'Error deleting item(s)'
                });
            });

            return this.isDeleting;
        });
    },
    // edit mixin required
    deleteSingle (object) {
        this.delete([object]).then((args) => {
            if (!args || !args.dismiss) {
                this.clearDetails();
            }
        });
    }
};
