import ViewModel from './ViewModel';
import Component from 'can-component';

import '../sp-select-field/sp-select-field';

import template from './sp-date-field.stache';
import './sp-date-field.less';


// !steal-remove-start
import dev from 'can-util/js/dev/';
dev.warn('sp-date-field: this module is deprecated, use onInsert to add date field functionality');
// !steal-remove-end

export default Component.extend({
    tag: 'sp-date-field',
    view: template,
    ViewModel: ViewModel
});
