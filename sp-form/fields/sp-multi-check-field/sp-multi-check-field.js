import 'spectre-canjs/sp-form/fields/sp-check-field/sp-check-field';
import 'can-stache-converters';
import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './template.stache';
import './sp-multi-check-field.less';

/**
 * A field for handling multiple checkboxes
 * @module sp-multi-check-field
 * @example 
 * <sp-multi-check-field /> 
 */
export default Component.extend({
    tag: 'sp-multi-check-field',
    ViewModel: ViewModel,
    view: template
});
