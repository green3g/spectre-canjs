import Component from 'can-component';
import view from './template.stache';
import ViewModel from './ViewModel';

/**
 * A boolean field that can be used as a switch or a checkbox
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-check-field
 * @example 
 * <sp-check-field /> 
 */
export default Component.extend({
    tag: 'sp-check-field',
    ViewModel,
    view
});
