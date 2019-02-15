import DefineMap from 'can-define/map/map';
import {ActionList} from '../util/actions/Action';

/**
 * @module sp-modal/ViewModel
 *
 * @description A `<sp-modal />` component's ViewModel
 */
export default DefineMap.extend('ModalDialog', {
    /** @lends sp-modal/ViewModel.prototype */
    /**
     * Whether or not this modal is currently active. The default is `false`
     * @type {Boolean}
     */
    active: {
        default: false, 
        type: 'boolean',
        set (active) {
            this.dispatch(active ? 'show' : 'hide', [this]);
            return active;
        }
    },
    /**
     * Whether or not to use a custom body content for the modal. The default is `false`.
     * This overrides the title property and modal-body divs displayed by displaying
     * only the content passed to the `<sp-modal></sp-modal>` component
     * @type {HTMLBoolean}
     * 
     */
    custom: {default: false, type: 'htmlbool'},
    /**
     * Flag to make this modal a small (`modal-sm`) modal. The default is `false`
     * @type {HTMLBoolean}
     * 
     */
    small: {default: false, type: 'htmlbool'},
    /**
     * The title displayed in the modal header
     * @type {String}
     * 
     */
    title: {type: 'string'},
    /**
     * Whether or not to display this modals backdrop. The default is `true`.
     * @type {Boolean}
     * 
     */
    backdrop: {default: true, type: 'boolean'},
    /**
     * Actions to display in this modal
     * @type {util/actions/Action[]}
     */
    actions: ActionList
});