import view from '../sp-modal/sp-modal.stache';
import Component from 'can-component';
import ViewModel from './ViewModel';

/**
 * A confirm dialog box with options for accepting or rejecting
 * @module sp-confirm
 * @example 
 * <sp-confirm /> 
 */
export default Component.extend({
    tag: 'sp-confirm',
    ViewModel,
    view,
    leakScope: true
});
