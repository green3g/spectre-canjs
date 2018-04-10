import Component from 'can-component';
import view from './template.stache';
import ViewModel from './ViewModel';

/**
 * A boolean field that can be used as a switch or a checkbox
 * @module sp-check-field
 * @example 
 * <sp-check-field /> 
 */
export default Component.extend({
    tag: 'sp-check-field',
    ViewModel,
    view
});
