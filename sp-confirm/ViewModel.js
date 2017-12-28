import ModalViewModel from '../sp-modal/ViewModel';

/**
 * @constructor sp-confirm.ViewModel ViewModel
 * @inherits sp-modal.ViewModel
 * @parent sp-confirm
 * @group sp-confirm.ViewModel.props Properties
 *
 * @description A `<sp-confirm />` component's ViewModel
 */
const ViewModel = ModalViewModel.extend('ConfirmDialog', {
    /**
     * The text to display in the accept confirmation button. The default is `'Ok'`
     * @property {String} sp-confirm.ViewModel.props.acceptText acceptText
     * @parent sp-confirm.ViewModel.props
     */
    acceptText: {
        value: 'Ok'
    },
    /**
     * The text to display in the reject confirmation button. The default is `'Cancel'`
     * @property {String} sp-confirm.ViewModel.props.rejectText rejectText
     * @parent sp-confirm.ViewModel.props
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
     * @property {Promise} sp-confirm.ViewModel.props.actionPromise actionPromise
     * @parent sp-confirm.ViewModel.props
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
