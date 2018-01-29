import ModalViewModel from '../sp-modal/ViewModel';

/**
 * A `<sp-confirm />` component's ViewModel
 * 
 * @class ViewModel
 * @memberof sp-confirm
 * @extends sp-modal.ViewModel
 */
const ViewModel = ModalViewModel.extend('ConfirmDialog', {
    /** @lends sp-confirm.ViewModel.prototype */
    /**
     * The text to display in the accept confirmation button. The default is `'Ok'`
     * @type {String} 
     * @memberof sp-confirm.ViewModel.prototype
     */
    acceptText: {
        value: 'Ok'
    },
    /**
     * The text to display in the reject confirmation button. The default is `'Cancel'`
     * @type {String} 
     * @memberof sp-confirm.ViewModel.prototype
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
     * @type {Promise} 
     * @memberof sp-confirm.ViewModel.prototype
     */
    actionPromise: {
        get () {
            // generate a new promise when active becomes true
            if (this.active) {
                return new Promise((resolve) => {
                    this._resolveAction = resolve;
                });
            }
            return null;
        }
    },
    /**
     * Called when the accept button is clicked. Resolves the `actionPromise`.
     * In addition, the `accept` event is dispatched on the component element.
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
     */
    onReject () {
        if (this._resolveAction) {
            this._resolveAction(false);
        }
        this.dispatch('reject', [this]);
        this.active = false;
    }
});

export default ViewModel;
