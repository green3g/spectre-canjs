import template from './sp-confirm.stache';
import Component from 'can-component';
import ViewModel from './ViewModel';

/**
 * A confirm dialog box with options for accepting or rejecting
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-confirm
 * @example 
 * <sp-confirm /> 
 */
export default Component.extend({
    tag: 'sp-confirm',
    ViewModel: ViewModel,
    view: template,
    leakScope: true
});
