import ViewModel from './ViewModel';
import Component from 'can-component';

import '../sp-select-field/sp-select-field';

import template from './sp-date-field.stache';
import './sp-date-field.less';


// !steal-remove-start
import dev from 'can-util/js/dev/';
dev.warn('sp-date-field: this module is deprecated, use onInsert to add date field functionality');
// !steal-remove-end

/**
 * A 3 select dropdown style date field 
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-date-field
 * @deprecated
 * @example 
 * <sp-date-field /> 
 */
export default Component.extend({
    tag: 'sp-date-field',
    view: template,
    ViewModel: ViewModel
});
