import DefineMap from 'can-define/map/map';
import canEvent from 'can-event';
import assign from 'can-util/js/assign/assign';

/**
 * @constructor sp-modal.ViewModel ViewModel
 * @parent sp-modal
 * @group sp-modal.ViewModel.props Properties
 *
 * @description A `<sp-modal />` component's ViewModel
 */
const ViewModel = DefineMap.extend('ModalDialog', {
    /** @prototype */
    /**
     * Whether or not this modal is currently active. The default is `false`
     * @property {HTMLBoolean} sp-modal.ViewModel.props.active active
     * @parent sp-modal.ViewModel.props
     */
    active: {value: false, type: 'htmlbool'},
    /**
     * Whether or not to use a custom body content for the modal. The default is `false`.
     * This overrides the title property and modal-body divs displayed by displaying
     * only the content passed to the `<sp-modal></sp-modal>` component
     * @property {HTMLBoolean} sp-modal.ViewModel.props.customBody customBody
     * @parent sp-modal.ViewModel.props
     */
    customBody: {value: false, type: 'htmlbool'},
    /**
     * Flag to make this modal a small (`modal-sm`) modal. The default is `false`
     * @property {HTMLBoolean} sp-modal.ViewModel.props.small small
     * @parent sp-modal.ViewModel.props
     */
    small: {value: false, type: 'htmlbool'},
    /**
     * Whether or not to display this modals backdrop. The default is `true`.
     * @property {Boolean} sp-modal.ViewModel.props.backdrop backdrop
     * @parent sp-modal.ViewModel.props
     */
    backdrop: {value: true, type: 'boolean'},
    /**
     * Shows this modal
     * @function show
     * @signature
     */
    show () {
        this.active = true;
        this.dispatch('show');
    },
    /**
     * Hides this modal
     * @function hide
     * @signature
     */
    hide () {
        this.active = false;
        this.dispatch('hide');
    },
    /**
     * Toggles the state of this modal visibility
     * @function toggle
     * @param {Boolean} visible An optional property to set the visible state to
     */
    toggle (visible) {
        if (typeof visible !== 'undefined') {
            this.active = Boolean(visible);
        } else {
            this.active = !this.active;
        }
    }
});

assign(ViewModel.prototype, canEvent);
export default ViewModel;
