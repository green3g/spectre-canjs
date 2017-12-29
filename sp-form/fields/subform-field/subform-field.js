import Component from 'can-component';
import template from './subform-field.stache!';
import './subform-field.less';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'subform-field',
    view: template,
    ViewModel: ViewModel
});
