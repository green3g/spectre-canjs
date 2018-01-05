import Component from 'can-component';
import template from './sp-subform-field.stache!';
import './sp-subform-field.less';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'sp-subform-field',
    view: template,
    ViewModel: ViewModel
});
