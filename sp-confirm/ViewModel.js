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
        default: 'Ok'
    },
    /**
     * The text to display in the reject confirmation button. The default is `'Cancel'`
     * @type {String} 
     * @memberof sp-confirm.ViewModel.prototype
     */
    rejectText: {
        default: 'Cancel'
    },
    /**
     * Called when the accept button is clicked. Resolves the `actionPromise`.
     * In addition, the `accept` event is dispatched on the component element.
     */
    onAccept () {
        this.dispatch('accept', [this]);
        this.active = false;
    },
    /**
     * Called when the reject button is clicked. Rejects the `actionPromise`.
     * In addition, the `reject` event is dispatched on the component element.
     */
    onReject () {
        this.dispatch('reject', [this]);
        this.active = false;
    }
});

export default ViewModel;
