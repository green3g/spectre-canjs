
import Component from 'can-component';
import template from './sp-text-field.stache';
import ViewModel from './ViewModel';

// inserted/removed events
import 'can-3-4-compat/dom-mutation-events';


/**
 * A basic text field configureable to be formatted as different HTML5 input types or HTML textarea elements
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-text-field
 * @example 
 * <sp-text-field /> 
 */
export default Component.extend({
    tag: 'sp-text-field',
    view: template,
    ViewModel: ViewModel
});
