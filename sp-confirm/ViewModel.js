import ModalViewModel from '../modal-dialog/ViewModel';

/**
 * @constructor confirm-dialog.ViewModel ViewModel
 * @inherits modal-dialog.ViewModel
 * @parent confirm-dialog
 * @group confirm-dialog.ViewModel.props Properties
 *
 * @description A `<confirm-dialog />` component's ViewModel
 */
const ViewModel = ModalViewModel.extend('ConfirmDialog', {
    /**
     * The text to display in the accept confirmation button. The default is `'Ok'`
     * @property {String} confirm-dialog.ViewModel.props.acceptText acceptText
     * @parent confirm-dialog.ViewModel.props
     */
    acceptText: {
        value: 'Ok'
    },
    /**
     * The text to display in the reject confirmation button. The default is `'Cancel'`
     * @property {String} confirm-dialog.ViewModel.props.rejectText rejectText
     * @parent confirm-dialog.ViewModel.props
     */
    rejectText: {
        value: 'Cancel'
    },
    // functions called when confirm and reject actions occurs
    // these functions resolve or reject the `actionPromise`
    _resolveAction: '*',
    _rejectAction: '*',
    /**
     * A promise resolved or rejected when the modal is confirmed or rejected.
     * @property {Promise} confirm-dialog.ViewModel.props.actionPromise actionPromise
     * @parent confirm-dialog.ViewModel.props
     */
    actionPromise: {
        get () {
            // generate a new promise when active becomes true
            if (this.active) {
                return new Promise((resolve, reject) => {
                    this._resolveAction = resolve;
                    this._rejectAction = reject;
                });
            }
            return null;
        }
    },
    /**
     * Called when the accept button is clicked. Resolves the `actionPromise`.
     * In addition, the `accept` event is dispatched on the component element.
     * @function onAccept
     * @signature
     */
    onAccept () {
        if (this._resolveAction) {
            this._resolveAction(true);
        }
        this.dispatch('accept', [this]);
        this.active = false;
    },
    /**
     * Called when the reject button is clicked. Rejects the `actionPromise`.
     * In addition, the `reject` event is dispatched on the component element.
     * @function onReject
     * @signature
     */
    onReject () {
        if (this._rejectAction) {
            this._rejectAction(false);
        }
        this.dispatch('reject', [this]);
        this.active = false;
    }
});

export default ViewModel;
