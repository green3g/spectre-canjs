import Component from 'can-component';
import ViewModel from './ViewModel';

import './sp-file-field.less';
import template from './sp-file-field.stache!';


export default Component.extend({
    tag: 'sp-file-field',
    view: template,
    ViewModel: ViewModel
});
