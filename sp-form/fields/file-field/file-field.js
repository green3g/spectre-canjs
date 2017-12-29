import Component from 'can-component';
import ViewModel from './ViewModel';

import './file-field.less';
import template from './file-field.stache!';


export default Component.extend({
    tag: 'file-field',
    view: template,
    ViewModel: ViewModel
});
