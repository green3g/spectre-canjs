import Component from 'can-component';
import ViewModel from './ViewModel';

import './sp-file-field.less';
import template from './sp-file-field.stache';


// !steal-remove-start
import dev from 'can-util/js/dev/';
dev.warn('sp-file-field: this module is deprecated, use sp-dropzone-field instead');
// !steal-remove-end


/**
 * A simple file uploader field 
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-date-field
 * @deprecated
 * @example 
 * <sp-file-field /> 
 */
export default Component.extend({
    tag: 'sp-file-field',
    view: template,
    ViewModel: ViewModel
});
