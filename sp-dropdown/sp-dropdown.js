import './sp-dropdown.less';
import template from './template.stache';
import Component from 'can-component';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'sp-dropdown',
    view: template,
    ViewModel: ViewModel
});
