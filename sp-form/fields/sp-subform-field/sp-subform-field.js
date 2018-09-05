import Component from 'can-component';
import template from './sp-subform-field.stache';
import './sp-subform-field.less';
import ViewModel from './ViewModel';


/**
 * A fieldset to display a set of fields in a nested pattern
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;resize:both;"></iframe>
 * @module sp-subform-field
 * @example 
 * <sp-subform-field /> 
 */
export default Component.extend({
    tag: 'sp-subform-field',
    view: template,
    ViewModel: ViewModel
});
