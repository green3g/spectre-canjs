import './dropdown-menu.less';
import template from './template.stache';
import Component from 'can-component';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'dropdown-menu',
    view: template,
    ViewModel: ViewModel
});
