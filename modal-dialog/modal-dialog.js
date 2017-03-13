import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import canEvent from 'can-event';
import assign from 'can-util/js/assign/assign';

import template from './modal-dialog.stache!';

/**
 * @constructor modal-dialog.ViewModel ViewModel
 * @parent modal-dialog
 * @group modal-dialog.ViewModel.props Properties
 *
 * @description A `<modal-dialog />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('ModalDialog', {
    /** @prototype */
    /**
     * Whether or not this modal is currently active. The default is `false`
     * @property {HTMLBoolean} modal-dialog.ViewModel.props.active active
     * @parent modal-dialog.ViewModel.props
     */
    active: {value: false, type: 'htmlbool'},
    /**
     * Whether or not to use a custom body content for the modal. The default is `false`.
     * This overrides the title property and modal-body divs displayed by displaying
     * only the content passed to the `<modal-dialog></modal-dialog>` component
     * @property {HTMLBoolean} modal-dialog.ViewModel.props.customBody customBody
     * @parent modal-dialog.ViewModel.props
     */
    customBody: {value: false, type: 'htmlbool'},
    /**
     * Flag to make this modal a small (`modal-sm`) modal. The default is `false`
     * @property {HTMLBoolean} modal-dialog.ViewModel.props.small small
     * @parent modal-dialog.ViewModel.props
     */
    small: {value: false, type: 'htmlbool'},
    /**
     * Whether or not to display this modals backdrop. The default is `true`.
     * @property {Boolean} modal-dialog.ViewModel.props.backdrop backdrop
     * @parent modal-dialog.ViewModel.props
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

Component.extend({
    viewModel: ViewModel,
    view: template,
    tag: 'modal-dialog'
});
