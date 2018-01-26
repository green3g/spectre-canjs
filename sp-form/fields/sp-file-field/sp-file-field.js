import Component from 'can-component';
import ViewModel from './ViewModel';

import './sp-file-field.less';
import template from './sp-file-field.stache!';


// !steal-remove-start
import dev from 'can-util/js/dev/';
dev.warn('sp-file-field: this module is deprecated, use sp-dropzone-field instead');
// !steal-remove-end


export default Component.extend({
    tag: 'sp-file-field',
    view: template,
    ViewModel: ViewModel
});
